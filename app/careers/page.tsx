import type { Metadata } from 'next';
import Image from 'next/image';
import { jobs } from '@/lib/content';
import { site } from '@/lib/site';
import { ArrowRight } from '@/components/Icons';
import { Cta } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Open roles at East Tech Hub in Lahore — dispatch, client support, development, SEO and Amazon PPC.',
};

const perks = [
  { k: 'Shifts', t: 'Paid shift differential', b: 'Night and US-hours roles carry an uplift, transport home after 10pm, and a fixed rota published a month ahead.' },
  { k: 'Training', t: 'Two weeks before you take a call', b: 'Every new starter shadows a live desk before handling volume. Nobody is dropped in.' },
  { k: 'Progression', t: 'Leads are promoted from the desk', b: 'All four of our current team leads started on the phones or in the build bay.' },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Careers</span>
          <h1>Work the desks with us</h1>
          <p className="lede">
            We hire for temperament more than CV. If you are calm at 3am, write clearly and follow a runbook without
            being told twice, the rest we will teach you. All roles are on-site in Lahore unless stated.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="cards-3" style={{ marginBottom: 'clamp(2rem,1.4rem + 2vw,3rem)' }}>
            {perks.map((p) => (
              <div className="ind reveal" key={p.t}>
                <span className="kicker">{p.k}</span>
                <b>{p.t}</b>
                <span>{p.b}</span>
              </div>
            ))}
          </div>

          <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', marginBottom: 'clamp(2rem,1.4rem + 2vw,3rem)', boxShadow: 'var(--shadow)' }} className="reveal">
            <Image src="/images/culture.jpg" alt="The East Tech Hub team at work in Lahore" width={1000} height={560} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="section-head reveal" style={{ marginBottom: '1.6rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem,1.2rem + 1.2vw,2rem)' }}>Open positions</h2>
            <p>Apply by email with your CV and the role title in the subject line. We reply to every application within five working days.</p>
          </div>

          <div style={{ display: 'grid', gap: '.9rem' }}>
            {jobs.map((j) => {
              const subject = encodeURIComponent(`Application — ${j.title}`);
              const body = encodeURIComponent(
                `Hello East Tech Hub team,\n\nI would like to apply for the ${j.title} role (${j.department}, ${j.shift}).\n\nMy CV is attached.\n\nName:\nPhone:\nCurrent location:\nEarliest start date:\n\nThank you,\n`
              );
              return (
                <article className="job glass reveal" key={j.title}>
                  <div>
                    <h3>{j.title}</h3>
                    <p>{j.body}</p>
                    <div className="tags">
                      <span className="tag">{j.department}</span>
                      <span className="tag">{j.location}</span>
                      <span className="tag">{j.shift}</span>
                      <span className="tag">{j.type}</span>
                      <span className="tag">{j.openings}</span>
                    </div>
                  </div>
                  <a className="btn" href={`mailto:${site.email}?subject=${subject}&body=${body}`}>
                    Apply now <ArrowRight />
                  </a>
                </article>
              );
            })}
          </div>

          <p className="formnote" style={{ marginTop: '1.4rem' }}>
            Nothing here that fits? Send a speculative application to{' '}
            <a href={`mailto:${site.email}`} style={{ color: 'var(--azure)', fontWeight: 700 }}>{site.email}</a> — we keep CVs on file for six months.
          </p>
        </div>
      </section>

      <div style={{ paddingBottom: '1rem' }}>
        <Cta title="Questions before you apply?"
             body="Ask about the rota, the training period or the shift differential. We would rather answer honestly now than lose you in month two."
             primary={{ href: '/contact', label: 'Ask a question' }} />
      </div>
    </>
  );
}
