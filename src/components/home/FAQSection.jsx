import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

const faqs = [
  {
    question: 'How long does semi-permanent makeup last?',
    answer: 'The longevity varies by treatment: Microblading lasts 18-24 months, Ombre/Combo Brows last 30-36 months, Lip Blush lasts 36-48 months, and Eyeliner lasts 30-36 months. Results depend on skin type, lifestyle, and aftercare.'
  },
  {
    question: 'Is the procedure painful?',
    answer: 'We use topical numbing cream to minimize discomfort. Most clients describe the sensation as light scratching. Our artists ensure you\'re comfortable throughout the entire process.'
  },
  {
    question: 'What should I do before my appointment?',
    answer: 'Avoid facials, peels, or laser treatments 7 days before. Stop using retinol/AHA/BHA creams. 24-48 hours before: no alcohol, caffeine, or smoking. Come with a clean face (no makeup). For brows, no threading/waxing 3 days prior.'
  },
  {
    question: 'What is the healing process like?',
    answer: 'Day 1-2: Brows appear darker and bold. Days 4-7: Scabbing and itching (don\'t pick!). Days 8-10: Color appears lighter. Days 14-28: True color emerges. A touch-up session is included 4-6 weeks after the initial procedure.'
  },
  {
    question: 'What\'s the difference between PRO and LUX pricing?',
    answer: 'PRO services are performed by our certified artists trained in-house - ideal for standard procedures with professional results. LUX services are performed by our founder Pravallika - best for complex cases or premium, customized results.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - FAQ */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                Frequently Asked <span className="text-[#d4a547]">Questions</span>
              </h2>
              <p className="mt-4 text-gray-600">
                Find answers to common questions about our services and treatments.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border-2 rounded-2xl overflow-hidden transition-colors ${
                    openIndex === index ? 'border-[#d4a547] bg-[#f5f0e8]' : 'border-gray-200 hover:border-[#d4a547]/50'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-[#1a1a1a] text-lg">{faq.question}</span>
                    <ChevronDown 
                      className={`w-6 h-6 text-[#d4a547] transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Stats Card */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6 z-10">
              <div className="flex items-center gap-3">
                <span className="font-medium text-[#1a1a1a]">Expert Beauty Team</span>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=700&fit=crop"
                alt="Treatment"
                className="w-full"
              />
              
              {/* Rating Card */}
              <div className="absolute bottom-6 right-6 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-2xl p-4 border border-[#d4a547]">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#d4a547]">(5.0)</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#d4a547] text-[#d4a547]" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}