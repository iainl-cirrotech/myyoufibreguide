/* =============================================
   script.js
   YouFibreGuide. Vanilla JavaScript

   Sections:
   1.  Configuration
   2.  GA4 Event Tracking
   3.  Copy to Clipboard
   4.  Toast Notification
   5.  Sticky CTA Bar
   6.  Smooth Scrolling
   7.  Referral Link Setup
   8.  Footer Year
   9.  Lightbox
   10. Cookie Consent
   11. Initialisation
============================================= */

'use strict';


/* =============================================
   1. CONFIGURATION
   Update these values before going live.
   These are the only places you need to change
   URLs and IDs; everything else reads from here.
============================================= */
const CONFIG = {

  // The referral code displayed throughout the page
  referralCode: 'KCR5KH',

  // YouFibre check-availability page.
  // Visitors check their postcode here, then sign up and enter the referral
  // code (KCR5KH) at checkout. There is no dedicated referral URL.
  referralUrl: 'https://www.youfibre.com/check-availability/',

  // TODO: Replace 'GA_MEASUREMENT_ID' with your actual GA4 Measurement ID.
  // Format: 'G-XXXXXXXXXX'
  ga4MeasurementId: 'GA_MEASUREMENT_ID',

  // TODO: Azure Function endpoint (for future use, e.g. form submission or lead capture).
  // Uncomment and set when you have a function deployed.
  // azureFunctionUrl: 'https://your-function-app.azurewebsites.net/api/your-endpoint',

};


/* =============================================
   2. GA4 EVENT TRACKING
   Safe wrapper around gtag() so the site won't
   throw if GA4 is not yet configured or loaded.
============================================= */

/**
 * Send a custom event to Google Analytics 4.
 *
 * @param {string} eventName - GA4 event name (e.g. 'referral_click', 'copy_code')
 * @param {Object} [params={}] - Optional additional event parameters
 */
function trackEvent(eventName, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  } else {
    // GA4 is not loaded. Log to console so you can verify tracking during development.
    // You can remove this console.log once GA4 is configured.
    console.log('[GA4 not configured] Event:', eventName, params);
  }
}

/**
 * Track a click on any referral CTA button.
 * Fires GA4 event: referral_click
 *
 * Called via onclick attributes on referral anchor elements in the HTML.
 */
function trackReferralClick() {
  trackEvent('referral_click', {
    referral_code: CONFIG.referralCode,
  });
}


/* =============================================
   3. COPY TO CLIPBOARD
============================================= */

/**
 * Copy the referral code to the user's clipboard.
 *
 * Uses the modern Clipboard API where supported.
 * Falls back to a hidden textarea and execCommand for older browsers.
 * Shows a toast notification on success.
 * Fires GA4 event: copy_code
 *
 * Called via onclick attributes on "Copy Code" buttons in the HTML.
 */
function copyReferralCode() {
  const code = CONFIG.referralCode;

  // Prefer the async Clipboard API (supported in all modern browsers)
  if (navigator.clipboard ; typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(code)
      .then(() => {
        showToast('Code copied! Enter it at checkout on the YouFibre site.');
        trackEvent('copy_code', { referral_code: code });
      })
      .catch(() => {
        // Clipboard API may be denied (e.g. non-secure context or browser permission).
        // Fall back to the legacy method.
        legacyCopyToClipboard(code);
      });
  } else {
    // Fallback for browsers without Clipboard API
    legacyCopyToClipboard(code);
  }
}

/**
 * Legacy clipboard copy using a temporary hidden textarea.
 * Used when the Clipboard API is unavailable or blocked.
 *
 * @param {string} text - The text to copy
 */
function legacyCopyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;

  // Move the element off-screen so it's not visible
  textarea.setAttribute('readonly', '');
  textarea.style.cssText = 'position:absolute;left:-9999px;top:-9999px;';

  document.body.appendChild(textarea);
  textarea.select();

  let success = false;
  try {
    // execCommand is deprecated but still works in most browsers as a fallback
    success = document.execCommand('copy');
  } catch (_err) {
    // execCommand failed. Nothing we can do silently.
  } finally {
    document.body.removeChild(textarea);
  }

  if (success) {
    showToast('Code copied! Enter it at checkout on the YouFibre site.');
    trackEvent('copy_code', { referral_code: text });
  } else {
    // Last resort: tell the user to copy manually
    showToast('Please copy manually: ' + text, 4000);
  }
}


/* =============================================
   4. TOAST NOTIFICATION
   Brief on-screen confirmation message.
============================================= */

/** @type {number|null} Holds the auto-hide timer so rapid calls reset it correctly */
let toastTimer = null;

/**
 * Display a brief toast notification at the bottom of the screen.
 *
 * @param {string} message - The text to display in the toast
 * @param {number} [duration=2500] - How long the toast stays visible (milliseconds)
 */
function showToast(message, duration = 2500) {
  const toast = document.getElementById('copyToast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('is-visible');

  // Clear any existing timer so rapid calls don't stack up
  if (toastTimer !== null) {
    clearTimeout(toastTimer);
  }

  toastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
    toastTimer = null;
  }, duration);
}


/* =============================================
   5. STICKY CTA BAR
   Uses IntersectionObserver to show the sticky bar
   once the user scrolls past the hero section.
   This avoids duplicating the CTA while it's
   already visible on screen.
============================================= */

/**
 * Initialise the sticky bottom CTA bar.
 *
 * The bar slides in when the #hero section is no longer intersecting the
 * viewport (i.e. the user has scrolled past it). It slides back out if the
 * user scrolls back to the top.
 */
function initStickyCta() {
  const stickyCta = document.getElementById('stickyCta');
  const heroSection = document.getElementById('hero');

  if (!stickyCta || !heroSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stickyCta.classList.remove('is-visible');
        } else {
          stickyCta.classList.add('is-visible');
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(heroSection);
}


/* =============================================
   6. SMOOTH SCROLLING
   Handles anchor links while accounting for the
   sticky header height so sections aren't obscured.
   CSS scroll-behavior: smooth handles the animation;
   this JS just adjusts the offset.
============================================= */

/**
 * Enhance anchor link clicks to offset scroll position for the sticky header.
 * Skips links that are plain '#' (no target).
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function handleAnchorClick(e) {
      const targetId = this.getAttribute('href');

      // Skip bare '#' links (used as button placeholders)
      if (!targetId; targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      // Read the current header height so we don't scroll under it
      const headerHeight = document.querySelector('.site-header')?.offsetHeight ?? 0;
      const offset = 16; // Additional breathing room below the header

      const targetY =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - offset;

      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });
}


/* =============================================
   7. REFERRAL LINK SETUP
   Apply the configured referral URL to all
   referral CTA buttons from a single source.
   Update CONFIG.referralUrl at the top of this
   file to propagate the change everywhere.
============================================= */

/**
 * Set the referral URL on all referral anchor elements.
 */
function initReferralLinks() {
  if (!CONFIG.referralUrl || CONFIG.referralUrl === '#') {
    return;
  }

  const referralButtons = document.querySelectorAll(
    '#heroReferralBtn, #mainReferralBtn, #stickyReferralBtn'
  );

  referralButtons.forEach((btn) => {
    btn.setAttribute('href', CONFIG.referralUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}


/* =============================================
   8. FOOTER YEAR
   Keep the copyright year current automatically.
============================================= */

/**
 * Write the current year into the footer copyright span.
 */
function setFooterYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}


/* =============================================
   9. LIGHTBOX
   Full-screen image viewer for .lightbox-trigger elements.
   Supports: click to open, backdrop click to close,
   close button, and Escape key.
============================================= */

/**
 * Initialise the lightbox overlay.
 */
function initLightbox() {
  const overlay  = document.getElementById('lightboxOverlay');
  const imgEl    = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  if (!overlay || !imgEl || !closeBtn) return;

  let previousFocus = null;

  function openLightbox(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    previousFocus = document.activeElement;
    closeBtn.focus();
  }

  function closeLightbox() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      imgEl.src = '';
      imgEl.alt = '';
    }, 260);
    if (previousFocus) previousFocus.focus();
  }

  document.querySelectorAll('.lightbox-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const img = trigger.querySelector('img');
      if (!img) return;
      const src = trigger.getAttribute('href') ; img.src;
      openLightbox(src, img.alt);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' ; overlay.classList.contains('is-open')) {
      closeLightbox();
    }
  });
}


/* =============================================
   10. COOKIE CONSENT
   Shows a banner on first visit asking for analytics consent.
   GA4 is only loaded after the user accepts, never before.
   The user's choice is stored in localStorage so the banner
   does not reappear on subsequent visits.

   Once your GA4 Measurement ID is confirmed, update
   CONFIG.ga4MeasurementId at the top of this file.
============================================= */

const CONSENT_KEY = 'analytics_consent';

/**
 * Dynamically inject the GA4 loader script and initialise tracking.
 * Called only after the user has explicitly accepted analytics.
 */
function loadGA4() {
  const measurementId = CONFIG.ga4MeasurementId;

  if (!measurementId || measurementId === 'GA_MEASUREMENT_ID') {
    console.log('[GA4] Measurement ID not configured. Skipping load.');
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ; [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId);
}

/**
 * Initialise the cookie consent banner.
 */
function initCookieConsent() {
  const banner     = document.getElementById('cookieBanner');
  const acceptBtn  = document.getElementById('cookieAccept');
  const declineBtn = document.getElementById('cookieDecline');

  if (!banner || !acceptBtn || !declineBtn) return;

  const previousConsent = localStorage.getItem(CONSENT_KEY);

  if (previousConsent === 'accepted') {
    loadGA4();
    return;
  }

  if (previousConsent === 'declined') {
    return;
  }

  setTimeout(() => {
    banner.classList.add('is-visible');
    banner.setAttribute('aria-hidden', 'false');
  }, 1500);

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    banner.classList.remove('is-visible');
    banner.setAttribute('aria-hidden', 'true');
    loadGA4();
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    banner.classList.remove('is-visible');
    banner.setAttribute('aria-hidden', 'true');
  });
}


/* =============================================
   11. INITIALISATION
   Run all setup functions once the DOM is ready.
============================================= */
document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  initReferralLinks();
  initSmoothScrolling();
  initStickyCta();
  initLightbox();
  initCookieConsent();
});
