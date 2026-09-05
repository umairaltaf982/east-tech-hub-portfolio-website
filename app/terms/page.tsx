import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Terms of service', robots: { index: false, follow: true } };

export default function TermsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Terms of service</h1>
        <div className="article" style={{ marginTop: '2rem', marginInline: 0 }}>
          <p><strong>This is a starting template. Have it reviewed before you rely on it.</strong></p>

          <h3>About this website</h3>
          <p>This website is operated by {site.name}, {site.address.line1}, {site.address.line2}. It describes services
            we offer and is not itself an offer to contract.</p>

          <h3>Content accuracy</h3>
          <p>We keep the information here current, but service descriptions, figures and availability can change.
            Nothing on this site forms part of a contract unless it is repeated in a signed agreement.</p>

          <h3>Client outcomes</h3>
          <p>Case-study figures are as reported by the clients concerned and are specific to their circumstances. They
            are not a guarantee of the results any other business will achieve.</p>

          <h3>Third-party names</h3>
          <p>Product and platform names such as RTS Financial, Cordic, Autocab, Cab9, iCabbi, Amazon, Google and Meta
            are the trademarks of their respective owners and are used here only to describe the systems we work in.</p>

          <h3>Intellectual property</h3>
          <p>The design, text and marks on this site belong to {site.name} unless stated otherwise.</p>

          <h3>Contact</h3>
          <p>Questions about these terms: <a href={`mailto:${site.email}`} style={{ color: 'var(--azure)' }}>{site.email}</a></p>
        </div>
      </div>
    </section>
  );
}
