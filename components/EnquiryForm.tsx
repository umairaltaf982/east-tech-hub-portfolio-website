'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { ArrowRight } from './Icons';

type Variant = 'contact' | 'schedule';

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '';

const departments = [...services.map((s) => s.name), 'Something else / not sure'];
const timezones = [
  'United Kingdom (GMT/BST)', 'US Eastern (EST/EDT)', 'US Central (CST/CDT)',
  'Ireland (IST)', 'Gulf (GST)', 'Pakistan (PKT)', 'Other',
];

export default function EnquiryForm({ variant }: { variant: Variant }) {
  const isSchedule = variant === 'schedule';
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = 'Please tell us your name.';
    if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'Please enter a valid email address.';
    if (!isSchedule && !data.message?.trim()) next.message = 'Let us know what you need covered.';
    setErrors(next);
    if (Object.keys(next).length) return;

    setBusy(true);
    const subject = isSchedule
      ? `Call request — ${data.department} (${data.slot}, ${data.timezone})`
      : `Website enquiry — ${data.department}`;

    const lines = [
      `Name: ${data.name}`,
      data.company ? `Company: ${data.company}` : '',
      `Email: ${data.email}`,
      data.phone ? `Phone / WhatsApp: ${data.phone}` : '',
      `Department: ${data.department}`,
      isSchedule ? `Timezone: ${data.timezone}` : '',
      isSchedule ? `Preferred window: ${data.slot}` : '',
      '',
      data.message ? `Message:\n${data.message}` : '',
    ].filter(Boolean);
    const body = lines.join('\n');

    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ subject, ...data }),
        });
      } catch {
        /* fall through to mail client */
      }
    } else {
      window.location.href =
        `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    setBusy(false);
    setSent(true);
    form.reset();
  }

  const err = (k: string) => (errors[k] ? ' err' : '');

  return (
    <form className="panel glass" onSubmit={onSubmit} noValidate>
      {sent && (
        <p className="sent" role="status">
          <strong>Thank you — that is on its way.</strong><br />
          {endpoint
            ? 'We reply within one business day. If it is urgent, WhatsApp is faster.'
            : 'Your email app should have opened with the details filled in. Send it and we will reply within one business day.'}
        </p>
      )}

      <div className="row-2">
        <div className={`field${err('name')}`}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Jane Whitfield" autoComplete="name" />
          {errors.name && <p className="msg">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" placeholder="Whitfield Cars Ltd" autoComplete="organization" />
        </div>
      </div>

      <div className="row-2">
        <div className={`field${err('email')}`}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="jane@example.com" autoComplete="email" />
          {errors.email && <p className="msg">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone or WhatsApp</label>
          <input id="phone" name="phone" type="tel" placeholder="+44 7700 900123" autoComplete="tel" />
        </div>
      </div>

      <div className={isSchedule ? 'row-2' : ''}>
        <div className="field">
          <label htmlFor="department">{isSchedule ? 'Department' : 'Which department'}</label>
          <select id="department" name="department" defaultValue={departments[1]}>
            {departments.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
        {isSchedule && (
          <div className="field">
            <label htmlFor="timezone">Your timezone</label>
            <select id="timezone" name="timezone" defaultValue={timezones[0]}>
              {timezones.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        )}
      </div>

      {isSchedule && (
        <div className="field">
          <label>Preferred window</label>
          <div className="slots">
            {[
              { v: 'Morning', t: '09:00–12:00' },
              { v: 'Afternoon', t: '12:00–17:00' },
              { v: 'Evening', t: '17:00–21:00' },
            ].map((s, i) => (
              <label className="slot" key={s.v}>
                <input type="radio" name="slot" value={s.v} defaultChecked={i === 0} />
                <span><b>{s.v}</b><em>{s.t}</em></span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className={`field${err('message')}`}>
        <label htmlFor="message">{isSchedule ? 'Anything we should read first?' : 'What do you need covered?'}</label>
        <textarea
          id="message"
          name="message"
          placeholder={
            isSchedule
              ? 'Roughly 400 bookings a week, Cordic, currently covering nights in-house with two staff.'
              : 'We lose account bookings between 11pm and 6am and want to trial an overnight desk for one month.'
          }
        />
        {errors.message && <p className="msg">{errors.message}</p>}
      </div>

      <button className="btn" type="submit" disabled={busy}>
        {busy ? 'Sending…' : isSchedule ? 'Request this slot' : 'Send enquiry'} <ArrowRight />
      </button>

      <p className="formnote">
        {endpoint
          ? 'Submissions are delivered to our team inbox.'
          : <>This form opens your email app with the details filled in, so it works without a server. To deliver submissions
            automatically instead, add a form endpoint to <code>NEXT_PUBLIC_FORM_ENDPOINT</code> — see the README.</>}
      </p>
    </form>
  );
}
