import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: 'Home' },
  { name: 'About Us', href: 'About' },
  {
    name: 'Services',
    href: 'Services',
    children: [
      { name: 'All Services',           href: 'Services', category: null },
      { name: 'Semi Permanent Makeup',  href: 'Services', category: 'pmu' },
      { name: 'Lamination & Lashes',    href: 'Services', category: 'lamination' },
      { name: 'Paramedical Treatments', href: 'Services', category: 'paramedical' },
      { name: 'Facials',                href: 'Services', category: 'facials' },
      { name: 'Nails',                  href: 'Services', category: 'nails' },
    ],
  },
  { name: 'Team', href: 'Team' },
  { name: 'Pricing', href: 'Pricing' },
  { name: 'Contact', href: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');

        /* ── Top bar ─────────────────────────────── */
        .hdr-topbar {
          background: black;
          border-bottom: 1px solid rgba(183,110,121,0.2);
          font-family: 'Jost', sans-serif;
        }
        .hdr-topbar-txt { color: rgba(232,213,183,0.65); font-size: 11px; letter-spacing: 0.08em; }
        .hdr-topbar-lnk {
          color: rgba(232,213,183,0.55);
          text-decoration: none;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .hdr-topbar-lnk:hover { color: #e8d5b7; }

        /* ── Main header — ALWAYS solid, never transparent ── */
        .hdr-main {
          background: black !important;   /* warm ivory, always visible */
          font-family: 'Jost', sans-serif;
          transition: box-shadow 0.35s, border-color 0.35s;
          border-bottom: 1px solid rgba(183,110,121,0.12);
        }
        .hdr-main.scrolled {
          box-shadow: 0 4px 32px rgba(61,43,43,0.09);
          border-bottom-color: rgba(183,110,121,0.22);
        }

        /* ── Nav links ───────────────────────────── */
        .nav-item {
          position: relative;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color:#ffffff;          /* deep plum — always visible on light bg */
          text-decoration: none;
          padding: 8px 14px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.22s;
          white-space: nowrap;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 14px; right: 14px;
          height: 1px;
          background:gold;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-item:hover { color: gold; }
        .nav-item:hover::after { transform: scaleX(1); }

        /* ── Dropdown ────────────────────────────── */
        .drop-panel {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 224px;
          background: #fff8f4;
          border: 1px solid rgba(183,110,121,0.18);
          border-radius: 3px;
          box-shadow: 0 16px 48px rgba(61,43,43,0.11), 0 3px 10px rgba(61,43,43,0.06);
          overflow: hidden;
          z-index: 100;
        }
        .drop-panel::before {
          content: '';
          display: block;
          height: 2px;
          background: linear-gradient(90deg, gold, #e8d5b7, gold);
        }
        .drop-lnk {
          display: block;
          padding: 11px 20px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8b6f6f;
          text-decoration: none;
          border-bottom: 1px solid rgba(183,110,121,0.07);
          transition: all 0.2s;
        }
        .drop-lnk:last-child { border-bottom: none; }
        .drop-lnk:hover {
          background: rgba(183,110,121,0.07);
          color: gold;
          padding-left: 26px;
        }

        /* ── Phone ───────────────────────────────── */
        .phone-wrap { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .phone-ring {
          width: 38px; height: 38px; border-radius: 50%;
          border: 1.5px solid rgba(183,110,121,0.3);
          background: rgba(183,110,121,0.08);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.25s;
          flex-shrink: 0;
        }
        .phone-wrap:hover .phone-ring { background: gold; border-color: gold; }
        .phone-wrap:hover .phone-ring svg { color: #fff !important; }

        /* ── CTA button ──────────────────────────── */
        .cta-btn {
          background: gold;
          color:black;
          font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          padding: 11px 24px;
          border: none; cursor: pointer;
          border-radius: 2px;
          position: relative; overflow: hidden;
          transition: box-shadow 0.3s;
          white-space: nowrap;
        }
        .cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: gold;
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
        }
        .cta-btn > span { position: relative; z-index: 1; }
        .cta-btn:hover::before { transform: translateX(0); }
        .cta-btn:hover { box-shadow: 0 8px 28px rgba(183,110,121,0.35); }

        /* ── Mobile menu ─────────────────────────── */
        .mob-menu { background: #fff8f4; border-top: 1px solid rgba(183,110,121,0.14); }
        .mob-lnk {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 16px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: #3d2b2b; text-decoration: none;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .mob-lnk:hover { background: rgba(183,110,121,0.07); color: gold; }
        .mob-sub {
          display: block;
          padding: 9px 16px 9px 28px;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #8b6f6f; text-decoration: none;
          border-radius: 5px;
          transition: all 0.2s;
        }
        .mob-sub:hover { color: gold; background: rgba(183,110,121,0.06); }
      `}</style>

      {/* Top bar */}
      <div className="hdr-topbar hidden lg:block py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <div className="flex items-center gap-6 hdr-topbar-txt">
            <span>📍 Brow Crush Studio, Hyderabad</span>
            <span>🕐 Mon–Sat: 10:00 am – 7:00 pm</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/browcrush.studio" target="_blank" rel="noopener noreferrer" className="hdr-topbar-lnk">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61550614566932" target="_blank" rel="noopener noreferrer" className="hdr-topbar-lnk">Facebook</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`hdr-main sticky top-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[70px] gap-6">

            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex-shrink-0">
              <img src="./logo.png" alt="Brow Crush" className="h-9 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center flex-1 justify-center">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={createPageUrl(item.href)} className="nav-item">
                    {item.name}
                    {item.children && (
                      <ChevronDown style={{ width: 13, height: 13, color: 'gold', opacity: 0.7 }} />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.16 }}
                        className="drop-panel"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={`${createPageUrl(child.href)}${child.category ? `?category=${child.category}` : ''}`}
                            className="drop-lnk"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right: phone + CTA */}
            <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
              <a href="tel:7331165674" className="phone-wrap">
                <div className="phone-ring">
                  <Phone style={{ width: 15, height: 15, color: '#ffffff' }} />
                </div>
                <div>
                  <p style={{ fontSize: 9, letterSpacing: '0.1em', color: '#ffffff', textTransform: 'uppercase', marginBottom: 2 }}>Call Us</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', fontFamily: 'Jost,sans-serif' }}>73 31 165 674</p>
                </div>
              </a>

              <Link to={createPageUrl('Appointment')}>
                <button className="cta-btn"><span>Appointment</span></button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen
                ? <X style={{ width: 22, height: 22, color: 'white' }} />
                : <Menu style={{ width: 22, height: 22, color: 'white' }} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mob-menu lg:hidden overflow-hidden"
            >
              <div style={{ height: 2, background: 'linear-gradient(90deg,gold,#e8d5b7,gold)' }} />
              <nav className="px-4 py-5 space-y-0.5">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link to={createPageUrl(item.href)} className="mob-lnk" onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                      {item.children && <ChevronDown style={{ width: 14, height: 14, color: 'gold', opacity: 0.6 }} />}
                    </Link>
                    {item.children && (
                      <div className="mb-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={`${createPageUrl(child.href)}${child.category ? `?category=${child.category}` : ''}`}
                            className="mob-sub"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div style={{ borderTop: '1px solid rgba(183,110,121,0.15)', paddingTop: 16, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href="tel:7331165674" className="phone-wrap" style={{ paddingLeft: 4 }}>
                    <Phone style={{ width: 15, height: 15, color: 'gold' }} />
                    <span style={{ fontWeight: 600, color: '#3d2b2b', fontSize: 14, fontFamily: 'Jost,sans-serif' }}>73 31 165 674</span>
                  </a>
                  <Link to={createPageUrl('Appointment')} onClick={() => setMobileMenuOpen(false)}>
                    <button className="cta-btn" style={{ width: '100%' }}><span>Book Appointment</span></button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}