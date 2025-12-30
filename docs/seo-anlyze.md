# SEO & Technical Audit Report
## BioDental Dentist Landing Page

**Date:** 2024  
**Framework:** Next.js 15.3.2  
**Deployment Target:** Netlify

---

## Executive Summary

### What is Broken ❌
- **No metadata** - Zero SEO metadata (title, description, Open Graph) on any page
- **No structured data** - Missing LocalBusiness JSON-LD schema (critical for local SEO)
- **No robots.txt or sitemap** - Search engines cannot properly crawl/index the site
- **Multiple H1 tags** - Homepage has 3+ H1 elements (SEO violation)
- **ESLint disabled during builds** - Potential runtime errors will slip through
- **Images unoptimized** - All images bypass Next.js optimization, causing slow loads

### What is Risky ⚠️
- **22 client components** - Many could be server components, causing unnecessary JS bundle size
- **Mixed image usage** - Some use Next.js Image, others use `<img>` tags
- **No environment variable validation** - API route may fail silently if RESEND_API_KEY missing
- **No canonical URLs** - Risk of duplicate content issues
- **Large PNG files** - Many PNGs in `/public` should be WebP/AVIF

### What is Fine ✅
- **Local contact info present** - Address, phone, email are in components
- **Google Map embedded** - Good for local SEO (needs structured data to match)
- **Alt attributes present** - Most images have alt text
- **Mobile-friendly** - Responsive design appears implemented
- **Booking CTAs visible** - Multiple call-to-action buttons present

---

## Critical Fixes (Before Deploy)

### 1. Add Metadata to All Pages
**Location:** `src/app/layout.tsx` and all page files  
**Issue:** Zero SEO metadata means search engines see blank titles/descriptions  
**Why Dangerous:** Site will rank poorly or not at all; social shares will look broken  
**Fix:**
- Add `metadata` export to `layout.tsx` with default site-wide metadata
- Add page-specific `metadata` exports to `/about`, `/services`, `/testimonials`
- Include: title, description, Open Graph tags, Twitter cards

**Example for layout.tsx:**
```typescript
export const metadata = {
  title: {
    default: "BioDental - Dentisterie Naturelle à Annaba, Algérie",
    template: "%s | BioDental"
  },
  description: "Cabinet dentaire BioDental à Annaba. Dr. Fetnaci Sofian - Orthodontie, Implants, Soins dentaires naturels. Prenez rendez-vous: +213 7 87 90 78 32",
  keywords: ["dentiste annaba", "orthodontie annaba", "implant dentaire annaba"],
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: "https://yourdomain.com",
    siteName: "BioDental",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }]
  }
}
```

### 2. Add LocalBusiness Structured Data (JSON-LD)
**Location:** `src/app/layout.tsx` (in `<head>`)  
**Issue:** No structured data means Google won't show rich results (map pack, business info)  
**Why Dangerous:** Local SEO will fail; competitors with schema will outrank you  
**Fix:** Add JSON-LD script in layout.tsx `<head>`:

```typescript
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": "BioDental",
  "image": "https://yourdomain.com/logo.webp",
  "@id": "https://yourdomain.com",
  "url": "https://yourdomain.com",
  "telephone": "+213787907832",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8 mars, plaine ouest, cité 1172 lgts, bloc 60",
    "addressLocality": "Annaba",
    "addressCountry": "DZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.8887816,
    "longitude": 7.7332525
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://web.facebook.com/Biodental.Dr.Fetnaci.S",
    "https://www.instagram.com/dr.fetnaci_sofiane",
    "https://www.tiktok.com/@biodental_dr.fetnaci"
  ]
}
```

### 3. Fix Multiple H1 Tags
**Location:** `src/components/homeSections/hero/hero.tsx` (lines 20, 60, 88)  
**Issue:** Homepage has 3 `<h1>` elements (lines 20, 60, 88)  
**Why Dangerous:** SEO best practice is ONE H1 per page; multiple H1s confuse search engines  
**Fix:** Change lines 60 and 88 from `<h1>` to `<h2>`

### 4. Create robots.txt
**Location:** `public/robots.txt` (create new file)  
**Issue:** Missing robots.txt means search engines may not crawl efficiently  
**Why Dangerous:** May block important pages or allow crawling of unwanted paths  
**Fix:** Create `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://yourdomain.com/sitemap.xml
```

### 5. Create Sitemap
**Location:** `src/app/sitemap.ts` (create new file)  
**Issue:** No sitemap means search engines must discover pages organically  
**Why Dangerous:** Slower indexing, may miss pages  
**Fix:** Create `src/app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
```

### 6. Re-enable ESLint During Builds
**Location:** `next.config.js` (line 4)  
**Issue:** `eslint: { ignoreDuringBuilds: true }` hides errors  
**Why Dangerous:** Runtime errors, type errors, and bugs will reach production  
**Fix:** Remove or set to `false`, fix any linting errors before deploy

### 7. Add Canonical URLs
**Location:** Each page file (`page.tsx`, `about/page.tsx`, etc.)  
**Issue:** No canonical tags to prevent duplicate content  
**Why Dangerous:** If site is accessible via multiple URLs, SEO value splits  
**Fix:** Add to each page's metadata:
```typescript
export const metadata = {
  // ... other metadata
  alternates: {
    canonical: 'https://yourdomain.com/about'
  }
}
```

### 8. Validate Environment Variables
**Location:** `src/app/api/send-email/route.ts`  
**Issue:** API route checks for `RESEND_API_KEY` but doesn't fail fast on startup  
**Why Dangerous:** Contact form will fail silently in production if env var missing  
**Fix:** Add validation at module level or use Next.js env validation

---

## SEO Must-Fix Issues

### 9. Standardize Phone Number Format
**Location:** Multiple files (footer, Contact, nav, etc.)  
**Issue:** Phone numbers appear in different formats: `+213 7 87 90 78 32`, `07 87 90 78 32`, `+2130659772737`  
**Impact:** Inconsistent NAP (Name, Address, Phone) hurts local SEO  
**Fix:** Use consistent format everywhere: `+213 787 90 78 32` (international format preferred for schema)

### 10. Add Missing Page-Specific Metadata
**Location:** `src/app/about/page.tsx`, `src/app/services/page.tsx`, `src/app/testimonials/page.tsx`  
**Issue:** No page-specific titles/descriptions  
**Impact:** All pages will share same metadata, poor SEO  
**Fix:** Add `metadata` export to each page file

**Example for about/page.tsx:**
```typescript
export const metadata = {
  title: "À Propos - Dr. Fetnaci Sofian | BioDental Annaba",
  description: "Découvrez BioDental et Dr. Fetnaci Sofian. Philosophie de soins dentaires naturels et durables à Annaba, Algérie.",
  openGraph: {
    title: "À Propos - BioDental",
    description: "Découvrez notre cabinet dentaire à Annaba",
  }
}
```

### 11. Ensure Single H1 Per Page
**Location:** Check all pages  
**Issue:** Homepage has multiple H1s (fixed in Critical #3), verify other pages  
**Impact:** SEO penalty for heading hierarchy violations  
**Fix:** Audit all pages - only first/main heading should be H1, rest H2-H6

### 12. Add Missing Alt Text
**Location:** Some decorative images may lack descriptive alt  
**Issue:** Not all images have meaningful alt attributes  
**Impact:** Accessibility and SEO issues  
**Fix:** Review all images, ensure alt text describes content (use `alt=""` for decorative only)

### 13. Add Language Attribute
**Location:** `src/app/layout.tsx` (line 12)  
**Issue:** `lang="en"` but site is in French  
**Impact:** Search engines may misclassify language  
**Fix:** Change to `lang="fr"` or `lang="fr-DZ"`

---

## Performance Improvements

### 14. Enable Image Optimization (Critical)
**Location:** `next.config.js` (line 8)  
**Issue:** `images: { unoptimized: true }` disables Next.js image optimization  
**Impact:** Large images load slowly, poor Core Web Vitals  
**Fix:** Remove `unoptimized: true` or set to `false`. Netlify supports Next.js image optimization.

### 15. Convert PNG to WebP/AVIF (Medium)
**Location:** `public/` directory  
**Issue:** Many PNG files (before-after/, cabinet/, services/, etc.) are large  
**Impact:** Slow page loads, especially on mobile  
**Fix:** Convert PNGs to WebP or AVIF. Keep PNGs as fallback if needed.

**Files to convert:**
- `/before-after/*.png` (14 files)
- `/cabinet/*.png` (12 files)
- `/services/*.png` (6 files)
- `/image-*.png` (9 files)
- `/reviews/*.png` (4 files)

### 16. Replace `<img>` with Next.js `<Image>` (Medium)
**Location:** Multiple components  
**Issue:** Hero component and others use `<img>` instead of Next.js `<Image>`  
**Impact:** No automatic optimization, lazy loading, or responsive images  
**Fix:** Replace all `<img>` tags with Next.js `Image` component

**Files needing updates:**
- `src/components/homeSections/hero/hero.tsx` (multiple `<img>` tags)
- `src/components/testimonialSections/CustomBeforeAfterSlider.tsx` (lines 302, 316)

### 17. Add Lazy Loading to Below-Fold Images (Medium)
**Location:** Components with images below fold  
**Issue:** Some images load immediately even if not visible  
**Impact:** Wastes bandwidth, slows initial page load  
**Fix:** Add `loading="lazy"` to Next.js Image components below fold, or use `priority={false}`

### 18. Reduce Client Components (Minor)
**Location:** 22 files marked `"use client"`  
**Issue:** Many components are client-side unnecessarily  
**Impact:** Larger JS bundles, slower hydration  
**Fix:** Audit each client component - only mark as client if using hooks, browser APIs, or interactivity

**Candidates for server components:**
- Static content components
- Components only using props (no state/hooks)

### 19. Optimize Video Loading (Minor)
**Location:** `src/components/testimonialSections/MoreImagesSection.tsx`  
**Issue:** Videos may autoplay/load immediately  
**Impact:** Large video files slow page load  
**Fix:** Add `preload="metadata"` or `preload="none"`, ensure `loading="lazy"` on video container

---

## Nice-to-Have Improvements

### 20. Add Breadcrumbs Schema
**Location:** All pages except homepage  
**Issue:** No breadcrumb navigation or schema  
**Impact:** Minor SEO benefit, better UX  
**Fix:** Add breadcrumb JSON-LD to pages

### 21. Add FAQ Schema
**Location:** `src/components/homeSections/FAQ/FAQ.tsx`  
**Issue:** FAQ section exists but no FAQPage schema  
**Impact:** May show rich results in search  
**Fix:** Add FAQPage JSON-LD schema

### 22. Add Review/Rating Schema
**Location:** `src/components/homeSections/reviews/page.tsx`  
**Issue:** Reviews exist but no aggregate rating schema  
**Impact:** Stars may show in search results  
**Fix:** Add aggregateRating to LocalBusiness schema

### 23. Add Service Schema
**Location:** Services pages  
**Issue:** No Service schema markup  
**Impact:** Services may appear in knowledge graph  
**Fix:** Add Service schema for each dental service offered

### 24. Improve Image Alt Text Quality
**Location:** All image components  
**Issue:** Some alt text is generic ("hero1", "about")  
**Impact:** Better SEO and accessibility  
**Fix:** Use descriptive alt text: "Patient smiling after dental treatment at BioDental"

### 25. Add Meta Keywords (Low Priority)
**Location:** Metadata exports  
**Issue:** Meta keywords are deprecated but some search engines still use them  
**Impact:** Minimal, but easy to add  
**Fix:** Add keywords array to metadata

---

## Final Pre-Deploy Checklist

Before deploying to production, verify:

- [ ] **Metadata added** to `layout.tsx` and all page files
- [ ] **LocalBusiness JSON-LD** added to `layout.tsx`
- [ ] **Single H1** on homepage (change extra H1s to H2)
- [ ] **robots.txt** created in `public/`
- [ ] **sitemap.ts** created in `src/app/`
- [ ] **Canonical URLs** added to all pages
- [ ] **ESLint re-enabled** in `next.config.js` (or fix all errors)
- [ ] **Image optimization enabled** (remove `unoptimized: true`)
- [ ] **Language attribute** set to `fr` or `fr-DZ` in layout
- [ ] **Phone numbers standardized** across all components
- [ ] **Environment variables** set in Netlify:
  - `RESEND_API_KEY`
  - `NEXT_PUBLIC_SITE_URL` (your production domain)
- [ ] **Test build** runs successfully: `npm run build`
- [ ] **Test production server**: `npm run start` (if applicable)
- [ ] **Verify contact form** works with RESEND_API_KEY
- [ ] **Check all pages** load without errors
- [ ] **Validate structured data** using [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] **Test mobile responsiveness** on real devices
- [ ] **Verify Google Map** loads correctly

---

## Additional Notes

### Environment Variables Required
Make sure these are set in Netlify:
- `RESEND_API_KEY` - For contact form emails
- `NEXT_PUBLIC_SITE_URL` - Your production domain (e.g., `https://biodental.dz`)

### Deployment Considerations
- Netlify supports Next.js image optimization automatically
- Ensure `@netlify/plugin-nextjs` is properly configured
- Consider enabling Netlify's image CDN for additional optimization

### Post-Deploy Monitoring
- Submit sitemap to Google Search Console
- Monitor Core Web Vitals in Google Search Console
- Check for crawl errors
- Verify structured data appears in search results

---

**Priority Order:**
1. Critical Fixes (#1-8) - **Must fix before deploy**
2. SEO Must-Fix (#9-13) - **Fix within 1 week**
3. Performance (#14-19) - **Fix within 2 weeks**
4. Nice-to-Have (#20-25) - **Optional improvements**

**Estimated Time:**
- Critical fixes: 2-4 hours
- SEO fixes: 1-2 hours
- Performance: 2-3 hours
- Nice-to-have: 1-2 hours

**Total: 6-11 hours of work**





