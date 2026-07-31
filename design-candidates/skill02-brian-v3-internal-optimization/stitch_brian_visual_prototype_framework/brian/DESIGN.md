---
name: Brian
colors:
  surface: '#F7FBFD'
  surface-dim: '#DEE5DF'
  surface-bright: '#F7FBFD'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#F0F2ED'
  surface-container-high: '#E7EEE8'
  surface-container-highest: '#E4EAE5'
  on-surface: '#173343'
  on-surface-variant: '#496776'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#73857E'
  outline-variant: '#BFD8E6'
  surface-tint: '#557A73'
  primary: '#245B78'
  on-primary: '#ffffff'
  primary-container: '#2F7195'
  on-primary-container: '#809792'
  inverse-primary: '#b4ccc5'
  secondary: '#53635E'
  on-secondary: '#ffffff'
  secondary-container: '#E2F1F8'
  on-secondary-container: '#60635e'
  tertiary: '#9C4D38'
  on-tertiary: '#ffffff'
  tertiary-container: '#BC654D'
  on-tertiary-container: '#7E2E22'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e8e1'
  primary-fixed-dim: '#b4ccc5'
  on-primary-fixed: '#091f1b'
  on-primary-fixed-variant: '#364b46'
  secondary-fixed: '#e1e3dc'
  secondary-fixed-dim: '#c5c7c1'
  on-secondary-fixed: '#191c18'
  on-secondary-fixed-variant: '#444843'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a1'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#79301b'
  background: '#F7FBFD'
  on-background: '#172422'
  surface-variant: '#E2F1F8'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  ui-label:
    fontFamily: Source Sans 3
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1120px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style

The design system is built upon a philosophy of "Intellectual Serenity." It positions the platform as a credible, human-centric resource for brain health, eschewing the cold, clinical aesthetics of traditional healthcare for the warm, thoughtful atmosphere of a high-end editorial publication.

The visual direction follows a **Modern Editorial** style. It prioritizes clarity, whitespace, and a rhythmic typographic hierarchy. The intent is to lower the cognitive load for the user, fostering a sense of focus and calm. Imagery should be authentic and evocative rather than stock-heavy. There are no gradients or heavy animations; instead, the system relies on precise alignment and structural integrity to convey quality.

## Colors

The palette is grounded in nature and longevity, moving away from sterile whites and "tech blues."

- **Primary (Deep Sea Blue):** `#245B78`. Used for the wordmark, primary headings, and grounding UI elements. It provides the "ink" that establishes authority.
- **Secondary (Mist Blue):** `#E2F1F8`. Used for subtle surface shifts, background sections, and secondary containers.
- **Tertiary (Restrained Terracotta):** `#B75D45`. A warm, muted accent used sparingly for calls-to-action or to highlight critical research insights.
- **Neutral (Cloud Canvas):** `#F7FBFD`. The primary background color. It is warmer than pure white, reducing eye strain and feeling more like premium paper.

All text combinations must meet WCAG AA standards. Primary text should always sit on Neutral or Secondary surfaces.

## Typography

Typography is the core of this design system. We pair the authoritative, high-contrast **Playfair Display** for editorial expression with the highly functional **Source Sans 3** for sustained reading and UI utility.

- **Editorial Serif:** Reserved for headlines and display moments. It should feel intentional and spacious.
- **Humanist Sans:** Used for all long-form body text, navigation, and labels. It provides a neutral, clear counterpoint to the serif.
- **Reading Rhythm:** For long-form research articles, the `body-lg` style is preferred to ensure a comfortable reading speed and maximum legibility. 
- **Hierarchy:** Use the `label-caps` style for category tags or breadcrumbs to create a distinct visual "metadata" layer that doesn't compete with content.

## Layout & Spacing

This design system uses a **Fluid Editorial Grid**. On mobile, it defaults to a single-column flow with generous side margins to ensure the text remains the focus. On desktop, content is constrained to a 1120px maximum width, centered, often utilizing an asymmetrical layout (e.g., a main content column with a thinner sidebar for citations and metadata).

- **Vertical Rhythm:** Use the `stack` variables to maintain consistent white space between sections. Research papers and long-form articles should use `stack-xl` between major chapters to signify "room to breathe."
- **Touch Targets:** On mobile, ensure all interactive elements adhere to a minimum 44px height, especially within the reachable bottom navigation or menu systems.

## Elevation & Depth

To maintain a grounded, "paper-like" feel, this design system avoids traditional box shadows. Depth is communicated through **Tonal Layers** and **Restrained Outlines**.

- **Surface Levels:** The base level is the Neutral (Stone) color. Cards or featured sections sit on the Secondary (Sage) color to create a subtle distinction.
- **Borders:** Use low-contrast 1px borders (using the Primary color at 10-15% opacity) for cards and input fields. This defines the shape without adding the "heaviness" of a shadow.
- **Focus:** Active states or selected items may use a slightly thicker border or the Tertiary accent color to guide the eye, but the overall interface remains flat and tactile.

## Shapes

The shape language is **Soft (0.25rem)**. This provides just enough rounding to feel approachable and human, without becoming "bubbly" or overly playful.

- **Cards & Containers:** Use a 0.25rem radius for a sharp, sophisticated appearance.
- **Buttons:** Use the same 0.25rem radius. Avoid pill shapes, as they lean too far into "SaaS/App" territory and away from the "Editorial" aesthetic.
- **Input Fields:** Maintain consistent 0.25rem corners to align with the grid-based structure of a research platform.

## Components

### Buttons
- **Primary:** Solid Primary color with Neutral text. Rectangular with soft corners.
- **Secondary:** Outlined in Primary color (15% opacity) with Primary text.
- **Tertiary (Action):** Used for "Save Research" or "Bookmark." Solid Tertiary (Terracotta) with Neutral text.

### Cards
Editorial cards for articles should be "borderless" when on a Secondary background, or use a 1px soft border on a Neutral background. The typography within cards should emphasize the Headline-sm and Label-caps for categories.

### Lists
Lists in research articles should use custom bullets—small, solid squares or elegant numerals—aligned with the Primary color. Spacing between list items should match `stack-sm`.

### Reachable Mobile Menu
A bottom-anchored or "thumb-zone" navigation pattern. It uses a high-contrast treatment (Primary background with Neutral icons/text) to ensure it is easily accessible during one-handed reading.

### Input Fields
Minimalist design. A simple 1px bottom border that transforms into a full 1px box on focus. Label-caps should sit above the field as a permanent persistent label.

### Breadcrumbs
Small-scale `label-caps` typography separated by a simple "/" character. Used to help users navigate deep hierarchies of brain health topics without cluttering the header.


