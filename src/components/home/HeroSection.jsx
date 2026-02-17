import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';

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
  { label: 'FACEBOOK', href: '#', Icon: Facebook },
  { label: 'TWITTER', href: '#', Icon: Twitter },
];

export default function HeroSection() {
  return (
    <section className="relative lg:min-h-screen bg-gradient-to-br from-[#fdf8f3] via-white to-[#fef0e0] overflow-hidden flex flex-col">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f97316]/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#1e3a5f]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle star decorations */}
      <div className="absolute top-28 right-1/3 text-[#f97316]/40">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/4 text-[#d4a547]/25">
        <svg width="20" height="20" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-1/2 text-[#f97316]/20">
        <svg width="24" height="24" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>

      {/* Vertical Social Links — fixed left */}
      <div className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-20">
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

      {/* Vertical "LET'S TALK" — fixed left bottom */}
      <div className="hidden xl:flex fixed left-5 bottom-10 flex-col items-center gap-3 z-20">
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
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-16 pt-4 lg:pt-12 pb-2 lg:pb-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:min-h-[calc(100vh-200px)]">

          {/* LEFT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 flex flex-col justify-center"
          >
            {/* Label badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1.5 w-fit mb-3 lg:mb-6"
            >
              <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#f97316] tracking-wider uppercase">
                Brow Crush Studio
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1e3a5f] leading-[1.08] mb-4 lg:mb-6">
              Wake Up{' '}
              <span className="relative inline-block">
                <span className="text-[#f97316]">Flawless</span>
                {/* Underline decoration */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9C50 3 100 3 198 9" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              Every Day
            </h1>

            {/* Subheadline */}
            <p className="text-gray-600 text-lg leading-relaxed mb-5 lg:mb-8 max-w-lg border-l-4 border-[#f97316] pl-5">
              Transform your beauty routine with expert semi-permanent makeup. Brows, lips, lashes & more — designed to enhance your natural features, last for months.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 lg:mb-10">
              <Link to={createPageUrl('Appointment')}>
                <button className="bg-[#1e3a5f] hover:bg-[#2d4f7a] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all hover:shadow-xl hover:shadow-blue-900/20 flex items-center gap-2 group">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link to={createPageUrl('Services')}>
                <button className="border-2 border-[#1e3a5f]/20 hover:border-[#f97316] text-[#1e3a5f] hover:text-[#f97316] px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all hover:bg-[#fef5ed]">
                  Our Services
                </button>
              </Link>
            </div>

            {/* Avatar Group + Rating */}
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <Link
                  to={createPageUrl('Services')}
                  className="ml-3 w-11 h-11 bg-[#f97316] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f97316] text-[#f97316]" />
                  ))}
                  <span className="ml-1 font-bold text-[#1e3a5f] text-sm">(5.0)</span>
                </div>
                <p className="text-xs text-gray-500">1000+ Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main image container */}
            <div className="relative w-full max-w-md xl:max-w-lg">

              {/* Large background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/15 to-[#1e3a5f]/10 rounded-[40px_40px_100px_40px] -rotate-3 scale-105" />

              {/* Hero image */}
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=950&fit=crop"
                alt="Beauty Treatment"
                className="relative w-full rounded-[40px_40px_100px_40px] shadow-2xl object-cover"
                style={{ maxHeight: '580px' }}
              />

              {/* Rating floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fef5ed] flex items-center justify-center">
                    <Star className="w-5 h-5 fill-[#f97316] text-[#f97316]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1e3a5f] text-lg leading-none">5.0</p>
                    <p className="text-xs text-gray-500 mt-0.5">Google Rating</p>
                  </div>
                </div>
              </motion.div>

              {/* "Brow Crush Studio" spinning play button — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-10"
              >
                <a href="https://youtu.be/xzynvvHQqpo?si=9-UcIi_M0pF5XNzA" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-24 h-24">
                    {/* Circular text */}
                    <svg className="w-24 h-24 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 96 96">
                      <defs>
                        <path id="textCircle" d="M48,6 a42,42 0 1,1 -0.001,0" fill="none" />
                      </defs>
                      <text fill="#1e3a5f" fontSize="8.5" fontWeight="600" letterSpacing="3">
                        <textPath href="#textCircle">BROW CRUSH • STUDIO • BROW</textPath>
                      </text>
                    </svg>
                    {/* Center play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
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
                className="absolute bottom-16 -right-8 bg-[#1e3a5f] text-white rounded-2xl px-5 py-4 shadow-xl"
              >
                <p className="text-3xl font-bold text-[#f97316]">5+</p>
                <p className="text-xs text-white/80 mt-0.5">Years of<br />Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Thumbnails Row */}
      <div className="max-w-7xl mx-auto w-full px-8 sm:px-6 lg:px-8 xl:px-16 pb-4 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex items-center gap-4"
        >
          {/* "Explore" label */}
          <div className="hidden md:flex flex-col items-center gap-1 flex-shrink-0 mr-2">
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
              className="w-44 h-28  rounded-2xl overflow-hidden shadow-lg flex-shrink-0 cursor-pointer "
            >
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}

          {/* Stats pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hidden lg:flex items-center gap-3 bg-white rounded-2xl shadow-lg px-5 py-3 ml-auto flex-shrink-0 border border-gray-100"
          >
            <div className="flex -space-x-2">
              {avatars.slice(0, 3).map((src, i) => (
                <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-[#1e3a5f]">1000+ Clients</p>
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