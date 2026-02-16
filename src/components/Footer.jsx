import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

const services = [
  'Microblading',
  'Ombre Brows',
  'Lip Blush',
  'Lash Extensions',
  'Hydrafacial',
  'Nail Extensions'
];

const quickLinks = [
  { name: 'Home', href: 'Home' },
  { name: 'About Us', href: 'About' },
  { name: 'Services', href: 'Services' },
  { name: 'Pricing', href: 'Pricing' },
  { name: 'Contact', href: 'Contact' },
  { name: 'Book Appointment', href: 'Appointment' }
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter Section */}
      <div className="bg-[#d4a547] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-[#1a1a1a]">Subscribe to Our Newsletter</h3>
            <p className="text-[#1a1a1a]/70">Get updates on new services, offers, and beauty tips.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/20 border-white/30 text-[#1a1a1a] placeholder:text-[#1a1a1a]/60 min-w-[250px]"
            />
            <Button className="bg-[#1a1a1a] hover:bg-[#333] text-[#d4a547] px-4">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6992df5c6aaff0b43486517a/9685a4663_image.png" 
                  alt="Brow Crush" 
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6">
                At Brow Crush, we believe beauty is deeply personal—and we're here to enhance what's already yours.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#d4a547] rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/browcrush.studio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#d4a547] rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      to={createPageUrl('Services')} 
                      className="text-gray-300 hover:text-[#d4a547] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={createPageUrl(link.href)} 
                      className="text-gray-300 hover:text-[#d4a547] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4a547] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">2nd Floor, Raja Rajeshwari Nagar, Kondapur, Hyderabad, Telangana – 500084</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4a547] flex-shrink-0" />
                  <span className="text-gray-300">73 31 165 674</span>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#d4a547] flex-shrink-0" />
                  <span className="text-gray-300">@browcrush.studio</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#d4a547] flex-shrink-0" />
                  <span className="text-gray-300">Mon-Sat: 10:00am - 7:00pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Brow Crush Studio & Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#d4a547] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#d4a547] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}