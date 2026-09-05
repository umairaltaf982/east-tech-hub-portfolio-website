import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { team } from '@/lib/team';
import { ChevronRight } from '@/components/Icons';
import { Cta } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'Our team',
  description: 'Seven leads across four departments at East Tech Hub — the people who would run your desk.',
};

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our team</span>
          <h1>Seven leads, four departments</h1>
          <p className="lede">
            Select anyone to see what they own, which desks they cover and how to reach them.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="roster">
            {team.map((m) => (
              <Link href={`/team/${m.slug}`} className="pcard-person reveal" key={m.slug}>
                <div className="photo" style={{ background: `linear-gradient(140deg, ${m.gradient[0]}, ${m.gradient[1]})` }}>
                  {m.photo
                    ? <Image src={m.photo} alt={m.name} width={520} height={650} sizes="(max-width: 1080px) 50vw, 25vw" />
                    : <span className="initials" aria-hidden="true">{m.initials}</span>}
                </div>
                <div className="pb">
                  <h3>{m.name}</h3>
                  <span className="role">{m.role}</span>
                  <p className="blurb">{m.short}</p>
                  <span className="link-arrow">View profile <ChevronRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: '1rem' }}>
        <Cta title="Speak to the lead who would run your desk"
             body="Not a salesperson. On a first call you talk to the person who would actually own your account."
             secondary={{ href: '/careers', label: 'Join the team' }} />
      </div>
    </>
  );
}
