import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, posts } from '@/lib/content';
import { ArrowLeft, ArrowRight } from '@/components/Icons';
import { Cta } from '@/components/Sections';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    openGraph: { type: 'article', title: p.title, description: p.excerpt, publishedTime: p.iso, images: [{ url: p.image }] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    datePublished: p.iso,
    author: { '@type': 'Person', name: p.author },
    publisher: { '@type': 'Organization', name: 'East Tech Hub' },
    image: p.image,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="container">
          <Link href="/blog" className="link-arrow" style={{ color: 'var(--soft)', marginBottom: '1.6rem' }}>
            <ArrowLeft /> All insights
          </Link>

          <article className="article" style={{ marginTop: '1.6rem' }}>
            <span className="kicker">{p.category}</span>
            <h1 style={{ fontSize: 'clamp(1.8rem,1.3rem + 2.2vw,2.8rem)', margin: '.5rem 0 .9rem' }}>{p.title}</h1>
            <p className="pmeta" style={{ marginBottom: '1.8rem' }}>{p.date} · {p.read} read · {p.author}</p>

            <div className="article-media">
              <Image src={p.image} alt="" width={1200} height={675} priority sizes="(max-width: 900px) 100vw, 900px" />
            </div>

            {p.body.map((b, i) => {
              if (b.type === 'h') return <h3 key={i}>{b.text}</h3>;
              if (b.type === 'quote') return <p className="pull" key={i}>{b.text}</p>;
              if (b.type === 'ul') return (
                <ul className="body" key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>
              );
              return <p key={i}>{b.text}</p>;
            })}

            <div className="panel glass" style={{ marginTop: '2.2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                <b style={{ display: 'block', fontSize: '.98rem' }}>Want this handled for you?</b>
                <span style={{ fontSize: '.88rem', color: 'var(--soft)' }}>Thirty minutes with the team lead for this department.</span>
              </div>
              <Link href="/schedule" className="btn">Schedule a call <ArrowRight /></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal"><h2 style={{ fontSize: '1.5rem' }}>Keep reading</h2></div>
          <div className="cards-3">
            {related.map((r) => (
              <Link href={`/blog/${r.slug}`} className="pcard reveal" key={r.slug}>
                <div className="pcard-media">
                  <Image src={r.image} alt="" width={1000} height={563} sizes="(max-width: 1000px) 100vw, 33vw" />
                </div>
                <div className="pcard-body">
                  <span className="kicker">{r.category}</span>
                  <h3>{r.title}</h3>
                  <span className="pmeta">{r.date} · {r.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: '1rem' }}><Cta secondary={{ href: '/blog', label: 'More insights' }} /></div>
    </>
  );
}
