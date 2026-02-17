import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: 'Home' },
  { name: 'About Us', href: 'About' },
  {
    name: 'Services',
    href: 'Services',
    children: [
      { name: 'All Services',            href: 'Services', category: null },
      { name: 'Semi Permanent Makeup',   href: 'Services', category: 'pmu' },
      { name: 'Lamination & Lashes',     href: 'Services', category: 'lamination' },
      { name: 'Paramedical Treatments',  href: 'Services', category: 'paramedical' },
      { name: 'Facials',                 href: 'Services', category: 'facials' },
      { name: 'Nails',                   href: 'Services', category: 'nails' },
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
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#1e3a5f] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/80">
            <span>📍 Brow Crush Studio, Bengaluru</span>
            <span>🕐 Mon–Sat: 10:00am – 7:00pm</span>
          </div>
          <div className="flex items-center gap-6 text-white/80">
            <a href="https://instagram.com/browcrush.studio" target="_blank" rel="noopener noreferrer" className="hover:text-[#f97316] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#f97316] transition-colors">Facebook</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-xl' : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">

            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex-shrink-0">
              <img src="./logo.jpeg" alt="Brow Crush" className="h-14 w-auto" />
            </Link>

            {/* Desktop Navigation — centered */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={createPageUrl(item.href)}
                    className="flex items-center gap-1 px-4 py-2 text-[#1a1a1a] hover:text-[#f97316] font-medium transition-colors text-sm relative group"
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#f97316] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={`${createPageUrl(child.href)}${child.category ? `?category=${child.category}` : ''}`}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#fef5ed] hover:text-[#f97316] transition-colors border-b border-gray-50 last:border-0"
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

            {/* Right Side: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
              <a href="tel:7331165674" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#fef5ed] border border-[#f97316]/30 flex items-center justify-center group-hover:bg-[#f97316] transition-colors">
                  <Phone className="w-4 h-4 text-[#f97316] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Call Us</p>
                  <p className="text-sm font-bold text-[#1e3a5f]">73 31 165 674</p>
                </div>
              </a>

              <Link to={createPageUrl('Appointment')}>
                <button className="bg-[#f97316] hover:bg-[#e8630a] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-orange-200 tracking-wide">
                  APPOINTMENT
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1e3a5f]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1e3a5f]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <nav className="px-4 py-6 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={createPageUrl(item.href)}
                      className="flex items-center justify-between px-4 py-3 text-[#1a1a1a] hover:text-[#f97316] hover:bg-[#fef5ed] font-medium rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {item.children && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={`${createPageUrl(child.href)}${child.category ? `?category=${child.category}` : ''}`}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#f97316] hover:bg-[#fef5ed] rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <a href="tel:7331165674" className="flex items-center gap-3 px-4 py-2">
                    <Phone className="w-4 h-4 text-[#f97316]" />
                    <span className="font-semibold text-[#1e3a5f]">73 31 165 674</span>
                  </a>
                  <Link to={createPageUrl('Appointment')} onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full bg-[#f97316] text-white py-3 rounded-full font-semibold tracking-wide">
                      BOOK APPOINTMENT
                    </button>
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