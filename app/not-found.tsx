import Link from 'next/link';
import { services } from '@/lib/services';
import { ArrowRight } from '@/components/Icons';

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>That page is not on the floor.</h1>
        <p className="lede">
          The link may be out of date. Here is where most people are heading.
        </p>
        <div className="hero-actions" style={{ marginTop: '1.8rem' }}>
          <Link href="/" className="btn">Back to home <ArrowRight /></Link>
          <Link href="/contact" className="btn btn-outline">Contact us</Link>
        </div>

        <div className="cards-3" style={{ marginTop: 'clamp(2rem,1.4rem + 2vw,3rem)' }}>
          {services.map((s) => (
            <Link href={`/services/${s.slug}`} className="ind" key={s.slug}>
              <b>{s.name}</b>
              <span>{s.short}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
