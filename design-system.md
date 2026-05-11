# Damietta Heritage Furniture - Design System

## 1. Design Principles
- **Spatial Confidence**: Eliminate spatial uncertainty. Furniture cannot be experienced through a screen. Therefore, diagrams, room scenes, and exact dimension markers replace the showroom experience.
- **Material Honesty**: Use extreme close-up texture photography. Name materials precisely (e.g., "Solid Walnut" over "Brown Wood").
- **Craft Pride**: Showcase the Damietta origin as a mark of global excellence. Feature workshop photos and craftsman stories.
- **Conversion Architecture**: Never hide the return policy, delivery cost, or installment options. Keep them visible on the PDP (Product Detail Page) to defuse purchase abandonment.

## 2. The Spatial Confidence System
Six layers to replace physical touch:
1. **Visual Context**: Human-scale room scenes.
2. **Material Language**: Unfelt surfaces made real through texture macros.
3. **Dimensional Clarity**: Orthographic diagrams and doorway clearance notes.
4. **Craft Evidence**: Provenance ("Made in Damietta") and joinery close-ups.
5. **Social Proof**: Customer reviews specifically addressing material feel and delivery.
6. **Risk Reduction**: Return policies, warranties, and delivery terms visible *near the Buy button*.

## 3. Photography Art Direction Guide
Each product *must* include:
1. **Primary**: Lifestyle room scene.
2. **Studio**: Product-only on clean background.
3. **Texture**: Extreme macro of grain/fabric.
4. **Scale**: Human figure/room context.
5. **Detail**: Joinery/carving feature.
6. **Angle**: Underside/interior view.
*Lighting*: Match to personality (e.g., amber workshop light for Artisan Heritage, bright natural for Scandi).

## 4. Token System
Organized in `tokens.css`:
- **Typography**: Fluid scale using `clamp()`. Display, Body, Label, Arabic.
- **Colors**: Semantic names (`--color-surface`, `--color-accent`) designed for easy theming.
- **Spacing/Radius/Shadows**: 8pt scales, fluid radii, layered realistic shadows.

## 5. Material Token System
- Dedicated color tokens for wood species (e.g., `--material-walnut: #5C3A1E`) used in badges and UI accents.
- Upholstery tokens map to physical fabric colors.

## 6. Typography Guide
- **Display**: High personality, never generic sans-serif.
- **Body**: Highly legible.
- **Arabic Parity**: Use Noto Kufi Arabic, Cairo, Tajawal, or Amiri. Increase size by ~5% and line-height when `dir="rtl"`.

## 7. Component API
Defined in `components.css`:
- `.product-card`: Requires multiple image states, material strip.
- `.dimension-diagram`: SVG/CSS drawn, never raster.
- `.swatch-grid`: Real image textures.

## 8. Product Detail Page Checklist
- [ ] Breadcrumb navigation
- [ ] Material badge
- [ ] Star rating link to reviews
- [ ] BNPL installment display near price
- [ ] Dimension diagram with doorway check
- [ ] Specs table
- [ ] "Right for your space if..." use-case bullets
- [ ] Return policy visible near CTA
- [ ] Sticky add-to-cart active on scroll
- [ ] WhatsApp consultation CTA

## 9. Gallery & Filter System
- Filters grouped by *User Intent* (Room, Style, Material), not strict warehouse taxonomy.
- Pagination via "Load More" to prevent scroll-position loss issues common with infinite scroll on high-consideration purchases.

## 10. Custom Order Flow
- Located at `/pages/custom-order.html`.
- Focuses on friction-free brief submission. Upload inputs for sketches/photos. WhatsApp primary contact.

## 11. Arabic/RTL Implementation
- Base CSS uses logical properties (`margin-inline`, `padding-block`).
- `rtl.css` handles specific flex reversals and text alignments that fall outside logical property scope.
- Font stack automatically swaps to Arabic via `html[dir="rtl"] body` selector.

## 12. Accessibility Audit Checklist
- [ ] WCAG AA 4.5:1 text contrast checked (especially over warm overlays).
- [ ] Descriptive alt text ("Solid walnut table...").
- [ ] `focus-visible` outlines defined globally.
- [ ] `prefers-reduced-motion` zero-out query active in `base.css`.
- [ ] Aria labels on breadcrumbs, galleries, wishlists.

## 13. Mobile UX Guide
- Bottom tab bar instead of hamburger menu for core navigation.
- 1-2 column max for product grid.
- Horizontal scroll-snap for categories and secondary product lists.

## 14. Performance Guide
- Core target: LCP < 2.5s.
- Implementation: `<picture>` elements with AVIF/WebP.
- `loading="eager"` on hero, `loading="lazy"` on below-fold.

## 15. Conversion Architecture Rules
- **Anti-patterns forbidden**: Return policy buried in footer, delivery cost hidden until checkout, hover-only UI.
- Trust tier hierarchy implemented directly on PDP.

## 16. WhatsApp Integration
- Primary sales channel in Egypt.
- Implemented as `.consult-widget` with `wa.me` links across PDP, Showroom, and Contact pages.

## 17. Brand Personality Switching
Switch brand identity by loading the respective CSS file *after* `tokens.css`:
- `artisan-heritage.css`
- `luxe-editorial.css`
- `scandinavian-modern.css`
- `mediterranean-warmth.css`
- `bold-contemporary.css`

## 18. Damietta Market Context
- Highlighting local craft is an international trust shortcut.
- Emphasize solid wood guarantees.
- Support local payment context mentally (Vodafone Cash, Installments).
