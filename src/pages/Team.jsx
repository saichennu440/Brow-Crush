import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ashley Willson',
    role: 'Dermatologist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
    bio: 'Board-certified dermatologist with over 15 years of experience in treating various skin conditions.'
  },
  {
    name: 'Danial Frankie',
    role: 'Cosmetic Surgeon',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
    bio: 'Specializes in minimally invasive cosmetic procedures with a focus on natural-looking results.'
  },
  {
    name: 'Rihana Roy',
    role: 'Skin Specialist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
    bio: 'Expert in treating acne, eczema, and other chronic skin conditions with holistic approaches.'
  },
  {
    name: 'Kenneth Fong',
    role: 'Anti-Aging Expert',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop',
    bio: 'Pioneering anti-aging treatments that combine science with natural rejuvenation techniques.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Laser Specialist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
    bio: 'Certified laser treatment specialist with expertise in skin resurfacing and hair removal.'
  },
  {
    name: 'Michael Chen',
    role: 'Aesthetician',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop',
    bio: 'Licensed aesthetician specializing in facial treatments and personalized skincare routines.'
  },
  {
    name: 'Emma Williams',
    role: 'Clinical Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
    bio: 'Oversees all clinical operations ensuring the highest standards of patient care and safety.'
  },
  {
    name: 'David Martinez',
    role: 'Research Lead',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
    bio: 'Leads our research initiatives in developing cutting-edge dermatological treatments.'
  }
];

export default function Team() {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=600&fit=crop"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1e3a5f]/70"></div>
        </div>
        
        <div className="absolute top-1/4 right-1/4 text-[#f97316]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
          </svg>
        </div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Our Team
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 inline-flex items-center bg-white rounded-full px-6 py-3"
          >
            <span className="text-[#f97316] font-medium">Home</span>
            <span className="mx-3 text-gray-400">›</span>
            <span className="text-[#1e3a5f] font-medium">Our Team</span>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#fef5ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#f97316] font-medium mb-2">Meet our Team</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
              We Employ only Specialists
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our team of highly qualified professionals is dedicated to providing you with the best skincare treatments and personalized care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-0 right-0">
                        <div className="flex justify-center gap-3 mb-4">
                          <a href="#" className="w-10 h-10 bg-white/20 hover:bg-[#f97316] rounded-full flex items-center justify-center transition-colors">
                            <Facebook className="w-5 h-5 text-white" />
                          </a>
                          <a href="#" className="w-10 h-10 bg-white/20 hover:bg-[#f97316] rounded-full flex items-center justify-center transition-colors">
                            <Twitter className="w-5 h-5 text-white" />
                          </a>
                          <a href="#" className="w-10 h-10 bg-white/20 hover:bg-[#f97316] rounded-full flex items-center justify-center transition-colors">
                            <Instagram className="w-5 h-5 text-white" />
                          </a>
                          <a href="#" className="w-10 h-10 bg-white/20 hover:bg-[#f97316] rounded-full flex items-center justify-center transition-colors">
                            <Linkedin className="w-5 h-5 text-white" />
                          </a>
                        </div>
                        <p className="text-white/80 text-sm px-6 text-center">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#1e3a5f]">{member.name}</h3>
                    <p className="text-gray-500 mt-1">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-white/80 text-lg mb-8">
              We're always looking for talented professionals who share our passion for skincare and patient care. If you're interested in joining our team, we'd love to hear from you.
            </p>
            <a 
              href="mailto:careers@clinicmaster.com"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#fb923c] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
            >
              Contact Us About Careers
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}