import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { team } from '@/lib/team';
import { posts } from '@/lib/content';

type Freq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

/* Every indexable URL on the site, with priorities that reflect what actually
   earns business: service pages first, then the pages that convert, then
   supporting content. Keep this in sync when a route is added — a page that
   is not listed here is one Google has to find by crawling. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: Freq, lastModified: Date = now) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    // Landing
    entry('/', 1.0, 'weekly'),

    // Departments — the pages that bring in work
    entry('/services', 0.9, 'monthly'),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9, 'monthly')),

    // Conversion paths
    entry('/contact', 0.8, 'monthly'),
    entry('/schedule', 0.8, 'monthly'),

    // Company
    entry('/about', 0.7, 'monthly'),
    entry('/team', 0.7, 'monthly'),
    entry('/careers', 0.7, 'weekly'),
    ...team.map((m) => entry(`/team/${m.slug}`, 0.5, 'yearly')),

    // Editorial
    entry('/blog', 0.7, 'weekly'),
    ...posts.map((p) => entry(`/blog/${p.slug}`, 0.6, 'yearly', new Date(p.iso))),

    // Legal — low priority, but indexable and listed: Google treats the
    // presence of real privacy and terms pages as a trust signal, and they
    // are linked from every page in the footer anyway.
    entry('/privacy', 0.2, 'yearly'),
    entry('/terms', 0.2, 'yearly'),
  ];
}
