# TODO - UI Refactor + Dynamic Image System

## Phase 1: Foundation (Dynamic mapping + primitives)
- [x] Create reusable UI primitives: PageContainer/SectionHeading/ProjectCard/ImageModal
- [x] Make `AutoGallery.jsx` the canonical category-based dynamic gallery UI
- [ ] Refactor `Gallery.jsx` to use dynamic mapper + same UI primitives (remove static `websiteData.gallery` usage)

## Phase 2: Consistency (theme/spacing/typography)
- [ ] Normalize palette usage (move hardcoded colors to CSS variables / shared tokens)
- [ ] Standardize section padding/typography (hero/gallery/ourwork/team/testimonials/contact)

## Phase 3: Responsiveness + performance
- [ ] Enforce consistent aspect ratios across cards/grids
- [ ] Add skeleton/loading + improved hover transitions and modal behaviors

## Phase 4: Clean-up
- [ ] Remove duplicated modal/card logic across components
- [ ] Validate that each category tab filters images only from its folder

## Phase 5: Verification
- [ ] Run `npm run dev` and manually verify Home + Project pages on mobile + desktop
- [ ] Run `npm run build` to ensure no issues

