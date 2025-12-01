# Real Estate Landing Page - Design Guidelines

## Design Approach
**System Selected:** Minimal modern approach inspired by high-end real estate platforms like Zillow and Redfin, focusing on photography-first presentation with clean typography and spatial breathing room.

## Core Design Principles
1. **Photography Hero:** Images are the star - large, impactful, high-quality presentation
2. **Professional Trust:** Clean, sophisticated aesthetic that conveys reliability
3. **Focused Journey:** Simple path from visual discovery to download action
4. **Breathing Space:** Generous whitespace to let property photos command attention

---

## Typography System

**Font Families:**
- Primary: 'Inter' or 'DM Sans' (Google Fonts) - clean, professional sans-serif
- Accent: 'Playfair Display' (optional for logo/brand name) - adds elegance

**Hierarchy:**
- H1 (Brand/Title): 3xl to 5xl, font-semibold
- Body text: base to lg, font-normal
- Footer text: sm, font-light

---

## Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 to py-24
- Component spacing: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8

**Container Structure:**
- Max-width: max-w-7xl for overall content
- Full-width for image sections
- Centered alignment: mx-auto

---

## Component Specifications

### 1. Hero Section (Full Viewport)
- Clean branded header with company name/logo
- Minimal text overlay: "Discover Your Dream Property" or similar tagline
- Height: 70vh on desktop, 60vh on mobile
- No hero image - goes straight into gallery

### 2. Photo Gallery (5 Images)
**Layout Pattern:** Asymmetric masonry-inspired grid

Desktop (lg:):
- First 2 images: side-by-side (grid-cols-2), larger scale
- Next 3 images: three-column layout (grid-cols-3)
- Image aspect ratio: 4:3 or 16:9, object-cover

Mobile:
- Single column stack (grid-cols-1)
- Full-width images with consistent spacing

**Image Treatment:**
- Subtle shadow: shadow-lg
- Rounded corners: rounded-lg
- Hover effect: slight scale transform (scale-105)
- Smooth transitions: transition-transform duration-300

### 3. Download CTA Section
**Placement:** Immediately after gallery, before footer
**Container:** Centered, py-20

**Structure:**
- Headline: "Ready to Explore?" (text-3xl, font-semibold)
- Subtext: Brief value proposition (text-lg, opacity-80)
- Button: "Download Brochure" or "Download Now"

**Button Specs:**
- Size: Large (px-8 py-4)
- Typography: text-lg font-semibold
- Shape: rounded-lg
- Full-width on mobile, auto-width centered on desktop
- Icon: Download icon (Heroicons) positioned left of text

### 4. Footer
**Layout:** Two-column on desktop, stacked on mobile

**Left Column:**
- Company name (text-xl font-semibold)
- Tagline or brief description

**Right Column:**
- Address heading: "Visit Us" (text-sm font-semibold uppercase)
- Full address broken into lines
- Phone number
- Email address

**Footer Styling:**
- Background: Subtle contrast from main page
- Padding: py-12
- Typography: text-sm to text-base
- Spacing between elements: space-y-2

---

## Images

**Image Requirements:**
1. **Image 1-2:** Exterior property shots (architecture, curb appeal)
2. **Image 3:** Interior living space (living room, open concept)
3. **Image 4:** Kitchen or bedroom detail
4. **Image 5:** Outdoor space (backyard, patio, or neighborhood view)

**Image Placement:**
- No large hero image
- Gallery starts after minimal header/brand section
- Images are the primary content, taking center stage

**Treatment:** Professional real estate photography style - bright, well-lit, aspirational

---

## Visual Enhancements

**Subtle Animations (Minimal):**
- Gallery images: Fade-in on scroll (stagger effect)
- Download button: Gentle pulse on page load

**Interactive States:**
- Images: Slight zoom on hover
- Links: Underline animation
- Button: Native hover/active states (no custom overlay effects)

---

## Responsive Behavior

**Breakpoints:**
- Mobile (base): Single column, full-width images
- Tablet (md:): Begin multi-column for gallery
- Desktop (lg:+): Full asymmetric grid layout

**Touch Targets:**
- Minimum 44px height for all interactive elements
- Increased padding on mobile buttons

---

## Accessibility

- High contrast text over any image overlays
- Proper heading hierarchy (h1 → h2 structure)
- Alt text for all property images (descriptive)
- Focus states visible on all interactive elements
- Semantic HTML structure throughout