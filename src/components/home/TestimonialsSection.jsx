import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rihana Roy',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    text: 'The treatment I received at ClinicMaster was exceptional. The staff was incredibly professional and caring throughout my entire journey. My skin has never looked better!',
    rating: 5
  },
  {
    id: 2,
    name: 'Kenneth Fong',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    text: 'I was amazed by the results of my laser treatment. The doctors here truly know what they\'re doing. Highly recommend ClinicMaster to anyone looking for quality skincare.',
    rating: 5
  },
  {
    id: 3,
    name: 'Jonathan Lee',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    text: 'From the consultation to the follow-up care, everything was perfect. The anti-aging treatment worked wonders for me. Thank you ClinicMaster!',
    rating: 5
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    text: 'The cosmetic dermatology services here are top-notch. I\'ve been coming here for over a year and the improvement in my skin is incredible.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=200&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&h=300&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&h=300&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&h=200&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=300&h=250&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=250&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Gallery Icon Overlay */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-4">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-4 h-4 bg-[#f97316] rounded"></div>
                <div className="w-4 h-4 bg-[#f97316] rounded"></div>
                <div className="w-4 h-4 bg-[#f97316] rounded"></div>
                <div className="w-4 h-4 bg-[#f97316] rounded"></div>
              </div>
            </div>
          </motion.div>

          {/* Right - Testimonials */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                What our Patients Say
              </h2>
              <p className="mt-4 text-white/70">
                Read what our satisfied patients have to say about their experience.
              </p>
            </motion.div>

            {/* Testimonial Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-xl"
                >
                  <Quote className="w-12 h-12 text-[#f97316]/20 mb-4" />
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {testimonials[currentIndex].text}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#1a1a1a]">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-sm text-gray-500">Best Treatment</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={prev}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 bg-[#d4a547] hover:bg-[#e0b35e] rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-[#1a1a1a]" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#d4a547]' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}