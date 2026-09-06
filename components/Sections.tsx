import Image from 'next/image';
import Link from 'next/link';
import { clientMarks, stats } from '@/lib/site';
import { techRail } from '@/lib/services';
import { testimonials } from '@/lib/content';
import { ArrowRight, ChevronRight, Star } from './Icons';

export function TrustStrip({ caption = 'Operators who work with us' }: { caption?: string }) {
  return (
    <div className="container reveal">
      <div className="trust glass">
        <p className="cap">{caption}</p>
        <div className="marks">
          {clientMarks.map((m) => (
            <span key={m.name} className={`mark ${m.style}`}>{m.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StatBand({ items = stats }: { items?: { value: string; label: string }[] }) {
  return (
    <div className="container reveal">
      <div className="band glass">
        {items.map((s) => (
          <div key={s.label}>
            <b className="tnum">{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Cta({
  title = 'Tell us which desk is hurting.',
  body = 'Thirty minutes, no presentation. We will tell you what a desk would cover, roughly what it costs, and whether you actually need one.',
  primary = { href: '/schedule', label: 'Schedule a call' },
  secondary,
}: {
  title?: string; body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div className="container reveal">
      <div className="cta">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="cta-actions">
          <Link href={primary.href} className="btn btn-white">{primary.label} <ArrowRight /></Link>
          {secondary && (
            <Link href={secondary.href} className="btn btn-ghost-light">{secondary.label}</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav className="crumb" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={it.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span style={{ color: 'var(--azure)' }}>{it.label}</span>}
          {i < items.length - 1 && <ChevronRight />}
        </span>
      ))}
    </nav>
  );
}

export function CaseCard({ c }: { c: { kpi: string; kpiLabel: string; title: string; body: string; tag: string; image: string } }) {
  return (
    <article className="case reveal">
      <Image src={c.image} alt="" width={1000} height={700} sizes="(max-width: 900px) 100vw, 33vw" />
      <div className="cb">
        <span className="kpi tnum">{c.kpi}</span>
        <span className="kl">{c.kpiLabel}</span>
        <h3>{c.title}</h3>
        <p>{c.body}</p>
      </div>
    </article>
  );
}

export function TechRail() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Technology</span>
          <h2>The stack our developers build in</h2>
          <p>
            Web apps, mobile apps, APIs and business software, written in-house in Lahore and led by
            Umair Altaf — with SEO and Meta advertising handled by the same team.
          </p>
        </div>
        <div className="tech-rail reveal">
          {techRail.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="hero-actions reveal" style={{ justifyContent: 'center', marginTop: '2rem' }}>
          <Link href="/services/software-development" className="btn">
            See what we build <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Auto-scrolling testimonial wall. The list is rendered twice so the loop is
   seamless: the animation shifts the track by exactly -50%, which lands the
   second copy where the first began. Children carry margin-right rather than
   the track carrying `gap`, so that -50% is exact. */
export function TestimonialMarquee() {
  const perGroup = Math.max(2, Math.ceil(2200 / (testimonials.length * 384)));
  const group = Array.from({ length: perGroup }, () => testimonials).flat();
  const seconds = group.length * 2 * 7;

  const card = (t: (typeof testimonials)[number], key: string, hidden?: boolean) => (
    <figure className="tcard glass" key={key} style={{ margin: 0 }} aria-hidden={hidden || undefined}>
      <div className="stars" aria-label={hidden ? undefined : 'Five out of five'}>
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
      </div>
      <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="tperson">
        <Image src={t.avatar} alt="" width={92} height={92} className="avatar" />
        <div><b>{t.name}</b><span>{t.meta}</span></div>
      </figcaption>
    </figure>
  );

  return (
    <div className="marquee reveal" style={{ ['--marquee-duration' as string]: `${seconds}s` }}>
      <div className="marquee-track">
        {group.map((t, i) => card(t, `a${i}`))}
        {group.map((t, i) => card(t, `b${i}`, true))}
      </div>
    </div>
  );
}
