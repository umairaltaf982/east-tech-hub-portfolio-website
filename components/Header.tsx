'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { services } from '@/lib/services';
import { ChevronDown, serviceIcon } from './Icons';

const links = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDropOpen(false); }, [pathname]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setDropOpen(false); setOpen(false); } };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey); };
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="East Tech Hub — home">
            <Image src="/images/logo-dark.png" alt="East Tech Hub" width={284} height={200} priority style={{ height: 32, width: 'auto' }} />
          </Link>

          <button
            className={`burger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
          >
            <span />
          </button>

          <nav className={`nav${open ? ' open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className={`dropdown${dropOpen ? ' open' : ''}`} ref={dropRef}>
              <button
                className={`navbtn${isActive('/services') ? ' active' : ''}`}
                aria-expanded={dropOpen}
                onClick={(e) => { e.stopPropagation(); setDropOpen((v) => !v); }}
              >
                Services <ChevronDown className="chev" />
              </button>
              <div className="dropmenu">
                {services.map((s) => {
                  const Icon = serviceIcon[s.icon];
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`}>
                      <span className="di"><Icon /></span>
                      <span>
                        <b>{s.name}</b>
                        <span>{s.short}</span>
                      </span>
                    </Link>
                  );
                })}
                <Link href="/services">
                  <span className="di"><ChevronDown style={{ transform: 'rotate(-90deg)' }} /></span>
                  <span><b>All departments</b><span>Compare the four desks side by side</span></span>
                </Link>
              </div>
            </div>

            {links.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? 'active' : undefined}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className={isActive('/contact') ? 'active' : undefined}>Contact</Link>
            <Link href="/schedule" className="btn" style={{ marginLeft: '.6rem' }}>Schedule a call</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
