import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getService, services } from '@/lib/services';
import { ArrowRight, Check, serviceIcon } from '@/components/Icons';
import { Breadcrumb, Cta, StatBand } from '@/components/Sections';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.tagline,
    openGraph: { title: `${s.name} | East Tech Hub`, description: s.tagline, images: [{ url: s.image }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const Icon = serviceIcon[s.icon];
  const others = services.filter((x) => x.slug !== s.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.tagline,
    provider: { '@type': 'Organization', name: 'East Tech Hub' },
    areaServed: s.region,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { label: s.name }]} />
          <span className="di" style={{
            width: 52, height: 52, borderRadius: 16, display: 'grid', placeItems: 'center', margin: '1.2rem 0 1rem',
            background: 'linear-gradient(140deg,rgba(47,168,228,.2),rgba(22,48,92,.16))', color: 'var(--azure)',
          }}>
            <Icon style={{ width: 24, height: 24 }} />
          </span>
          <span className="eyebrow">{s.region}</span>
          <h1>{s.name}</h1>
          <p className="lede" style={{ color: 'var(--ink)', fontWeight: 600, marginBottom: '1rem' }}>{s.tagline}</p>
          <p className="lede">{s.intro}</p>
          <div className="hero-actions" style={{ marginTop: '1.8rem' }}>
            <Link href="/schedule" className="btn">Schedule a call <ArrowRight /></Link>
            <Link href="/contact" className="btn btn-outline">Send an enquiry</Link>
          </div>
        </div>
      </section>

      <StatBand items={s.stats} />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What the desk covers</span>
            <h2>Everything included</h2>
          </div>
          <div className="cards-3">
            {s.offerings.map((o, i) => (
              <div className="ind reveal" key={o.title}>
                <span className="kicker">{String(i + 1).padStart(2, '0')}</span>
                <b>{o.title}</b>
                <span>{o.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cards-2" style={{ alignItems: 'start' }}>
            <div className="reveal">
              <span className="eyebrow">Included as standard</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,1.2rem + 1.3vw,2.1rem)', margin: '.9rem 0 1.4rem' }}>
                What you get either way
              </h2>
              <ul className="checks">
                {s.included.map((b) => <li key={b}><Check />{b}</li>)}
              </ul>
              <div className="svc-media">
                <Image src={s.image} alt="" fill sizes="(max-width: 1000px) 100vw, 50vw" />
              </div>
            </div>
            <div className="panel glass reveal">
              <span className="eyebrow" style={{ marginBottom: '.6rem' }}>How we start</span>
              <div className="steps">
                {s.process.map((p, i) => (
                  <div className="step" key={p.title}>
                    <span className="n">{String(i + 1).padStart(2, '0')}</span>
                    <div><h4>{p.title}</h4><p>{p.body}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {s.tech && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Technology</span>
              <h2>The stack we build in</h2>
              <p>
                We pick the tool that fits the job and explain why. Everything below is written and maintained
                in-house by our own developers in Lahore.
              </p>
            </div>
            <div className="stack-grid">
              {s.tech.map((t) => (
                <div className="stack-card reveal" key={t.group}>
                  <b>{t.group}</b>
                  <ul>{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Questions we get asked</span>
            <h2>Before you commit</h2>
          </div>
          <div className="faq reveal">
            {s.faqs.map((f) => (
              <details className="glass" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Other departments</span>
            <h2>The rest of the floor</h2>
          </div>
          <div className="cards-3">
            {others.map((o) => (
              <Link href={`/services/${o.slug}`} className="pcard reveal" key={o.slug}>
                <div className="pcard-media">
                  <Image src={o.image} alt="" width={1000} height={563} sizes="(max-width: 1000px) 100vw, 33vw" />
                </div>
                <div className="pcard-body">
                  <span className="kicker">{o.region.split(' · ')[0]}</span>
                  <h3>{o.name}</h3>
                  <p>{o.short}</p>
                  <span className="link-arrow" style={{ marginTop: '1rem' }}>Open <ArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: '1rem' }}>
        <Cta title={`Start a conversation about ${s.name.toLowerCase()}`}
             body="Thirty minutes on your volumes, your hours and what is currently going wrong. We will tell you whether this desk is the right answer."
             secondary={{ href: '/services', label: 'See other departments' }} />
      </div>
    </>
  );
}
