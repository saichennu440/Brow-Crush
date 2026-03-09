import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, Instagram, Facebook, Twitter, ArrowUpRight, YoutubeIcon } from 'lucide-react';

const thumbnails = [
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&h=200&fit=crop',
];

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
];

const socialLinks = [
  { label: 'INSTAGRAM', href: 'https://instagram.com/browcrush.studio', Icon: Instagram },
  { label: 'FACEBOOK', href: 'https://www.facebook.com/profile.php?id=61550614566932#', Icon: Facebook },
  { label: 'YOUTUBE', href: 'https://youtu.be/xzynvvHQqpo?si=MTEXRKw_STFgd_L-', Icon: YoutubeIcon },
];

const goldGradient = 'linear-gradient(135deg, #f5c842 0%, #d4a017 40%, #f5c842 70%, #b8860b 100%)';
const goldGradientCSS = 'linear-gradient(135deg, #f5c842 0%, #d4a017 40%, #f5c842 70%, #b8860b 100%)';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: '#080808' }}
    >
      <style>{`
        .hero-gold-text {
          background: ${goldGradientCSS};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-badge-label {
          background: ${goldGradientCSS};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          letter-spacing: 0.12em;
          font-size: 12px;
          text-transform: uppercase;
        }
        .social-link-vertical {
          writing-mode: vertical-rl;
          letter-spacing: 0.15em;
          font-size: 10px;
          font-weight: 600;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s;
        }
        .social-link-vertical:hover {
          background: ${goldGradientCSS};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lets-talk-link {
          writing-mode: vertical-rl;
          letter-spacing: 0.2em;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          background: ${goldGradientCSS};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-cta-primary {
          background: ${goldGradientCSS};
          color: #0a0a0a;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.06em;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
        }
        .hero-cta-primary:hover {
          box-shadow: 0 0 30px rgba(212,160,23,0.5);
          transform: translateY(-1px);
        }
        .hero-cta-secondary {
          background: transparent;
          border: 1.5px solid rgba(212,160,23,0.35);
          color: rgba(255,255,255,0.75);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: all 0.25s;
        }
        .hero-cta-secondary:hover {
          border-color: #d4a017;
          background: rgba(212,160,23,0.08);
          color: #d4a017;
        }
        .thumbnail-card:hover img { transform: scale(1.07); }
        .star-gold { color: #d4a017; }
      `}</style>

      {/* Background: subtle gold radial glow top-right, dim navy bottom-left */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 'clamp(300px, 55vw, 900px)',
          height: 'clamp(300px, 55vw, 900px)',
          background: 'radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 pointer-events-none"
        style={{
          width: 'clamp(200px, 30vw, 500px)',
          height: 'clamp(200px, 30vw, 500px)',
          background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Fine gold grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,160,23,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,160,23,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Star decorations — gold tinted */}
      <div className="absolute top-28 right-1/3 pointer-events-none" style={{ color: 'rgba(212,160,23,0.3)' }}>
        <svg width="24" height="24" className="sm:w-8 sm:h-8 xl:w-10 xl:h-10" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/4 pointer-events-none" style={{ color: 'rgba(212,160,23,0.15)' }}>
        <svg width="16" height="16" className="sm:w-5 sm:h-5 xl:w-7 xl:h-7" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-1/2 pointer-events-none" style={{ color: 'rgba(212,160,23,0.12)' }}>
        <svg width="20" height="20" className="sm:w-6 sm:h-6 xl:w-8 xl:h-8" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>

      {/* Vertical Social Links */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-20">
        <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,160,23,0.3))' }} />
        {socialLinks.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link-vertical">
            {label}
          </a>
        ))}
        <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom, rgba(212,160,23,0.3), transparent)' }} />
      </div>

      {/* Vertical "LET'S TALK" */}
      <div className="hidden xl:flex fixed left-6 bottom-10 flex-col items-center gap-3 z-20">
        <a href="tel:7331165674" className="lets-talk-link">LET'S TALK</a>
        <div className="w-px h-10" style={{ background: goldGradientCSS }} />
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-[1920px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16 2xl:pt-20 pb-2 lg:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center min-h-[calc(100vh-160px)] sm:min-h-[calc(100vh-180px)] md:min-h-[calc(100vh-200px)]">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 flex flex-col justify-center order-2 md:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 w-fit mb-3 sm:mb-4 lg:mb-6"
              style={{ background: 'rgba(212,160,23,0.08)', border: '1px solid rgba(212,160,23,0.25)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: goldGradientCSS }} />
              <span className="hero-badge-label">Brow Crush Studio</span>
            </motion.div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.08] mb-3 sm:mb-4 lg:mb-6"
              style={{ color: 'rgba(255,255,255,0.92)' }}
            >
              Wake Up{' '}
              <span className="relative inline-block">
                <span className="hero-gold-text">Flawless</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9C50 3 100 3 198 9" stroke="#d4a017" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              Every Day
            </h1>

            {/* Subheadline */}
            <p
              className="text-sm sm:text-base md:text-base lg:text-lg 2xl:text-xl leading-relaxed mb-5 sm:mb-6 lg:mb-8 max-w-lg 2xl:max-w-xl pl-4 sm:pl-5"
              style={{
                color: 'rgba(255,255,255,0.5)',
                borderLeft: '3px solid',
                borderImage: `${goldGradientCSS} 1`,
              }}
            >
              Transform your beauty routine with expert semi-permanent makeup. Brows, lips, lashes & more — designed to enhance your natural features, last for months.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
              <Link to={createPageUrl('Appointment')}>
                <button className="hero-cta-primary px-6 sm:px-8 2xl:px-10 py-3 sm:py-4 2xl:py-5 rounded-full flex items-center gap-2 group">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to={createPageUrl('Services')}>
                <button className="hero-cta-secondary px-6 sm:px-8 2xl:px-10 py-3 sm:py-4 2xl:py-5 rounded-full">
                  Our Services
                </button>
              </Link>
            </div>

            {/* Avatar + Rating */}
            <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-9 h-9 sm:w-11 sm:h-11 2xl:w-14 2xl:h-14 rounded-full object-cover shadow-sm"
                      style={{ border: '2px solid #1a1a1a' }}
                    />
                  ))}
                </div>
                <Link
                  to={createPageUrl('Services')}
                  className="ml-3 w-9 h-9 sm:w-11 sm:h-11 2xl:w-14 2xl:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  style={{ background: goldGradientCSS }}
                >
                  <ArrowUpRight className="w-4 h-4 2xl:w-5 2xl:h-5" style={{ color: '#0a0a0a' }} />
                </Link>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 star-gold" style={{ fill: '#d4a017' }} />
                  ))}
                  <span className="ml-1 font-bold text-xs sm:text-sm 2xl:text-base" style={{ color: 'rgba(255,255,255,0.9)' }}>(5.0)</span>
                </div>
                <p className="text-xs 2xl:text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>1000+ Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex items-center justify-center order-1 md:order-2"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-full xl:max-w-lg 2xl:max-w-2xl mx-auto">

              {/* Background shape */}
              <div
                className="absolute inset-0 -rotate-3 scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,160,23,0.12) 0%, rgba(255,255,255,0.03) 100%)',
                  borderRadius: '30px 30px 80px 30px',
                }}
              />

              {/* Hero image */}
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=950&fit=crop"
                alt="Beauty Treatment"
                className="relative w-full shadow-2xl object-cover"
                style={{
                  borderRadius: '30px 30px 80px 30px',
                  maxHeight: 'clamp(260px, 55vw, 700px)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,160,23,0.1)',
                }}
              />

              {/* Rating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-5 md:-right-6 rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4"
                style={{
                  background: '#111111',
                  border: '1px solid rgba(212,160,23,0.25)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,160,23,0.12)' }}>
                    <Star className="w-4 h-4 sm:w-5 sm:h-5" style={{ fill: '#d4a017', color: '#d4a017' }} />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg leading-none" style={{ color: 'rgba(255,255,255,0.9)' }}>5.0</p>
                    <p className="text-[10px] sm:text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Google Rating</p>
                  </div>
                </div>
              </motion.div>

              {/* Spinning play button — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8 md:-left-10"
              >
                <a href="https://youtu.be/xzynvvHQqpo?si=9-UcIi_M0pF5XNzA" target="_blank" rel="noopener noreferrer">
                  <div className="relative" style={{ width: 'clamp(72px, 10vw, 112px)', height: 'clamp(72px, 10vw, 112px)' }}>
                    <svg className="w-full h-full animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 96 96">
                      <defs>
                        <path id="textCircle" d="M48,6 a42,42 0 1,1 -0.001,0" fill="none" />
                      </defs>
                      <text fill="rgba(212,160,23,0.8)" fontSize="8.5" fontWeight="600" letterSpacing="3">
                        <textPath href="#textCircle">BROW CRUSH • STUDIO • BROW</textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                        style={{ background: goldGradientCSS }}
                      >
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" style={{ fill: '#0a0a0a', color: '#0a0a0a' }} />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>

              {/* Experience badge — bottom right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-10 sm:bottom-14 md:bottom-16 -right-3 sm:-right-6 md:-right-8 rounded-xl sm:rounded-2xl px-3 sm:px-5 py-3 sm:py-4"
                style={{
                  background: '#111111',
                  border: '1px solid rgba(212,160,23,0.2)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                }}
              >
                <p className="text-2xl sm:text-3xl 2xl:text-4xl font-bold hero-gold-text">5+</p>
                <p className="text-[10px] sm:text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Years of<br />Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Thumbnails */}
      <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 pb-4 sm:pb-6 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-1"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="hidden md:flex flex-col items-center gap-1 flex-shrink-0 mr-1">
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>Explore</span>
            <div className="w-px h-6" style={{ background: 'rgba(212,160,23,0.3)' }} />
          </div>

          {thumbnails.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="thumbnail-card flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
              style={{
                width: 'clamp(120px, 18vw, 200px)',
                height: 'clamp(80px, 11vw, 120px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,160,23,0.1)',
              }}
            >
              <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-500" />
            </motion.div>
          ))}

          {/* Stats pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hidden lg:flex items-center gap-3 rounded-2xl px-4 sm:px-5 py-3 ml-auto flex-shrink-0"
            style={{
              background: '#111111',
              border: '1px solid rgba(212,160,23,0.2)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            <div className="flex -space-x-2">
              {avatars.slice(0, 3).map((src, i) => (
                <img key={i} src={src} alt="" className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 rounded-full object-cover" style={{ border: '2px solid #111' }} />
              ))}
            </div>
            <div>
              <p className="text-xs 2xl:text-sm font-bold" style={{ color: 'rgba(255,255,255,0.85)' }}>1000+ Clients</p>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3" style={{ fill: '#d4a017', color: '#d4a017' }} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}