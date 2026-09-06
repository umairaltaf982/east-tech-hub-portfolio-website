import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/content';
import { Cta } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Practical notes on taxi dispatch, freight factoring, SEO and marketplace operations, written by the East Tech Hub team.',
};

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Insights</span>
          <h1>What we learn on the desks</h1>
          <p className="lede">
            Short, practical write-ups from the people doing the work — dispatch, freight, search and marketplaces.
            No thought leadership.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <Link href={`/blog/${lead.slug}`} className="dcard reveal" style={{ marginBottom: '1.5rem' }}>
            <div className="cards-2" style={{ gap: 0 }}>
              <div className="dcard-media" style={{ aspectRatio: '4 / 3' }}>
                <Image src={lead.image} alt="" width={1200} height={900} sizes="(max-width: 1000px) 100vw, 50vw" priority />
                <span className="chip">Latest</span>
              </div>
              <div className="dcard-body" style={{ justifyContent: 'center' }}>
                <span className="kicker">{lead.category}</span>
                <h3 style={{ fontSize: 'clamp(1.4rem,1.1rem + 1.2vw,1.95rem)' }}>{lead.title}</h3>
                <p style={{ marginTop: '.7rem' }}>{lead.excerpt}</p>
                <span className="pmeta">{lead.date} · {lead.read} read · {lead.author}</span>
              </div>
            </div>
          </Link>

          <div className="cards-3">
            {rest.map((p) => (
              <Link href={`/blog/${p.slug}`} className="pcard reveal" key={p.slug}>
                <div className="pcard-media">
                  <Image src={p.image} alt="" width={1000} height={563} sizes="(max-width: 1000px) 100vw, 33vw" />
                </div>
                <div className="pcard-body">
                  <span className="kicker">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="pmeta">{p.date} · {p.read} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: '1rem' }}>
        <Cta title="Rather have us do it than read about it?"
             body="Every note here comes out of work we run daily across four desks. Tell us which one you need covering."
             secondary={{ href: '/services', label: 'See departments' }} />
      </div>
    </>
  );
}
