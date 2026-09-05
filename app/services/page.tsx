import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/services';
import { industries } from '@/lib/content';
import { ArrowRight, Check } from '@/components/Icons';
import { Cta } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Four staffed departments: freight factoring for US carriers, 24/7 UK taxi dispatch, web development and SEO, and Amazon e-commerce operations.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Four departments</h1>
          <p className="lede">
            Each one is a staffed desk with its own lead, tooling and shift pattern. Pick the one that matches the
            problem you are trying to hand over.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="cards-2">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} className="dcard reveal" key={s.slug}>
                <div className="dcard-media">
                  <Image src={s.image} alt="" width={1000} height={563} sizes="(max-width: 1000px) 100vw, 50vw" />
                  <span className="chip">{s.region.split(' · ')[0]}</span>
                </div>
                <div className="dcard-body">
                  <h3>{s.name}</h3>
                  <p>{s.tagline}</p>
                  <ul className="checks">
                    {s.highlights.map((h) => <li key={h}><Check />{h}</li>)}
                  </ul>
                  <span className="link-arrow">Open department <ArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Industries</span>
            <h2>Where our desks already know the work</h2>
          </div>
          <div className="ind-grid">
            {industries.map((i) => (
              <div className="ind reveal" key={i.name}><b>{i.name}</b><span>{i.body}</span></div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: '1rem' }}>
        <Cta title="Not sure which desk you need?"
             body="Describe the hours or the workload that is causing problems and we will point you at the right department — or tell you it is not one of ours."
             secondary={{ href: '/contact', label: 'Send an enquiry' }} />
      </div>
    </>
  );
}
