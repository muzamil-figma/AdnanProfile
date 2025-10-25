// DATA SOURCE: /data/seo.json
// SEO defaults are exported for app/layout.tsx and per-page overrides.
import seo from '@/data/seo.json'
export const seoDefaults = {
  title: { default: seo.defaultTitle, template: `%s | ${seo.siteName}` },
  description: seo.defaultDescription,
  openGraph: { images: [{ url: '/opengraph.png' }], type: 'website' },
  twitter: { card: 'summary_large_image', site: seo.twitter },
  robots: { index: true, follow: true }
} as const
