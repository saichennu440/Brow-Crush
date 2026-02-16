import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Gift, Clock, Star, Award, Heart, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/home/FAQSection';

const pmuServices = [
  { 
    name: 'Microblading', 
    lasts: '18-24 months', 
    oneSession: { pro: 14999, lux: 17999 }, 
    twoSessions: { pro: 24999, lux: 28999 },
    description: 'Hair-stroke technique for natural brows',
    icon: '✨'
  },
  { 
    name: 'Ombre Brows', 
    lasts: '30-36 months', 
    oneSession: { pro: 14999, lux: 17999 }, 
    twoSessions: { pro: 24999, lux: 28999 },
    description: 'Soft, powdery effect for defined look',
    icon: '🌟'
  },
  { 
    name: 'Combination Brows', 
    lasts: '30-36 months', 
    oneSession: { pro: 19999, lux: 22999 }, 
    twoSessions: { pro: 34999, lux: 38999 },
    description: 'Blend of strokes and shading',
    icon: '💫'
  },
  { 
    name: 'Nano Brows', 
    lasts: '24-30 months', 
    oneSession: { lux: 24999 }, 
    twoSessions: { lux: 40999 },
    description: 'Ultra-fine machine strokes',
    icon: '⭐'
  },
  { 
    name: 'Lip Neutralization', 
    lasts: '36-48 months', 
    oneSession: { pro: 19999, lux: 22999 }, 
    twoSessions: { pro: 34999, lux: 38999 },
    description: 'Corrects dark or uneven lip tones',
    icon: '💋'
  },
  { 
    name: 'Lip Blush', 
    lasts: '36-48 months', 
    oneSession: { pro: 19999, lux: 22999 }, 
    twoSessions: { pro: 34999, lux: 38999 },
    description: 'Soft wash of color for fuller lips',
    icon: '💕'
  },
  { 
    name: 'Eye Liner', 
    lasts: '30-36 months', 
    oneSession: { pro: 14999, lux: 17999 }, 
    twoSessions: { pro: 24999, lux: 28999 },
    description: 'Long-lasting definition for lash lines',
    icon: '👁️'
  },
  { 
    name: 'Cheek Blush PMU', 
    lasts: '12-24 months', 
    oneSession: { custom: true }, 
    twoSessions: { custom: true },
    description: 'Natural, youthful glow',
    icon: '🌸'
  },
];

const packages = [
  {
    name: 'Event Ready Glam Pack',
    price: 13999,
    originalPrice: 18000,
    features: ['Hydrafacial (instant glow)', 'Lash Extensions', 'Nail Extensions'],
    description: 'Perfect for special occasions',
    color: 'from-pink-500 to-rose-500',
    icon: '🎉'
  },
  {
    name: 'Glow Goddess Membership',
    price: 18449,
    originalPrice: 24000,
    features: ['Hydrafacial', 'Brow Lamination & Tint', 'Lash Extensions (Classic) / Lash Lift', 'Nail Extensions refill'],
    popular: true,
    description: 'Most popular monthly package',
    color: 'from-purple-500 to-indigo-500',
    icon: '👑'
  },
  {
    name: 'Full Face Glow Combo',
    price: 38399,
    originalPrice: 48000,
    features: ['Combination Brows (1 Session)', 'Lip Blush / Neutralization (1 Session)', 'Hydrafacial'],
    description: 'Complete facial transformation',
    color: 'from-amber-500 to-orange-500',
    icon: '✨'
  },
  {
    name: 'Luxury PMU Transformation',
    price: 42799,
    originalPrice: 55000,
    features: ['Combination Brows (1 Session)', 'Lip Neutralization/ Blush (1 Session)', 'Lash Extensions (premium set)', 'Hydrafacial'],
    description: 'Ultimate luxury experience',
    color: 'from-emerald-500 to-teal-500',
    icon: '💎'
  },
];

const whyChooseUs = [
  { icon: Award, title: 'Expert Artists', desc: 'Certified & trained professionals' },
  { icon: Shield, title: 'Safe & Hygienic', desc: 'Sterilized equipment & procedures' },
  { icon: Heart, title: 'Client Satisfaction', desc: '1000+ happy clients' },
  { icon: Zap, title: 'Quick Results', desc: 'Immediate visible transformation' },
];

export default function Pricing() {
  const [showTwoSessions, setShowTwoSessions] = useState(false);

  return (
    <main className="overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=600&fit=crop"
            alt="Pricing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 via-[#1e3a5f]/85 to-purple-900/80"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 text-[#f97316]/30 animate-pulse">
          <svg width="60" height="60" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-purple-400/20 animate-pulse delay-300">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white"
          >
            <Sparkles className="w-4 h-4 text-[#f97316]" />
            <span className="text-sm font-medium">Transparent Pricing</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            Pricing <span className="text-[#f97316]">Plans</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Invest in yourself with our professional beauty services. Quality treatments at transparent prices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <span className="text-white/80 font-medium">Home</span>
            <span className="mx-3 text-white/60">›</span>
            <span className="text-white font-medium">Pricing</span>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f97316] to-[#d4a547] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PMU Pricing */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#fef5ed] rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-[#d4a547]" />
              <span className="text-sm font-medium text-[#d4a547]">Premium Services</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1e3a5f] mb-4">
              Semi Permanent <span className="text-[#f97316]">Makeup</span>
            </h2>
            <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
              "Brows are sisters, not twins, we make them very close siblings!"
            </p>
          </motion.div>

          {/* Session Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 flex shadow-lg border border-gray-200">
              <button
                onClick={() => setShowTwoSessions(false)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                  !showTwoSessions 
                    ? 'bg-gradient-to-r from-[#1e3a5f] to-[#2d4f7a] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                1 Session
              </button>
              <button
                onClick={() => setShowTwoSessions(true)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all relative ${
                  showTwoSessions 
                    ? 'bg-gradient-to-r from-[#1e3a5f] to-[#2d4f7a] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                2 Sessions
                <span className="absolute -top-2 -right-2 bg-[#f97316] text-white text-xs px-2 py-0.5 rounded-full">
                  Best Value
                </span>
              </button>
            </div>
          </div>

          {/* PMU Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {pmuServices.map((service, index) => {
              const pricing = showTwoSessions ? service.twoSessions : service.oneSession;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="bg-gradient-to-br from-[#fef5ed] to-white p-6 border-b border-gray-100">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 text-[#d4a547]" />
                      <span>Lasts {service.lasts}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {/* PRO Tier */}
                      <div className="text-center">
                        <div className="text-xs font-semibold text-[#d4a547] mb-2 uppercase tracking-wide">
                          PRO
                        </div>
                        <div className="text-2xl font-bold text-[#1e3a5f]">
                          {pricing?.pro ? (
                            <>
                              <span className="text-lg">₹</span>
                              {pricing.pro.toLocaleString()}
                            </>
                          ) : pricing?.custom ? (
                            <span className="text-sm text-gray-600">On Request</span>
                          ) : (
                            <span className="text-sm text-gray-400">-</span>
                          )}
                        </div>
                      </div>

                      {/* LUX Tier */}
                      <div className="text-center border-l border-gray-200">
                        <div className="text-xs font-semibold text-[#f97316] mb-2 uppercase tracking-wide flex items-center justify-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          LUX
                        </div>
                        <div className="text-2xl font-bold text-[#1e3a5f]">
                          {pricing?.lux ? (
                            <>
                              <span className="text-lg">₹</span>
                              {pricing.lux.toLocaleString()}
                            </>
                          ) : pricing?.custom ? (
                            <span className="text-sm text-gray-600">On Request</span>
                          ) : (
                            <span className="text-sm text-gray-400">-</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <Link to={createPageUrl('Appointment')} className="mt-6 block">
                      <Button className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#2d4f7a] hover:from-[#2d4f7a] hover:to-[#1e3a5f] text-white group-hover:shadow-lg transition-all">
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tier Explanations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-white to-[#fef5ed] p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#d4a547] flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f]">PRO Tier</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Performed by certified artists trained in-house. Ideal for standard procedures with professional results that exceed expectations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4f7a] p-8 rounded-2xl shadow-lg text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">LUX Tier</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Performed by our founder/senior expert. Best for complex cases or premium, customized results with personalized attention.
              </p>
            </div>
          </motion.div>

          <p className="mt-6 text-gray-500 text-sm text-center">
            *All prices are inclusive of taxes. Touch-up sessions included in package pricing.
          </p>
        </div>
      </section>

      {/* Signature Packages */}
      <section className="py-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-md">
              <Gift className="w-4 h-4 text-[#f97316]" />
              <span className="text-sm font-medium text-[#1e3a5f]">Bundle & Save</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1e3a5f] mb-4">
              Signature <span className="text-[#f97316]">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
              "Beauty Bundles Save More than Money"
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  pkg.popular ? 'transform lg:scale-105 z-10' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#f97316] to-[#d4a547] text-white px-6 py-2 text-sm font-bold flex items-center gap-1 rounded-bl-2xl">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className={`bg-gradient-to-br ${pkg.color} p-8 text-white`}>
                  <div className="text-5xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-white/90 text-sm mb-6">{pkg.description}</p>
                  
                  <div className="mb-2">
                    <div className="text-sm text-white/70 line-through mb-1">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">₹{pkg.price.toLocaleString()}</span>
                    </div>
                    <div className="mt-2 inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                      Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={createPageUrl('Appointment')}>
                    <Button 
                      className={`w-full font-semibold ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                          : 'bg-gradient-to-r from-[#1e3a5f] to-[#2d4f7a] hover:from-[#2d4f7a] hover:to-[#1e3a5f]'
                      } text-white shadow-lg hover:shadow-xl transition-all`}
                    >
                      Book This Package
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1e3a5f] via-purple-900 to-[#1e3a5f] p-12 text-center shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse delay-700"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse delay-300"></div>
            </div>
            
            <div className="relative z-10">
              <Gift className="w-16 h-16 text-[#f97316] mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Create Your Custom Package
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Didn't find your favorite combo here? No worries! We can create a{' '}
                <span className="text-[#f97316] font-semibold">customized package</span> just for you – 
                bright, tailored, and perfect for your beauty needs!
              </p>
              <Link to={createPageUrl('Appointment')}>
                <Button className="bg-white text-[#1e3a5f] hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all">
                  Customize Your Package
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-5xl font-bold text-[#f97316] mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="text-5xl font-bold text-[#f97316] mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="text-5xl font-bold text-[#f97316] mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
}