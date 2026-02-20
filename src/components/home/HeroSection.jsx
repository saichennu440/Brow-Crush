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

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#fdf8f3] via-white to-[#fef0e0] overflow-hidden flex flex-col">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[450px] lg:w-[600px] xl:w-[750px] 2xl:w-[900px] h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[750px] 2xl:h-[900px] bg-[#f97316]/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-56 sm:w-72 xl:w-96 2xl:w-[500px] h-56 sm:h-72 xl:h-96 2xl:h-[500px] bg-[#1e3a5f]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle star decorations */}
      <div className="absolute top-28 right-1/3 text-[#f97316]/40">
        <svg width="24" height="24" className="sm:w-8 sm:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/4 text-[#d4a547]/25">
        <svg width="16" height="16" className="sm:w-5 sm:h-5 xl:w-7 xl:h-7" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-1/2 text-[#f97316]/20">
        <svg width="20" height="20" className="sm:w-6 sm:h-6 xl:w-8 xl:h-8" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>

      {/* Vertical Social Links — visible on xl+ (laptop and above) */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-20">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gray-300" />
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#f97316] transition-colors"
            style={{ writingMode: 'vertical-rl', letterSpacing: '0.15em', fontSize: '10px', fontWeight: 600 }}
          >
            {label}
          </a>
        ))}
        <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>

      {/* Vertical "LET'S TALK" — visible on xl+ (laptop and above) */}
      <div className="hidden xl:flex fixed left-6 bottom-10 flex-col items-center gap-3 z-20">
        <a
          href="tel:7331165674"
          className="text-[#f97316] font-bold hover:text-[#1e3a5f] transition-colors"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em', fontSize: '11px' }}
        >
          LET'S TALK
        </a>
        <div className="w-px h-10 bg-[#f97316]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-[1920px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16 2xl:pt-20 pb-2 lg:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center min-h-[calc(100vh-160px)] sm:min-h-[calc(100vh-180px)] md:min-h-[calc(100vh-200px)]">

          {/* LEFT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 flex flex-col justify-center order-2 md:order-1"
          >
            {/* Label badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-3 sm:px-4 py-1.5 w-fit mb-3 sm:mb-4 lg:mb-6"
            >
              <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#f97316] tracking-wider uppercase">
                Brow Crush Studio
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#1e3a5f] leading-[1.08] mb-3 sm:mb-4 lg:mb-6">
              Wake Up{' '}
              <span className="relative inline-block">
                <span className="text-[#f97316]">Flawless</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9C50 3 100 3 198 9" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              Every Day
            </h1>

            {/* Subheadline */}
            <p className="text-gray-600 text-sm sm:text-base md:text-base lg:text-lg 2xl:text-xl leading-relaxed mb-5 sm:mb-6 lg:mb-8 max-w-lg 2xl:max-w-xl border-l-4 border-[#f97316] pl-4 sm:pl-5">
              Transform your beauty routine with expert semi-permanent makeup. Brows, lips, lashes & more — designed to enhance your natural features, last for months.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
              <Link to={createPageUrl('Appointment')}>
                <button className="bg-[#1e3a5f] hover:bg-[#2d4f7a] text-white px-6 sm:px-8 2xl:px-10 py-3 sm:py-4 2xl:py-5 rounded-full font-semibold text-xs sm:text-sm 2xl:text-base tracking-wide transition-all hover:shadow-xl hover:shadow-blue-900/20 flex items-center gap-2 group">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link to={createPageUrl('Services')}>
                <button className="border-2 border-[#1e3a5f]/20 hover:border-[#f97316] text-[#1e3a5f] hover:text-[#f97316] px-6 sm:px-8 2xl:px-10 py-3 sm:py-4 2xl:py-5 rounded-full font-semibold text-xs sm:text-sm 2xl:text-base tracking-wide transition-all hover:bg-[#fef5ed]">
                  Our Services
                </button>
              </Link>
            </div>

            {/* Avatar Group + Rating */}
            <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-9 h-9 sm:w-11 sm:h-11 2xl:w-14 2xl:h-14 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <Link
                  to={createPageUrl('Services')}
                  className="ml-3 w-9 h-9 sm:w-11 sm:h-11 2xl:w-14 2xl:h-14 bg-[#f97316] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <ArrowUpRight className="w-4 h-4 2xl:w-5 2xl:h-5 text-white" />
                </Link>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 fill-[#f97316] text-[#f97316]" />
                  ))}
                  <span className="ml-1 font-bold text-[#1e3a5f] text-xs sm:text-sm 2xl:text-base">(5.0)</span>
                </div>
                <p className="text-xs 2xl:text-sm text-gray-500">1000+ Happy Clients</p>
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
            {/* Main image container */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-full xl:max-w-lg 2xl:max-w-2xl mx-auto">

              {/* Large background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/15 to-[#1e3a5f]/10 rounded-[30px_30px_80px_30px] md:rounded-[40px_40px_100px_40px] -rotate-3 scale-105" />

              {/* Hero image */}
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=950&fit=crop"
                alt="Beauty Treatment"
                className="relative w-full rounded-[30px_30px_80px_30px] md:rounded-[40px_40px_100px_40px] shadow-2xl object-cover"
                style={{ maxHeight: 'clamp(260px, 55vw, 700px)' }}
              />

              {/* Rating floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-5 md:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-xl px-3 sm:px-5 py-2.5 sm:py-4 border border-gray-100"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#fef5ed] flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#f97316] text-[#f97316]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1e3a5f] text-base sm:text-lg leading-none">5.0</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">Google Rating</p>
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
                  <div className="relative w-18 h-18 sm:w-24 sm:h-24 2xl:w-28 2xl:h-28" style={{ width: 'clamp(72px, 10vw, 112px)', height: 'clamp(72px, 10vw, 112px)' }}>
                    <svg className="w-full h-full animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 96 96">
                      <defs>
                        <path id="textCircle" d="M48,6 a42,42 0 1,1 -0.001,0" fill="none" />
                      </defs>
                      <text fill="#1e3a5f" fontSize="8.5" fontWeight="600" letterSpacing="3">
                        <textPath href="#textCircle">BROW CRUSH • STUDIO • BROW</textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f97316] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white ml-0.5" />
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
                className="absolute bottom-10 sm:bottom-14 md:bottom-16 -right-3 sm:-right-6 md:-right-8 bg-[#1e3a5f] text-white rounded-xl sm:rounded-2xl px-3 sm:px-5 py-3 sm:py-4 shadow-xl"
              >
                <p className="text-2xl sm:text-3xl 2xl:text-4xl font-bold text-[#f97316]">5+</p>
                <p className="text-[10px] sm:text-xs text-white/80 mt-0.5">Years of<br />Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Thumbnails Row */}
      <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 pb-4 sm:pb-6 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-1 scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* "Explore" label */}
          <div className="hidden md:flex flex-col items-center gap-1 flex-shrink-0 mr-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Explore</span>
            <div className="w-px h-6 bg-gray-300" />
          </div>

          {thumbnails.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              style={{ width: 'clamp(120px, 18vw, 200px)', height: 'clamp(80px, 11vw, 120px)' }}
            >
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}

          {/* Stats pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hidden lg:flex items-center gap-3 bg-white rounded-2xl shadow-lg px-4 sm:px-5 py-3 ml-auto flex-shrink-0 border border-gray-100"
          >
            <div className="flex -space-x-2">
              {avatars.slice(0, 3).map((src, i) => (
                <img key={i} src={src} alt="" className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div>
              <p className="text-xs 2xl:text-sm font-bold text-[#1e3a5f]">1000+ Clients</p>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f97316] text-[#f97316]" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}