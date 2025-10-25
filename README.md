# UAW Site — Pro V4
Run: `npm i && npm run dev`
ENV: copy `.env.example` to `.env.local` and fill values.

## Hints (where data comes from)
- Navbar → `data/navbar.json`
- Showcase (first section) → `data/showcase.json`
- Single Video (black section) → `data/agents.json` (first item only)
- Trusted cards → `data/trusted.json`
- Booking (calendar) → `.env.local` `NEXT_PUBLIC_CALENDAR_EMBED_URL`
- FAQs → `data/faqs.json`
- Blog list/detail → RTDB `blog/*` **or** `data/blog.json`
- Industries list/detail → RTDB `industries/*` **or** `data/industries.json`
- Pricing → RTDB `pricing/*` **or** `data/pricing.json`

SEO defaults → `lib/seo.ts` + `data/seo.json`. Page titles set in page files.
