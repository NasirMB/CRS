'use client';

import { useState } from 'react';
import { districts } from '@/lib/data';
import { ArrowRight, BadgeCheck, Clock3, Mail, MapPin, PhoneCall } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    district: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        district: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact-us"
      aria-labelledby="contact-us-heading"
      className="py-10 md:py-12 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbf7_100%)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-card p-4 md:p-6 lg:p-8 relative overflow-hidden">
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-crs-sage/45 blur-2xl" />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-start relative z-10">
            <div>
              <p className="section-kicker mb-2">Public Inquiry</p>
              <h2 id="contact-us-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-crs-dark mb-3">Contact Us</h2>
              <p className="text-base md:text-lg text-gray-600 mb-5">
                Reach CRS for district data requests, reporting support, publications, and service guidance.
              </p>
              <div className="space-y-2.5 mb-5">
                {[
                  { icon: BadgeCheck, text: 'Official CRS support channel' },
                  { icon: Clock3, text: 'Timely response for public inquiries' },
                  { icon: MapPin, text: 'Coverage across all Balochistan districts' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 rounded-xl border border-[#d8e2d4] bg-white px-4 py-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf6e9] text-crs-primary">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold text-crs-dark">{item.text}</p>
                  </div>
                ))}
              </div>
              <address className="not-italic rounded-2xl border border-[#d8e2d4] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Direct Contact</p>
                <div className="space-y-2.5">
                  <a href="mailto:contact.crs@balochistan.gov.pk" className="inline-flex items-center gap-2 text-sm text-crs-dark hover:text-crs-primary">
                    <Mail className="h-4 w-4 text-crs-primary" />
                    contact.crs@balochistan.gov.pk
                  </a>
                  <a href="tel:+92819201676" className="inline-flex items-center gap-2 text-sm text-crs-dark hover:text-crs-primary">
                    <PhoneCall className="h-4 w-4 text-crs-primary" />
                    +92 81 9201676
                  </a>
                </div>
              </address>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border border-[#d8e2d4] rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_14px_34px_rgba(11,46,26,0.08)]"
            >
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
                className="w-full px-4 h-12 border border-gray-300 rounded-xl focus:outline-none focus:border-crs-primary focus-visible:ring-2 focus-visible:ring-crs-primary/25 transition-all"
                placeholder="Your full name"
              />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full px-4 h-12 border border-gray-300 rounded-xl focus:outline-none focus:border-crs-primary focus-visible:ring-2 focus-visible:ring-crs-primary/25 transition-all"
                placeholder="your.email@example.com"
              />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
                className="w-full px-4 h-12 border border-gray-300 rounded-xl focus:outline-none focus:border-crs-primary focus-visible:ring-2 focus-visible:ring-crs-primary/25 transition-all"
                placeholder="+92 300 1234567"
              />
              </div>

              <div>
                <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">District</label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                autoComplete="address-level2"
                className="w-full px-4 h-12 border border-gray-300 rounded-xl focus:outline-none focus:border-crs-primary focus-visible:ring-2 focus-visible:ring-crs-primary/25 transition-all"
              >
                <option value="">Select a district</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.name}>
                    {district.name} ({district.division})
                  </option>
                ))}
              </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                autoComplete="on"
                className="w-full px-4 h-12 border border-gray-300 rounded-xl focus:outline-none focus:border-crs-primary focus-visible:ring-2 focus-visible:ring-crs-primary/25 transition-all"
                placeholder="What is your inquiry about?"
              />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-crs-primary focus-visible:ring-2 focus-visible:ring-crs-primary/25 transition-all"
                placeholder="Please provide details about your inquiry..."
              />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-crs-gold px-6 py-3 text-sm sm:text-base font-bold text-crs-dark shadow-[0_10px_24px_rgba(217,130,25,0.34),0_2px_8px_rgba(217,130,25,0.28)] hover:bg-[#e79a36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold"
                >
                  Submit Inquiry <ArrowRight className="h-4 w-4" />
                </button>
                {submitted && (
                  <p className="text-green-700 text-sm mt-3 text-center font-semibold">
                    Thank you! Your inquiry has been received.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

