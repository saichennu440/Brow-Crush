import React, { useState } from 'react';
import { motion } from 'framer-motion';
//import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from "sonner";

const serviceOptions = [
  { value: 'microblading', label: 'Microblading' },
  { value: 'ombre_brows', label: 'Ombre Brows' },
  { value: 'combination_brows', label: 'Combination Brows' },
  { value: 'nano_brows', label: 'Nano Brows' },
  { value: 'lip_neutralization', label: 'Lip Neutralization' },
  { value: 'lip_blush', label: 'Lip Blush' },
  { value: 'eyeliner', label: 'Eye Liner PMU' },
  { value: 'cheek_blush_pmu', label: 'Cheek Blush PMU' },
  { value: 'brow_lamination', label: 'Brow Lamination' },
  { value: 'lash_extensions', label: 'Lash Extensions' },
  { value: 'lash_lift', label: 'Lash Lift' },
  { value: 'hydrafacial', label: 'Hydrafacial' },
  { value: 'facial', label: 'Other Facials' },
  { value: 'nails', label: 'Nails' },
  { value: 'paramedical', label: 'Paramedical Treatment' },
  { value: 'other', label: 'Other / Consultation' },
];

const timeSlots = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: null,
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // await base44.entities.Appointment.create({
    //   ...formData,
    //   date: formData.date ? format(formData.date, 'yyyy-MM-dd') : null
    // });
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success('Appointment request submitted!');
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-12 text-center max-w-md"
        >
          <div className="w-20 h-20 bg-[#d4a547] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-[#1a1a1a]" />
          </div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Booking Request Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Brow Crush! We'll contact you shortly to confirm your appointment.
          </p>
          <Button 
            onClick={() => {
              setIsSuccess(false);
              setFormData({ name: '', email: '', phone: '', service: '', date: null, time: '', message: '' });
            }}
            className="bg-[#1a1a1a] text-[#d4a547] hover:bg-[#2a2a2a]"
          >
            Book Another Appointment
          </Button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=600&fit=crop"
            alt="Appointment"
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
            Book Appointment
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 inline-flex items-center bg-white rounded-full px-6 py-3"
          >
            <span className="text-[#f97316] font-medium">Home</span>
            <span className="mx-3 text-gray-400">›</span>
            <span className="text-[#1e3a5f] font-medium">Appointment</span>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
                Schedule Your <span className="text-[#d4a547]">Visit</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-gray-200 focus:border-[#d4a547]"
                  />
                  <Input
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="border-gray-200 focus:border-[#d4a547]"
                  />
                </div>

                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="border-gray-200 focus:border-[#d4a547]"
                />

                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({...formData, service: value})}
                >
                  <SelectTrigger className="border-gray-200">
                    <SelectValue placeholder="Select Service *" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="grid md:grid-cols-2 gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-gray-200"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-[#d4a547]" />
                        {formData.date ? format(formData.date, 'PPP') : 'Select Date *'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => setFormData({...formData, date})}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>

                  <Select
                    value={formData.time}
                    onValueChange={(value) => setFormData({...formData, time: value})}
                  >
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="Preferred Time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  placeholder="Additional notes or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="border-gray-200 focus:border-[#d4a547] min-h-[120px]"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.service || !formData.date}
                  className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-[#d4a547] py-6 text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Book Appointment'}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1a1a1a] rounded-3xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold text-[#d4a547] mb-6">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#d4a547] flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-400">2nd Floor, Raja Rajeshwari Nagar, Kondapur, Hyderabad, Telangana – 500084</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#d4a547] flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-400">73 31 165 674</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#d4a547] flex-shrink-0" />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-gray-400">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f0e8] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Before Your Appointment</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#d4a547] flex-shrink-0 mt-0.5" />
                    <span>Avoid facials, peels, or laser 7 days before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#d4a547] flex-shrink-0 mt-0.5" />
                    <span>Stop retinol/AHA/BHA creams 7 days before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#d4a547] flex-shrink-0 mt-0.5" />
                    <span>No alcohol or caffeine 24-48 hours before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#d4a547] flex-shrink-0 mt-0.5" />
                    <span>Come with a clean face (no makeup)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#d4a547] flex-shrink-0 mt-0.5" />
                    <span>For brows: No threading/waxing 3 days prior</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}