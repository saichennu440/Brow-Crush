import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Check, Clock, Sparkles, Calendar, Star } from 'lucide-react';
import FAQSection from '@/components/home/FAQSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const serviceCategories = [
  {
    id: 'pmu',
    title: 'Semi Permanent Makeup',
    tagline: 'Brows are sisters, not twins, we make them very close siblings!',
    services: [
      { 
        name: 'Microblading', 
        description: 'Hair-stroke technique for fuller, natural-looking brows', 
        lasts: '18-24 months', 
        sessions: '2 (initial + touch-up in 4-6 weeks)',
        image: './Semi_Permanent_Makeup/micro blading.jpg',
        features: ['Natural hair-like strokes', 'Customized shape & color', 'Minimal downtime']
      },
      { 
        name: 'Ombre Brows', 
        description: 'Soft, powdery effect for a defined look', 
        lasts: '30-36 months', 
        sessions: '2 (initial + touch-up in 4-6 weeks)',
        image: './Semi_Permanent_Makeup/Ombre Brows.jpg',
        features: ['Long-lasting results', 'Soft powder finish', 'Perfect for all skin types']
      },
      { 
        name: 'Combination Brows', 
        description: 'Blend of strokes and shading for natural yet defined brows', 
        lasts: '30-36 months', 
        sessions: '2 (initial + touch-up in 4-6 weeks)',
        image: './Semi_Permanent_Makeup/Combination Brows.jpg',
        features: ['Best of both techniques', 'Natural & defined', 'Versatile styling']
      },
      { 
        name: 'Nano Brows', 
        description: 'Ultra-fine machine strokes for hyper-realistic brows', 
        lasts: '24-30 months', 
        sessions: '2 (initial + touch-up in 4-6 weeks)',
        image: './Semi_Permanent_Makeup/Nano Brows.jpg',
        features: ['Hyper-realistic results', 'Advanced technique', 'Precision placement']
      },
      { 
        name: 'Lip Neutralization', 
        description: 'Corrects and lightens dark or uneven lip tones', 
        lasts: '36-48 months', 
        sessions: '2-3 (initial + 1-2 touch-ups)',
        image: './Semi_Permanent_Makeup/Lip Neutralization.jpg',
        features: ['Even lip tone', 'Natural color correction', 'Long-lasting results']
      },
      { 
        name: 'Lip Blush', 
        description: 'Adds a soft wash of color, enhancing lip shape and fullness', 
        lasts: '36-48 months', 
        sessions: '2 (initial + touch-up in 4-6 weeks)',
        image: './Semi_Permanent_Makeup/Lip Blush.jpg',
        features: ['Enhanced lip color', 'Fuller appearance', 'Natural-looking tint']
      },
      { 
        name: 'Eye Liner', 
        description: 'Long-lasting eyeliner to define lash lines; natural, winged, or bold', 
        lasts: '30-36 months', 
        sessions: '2 (touch-up recommended in 4-6 weeks)',
        image: './Semi_Permanent_Makeup/Eye Liner.jpg',
        features: ['Wake up ready', 'Multiple styles available', 'Water-resistant']
      },
      { 
        name: 'Cheek Blush PMU', 
        description: 'Deposits a gentle tint under the skin for a youthful glow', 
        lasts: '12-24 months', 
        sessions: '2 (initial + touch-up in 6-8 weeks)',
        image: './Semi_Permanent_Makeup/Cheek Blush PMU.jpg',
        features: ['Youthful glow', 'Natural flush', 'Customizable intensity']
      },
    ]
  },
  {
    id: 'lamination',
    title: 'Lamination & Lashes',
    tagline: "You'll say 'I woke up like this' and actually mean it!",
    services: [
      { 
        name: 'Brow Mapping & Shaping (Waxing)', 
        price: '₹1,499', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Brow Mapping & Shaping.jpg',
        features: ['Professional mapping', 'Perfect symmetry', 'Clean finish']
      },
      { 
        name: 'Brow Lamination', 
        price: '₹4,499', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Brow lamination.jpg',
        features: ['Fluffy brows', 'Long-lasting hold', 'Low maintenance']
      },
      { 
        name: 'Brow Tint', 
        price: '₹1,999', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Brow Tint.jpg',
        features: ['Enhanced color', 'Natural shades', 'Fuller appearance']
      },
      { 
        name: 'Brow Lamination & Tint', 
        price: '₹4,999', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Brow Lamination & Tint.jpg',
        features: ['Complete brow makeover', 'Combined benefits', 'Best value package']
      },
      { 
        name: 'Lash Lift', 
        price: '₹4,499', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Lash lift.jpg',
        features: ['Natural curl', 'Open eyes', 'No mascara needed']
      },
      { 
        name: 'Lash Tint', 
        price: '₹1,999', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Lash Tint.jpg',
        features: ['Darker lashes', 'Enhanced definition', 'Low maintenance']
      },
      { 
        name: 'Lash Lift & Tint', 
        price: '₹4,999', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Lash Lift & Tint.jpg',
        features: ['Complete lash enhancement', 'Curl & color', 'Maximum impact']
      },
      { 
        name: 'Classic Lash Extensions', 
        price: '₹4,499 (Refill: ₹2,499)', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Classic Lash Extensions.jpg',
        features: ['Natural enhancement', 'One lash per natural lash', 'Classic beauty']
      },
      { 
        name: 'Hybrid Lash Extensions', 
        price: '₹5,499 (Refill: ₹2,999)', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Hybrid Lash Extensions.jpg',
        features: ['Mix of classic & volume', 'Textured look', 'Versatile style']
      },
      { 
        name: 'Volume Lash Extensions', 
        price: '₹6,499 (Refill: ₹3,499)', 
        lasts: '4-6 weeks',
        image: './laminations and lashes/Volume Lash Extensions.jpg',
        features: ['Dramatic volume', 'Multiple lashes per fan', 'Glamorous look']
      },
      { 
        name: 'Lash Removal', 
        price: '₹1,999', 
        lasts: '-',
        image: './laminations and lashes/Lash Removal.jpg',
        features: ['Safe removal', 'No damage', 'Professional service']
      },
    ]
  },
  {
    id: 'paramedical',
    title: 'Paramedical Treatments',
    tagline: 'Our pigments are fade friendly—they gradually lighten without turning blue or green',
    services: [
      { 
        name: 'Scar Camouflage', 
        description: 'Implants pigment to blend scars into surrounding skin', 
        lasts: '2-5 years', 
        sessions: '2-4 (spaced 3-4 weeks apart)', 
        price: 'Price on request',
        image: './Para medical/Scar Camouflage01.jpg',
        features: ['Professional color matching', 'Natural blending', 'Boosts confidence']
      },
      { 
        name: 'Stretch Mark Camouflage', 
        description: 'Reduces visibility of stretch marks via pigment infusion', 
        lasts: '3-5 years', 
        sessions: '2-4 (spaced 3-4 weeks apart)', 
        price: 'Price on request',
        image: './Para medical/Stretch Mark Camouflage.jpg',
        features: ['Reduces appearance', 'Safe & effective', 'Long-lasting results']
      },
      { 
        name: 'Vitiligo Camouflage', 
        description: 'Expert pigment matching restores color to depigmented patches', 
        lasts: '3-4 years', 
        sessions: '3-6 (spaced 4-6 weeks apart)', 
        price: 'Price on request',
        image: './Para medical/Vitiligo Camouflage.jpg',
        features: ['Precise color matching', 'Restores confidence', 'Expert technique']
      },
      { 
        name: 'Scalp Micro Pigmentation', 
        description: 'Replicates natural hair follicles using micro-dots of pigment', 
        lasts: '4-6 years', 
        sessions: '2-4 (spaced 1-2 weeks apart)', 
        price: 'Price on request',
        image: './Para medical/Scalp Micro Pigmentation.jpg',
        features: ['Natural appearance', 'Non-surgical solution', 'Immediate results']
      },
    ]
  },
  {
    id: 'facials',
    title: 'Facials',
    tagline: 'No downtime, no drama—just glass-skin vibes under 90 minutes',
    services: [
      { 
        name: 'Radiance Detox Facial - Face only', 
        price: '₹2,499', 
        lasts: '-',
        image: './Facials/Radiance Detox Facial - Face only.jpg',
        features: ['Deep cleansing', 'Radiant glow', 'Toxin removal']
      },
      { 
        name: 'Radiance Detox Facial - Face & Neck', 
        price: '₹2,999', 
        lasts: '-',
        image: './Facials/Radiance Detox Facial - Face & Neck.jpg',
        features: ['Complete facial & neck', 'Anti-aging benefits', 'Rejuvenating treatment']
      },
      { 
        name: 'Dermaglow Detox - Face only', 
        price: '₹2,999', 
        lasts: '-',
        image: './Facials/Dermaglow Detox - Face only.jpg',
        features: ['Dermatologist-approved', 'Glowing skin', 'Deep detoxification']
      },
      { 
        name: 'Dermaglow Detox - Face & Neck', 
        price: '₹3,499', 
        lasts: '-',
        image: './Facials/Dermaglow Detox - Face and neck .jpg',
        features: ['Comprehensive treatment', 'Youthful appearance', 'Premium skincare']
      },
      { 
        name: 'Korean Glass Glow Microinfuse', 
        price: '₹6,999 (4 sessions: ₹19,999)', 
        lasts: '-',
        image: './Facials/Korean Glass Glow Microinfuse.jpg',
        features: ['K-beauty technique', 'Glass skin effect', 'Hydration boost']
      },
      { 
        name: 'CC Glow Treatment', 
        price: '₹7,999 (4 sessions: ₹23,999)', 
        lasts: '-',
        image: './Facials/CC Glow Treatment.jpg',
        features: ['Color correction', 'Radiant complexion', 'Even skin tone']
      },
      { 
        name: 'Hydra Facial', 
        price: '₹7,999 (4 sessions: ₹23,999)', 
        lasts: '-',
        image: './Facials/Hydra Facial.jpg',
        features: ['Deep hydration', 'Instant results', 'Medical-grade treatment']
      },
    ]
  },
  {
    id: 'nails',
    title: 'Nails',
    tagline: 'Nail extensions = instant confidence, especially when you hold your chai like a queen',
    services: [
      { 
        name: 'Basic Manicure', 
        price: '₹699', 
        lasts: '-',
        image: './Nails/Basic Manicure.jpg',
        features: ['Clean & polish', 'Hand massage', 'Nail shaping']
      },
      { 
        name: 'Russian Manicure', 
        price: '₹1,499', 
        lasts: '-',
        image: './Nails/Russian Manicure.jpg',
        features: ['Dry manicure technique', 'Perfect cuticles', 'Long-lasting']
      },
      { 
        name: 'Acrylic Extensions', 
        price: '₹2,999', 
        lasts: '-',
        image: './Nails/Acrylic Extensions.jpg',
        features: ['Durable & strong', 'Custom length', 'Classic choice']
      },
      { 
        name: 'Natural Gel Extensions', 
        price: '₹2,999', 
        lasts: '-',
        image: './Nails/Natural Gel Extensions.jpg',
        features: ['Natural look', 'Flexible & light', 'Healthy for nails']
      },
      { 
        name: 'Poly Gel Extensions', 
        price: '₹2,499', 
        lasts: '-',
        image: './Nails/Poly Gel Extensions.jpg',
        features: ['Best of gel & acrylic', 'Odorless', 'Strong & flexible']
      },
      { 
        name: 'Express Gel Tips', 
        price: '₹1,999', 
        lasts: '-',
        image: './Nails/Express Gel Tips.jpg',
        features: ['Quick application', 'Natural look', 'Time-saving']
      },
      { 
        name: 'Plain Gel Polish', 
        price: '₹999', 
        lasts: '-',
        image: './Nails/Plain Gel Polish.jpg',
        features: ['Chip-resistant', 'High shine', 'Long-lasting color']
      },
      { 
        name: 'French Tips', 
        price: '₹1,499', 
        lasts: '-',
        image: './Nails/French Tips.jpg',
        features: ['Classic elegance', 'Timeless style', 'Professional look']
      },
      { 
        name: 'Chrome / Ombre / Cat Eye', 
        price: '₹1,499 each', 
        lasts: '-',
        image: './Nails/Chrome  Ombre  Cat Eye.jpeg',
        features: ['Trendy finishes', 'Eye-catching', 'Multiple styles']
      },
      { 
        name: 'Marble', 
        price: '₹1,999', 
        lasts: '-',
        image: './Nails/Marble.jpeg',
        features: ['Artistic design', 'Unique patterns', 'Sophisticated look']
      },
      { 
        name: 'Matt Polish', 
        price: '₹1,499', 
        lasts: '-',
        image: './Nails/Matt Polish.jpg',
        features: ['Matte finish', 'Modern aesthetic', 'Chic style']
      },
      { 
        name: 'Nail Art (Per Finger)', 
        price: 'Starts at ₹99', 
        lasts: '-',
        image: './Nails/Nail Art Per Finger.jpg',
        features: ['Custom designs', 'Creative expression', 'Personalized art']
      },
      { 
        name: 'Refill', 
        price: '₹1,699', 
        lasts: '-',
        image: './Nails/Refill.jpg',
        features: ['Maintain extensions', 'Fill growth gap', 'Keep fresh look']
      },
      { 
        name: 'Overlay', 
        price: '₹1,499', 
        lasts: '-',
        image: './Nails/Overlay.jpg',
        features: ['Strengthen natural nails', 'Add protection', 'Natural enhancement']
      },
      { 
        name: 'Removal', 
        price: '₹999', 
        lasts: '-',
        image: './Nails/Removal.jpg',
        features: ['Safe removal', 'No damage', 'Professional care']
      },
    ]
  }
];

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

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('pmu');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [searchParams] = useSearchParams();
  const currentCategory = serviceCategories.find(c => c.id === activeCategory);

  // Sync active tab when ?category= param changes (e.g. from header dropdown)
  useEffect(() => {
    const cat = searchParams.get('category');
    const validIds = serviceCategories.map(c => c.id);
    if (cat && validIds.includes(cat)) {
      setActiveCategory(cat);
      // Scroll past hero so the tabs + content are visible
      setTimeout(() => {
        const section = document.getElementById('services-tabs');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [searchParams]);

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=600&fit=crop"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 to-[#1e3a5f]/70"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-4"
          >
            Services
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <span className="text-white/80 font-medium">Home</span>
            <span className="mx-3 text-white/60">›</span>
            <span className="text-white font-medium">Services</span>
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-1/4 right-1/4 text-[#f97316]/30">
          <svg width="60" height="60" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
          </svg>
        </div>
      </section>

      {/* Category Tabs */}
      <section id="services-tabs" className="py-6 bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1e3a5f] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section for Category */}
      <section className="py-6 bg-gradient-to-b from-[#fef5ed] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              Transform Your Look with Our {currentCategory?.title}
            </h2>
            <p className="text-xl text-[#f97316] italic max-w-3xl mx-auto">
              "{currentCategory?.tagline}"
            </p>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Experience professional beauty treatments that enhance your natural features and boost your confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {currentCategory?.services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="md:col-span-2 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover min-h-[250px] md:min-h-[300px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    {service.price && (
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-[#f97316] text-white px-4 py-2 rounded-full font-bold">
                          {service.price}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-3">
                        {service.name}
                      </h3>
                      
                      {service.description && (
                        <p className="text-gray-600 mb-4 text-lg">
                          {service.description}
                        </p>
                      )}

                      {/* Features List */}
                      {service.features && (
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-[#f97316] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Duration and Sessions */}
                      <div className="flex flex-wrap gap-6 mb-6">
                        {service.lasts && service.lasts !== '-' && (
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-[#fef5ed] flex items-center justify-center">
                              <Clock className="w-5 h-5 text-[#d4a547]" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Duration</p>
                              <p className="font-semibold text-gray-800">{service.lasts}</p>
                            </div>
                          </div>
                        )}
                        {service.sessions && (
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-[#fef5ed] flex items-center justify-center">
                              <Sparkles className="w-5 h-5 text-[#d4a547]" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Sessions</p>
                              <p className="font-semibold text-gray-800">{service.sessions}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Expert Info and CTA */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <img
                          src="./avatar.png"
                          alt="Expert"
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#f97316]"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">Expert Specialist</p>
                          <p className="text-sm text-gray-500">Certified Professional</p>
                        </div>
                      </div>
                      <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2d4f7a] transition-colors flex items-center gap-2 whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Price Tiers Note for PMU */}
          {activeCategory === 'pmu' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 p-8 bg-gradient-to-br from-[#1e3a5f] to-[#2d4f7a] rounded-2xl text-white"
            >
              <h4 className="font-bold text-2xl text-[#d4a547] mb-6 flex items-center gap-2">
                <Star className="w-6 h-6" />
                Price Tiers
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h5 className="text-xl font-bold text-[#d4a547] mb-2">PRO Tier</h5>
                  <p className="text-white/90">
                    Performed by certified artists trained in-house. Ideal for standard procedures with professional results.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h5 className="text-xl font-bold text-[#d4a547] mb-2">LUX Tier</h5>
                  <p className="text-white/90">
                    Performed by our founder/senior expert. Best for complex cases or premium, customized results.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-white/70 text-sm">*All prices are inclusive of taxes</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Before After Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fef5ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              After Treatment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the amazing transformations our clients experience with our expert treatments
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
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-white"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={treatment.before}
                    alt="Before treatment"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
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
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-1 h-5 bg-[#1e3a5f] rounded-full"></div>
                        <div className="w-1 h-5 bg-[#1e3a5f] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-[#1e3a5f]">Before</span>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-[#f97316] px-5 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-white">After</span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#f97316]"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">Slide to compare</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience excellence in beauty treatments with our professional services and expert care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Expert Specialists', desc: 'Certified professionals with years of experience' },
              { icon: '✨', title: 'Premium Products', desc: 'High-quality, safe, and tested products' },
              { icon: '🏆', title: 'Proven Results', desc: 'Thousands of satisfied clients and transformations' },
              { icon: '💎', title: 'Customized Treatments', desc: 'Personalized approach for each client' },
              { icon: '🔬', title: 'Advanced Techniques', desc: 'Latest technology and methods in beauty' },
              { icon: '❤️', title: 'Client-Centric Care', desc: 'Your comfort and satisfaction is our priority' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#fef5ed] p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}