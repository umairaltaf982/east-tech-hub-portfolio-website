import type { Metadata } from 'next';
import { site } from '@/lib/site';
import EnquiryForm from '@/components/EnquiryForm';
import { Bolt, Shield, Users, WhatsApp } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Schedule a call',
  description: 'Book a thirty-minute call with the East Tech Hub team lead for the department you need. No deck, no pressure.',
};

export default function SchedulePage() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Schedule a call</span>
        <h1>Thirty minutes, no deck</h1>
        <p className="lede">
          Pick the window that suits your timezone. We will confirm by email within a few hours and send a calendar
          invite with a dial-in — or call your mobile if you prefer.
        </p>

        <div className="form-grid" style={{ marginTop: 'clamp(2rem,1.4rem + 2vw,3rem)' }}>
          <EnquiryForm variant="schedule" />

          <div className="rail-cards">
            <div className="rail-card glass">
              <Bolt />
              <div>
                <b>What happens on the call</b>
                <span>You describe the hours or workload causing problems. We tell you what a desk would cover, roughly what it costs, and whether it is worth doing.</span>
              </div>
            </div>
            <div className="rail-card glass">
              <Shield />
              <div>
                <b>No deck, no pressure</b>
                <span>We do not present. If it is not a fit we will say so on the call and point you somewhere better.</span>
              </div>
            </div>
            <div className="rail-card glass">
              <Users />
              <div>
                <b>Who you will speak to</b>
                <span>The team lead for the department you select, plus Abid Naeem for anything commercial.</span>
              </div>
            </div>
            <div className="rail-card glass">
              <WhatsApp />
              <div>
                <b>Prefer to skip the form?</b>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {site.whatsappDisplay}</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
