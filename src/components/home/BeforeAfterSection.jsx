import React, { useState } from 'react';
import { motion } from 'framer-motion';

const treatments = [
  {
    before: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop',
  },
  {
    before: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=400&fit=crop',
  }
];

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-20 bg-[#fef5ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
            After Treatment
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            See the amazing transformations our patients have experienced with our advanced treatments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-xl bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                {/* Before Image */}
                <img
                  src={treatment.before}
                  alt="Before treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* After Image with clip */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={treatment.after}
                    alt="After treatment"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Slider */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-[#1e3a5f] rounded-full"></div>
                      <div className="w-1 h-4 bg-[#1e3a5f] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-[#1e3a5f]">Before</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#f97316] px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-white">After</span>
                </div>
              </div>

              {/* Range Slider */}
              <div className="p-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#f97316]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}