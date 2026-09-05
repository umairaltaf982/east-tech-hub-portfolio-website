import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { onboarding } from '@/lib/content';
import { site } from '@/lib/site';
import { ArrowRight, Check } from '@/components/Icons';
import { Cta, StatBand, TrustStrip } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'East Tech Hub is an operations and digital partner headquartered in Lahore, running dispatch, factoring, web and e-commerce desks for clients across six countries.',
};

const principles = [
  ['Written runbooks before access.', 'Nothing goes live on assumption.'],
  ['Named leads on every account.', 'You know who is on your desk tonight.'],
  ['Your systems, your logins.', 'We never hold your data hostage in our tooling.'],
  ['One reporting format.', 'Same numbers, same layout, every Monday.'],
  ['Parallel run before handover.', 'We prove the desk works before you rely on it.'],
  ['Rolling monthly terms.', 'Stay because the numbers work, not because of a contract.'],
];

const coverage = [
  { region: 'United Kingdom', title: 'Private hire & taxi', body: 'Dispatch desks for operators in Manchester, Birmingham, Leeds and Greater London. Overnight and full 24/7 cover.' },
  { region: 'United States', title: 'Freight factoring', body: 'Owner-operators and small fleets funded through RTS Financial, with back-office support on Eastern and Central time.' },
  { region: 'Canada · Ireland', title: 'Web, SEO & ads', body: 'Local service businesses — roofing, plumbing, trades — built, ranked and advertised against booked jobs.' },
  { region: 'Saudi Arabia · UAE', title: 'E-commerce & transport', body: 'Marketplace operations and storefront builds, plus dispatch consultancy for regional transport operators.' },
  { region: 'Pakistan', title: 'Our operations floor', body: 'Sharazi Street, Lahore. Three shift patterns, a development bay, and the training room where every runbook is rehearsed.' },
  { region: 'Remote', title: 'Wherever the desk is needed', body: 'If your hours do not fit an existing rota, we tell you honestly whether we can staff it before we quote for it.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>An operations floor, not an agency</h1>
          <p className="lede">
            East Tech Hub started in 2021 with one dispatch desk and three people on a night rota. Five years on we
            run four departments from Lahore for clients in {site.countries.length} countries — and the night rota is
            still the part we are proudest of.
          </p>
        </div>
      </section>

      <StatBand items={[
        { value: '2021', label: 'Founded in Lahore' },
        { value: '4', label: 'Operating departments' },
        { value: '24/7', label: 'UK desk coverage' },
        { value: '6', label: 'Countries served' },
      ]} />

      <section className="section">
        <div className="container">
          <div className="cards-2" style={{ alignItems: 'start' }}>
            <div className="reveal">
              <span className="eyebrow">Our story</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,1.2rem + 1.5vw,2.2rem)', margin: '.9rem 0 1rem' }}>
                We learned the work by doing the shifts
              </h2>
              <p className="lede" style={{ marginBottom: '1rem' }}>
                The company began as a two-person overnight desk for a private-hire operator in the north of England
                who kept losing account bookings between 11pm and 6am. We took that window, wrote down every decision
                the owner would have made, and followed it.
              </p>
              <p className="lede" style={{ marginBottom: '1rem' }}>
                That runbook is still how we onboard every client. It is why a factoring desk, a dispatch desk and an
                Amazon account can sit on the same floor without any of them being run generically — the detail lives
                in the document, not in one person&rsquo;s head.
              </p>
              <p className="lede">
                Today the floor runs three shift patterns to cover UK and US business hours, with a development and
                growth team working Pakistan hours alongside them.
              </p>
              <Link href="/team" className="btn" style={{ marginTop: '1.6rem' }}>Meet the team <ArrowRight /></Link>
            </div>

            <div className="reveal" style={{ display: 'grid', gap: '1.2rem' }}>
              <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <Image src="/images/boardroom.jpg" alt="An account review meeting at East Tech Hub" width={1000} height={668} sizes="(max-width: 1000px) 100vw, 50vw" />
              </div>
              <div className="panel glass">
                <span className="eyebrow" style={{ marginBottom: '1rem' }}>How we work</span>
                <ul className="checks" style={{ marginBottom: 0 }}>
                  {principles.map(([bold, rest]) => (
                    <li key={bold}><Check /><span><strong style={{ color: 'var(--ink)' }}>{bold}</strong> {rest}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Coverage</span>
            <h2>Where we work</h2>
            <p>Clients sit across six countries and three broad timezones. Our shift patterns are built around theirs.</p>
          </div>
          <div className="ind-grid">
            {coverage.map((c) => (
              <div className="ind reveal" key={c.title}>
                <span className="kicker">{c.region}</span>
                <b>{c.title}</b>
                <span>{c.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Onboarding</span>
            <h2>From first call to live desk in about two weeks</h2>
          </div>
          <div className="steps reveal">
            {onboarding.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <div><h4>{s.title}</h4><p>{s.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-tight"><TrustStrip /></div>
      <div style={{ paddingBottom: '1rem' }}>
        <Cta title="Meet the people who would run your account"
             body="Seven leads across four departments. You will speak to the one who owns your desk before you sign anything."
             primary={{ href: '/team', label: 'See the team' }}
             secondary={{ href: '/schedule', label: 'Schedule a call' }} />
      </div>
    </>
  );
}
