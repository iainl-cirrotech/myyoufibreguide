# SEO, Conversion & Promotion Strategy
## YouFibreGuide — myyoufibreguide.com

---

## Changes Already Implemented

The following have been applied directly to `index.html` and `styles.css`:

| Change | Purpose |
|---|---|
| Updated meta description with "Is YouFibre good?" and "YouFibre review UK" | Targets high-intent search queries |
| FAQPage JSON-LD structured data in `<head>` | Eligible for Google FAQ rich snippets |
| **Quick Verdict section** (after hero) | Captures skimmers; early conversion opportunity |
| **Mid-page referral callout** (end of "Why I switched") | Natural CTA at peak engagement point |
| **Pros & Cons section** (after "Why I recommend") | Credibility signal; reduces bounce from sceptics |
| **FAQ section** (7 questions, before glossary) | Targets long-tail queries; featured snippet eligibility |
| Glossary changed from `section--alt` to `section` | Visual rhythm restored after new FAQ section |

---

## 1. Target Keywords

### Primary (high intent)
- `YouFibre review UK` — direct intent, low competition
- `YouFibre referral code` — transactional, converts directly
- `Is YouFibre good` — question form, FAQ/snippet target
- `YouFibre review 2024` / `2025` — freshness signal

### Secondary (informational, builds authority)
- `YouFibre vs Virgin Media`
- `YouFibre own router` / `YouFibre custom router`
- `YouFibre static IP`
- `YouFibre OPNsense setup`
- `best broadband for working from home UK`
- `full fibre broadband Glasgow`
- `FTTP broadband review UK`

### Long-tail (low volume, high conversion)
- `can I use my own router with YouFibre`
- `YouFibre referral code 2025`
- `YouFibre 2 Gbps speed test`
- `YouFibre vs BT full fibre`

---

## 2. Recommended Heading Structure

The current H1 is strong. Keyword-optimised H2 targets for new/existing sections:

```
H1: Two years of YouFibre. Here's my honest take.

H2: Quick verdict: Is YouFibre worth it?          ← ✅ added
H2: Why I switched to YouFibre                    ← existing (good)
H2: Day-to-day household use                      ← existing
H2: A more demanding setup                        ← existing
H2: You get what you pay for                      ← existing (speed section)
H2: My Install & Setup                            ← existing
H2: Why I recommend YouFibre                      ← existing
H2: Honest pros and cons                          ← ✅ added
H2: Use my referral code                          ← existing
H2: My Home Network Setup                         ← existing
H2: Frequently asked questions about YouFibre     ← ✅ added
H2: Jargon explained                              ← existing
```

---

## 3. Content Expansion — Proposed Additional Pages

Turn the site into a small authority site by adding these pages. Each targets a keyword cluster and links naturally back to the referral.

### Priority 1 — High conversion potential

#### `/broadband-for-working-from-home.html`
**Target keywords:** `best broadband for working from home UK`, `FTTP broadband home office`
**Angle:** Technical requirements for home workers — upload speed, latency, redundancy. YouFibre as the natural recommendation. Links to OPNsense blog post.

#### `/youfibre-vs-virgin-media.html`
**Target keywords:** `YouFibre vs Virgin Media`, `FTTP vs cable broadband UK`
**Angle:** Honest side-by-side. FTTP vs DOCSIS, symmetrical vs asymmetric, price, availability. No fabricated data — only verified specs and personal experience.

### Priority 2 — Authority building

#### `/youfibre-vs-bt-full-fibre.html`
**Target keywords:** `YouFibre vs BT`, `YouFibre vs Openreach`
**Angle:** YouFibre's own network vs BT's Openreach. Speed guarantees, pricing, custom router flexibility.

#### `/low-latency-broadband-uk.html`
**Target keywords:** `low latency broadband UK`, `broadband for gaming UK`, `fibre broadband ping test`
**Angle:** Why FTTP dramatically reduces latency vs FTTC/cable. Your speed test data (2ms unloaded). Gaming and real-time use cases.

#### `/how-to-get-full-speed-on-youfibre.html`
**Target keywords:** `YouFibre slow speeds fix`, `2.5GbE upgrade`, `YouFibre 2Gbps not working`
**Angle:** Practical guide to the hardware bottleneck (Gigabit NICs, routers, switches). Links to affiliate gear list.

### Priority 3 — Long-term

#### `/home-network-setup-guide.html`
**Target keywords:** `home network setup UK`, `10Gb home network`, `structured cabling home`
**Angle:** Full walkthrough of your rack, patch panel, Cat6A, OPNsense config. Very shareable in technical communities.

---

## 4. On-Page SEO Quick Wins

- **Image alt text** — already good; ensure `speedtest.png` alt text includes "YouFibre 2 Gbps speed test result"
- **Internal links** — blog posts should link back to the main review; the main review links to blog posts (partially done via OPNsense FAQ answer)
- **Sitemap** — update `sitemap.xml` whenever new pages are added
- **`dateModified`** in JSON-LD — update to today's date whenever content is changed (currently `2026-04-16`)
- **Schema `Review` rating** — already present and correct; Google uses this for star ratings in SERPs

---

## 5. Promotion Strategy

### Reddit — Primary organic channel

**Target subreddits (by priority):**

| Subreddit | Audience | Approach |
|---|---|---|
| r/YouFibre | Direct audience | Answer questions, share experience authentically |
| r/HomeNetworking | Technical audience | OPNsense posts, rack builds, 10Gb setup |
| r/UKBroadband | Broadband comparison seekers | Answer ISP comparison questions |
| r/Glasgow | Local interest | Only if directly relevant to Glasgow broadband |
| r/homelab | Advanced home network audience | Your rack/OPNsense setup |
| r/WorkFromHome | WFH broadband questions | Broadband reliability angle |

**The rule:** Never post a bare link. Answer the question fully in the comment, then add the link as "I wrote this up in more detail here: [link]" only when it adds value.

**Sample Reddit reply — r/UKBroadband**

> **Thread:** "Anyone in Glasgow tried YouFibre? Worth switching from Virgin Media?"
>
> I've been on YouFibre in Glasgow for just over two years, so can give you a fairly thorough answer.
>
> The main difference vs Virgin is symmetrical speeds — you get the same upload as download. On Virgin I was getting 1.1 Gbps down but ~50 Mbps up. On YouFibre 2 Gbps I'm regularly hitting 2.1 Gbps down and 1.8 Gbps up. For working from home (I do a lot of video calls, remote desktop, and large file transfers) the upload difference is massive.
>
> Custom router works out of the box — no PPPoE faff, just plug in and it DHCPs. I run OPNsense with a dual-WAN config and it's been rock solid.
>
> Outages in two years: maybe three, all brief, all communicated. Can't say the same for Virgin.
>
> Downsides: coverage is still expanding, and to actually hit 2 Gbps you need 2.5GbE or better hardware throughout.
>
> Wrote up my full experience with photos of the rack setup here if it's useful: [myyoufibreguide.com]

**Sample Reddit reply — r/HomeNetworking**

> **Thread:** "Finally got YouFibre installed, need help with OPNsense config"
>
> Went through this exact setup. The YouFibre ONT just does DHCP — no VLAN tagging, no PPPoE. Set your WAN interface to DHCP and it works. The only thing that tripped me up initially was making sure the interface connected to the ONT was my 10GbE NIC (the Intel X550-T2 in my case) rather than the onboard Gigabit.
>
> I've got a full writeup of my OPNsense + YouFibre config here: [myyoufibreguide.com/blog/opnsense-youfibre-setup.html] — covers dual-WAN failover too if that's relevant to you.

**Sample Reddit reply — r/WorkFromHome**

> **Thread:** "What broadband do people use for WFH? Getting frustrated with slowdowns"
>
> Switched to YouFibre about two years ago after getting sick of FTTC reliability issues. I work in IT so connectivity failures actually cost clients money — I needed something bulletproof.
>
> The thing that changed everything for me wasn't just the speed (though 2 Gbps symmetric is obviously excellent) — it was the *consistency*. No peak-hour slowdowns. No latency spikes during Teams calls. The connection is just there, all the time.
>
> If it's available in your area, it's worth serious consideration. I've written up my experience in more detail at myyoufibreguide.com if you want the nerdy specifics (OPNsense dual-WAN config, speed tests, etc).

---

### UK Broadband Forums

**Target forums:**

- **ISPreview.co.uk** — UK's most active broadband community. Read the YouFibre forum threads and answer factual questions. Never post a referral code unprompted; only if directly asked.
- **ThinkBroadband forum** — Similar audience. Technical discussions about YouFibre and FTTP are common.
- **Pistonheads / other niche communities** — If broadband topics arise in communities you're already active in.

**Approach:**
1. Create an account and lurk for at least one week before posting.
2. Answer questions with genuine technical detail.
3. Add your site link to your forum signature (not in every post).
4. Only reference your site in a post when it directly answers the question asked.

---

### YouTube — Low-effort, high-value content

You have the source material for highly searchable videos. These don't need production quality — a screen recording with commentary works.

**Video ideas (easiest first):**

1. **"YouFibre OPNsense Setup — Full Walkthrough"**
   Target: `youfibre opnsense setup`, `opnsense dhcp wan`
   Content: Screen recording of OPNsense config, then speed test result
   
2. **"My Home Network Rack Tour — YouFibre 2 Gbps + 10Gb LAN"**
   Target: `home network rack tour UK`, `10gb home network`
   Content: Walk through the physical rack with commentary

3. **"YouFibre Speed Test — Is It Actually 2 Gbps?"**
   Target: `youfibre speed test`, `youfibre 2gbps review`
   Content: Live speed test, explanation of hardware requirements

4. **"YouFibre vs Virgin Media — My Honest Take After 2 Years"**
   Target: `youfibre vs virgin media`
   Content: Comparison based on personal experience, no fabricated data

In each video description: link to the relevant blog post and to the referral section of the main site. Keep referral disclosure clear ("referral code — conditions apply").

---

### Medium / Dev.to — Content repurposing

**Medium:**
- Repurpose the OPNsense blog post as a Medium article with a canonical link back to your site.
- Add it to the "Technology" and "Networking" publications.
- Do not duplicate the full review — just technical posts.

**Dev.to:**
- The OPNsense setup article fits the Dev.to audience well (technical, home lab).
- Posts on Dev.to rank well in Google due to domain authority.
- Always include a link back to the canonical post on your own site.

**Canonical links:** When cross-posting, use `<link rel="canonical">` pointing to your domain so Google doesn't split ranking signals.

---

### Local & Community

**Facebook Groups:**
- Search "YouFibre [city]" and "broadband [city]" groups
- "Glasgow Homeowners / Residents" type groups where ISP questions arise
- Engage naturally when people ask about broadband options

**Nextdoor:**
- UK neighbourhoods frequently discuss ISP options
- A factual, helpful response with your site link (no hard sell) is appropriate

**Local tech meetups / Slack communities:**
- Glasgow tech Slack groups (e.g., TechGlasgow) — mention your site if broadband or home networking topics come up

---

## 6. Conversion Rate Improvements — Implemented + Remaining

### Already implemented
- Quick Verdict section with inline CTA buttons (top of content)
- Mid-page referral callout at the end of "Why I switched" (highest-engagement section)
- Pros & Cons section (builds credibility, reduces objections)
- FAQ section with answer to "How does the referral work?" (removes friction)
- Sticky mobile CTA bar (already existed)

### Remaining suggestions

**A. Add a hero-level referral card**
Currently the hero only has text. On desktop, consider adding the referral card directly in the hero (`referral-card--hero` class already exists in CSS) so visitors can act without scrolling. This is the single highest-impact remaining change.

**B. Improve the referral section CTA copy**
The button text "Check Availability at YouFibre" is accurate but passive. Consider: **"Check if YouFibre is in your area"** — this frames it as an information-gathering step rather than a commitment, which reduces friction.

**C. Add a "last updated" date to the hero**
e.g., "Last updated: April 2026" — signals freshness to both users and search engines.

**D. Trust indicators near the referral code**
A small line like "Used by [N] readers from this page" (if trackable via GA4 events) or simply "Code verified April 2026" would increase confidence.

---

## 7. Technical SEO Checklist

- [x] Canonical URL set correctly
- [x] Open Graph tags present
- [x] Twitter card tags present
- [x] Review schema (JSON-LD) present
- [x] FAQPage schema added
- [x] RSS feed present
- [x] Sitemap present
- [x] robots.txt present
- [ ] Update `dateModified` in Review JSON-LD whenever content changes
- [ ] Submit sitemap to Google Search Console
- [ ] Register in Google Search Console and monitor Core Web Vitals
- [ ] Add new pages to sitemap.xml when created
- [ ] Consider `WebSite` schema with `SearchAction` if search is added

---

## 8. Tracking Recommendations

In GA4, add custom events for:
- `referral_click` — already tracked via `trackReferralClick()` in script.js
- `referral_copy` — already tracked
- `faq_open` — track which FAQ questions are opened (use `details` toggle event)
- `verdict_cta_click` — track clicks on "See referral code" from the verdict section

This lets you see which sections drive actual referral conversions.

---

*Strategy prepared April 2026. Review and update as YouFibre expands coverage and referral terms change.*
