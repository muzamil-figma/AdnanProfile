// lib/cms.ts
// HINT: Blog / Industries / Pricing ka data yahin se aata hai.
// RTDB enabled ho to Firebase Realtime Database (REST) se, warna /data/*.json se.

export type BlogPost = {
  id: string
  title: string
  summary?: string
  image?: string
  html: string
  createdAt?: number
}

export type Industry = {
  slug: string
  name: string
  image?: string
  html: string
  order?: number
  createdAt?: number
  seo?: { title?: string; description?: string; image?: string }
}

export type Plan = {
  id: string
  name: string
  price: string | number
  currency?: string
  blurb?: string
  features?: string[]
  isPopular?: boolean
  order?: number
  ctaUrl?: string
}

const RTD_ENABLED = process.env.NEXT_PUBLIC_FIREBASE_RTD_ENABLED === 'true'
const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL?.replace(/\/$/, '')

// Helper: RTDB GET (no-store for fresh data)
async function rtd<T = any>(path: string): Promise<T | null> {
  if (!DB_URL) return null
  const res = await fetch(`${DB_URL}/${path}.json`, { cache: 'no-store' })
  if (!res.ok) return null
  return res.json()
}

/* ---------- BLOG ---------- */
export async function listBlog(): Promise<BlogPost[]> {
  if (RTD_ENABLED) {
    const obj = await rtd<Record<string, Omit<BlogPost, 'id'>>>(`blog`)
    if (obj && typeof obj === 'object') {
      const arr = Object.entries(obj).map(([id, v]) => ({ id, ...(v || {}) }))
      arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
      return arr
    }
  }
  return (await import('@/data/blog.json')).default as BlogPost[]
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  if (RTD_ENABLED) {
    const v = await rtd<Omit<BlogPost, 'id'>>(`blog/${encodeURIComponent(id)}`)
    return v ? ({ id, ...v } as BlogPost) : null
  }
  const local = (await import('@/data/blog.json')).default as BlogPost[]
  return local.find(p => p.id === id) || null
}

/* ------- INDUSTRIES ------- */
export async function listIndustries(): Promise<Industry[]> {
  if (RTD_ENABLED) {
    const obj = await rtd<Record<string, Omit<Industry, 'slug'>>>(`industries`)
    if (obj && typeof obj === 'object') {
      const arr = Object.entries(obj).map(([slug, v]) => ({ slug, ...(v || {}) }))
      arr.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
      return arr
    }
  }
  return (await import('@/data/industries.json')).default as Industry[]
}

export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
  if (RTD_ENABLED) {
    const v = await rtd<Omit<Industry, 'slug'>>(`industries/${encodeURIComponent(slug)}`)
    return v ? ({ slug, ...v } as Industry) : null
  }
  const local = (await import('@/data/industries.json')).default as Industry[]
  return local.find(x => x.slug === slug) || null
}

/* --------- PRICING -------- */
export async function listPricing(): Promise<Plan[]> {
  if (RTD_ENABLED) {
    const obj = await rtd<Record<string, Omit<Plan, 'id'>>>(`pricing`)
    if (obj && typeof obj === 'object') {
      const arr = Object.entries(obj).map(([id, v]) => ({ id, ...(v || {}) }))
      arr.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
      return arr
    }
  }
  return (await import('@/data/pricing.json')).default as Plan[]
}
