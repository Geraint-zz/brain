# Skill 02 — Candidate audit

Candidate: `stitch_brain_visual_prototype_framework.zip`  
SHA-256: `89B3A683CF3EA90E9D25EE81223E8541611C12F990D1758E801527D7CE60E632`  
Status: `NEEDS_REVISION`

## What is usable

- Desktop homepage, mobile homepage, and mobile article layouts are present.
- The visual system is coherent with the approved calm editorial-research direction: stone background, deep forest, muted sage, restrained terracotta, Playfair Display and Source Sans 3.
- The article page has hierarchy context, long-form reading, FAQ pattern, related-content region, Legal footer links, and a mobile bottom navigation pattern.

## Blocking findings

1. **Unauthorized functions:** visible newsletter subscription form and Subscribe CTA. Skill 01 records `has_email_subscription: false`.
2. **Unauthorized navigation/content:** Research, Longevity, Nutrition, Neuroplasticity, Library, Neuroscientists, Biohackers, and similar labels are not the approved Section/Category authority.
3. **Unauthorized claims/copy:** “cognitive longevity”, “neuroplasticity”, “rigorous science”, “academic depth”, “90-Minute Pulse”, medical/physiological explanations and product-style guidance exceed approved source content.
4. **Unauthorized identity/date:** “By Dr. Elena Vance” and “June 12, 2024” are invented; the only allowed dates derive from Skill 04 after the locked time policy is applied.
5. **Unauthorized generated imagery:** remote Google-hosted hero/avatar/inline assets remain. This is allowed for visual architecture only, but must be localized or replaced before production-source lock.
6. **Incomplete page coverage:** no demonstrated Section landing, Category hub, or four individual Legal page layouts; the footer links alone do not meet the required coverage.

## Candidate authority gate

```yaml
status: NEEDS_REVISION
unapproved_title_count: 0
out_of_scope_wording_count: 16
unauthorized_date_count: 2
unauthorized_email_subscription_detected: true
finding_paths:
  - brain_homepage_desktop/code.html
  - brain_homepage_mobile/code.html
  - brain_article_focus_routine_mobile/code.html
```

The candidate is retained as review evidence only. It is not approved, not a production source, and cannot be used by implementation.


