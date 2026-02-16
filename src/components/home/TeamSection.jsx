import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Meghana Doosa',
    text: 'Hey Pravalika, Firstly thank you so much for defining my brows and setting them according to my face. After my sessions with Brow Crush my everyday eye brow effort is not there and they are always picture perfect. I usually never write reviews but they totally deserve the appreciation.',
    rating: 5
  },
  {
    id: 2,
    name: 'Deepthi Conceila',
    text: 'I recently got my semi-permanent eyebrows done at Brow Crush Studio, and I couldn\'t be happier with the results! Pravallika, the brow specialist, is truly gifted at her craft – she understands facial structure, symmetry, and skin tones so well.',
    rating: 5
  },
  {
    id: 3,
    name: 'Monalisha Sistu',
    text: 'I am so happy.. the brows she made are so natural.. pain less process.. in love the way she made me comfortable all through the process.. highly suggestible...',
    rating: 5
  },
  {
    id: 4,
    name: 'Sravya K',
    text: 'My micro blading experience with pravallika was awesome! She had super calming energy and would explain what she was doing step by step. She did a beautiful job! My brows look very natural and I\'m exited with my results.',
    rating: 5
  },
  {
    id: 5,
    name: 'Devika Rao',
    text: 'Remember you are not fully dressed without ur brows. You can blindly trust pravallika garu, she is best at what she does. The ambience is really pleasant and her work is to be praised. I highly recommend brow crush.',
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
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=300&h=300&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=300&h=200&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=250&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=250&fit=crop" 
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Gallery Icon Overlay */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-4">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-4 h-4 bg-[#d4a547] rounded"></div>
                <div className="w-4 h-4 bg-[#d4a547] rounded"></div>
                <div className="w-4 h-4 bg-[#d4a547] rounded"></div>
                <div className="w-4 h-4 bg-[#d4a547] rounded"></div>
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
                Love Notes From <span className="text-[#d4a547]">Our Clients</span>
              </h2>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#d4a547] text-[#d4a547]" />
                ))}
              </div>
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
                  <Quote className="w-12 h-12 text-[#d4a547]/20 mb-4" />
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {testimonials[currentIndex].text}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#d4a547] flex items-center justify-center text-[#1a1a1a] font-bold text-xl">
                      {testimonials[currentIndex].name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a]">{testimonials[currentIndex].name}</h4>
                      <div className="flex gap-0.5">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#d4a547] text-[#d4a547]" />
                        ))}
                      </div>
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