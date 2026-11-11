import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

/* AI crawlers are allowed deliberately.
   Retrieval bots (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User,
   PerplexityBot, Perplexity-User) are what put the site in AI answers with a
   citation. Training bots (GPTBot, ClaudeBot, CCBot, Google-Extended,
   Applebot-Extended, meta-externalagent) also let the content be used to train
   models — remove those lines if that is not wanted, but note that blocking
   them does not remove you from AI search, it only forfeits training use. */
const aiCrawlers = [
  'OAI-SearchBot', 'ChatGPT-User', 'GPTBot',
  'Claude-SearchBot', 'Claude-User', 'ClaudeBot',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'meta-externalagent', 'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Everything is crawlable. /privacy and /terms carry a noindex meta tag
      // instead of a Disallow — blocking them here would stop Google reading
      // the noindex, which is how pages end up indexed with no description.
      { userAgent: '*', allow: '/' },
      { userAgent: aiCrawlers, allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
