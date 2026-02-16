import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Event Ready Glam Pack',
    price: 13999,
    features: ['Hydrafacial (instant glow)', 'Lash Extensions', 'Nail Extensions'],
  },
  {
    name: 'Glow Goddess Membership',
    price: 18449,
    features: ['Hydrafacial', 'Brow Lamination & Tint', 'Lash Extensions / Lash Lift', 'Nail Extensions refill'],
    popular: true,
  },
  {
    name: 'Full Face Glow Combo',
    price: 38399,
    features: ['Combination Brows (1 Session)', 'Lip Blush / Neutralization (1 Session)', 'Hydrafacial'],
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Signature <span className="text-[#d4a547]">Packages</span>
          </h2>
          <p className="mt-4 text-[#d4a547] italic">"Beauty Bundles Save More than Money"</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                pkg.popular 
                  ? 'bg-[#d4a547] text-[#1a1a1a] scale-105 shadow-2xl' 
                  : 'bg-[#2a2a2a] text-white'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-[#d4a547] px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">₹{pkg.price.toLocaleString()}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      pkg.popular ? 'bg-[#1a1a1a]/20' : 'bg-[#d4a547]/20'
                    }`}>
                      <Check className={`w-4 h-4 ${pkg.popular ? 'text-[#1a1a1a]' : 'text-[#d4a547]'}`} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={createPageUrl('Appointment')}>
                <Button className={`w-full ${
                  pkg.popular 
                    ? 'bg-[#1a1a1a] text-[#d4a547] hover:bg-[#2a2a2a]' 
                    : 'bg-[#d4a547] text-[#1a1a1a] hover:bg-[#e0b35e]'
                }`}>
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            to={createPageUrl('Pricing')}
            className="inline-flex items-center gap-2 text-[#d4a547] font-medium hover:underline"
          >
            View Full Pricing Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}