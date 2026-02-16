import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Star, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const avatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] pt-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-32 right-1/3 text-[#d4a547]">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-[#d4a547]">
        <svg width="30" height="30" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
        </svg>
      </div>

      {/* Social Links - Left Side */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
        <a href="#" className="text-[#d4a547] hover:text-white transition-colors writing-vertical">
          <span className="text-sm font-medium tracking-widest" style={{ writingMode: 'vertical-rl' }}>FACEBOOK</span>
        </a>
        <a href="#" className="text-[#d4a547] hover:text-white transition-colors">
          <span className="text-sm font-medium tracking-widest" style={{ writingMode: 'vertical-rl' }}>TWITTER</span>
        </a>
        <a href="https://instagram.com/browcrush.studio" target="_blank" rel="noopener noreferrer" className="text-[#d4a547] hover:text-white transition-colors">
          <span className="text-sm font-medium tracking-widest" style={{ writingMode: 'vertical-rl' }}>INSTAGRAM</span>
        </a>
      </div>

      {/* "Let's Talk" - Left Side */}
      <div className="hidden lg:block fixed left-6 bottom-12 z-20">
        <span className="text-sm font-medium text-[#d4a547] tracking-widest" style={{ writingMode: 'vertical-rl' }}>LET'S TALK</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Small Avatar */}
            <div className="absolute -top-8 left-0 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" 
                alt="Doctor" 
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-[#d4a547] leading-tight mt-16 lg:mt-20">
              Semi Permanent<br />
              Makeup Studio<br />
              & Academy
            </h1>

            <div className="mt-8 border-l-4 border-[#d4a547] pl-6">
              <p className="text-gray-300 text-lg">
                Transform your beauty routine with our expert semi-permanent makeup services. Wake up flawless every day with Brow Crush.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              {/* Avatar Group */}
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`User ${index + 1}`}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <Link 
                  to={createPageUrl('Services')}
                  className="ml-2 w-12 h-12 bg-[#d4a547] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <ArrowUpRight className="w-5 h-5 text-[#1a1a1a]" />
                </Link>
              </div>
            </div>

            {/* Small Image */}
            <div className="mt-8 lg:hidden">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop" 
                alt="Skincare" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=900&fit=crop"
                alt="Skincare Treatment"
                className="w-full max-w-lg ml-auto rounded-bl-[100px] shadow-2xl"
              />
              
              {/* Play Button */}
              <div className="absolute bottom-20 left-0 transform -translate-x-1/2">
              <Link to={'https://youtu.be/xzynvvHQqpo?si=9-UcIi_M0pF5XNzA'}>
                <div className="relative">
                  
                  <div className="w-32 h-32 bg-[#d4a547] rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
                    <div className="text-center">
                      <Play className="w-8 h-8 text-[#1a1a1a] mx-auto fill-current" />
                    </div>
                  </div>
                 
                  <div className="absolute inset-0 animate-spin-slow">
                    <svg className="w-32 h-32" viewBox="0 0 128 128">
                      <path 
                        id="textPath" 
                        d="M64,10 a54,54 0 0,1 0,108 a54,54 0 0,1 0,-108"
                        fill="none"
                      />
                      <text className="text-[10px] fill-[#1a1a1a] font-medium tracking-widest">
                        <textPath href="#textPath">
                          BROW CRUSH STUDIO • BROW CRUSH STUDIO •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
                 </Link>
              </div>

              {/* Rating Badge */}
              <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-[#1a1a1a] border border-[#d4a547] px-4 py-3 rounded-xl shadow-lg" style={{ writingMode: 'vertical-rl' }}>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4a547] text-[#d4a547]" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#d4a547]">(4.9)</span>
                  <span className="text-xs text-gray-400">Happy Clients</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex gap-4 justify-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=200&fit=crop" 
              alt="Treatment" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&h=200&fit=crop" 
              alt="Skincare" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-48 h-32 rounded-2xl overflow-hidden shadow-lg hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&h=200&fit=crop" 
              alt="Beauty" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}