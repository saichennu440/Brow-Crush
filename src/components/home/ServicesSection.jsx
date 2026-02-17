import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Microblading',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=500&fit=crop',
    description: 'Hair-stroke technique for fuller, natural-looking brows that lasts 18-24 months.',
    features: ['Natural Hair Strokes', '2 Sessions Included', '18-24 Months Duration'],
    artist: 'Pravallika',
    specialty: 'PMU Expert'
  },
  {
    id: 2,
    title: 'Lip Blush',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&h=500&fit=crop',
    description: 'Adds a soft wash of color, enhancing lip shape and fullness while keeping a natural look.',
    features: ['Color Enhancement', 'Shape Definition', '36-48 Months Duration'],
    artist: 'Pravallika',
    specialty: 'PMU Expert'
  },
  {
    id: 3,
    title: 'Ombre Brows',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=500&fit=crop',
    description: 'Soft, powdery effect for a defined look that lasts 30-36 months.',
    features: ['Powdery Finish', 'Defined Shape', '30-36 Months Duration'],
    artist: 'Annie',
    specialty: 'PMU Artist'
  },
  {
    id: 4,
    title: 'Lash Extensions',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=500&h=500&fit=crop',
    description: 'Classic, Hybrid, or Volume lash extensions for stunning, long-lasting lashes.',
    features: ['Multiple Styles', 'Natural to Dramatic', '4-6 Weeks Duration'],
    artist: 'Annie',
    specialty: 'Lash Specialist'
  },
  {
    id: 5,
    title: 'Hydrafacial',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=500&fit=crop',
    description: 'Deep cleansing facial for glass-skin vibes under 90 minutes.',
    features: ['Deep Cleansing', 'Instant Glow', 'No Downtime'],
    artist: 'Pravallika',
    specialty: 'Skin Expert'
  }
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-2 bg-gradient-to-b from-white to-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
            Transform Your Look <span className="text-[#d4a547]">with</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Professional semi-permanent makeup and beauty services to enhance your natural features.
          </p>
        </motion.div>

        {/* Services Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Active Service Detail */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="relative">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-4xl font-bold text-[#d4a547]/50">0{activeService + 1}</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a]">{services[activeService].title}</h3>
              <p className="mt-4 text-gray-600">{services[activeService].description}</p>
              
              <ul className="mt-6 space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d4a547]/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#d4a547]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t">
                <div className="w-14 h-14 rounded-full bg-[#d4a547] flex items-center justify-center text-[#1a1a1a] font-bold text-xl">
                  {services[activeService].artist[0]}
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">{services[activeService].artist}</p>
                  <p className="text-sm text-gray-500">{services[activeService].specialty}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 lg:flex-wrap lg:overflow-visible">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`relative flex-shrink-0 w-40 lg:w-44 cursor-pointer group transition-all duration-300 ${
                  activeService === index ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"></div>
                  
                  {/* Hover Arrow */}
                  <div className={`absolute top-4 right-4 w-10 h-10 bg-[#d4a547] rounded-full flex items-center justify-center transform transition-all duration-300 ${
                    activeService === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                  }`}>
                    <ArrowUpRight className="w-5 h-5 text-[#1a1a1a]" />
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                      {service.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            to={createPageUrl('Services')}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#d4a547] px-8 py-4 rounded-full font-medium hover:bg-[#2a2a2a] transition-colors"
          >
            View All Services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}