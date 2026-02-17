import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Video, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 bg-[#f5f0e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
              Why Choose <span className="text-[#d4a547]">Brow Crush</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              We provide comprehensive care with a patient-centric approach, combining advanced technology with experienced professionals.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                'Comprehensive Specialties',
                'Research and Development',
                'Emergency Services',
                'Advanced Imaging Services',
                'Intensive Care Units (ICUs)',
                'Rehabilitation Services',
                'Telemedicine Facilities',
                'Patient-Centric Approach',
                'Multidisciplinary Team',
                'Health Information Technology'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-[#d4a547] rounded-full"></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Card */}
            <div className="mt-10 bg-white rounded-2xl p-6 shadow-lg flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#d4a547]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact Us</p>
                  <p className="font-bold text-[#1a1a1a]">73 31 165 674</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                  <Video className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <span className="text-sm text-gray-600">Video Call</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <span className="text-sm text-gray-600">Support</span>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-[#1a1a1a]">(5.0)</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#d4a547] text-[#d4a547]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=700&fit=crop"
                alt="Doctor"
                className="rounded-3xl shadow-2xl w-full"
              />
              
              {/* Appointment CTA */}
              <div className="absolute -bottom-6 -left-6 bg-[#d4a547] rounded-2xl p-6 shadow-xl">
                <Link 
                  to={createPageUrl('Appointment')}
                  className="flex items-center gap-4 text-[#1a1a1a]"
                >
                  <div>
                    <p className="text-sm opacity-80">Ready to start?</p>
                    <p className="font-bold text-lg">Book Appointment</p>
                  </div>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}