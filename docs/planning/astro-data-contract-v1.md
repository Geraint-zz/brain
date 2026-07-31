# Astro data contract — Brain

Status: CURRENT

This contract implements the Skill 01 Section → Category → Post authority and is consumed by the content-preparation and package stages.

## Levels

- Level 1 `section`: `slug`, `name`, `description`, `seo_title`, `seo_description`.
- Level 2 `category`: `slug`, `section_slug`, `name`, `description`, `seo_title`, `seo_description`.
- Level 3 `post`: `slug`, `category_slug`, `section_slug`, `title`, `excerpt`, `featured_image`, `closing_image`, `image_alt`, `tags`, `faq`, `related_posts`, `published_at`, `updated_at`, `seo_title`, `seo_description`, `body`, `body_format`, `disclaimer`.

Every category belongs to exactly one section. Every post belongs to exactly one category and its parent section must match that category. `body` is an HTML string and must be rendered through the Astro safe HTML path only after validation. Both image fields are distinct, local, and required for initial posts. The body container must permit wrapping and responsive images.

## Runtime sources

Prepared content is read only from `content-prep/prepared-content/`. Site sections, categories, and posts are generated from that validated dataset; no business-authority content is hardcoded in page templates.
