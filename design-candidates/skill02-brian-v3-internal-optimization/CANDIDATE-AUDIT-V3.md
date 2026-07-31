# brain — Candidate v3 internal optimization

Status: `VISUAL_ARCHITECTURE_READY_FOR_SCREENSHOT_REVIEW`

## Authority-aligned changes

- Replaced non-authoritative navigation with approved Section/Category labels.
- Removed functional email input and converted remaining subscription language to a non-enabled state.
- Replaced invented author identities with `Editorial Team`.
- Removed source/template dates and replaced them with non-date display states.
- Replaced Legal anchors with `/about/`, `/privacy-policy/`, `/terms/`, and `/user-agreement/`.
- Reduced unsupported health/evidence claims and retained the required general-information boundary.
- Preserved the approved editorial visual architecture and clearly retained remote font/icon/image dependencies as prototype-only.

## Validation

`optimization-scan-v3.json` contains one SHA-256 per edited HTML file and reports zero matches for the blocked literal set: subscription, email input, invented doctor/date, Nutrition, Longevity, and Neuroplasticity.

## Remaining gates

1. Regenerate desktop/mobile screenshots from this edited HTML; the imported v2 PNGs are superseded visual evidence.
2. User reviews the regenerated candidate and gives explicit final visual approval.
3. Localize all remote fonts/icons/images and create a local asset manifest before production-source lock.

This folder is a candidate only. It is neither an approved visual source nor an implementation authority.

## Approved visual delta

- User-approved display wordmark change: brain → rain.
- Scope: visible wordmark elements in candidate HTML only; site_id remains rian and upstream authority is unchanged.




