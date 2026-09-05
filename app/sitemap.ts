import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { team } from '@/lib/team';
import { posts } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['', '/about', '/services', '/team', '/blog', '/careers', '/contact', '/schedule', '/privacy', '/terms'];
  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r}`,
      lastModified: now,
      changeFrequency: (r === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: r === '' ? 1 : 0.7,
    })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, priority: 0.9 })),
    ...team.map((m) => ({ url: `${site.url}/team/${m.slug}`, lastModified: now, priority: 0.5 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.iso), priority: 0.6 })),
  ];
}
