import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy policy', robots: { index: false, follow: true } };

export default function PrivacyPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Privacy policy</h1>
        <div className="article" style={{ marginTop: '2rem', marginInline: 0 }}>
          <p><strong>This is a starting template. Have it reviewed before you rely on it.</strong> It covers the basics
            for a marketing site that collects enquiries from visitors in the UK, EU and North America.</p>

          <h3>What we collect</h3>
          <p>When you send an enquiry or request a call we collect the name, company, email address, phone number,
            department and message you choose to give us. We do not collect payment details or identity documents
            through this website.</p>

          <h3>Why we collect it</h3>
          <p>To reply to your enquiry, to arrange a call, and to keep a record of the conversation. Our lawful basis is
            legitimate interest in responding to a business enquiry you initiated.</p>

          <h3>How long we keep it</h3>
          <p>Enquiries are kept for twenty-four months unless you ask us to delete them sooner. Job applications are
            kept for six months.</p>

          <h3>Who we share it with</h3>
          <p>Nobody, other than the email provider that carries the message and the hosting provider that serves this
            site. We do not sell data and we do not share it with advertisers.</p>

          <h3>Analytics and cookies</h3>
          <p>This website sets no advertising or tracking cookies. If analytics are added later, this page will name
            the provider and a consent banner will be shown before any non-essential cookie is set.</p>

          <h3>Your rights</h3>
          <p>You can ask us for a copy of what we hold, ask us to correct it, or ask us to delete it. Email{' '}
            <a href={`mailto:${site.email}`} style={{ color: 'var(--azure)' }}>{site.email}</a> and we will respond
            within thirty days.</p>

          <h3>Contact</h3>
          <p>{site.name}, {site.address.line1}, {site.address.line2}. {site.email} · {site.phone}</p>
        </div>
      </div>
    </section>
  );
}
