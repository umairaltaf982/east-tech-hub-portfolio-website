import Image from 'next/image';
import Link from 'next/link';
import { clientMarks, stats } from '@/lib/site';
import { ArrowRight, ChevronRight } from './Icons';

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
