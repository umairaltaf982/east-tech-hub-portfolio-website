import type { Metadata } from 'next';
import { site, deskHours } from '@/lib/site';
import EnquiryForm from '@/components/EnquiryForm';
import { Clock, Mail, Phone, Pin } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Talk to East Tech Hub about dispatch, factoring, web development or e-commerce operations. We reply within one business day.',
};

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Contact</span>
        <h1>Tell us what needs covering</h1>
        <p className="lede">Enquiries reach a person, not a queue. We reply within one business day — usually the same afternoon.</p>

        <div className="form-grid" style={{ marginTop: 'clamp(2rem,1.4rem + 2vw,3rem)' }}>
          <EnquiryForm variant="contact" />

          <div className="rail-cards">
            <div className="rail-card glass">
              <Phone />
              <div>
                <b>Phone &amp; WhatsApp</b>
                <a href={site.phoneHref}>{site.phone}</a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
              </div>
            </div>
            <div className="rail-card glass">
              <Mail />
              <div>
                <b>Email</b>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <span>Replies within one business day</span>
              </div>
            </div>
            <div className="rail-card glass">
              <Pin />
              <div>
                <b>Operations floor</b>
                <span>{site.address.line1}<br />{site.address.line2}</span>
              </div>
            </div>
            <div className="rail-card glass">
              <Clock />
              <div style={{ width: '100%' }}>
                <b>Desk hours</b>
                <table className="hours">
                  <tbody>
                    {deskHours.map((h) => (
                      <tr key={h.desk}><td>{h.desk}</td><td>{h.hours}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
