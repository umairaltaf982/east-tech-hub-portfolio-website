import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { Facebook, Instagram, LinkedIn } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="fgrid">
          <div>
            <Image src="/images/logo-light.png" alt="East Tech Hub" width={284} height={200} className="flogo" style={{ height: 34, width: 'auto' }} />
            <p>
              A software development and operations partner headquartered in Lahore. We build web, mobile and
              custom software, and run the dispatch and e-commerce desks behind clients in six countries.
            </p>
            <div className="socials">
              <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
            </div>
          </div>

          <div>
            <h4>Departments</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/team">Our team</Link></li>
              <li><Link href="/blog">Insights</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp the desk</a></li>
              <li><span>{site.address.line1}<br />{site.address.line2}</span></li>
            </ul>
            <Link href="/schedule" className="btn" style={{ marginTop: '1.1rem' }}>Schedule a call</Link>
          </div>
        </div>

        <div className="fbot">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy policy</Link> · <Link href="/terms">Terms of service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
