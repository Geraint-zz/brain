# Skill 07 first_launch QA report

- run_id: 20260803-162500
- site_id: brain
- GitHub: https://github.com/Geraint-zz/brain.git
- branch: main
- Cloudflare Pages: brain-9do
- pages.dev: https://brain-9do.pages.dev
- formal origin checked: https://www.brainhealth123.net

## Baseline and local QA

- Effective project contract: CURRENT; Astro structure and 38 generated routes match.
- validate-data: PASS
- astro check: PASS
- astro build: PASS
- Current HEAD is already pushed to origin/main; no new code delta requires staging.
- Protected untracked ZIP/media/archive artifacts were preserved and excluded from staging.

## Production QA

- pages.dev sampled routes, all four Legal routes, sitemap.xml and robots.txt returned 200.
- www.brainhealth123.net returned 200 for the same sampled routes.
- pages.dev and www formal-origin samples matched on title and image DOM counts.
- Formal apex brainhealth123.net currently returns Cloudflare 522.
- www formal origin canonicals still point to https://brain-9do.pages.dev, so formal-domain SEO host parity is not yet complete.

## Release decision

- Release Staging Manifest generated.
- No new commit/push required; current HEAD is already deployed and served by both tested origins.
- Final status: BLOCKED_FORMAL_DOMAIN_SEO_HOST_RETURN_TO_04 until apex DNS and canonical-host policy are finalized.
## Final launch confirmation

User confirmed formal launch on 2026-08-03. Final status: **PASS_SITE_LAUNCH_COMPLETE**.

