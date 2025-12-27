
import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageSquare, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for your message. Our concierge will contact you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">Connect With Us</h1>
          <p className="text-gray-500 max-w-2xl mx-auto italic text-lg">
            Ready to book your luxury experience? Our team is available to assist you with inquiries and appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="font-serif text-3xl font-bold mb-10 border-b border-luxuryPink/20 pb-4">Our Details</h2>
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-luxuryPink shadow-sm mr-6 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Location</h3>
                  <p className="text-lg text-gray-700 font-medium italic">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-luxuryPink shadow-sm mr-6 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</h3>
                  <p className="text-lg text-gray-700 font-medium italic break-all">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-luxuryPink shadow-sm mr-6 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</h3>
                  <p className="text-lg text-gray-700 font-medium italic">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-luxuryPink shadow-sm mr-6 shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    className="text-lg text-luxuryPink font-bold hover:underline italic"
                  >
                    Chat Directly Now
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-luxuryPink hover:bg-luxuryPink hover:text-white transition-all shadow-sm">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-2 rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden relative group">
            <div className="p-12">
              <h2 className="font-serif text-3xl font-bold mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all italic"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all italic"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all italic"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your needs..."
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all italic resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-luxuryPink text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-luxuryPink/90 transition-all shadow-xl shadow-luxuryPink/20 flex items-center justify-center gap-3"
                >
                  <Send size={20} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20">
          <div className="bg-gray-50 p-4 rounded-[3rem] border border-gray-100 shadow-sm h-[400px] md:h-[500px] relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4373449591456!2d-0.1472877!3d5.6496383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf852d798150bd%3A0x7d6560965824987f!2sEric%20Abang%20Amewuda%20Street%2C%20Accra!5e0!3m2!1sen!2sgh!4v1703695000000!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg pointer-events-none hidden md:block">
              <p className="text-sm font-bold text-gray-900">Eric Abang Amewuda Street</p>
              <p className="text-xs text-gray-500">Adjiringanor, Accra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
