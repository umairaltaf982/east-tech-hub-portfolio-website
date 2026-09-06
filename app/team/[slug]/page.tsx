import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMember, team } from '@/lib/team';
import { site } from '@/lib/site';
import { ArrowLeft, Check } from '@/components/Icons';
import { Cta } from '@/components/Sections';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = getMember(slug);
  if (!m) return {};
  return { title: `${m.name} — ${m.role}`, description: m.short };
}

export default async function MemberPage({ params }: Props) {
  const { slug } = await params;
  const m = getMember(slug);
  if (!m) notFound();
  const first = m.name.split(' ')[0];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/team" className="link-arrow" style={{ color: 'var(--soft)', marginBottom: '1.4rem' }}>
            <ArrowLeft /> All of the team
          </Link>

          <div className="profile" style={{ marginTop: '1.4rem' }}>
            <div className="profile-card glass">
              <div className="photo" style={{ background: `linear-gradient(140deg, ${m.gradient[0]}, ${m.gradient[1]})` }}>
                {m.photo
                  ? <Image src={m.photo} alt={m.name} width={520} height={650} sizes="340px" />
                  : <span className="initials" style={{ fontSize: '3rem' }} aria-hidden="true">{m.initials}</span>}
              </div>
              <div className="pb">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '.35rem' }}>{m.name}</h2>
                <span className="role">{m.role}</span>
                <dl className="kv">
                  <div className="row"><dt>Department</dt><dd>{m.department}</dd></div>
                  <div className="row"><dt>With us since</dt><dd>{m.since}</dd></div>
                  <div className="row"><dt>Working hours</dt><dd>{m.hours}</dd></div>
                  {m.facts.map((f) => (
                    <div className="row" key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
                  ))}
                </dl>
                <a className="btn btn-outline btn-block" style={{ marginTop: '1.3rem' }}
                   href={`mailto:${site.email}?subject=${encodeURIComponent(`For the attention of ${m.name}`)}`}>
                  Email {first}
                </a>
              </div>
            </div>

            <div>
              <span className="eyebrow">Profile</span>
              {m.bio.map((p) => (
                <p className="lede" style={{ marginTop: '1rem' }} key={p.slice(0, 24)}>{p}</p>
              ))}

              <h3 style={{ fontSize: '1.2rem', margin: '2rem 0 1rem' }}>What {first} owns</h3>
              <ul className="checks">
                {m.owns.map((o) => <li key={o}><Check />{o}</li>)}
              </ul>

            </div>
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: '1rem' }}>
        <Cta title={`Work with ${first}`}
             body="On a first call you speak to the person who would own your account, not a salesperson."
             secondary={{ href: '/team', label: 'Back to the team' }} />
      </div>
    </>
  );
}
