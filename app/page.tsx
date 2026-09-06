import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/services';
import { cases, differentiators, industries, onboarding, posts } from '@/lib/content';
import { stats } from '@/lib/site';
import { ArrowRight, Check } from '@/components/Icons';
import { CaseCard, Cta, StatBand, TestimonialMarquee, TrustStrip } from '@/components/Sections';

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-media">
          <Image
            src="/images/hero-team.jpg"
            alt="The East Tech Hub operations floor in Lahore"
            fill priority sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-inner">
          <div className="container">
            <div className="hero-rule" />
            <h1>Dispatch desks, marketplace operations and software development, run by our team.</h1>
            <p>
              We build web applications, mobile apps and custom software, and run the dispatch desks,
              client desks and marketplace operations behind businesses across the United Kingdom,
              United States, Canada, Ireland and the Gulf — staffed to your clock, working inside
              your systems.
            </p>
            <div className="hero-actions">
              <Link href="/schedule" className="btn btn-white">Talk to our team <ArrowRight /></Link>
              <Link href="/services" className="btn btn-ghost-light">Explore services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STAT RAIL ---------- */}
      <div className="container rail">
        <div className="rail-inner glass">
          {stats.map((s) => (
            <div className="rail-item" key={s.label}>
              <b className="tnum">{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-tight"><TrustStrip /></div>

      {/* ---------- DEPARTMENTS ---------- */}
      <section className="section" id="departments">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Departments</span>
            <h2>Four departments, each led by a person you will actually meet</h2>
            <p>
              Every department runs to a written runbook you sign off before anything goes live, has its own
              shift pattern, and reports on the same numbers every Monday.
            </p>
          </div>

          <div className="cards-2">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} className="dcard reveal" key={s.slug}>
                <div className="dcard-media">
                  <Image src={s.image} alt="" width={1000} height={563} sizes="(max-width: 1000px) 100vw, 50vw" />
                  <span className="chip">{s.region.split(' · ')[0]}</span>
                </div>
                <div className="dcard-body">
                  <h3>{s.name}</h3>
                  <p>{s.intro.split('. ').slice(0, 2).join('. ')}.</p>
                  <ul className="checks">
                    {s.highlights.map((h) => (
                      <li key={h}><Check />{h}</li>
                    ))}
                  </ul>
                  <span className="link-arrow">Learn more <ArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatBand />

      {/* ---------- WHY US ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why operators stay</span>
            <h2>Outsourcing usually fails on handover. We build the handover first.</h2>
          </div>
          <div className="ind-grid">
            {differentiators.map((d) => (
              <div className="ind reveal" key={d.title}>
                <b>{d.title}</b>
                <span>{d.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CASE STUDIES ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Selected work</span>
            <h2>Outcomes our clients measured</h2>
            <p>
              Client names are withheld under the confidentiality terms most operators ask for.
              Sectors, geographies and figures are as reported by the client.
            </p>
          </div>
          <div className="cards-3">
            {cases.map((c) => <CaseCard c={c} key={c.title} />)}
          </div>
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Industries</span>
            <h2>Where our desks already know the work</h2>
            <p>Sector knowledge is what stops a remote desk sounding remote.</p>
          </div>
          <div className="ind-grid">
            {industries.map((i) => (
              <div className="ind reveal" key={i.name}>
                <b>{i.name}</b>
                <span>{i.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ONBOARDING ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Onboarding</span>
            <h2>From first call to live desk in about two weeks</h2>
            <p>The same five stages whichever department you start with. Nothing goes live until you have signed off the runbook.</p>
          </div>
          <div className="steps reveal">
            {onboarding.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Client voices</span>
            <h2>What operators say after the first quarter</h2>
          </div>
          <TestimonialMarquee />
        </div>
      </section>

      {/* ---------- INSIGHTS ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Insights</span>
            <h2>Notes from the desks</h2>
            <p>Written by the people running the shifts, not by a marketing team.</p>
          </div>
          <div className="cards-3">
            {posts.slice(0, 3).map((p) => (
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
        <Cta secondary={{ href: '/contact', label: 'Send an enquiry' }} />
      </div>
    </>
  );
}
