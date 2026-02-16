import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Award } from 'lucide-react';
import FAQSection from '@/components/home/FAQSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function About() {
  const certifications = [
    { title: 'PMU Certification', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/61a77fead_WhatsAppImage2026-02-16at62124PM.jpg' },
    { title: 'SMP Certification', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/61a77fead_WhatsAppImage2026-02-16at62124PM.jpg' },
    { title: 'Best PMU Artist Brows 2024', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/61a77fead_WhatsAppImage2026-02-16at62124PM.jpg' },
    { title: 'Best PMU Artist Lips 2024', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/61a77fead_WhatsAppImage2026-02-16at62124PM.jpg' },
    { title: 'Global PMU Summit VIP 2024', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/61a77fead_WhatsAppImage2026-02-16at62124PM.jpg' },
    { title: 'Skin Aesthetics Certification', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/61a77fead_WhatsAppImage2026-02-16at62124PM.jpg' },
  ];

  const skills = [
    'Microblading',
    'Ombre Brows',
    'Lip Blush',
    'Eyeliner PMU',
    'Scalp Micropigmentation',
    'Paramedical Tattooing'
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=600&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1e3a5f]/70"></div>
        </div>
        
        {/* Decorative Stars */}
        <div className="absolute top-1/4 right-1/4 text-[#f97316]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-[#f97316]">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
          </svg>
        </div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 inline-flex items-center bg-white rounded-full px-6 py-3"
          >
            <span className="text-[#f97316] font-medium">Home</span>
            <span className="mx-3 text-gray-400">›</span>
            <span className="text-[#1e3a5f] font-medium">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-full h-full border-2 border-[#d4a547] rounded-3xl"></div>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/5f1e94ac8_WhatsAppImage2026-02-16at62120PM.jpg"
                  alt="Brow Crush Studio"
                  className="relative rounded-3xl shadow-xl w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
                Welcome to <span className="text-[#d4a547]">Brow Crush</span> Studio
              </h2>
              
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                At Brow Crush, we believe beauty is deeply personal—and we're here to enhance what's already yours. From natural enhancements to bold transformations, every service is performed with intention, precision, and care.
              </p>
              
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Founded by Internationally certified PMU artist <span className="font-semibold text-[#d4a547]">Pravallika</span>, Brow Crush was born out of a passion for creating beauty that feels effortless yet empowering. With a keen eye for detail and a deep understanding of individual features, she brings both artistry and empathy to every session.
              </p>

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
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Meet Our <span className="text-[#d4a547]">Artists</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Pravallika */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#2a2a2a] rounded-3xl p-8 text-center"
            >
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#d4a547]">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/5f1e94ac8_WhatsAppImage2026-02-16at62120PM.jpg" 
                  alt="Pravallika"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#d4a547]">Pravallika</h3>
              <p className="text-white/70 mb-4">Founder & Lead PMU Artist</p>
              <p className="text-gray-400 text-sm">
                Internationally certified PMU artist with a keen eye for detail and a deep understanding of individual features. Award winner for Best PMU Artist Brows & Lips 2024.
              </p>
            </motion.div>

            {/* Annie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#2a2a2a] rounded-3xl p-8 text-center"
            >
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#d4a547] bg-[#3a3a3a] flex items-center justify-center">
                <span className="text-4xl text-[#d4a547]">A</span>
              </div>
              <h3 className="text-2xl font-bold text-[#d4a547]">Annie</h3>
              <p className="text-white/70 mb-4">PMU Artist</p>
              <p className="text-gray-400 text-sm">
                Dedicated and skilled PMU artist, known for her gentle touch and intuitive approach. Annie shares our vision for enhancing your natural beauty and creating a safe, calm space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#d4a547] font-medium mb-2">Our Expertise</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                What We Specialize In
              </h2>
              <p className="mt-6 text-gray-600">
                Whether you're here for brows, lips, lashes, or skin—you're in trusted hands.
              </p>

              <div className="mt-8">
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#d4a547]" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-[#1a1a1a] rounded-2xl p-6 inline-block">
                <div className="flex items-center gap-4">
                  <Award className="w-12 h-12 text-[#d4a547]" />
                  <div>
                    <p className="text-white font-semibold">Internationally Certified</p>
                    <p className="text-gray-400 text-sm">PMU & SMP Certifications</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/61a77fead_WhatsAppImage2026-02-16at62124PM.jpg"
                alt="Certifications"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />
      <TestimonialsSection />
    </main>
  );
}