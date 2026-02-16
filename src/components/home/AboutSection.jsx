import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

export default function AboutSection() {
  const avatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-[#d4a547] rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=500&fit=crop"
                alt="Skincare Treatment"
                className="relative rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop"
                alt="Beauty Treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
              Beyond Skin Deep Personalized Care for Your Unique Beauty Journey at <span className="text-[#d4a547]">Brow Crush</span>.
            </h2>
            
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We believe that healthy, radiant skin is achievable for everyone. By combining advanced dermatology with innovative cosmetic solutions, we address your unique skin concerns. Our team of board-certified dermatologists and experienced aestheticians create personalized treatment plans to help you achieve your desired results.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              {/* Doctors Info */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Doctor ${index + 1}`}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Expert Beauty Professionals</p>
                </div>
                <Link 
                  to={createPageUrl('Team')}
                  className="w-12 h-12 bg-[#d4a547] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <ArrowUpRight className="w-5 h-5 text-[#1a1a1a]" />
                </Link>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-[#1a1a1a]">(4.9)</span>
                <div className="flex gap-0.5 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d4a547] text-[#d4a547]" />
                  ))}
                </div>
              </div>
              <span className="text-gray-500">Happy Clients</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Text */}
      <div className="mt-20 overflow-hidden bg-[#1a1a1a] py-6">
        <div className="animate-scroll-x flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-2xl font-semibold text-[#d4a547]">Microblading</span>
              <span className="w-2 h-2 bg-[#d4a547] rounded-full"></span>
              <span className="text-2xl font-semibold text-[#d4a547]">Lip Blush</span>
              <span className="w-2 h-2 bg-[#d4a547] rounded-full"></span>
              <span className="text-2xl font-semibold text-[#d4a547]">Eyeliner</span>
              <span className="w-2 h-2 bg-[#d4a547] rounded-full"></span>
              <span className="text-2xl font-semibold text-[#d4a547]">Brow Lamination</span>
              <span className="w-2 h-2 bg-[#d4a547] rounded-full"></span>
              <span className="text-2xl font-semibold text-[#d4a547]">Ombre Brows</span>
              <span className="w-2 h-2 bg-[#d4a547] rounded-full"></span>
              <span className="text-2xl font-semibold text-[#d4a547]">Powder Brows</span>
              <span className="w-2 h-2 bg-[#d4a547] rounded-full"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}