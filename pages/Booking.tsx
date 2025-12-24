
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Phone, CheckCircle2, MessageSquare, ChevronDown, Sparkles } from 'lucide-react';
import { SERVICES, CONTACT_INFO, BOOKING_POLICIES } from '../constants';

const Booking: React.FC = () => {
  const routerLocation = useLocation();
  const queryParams = new URLSearchParams(routerLocation.search);
  const initialServiceId = queryParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: initialServiceId || '',
    date: '',
    time: '',
    location: '',
    locationType: 'Incall' as 'Incall' | 'Outcall',
  });

  const selectedService = SERVICES.find(s => s.id === formData.serviceId) ||
    (formData.serviceId === 'fantasy' ? { title: 'Secret Fantasy Unlocking', price: 'GH¢200', duration: 'Inquiry' } : null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.serviceId) {
      alert("Please select a service first.");
      return;
    }

    const serviceName = selectedService ? selectedService.title : 'Not Selected';
    const price = selectedService ? selectedService.price : 'TBD';
    const settingLabel = formData.locationType === 'Incall' ? 'Visit Massage Area (Incall)' : 'In-Home Service (Outcall)';

    // Pre-formatting the message for WhatsApp
    const message = `*✨ NEW LUXURY BOOKING REQUEST*%0A%0A` +
      `*CLIENT DETAILS*%0A` +
      `• *Name:* ${formData.name}%0A` +
      `• *Phone:* ${formData.phone}%0A%0A` +
      `*SERVICE DETAILS*%0A` +
      `• *Treatment:* ${serviceName}%0A` +
      `• *Price:* ${price}%0A` +
      `• *Setting:* ${settingLabel}%0A%0A` +
      `*SCHEDULE*%0A` +
      `• *Date:* ${formData.date}%0A` +
      `• *Time:* ${formData.time}%0A%0A` +
      `*LOCATION/ADDRESS*%0A` +
      `• ${formData.location || 'Not provided'}`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-luxuryPink font-semibold uppercase tracking-widest text-sm mb-2 block">Reservations</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Secure Your Session</h1>
          <p className="text-gray-500 italic max-w-lg mx-auto">Select your service and preference below. We will finalize your booking via our secure WhatsApp concierge.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-luxuryPink/10 border border-luxuryPink/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Sidebar / Summary */}
            <div className="lg:col-span-2 bg-luxuryPink p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <Sparkles className="absolute -top-10 -right-10 text-white/10 w-40 h-40 rotate-12" />

              <div>
                <h2 className="font-serif text-2xl font-bold mb-8 relative z-10">Your Selection</h2>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Service</p>
                      <p className="font-medium text-lg">{selectedService?.title || 'Waiting for selection...'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Duration</p>
                      <p className="font-medium">{(selectedService as any)?.duration || '---'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Service Setting</p>
                      <p className="font-medium">{formData.locationType === 'Incall' ? 'Visit Our Massage Area' : 'In-Home / Mobile Service'}</p>
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-6 mt-6">
                    <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Total Premium</p>
                    <p className="text-4xl font-serif font-bold">{selectedService?.price || '---'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white/10 p-5 rounded-2xl text-xs leading-relaxed italic border border-white/10 relative z-10">
                "We provide a sanctuary of peace. Every detail of your appointment is handled with absolute discretion and elite care."
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleConfirm} className="lg:col-span-3 p-10 space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-luxuryPink/10 text-luxuryPink flex items-center justify-center text-sm">1</span>
                  Choose Your Service
                </h3>
                <div className="relative">
                  <select
                    required
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full appearance-none bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all font-medium text-gray-700 pr-12 cursor-pointer"
                  >
                    <option value="" disabled>Select from our menu...</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title} — {s.price}</option>
                    ))}
                    <option value="fantasy">Secret Fantasy Unlocking — GH¢200</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-luxuryPink pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-luxuryPink/10 text-luxuryPink flex items-center justify-center text-sm">2</span>
                  Where should we meet?
                </h3>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, locationType: 'Incall' })}
                    className={`flex-1 p-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all border-2 flex flex-col items-center gap-2 ${formData.locationType === 'Incall' ? 'bg-luxuryPink border-luxuryPink text-white shadow-xl scale-[1.02]' : 'bg-white border-gray-100 text-gray-400 hover:border-luxuryPink/30'}`}
                  >
                    <MapPin size={20} />
                    <span>Go to Massage Area</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, locationType: 'Outcall' })}
                    className={`flex-1 p-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all border-2 flex flex-col items-center gap-2 ${formData.locationType === 'Outcall' ? 'bg-luxuryPink border-luxuryPink text-white shadow-xl scale-[1.02]' : 'bg-white border-gray-100 text-gray-400 hover:border-luxuryPink/30'}`}
                  >
                    <User size={20} />
                    <span>In-Home Service</span>
                  </button>
                </div>

                <div className="relative">
                  <textarea
                    required
                    placeholder={formData.locationType === 'Incall' ? "Our massage area is at East Legon. Please confirm your arrival preference here." : "Please provide your Full Address (Residence or Hotel) for our mobile team."}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    rows={2}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all resize-none italic text-sm"
                  ></textarea>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-luxuryPink/10 text-luxuryPink flex items-center justify-center text-sm">3</span>
                  Contact & Schedule
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-luxuryPink/50 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full bg-luxuryPink text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-luxuryPink/90 transition-all shadow-xl shadow-luxuryPink/20 flex items-center justify-center gap-3"
                >
                  <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
                  Confirm Via WhatsApp
                </button>
                <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest italic mt-4">
                  Finalization happens securely on WhatsApp. No payment is taken on this site.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Booking Policies Section */}
        <div className="mt-16 bg-luxuryPink/5 rounded-[2.5rem] p-8 md:p-12 border border-luxuryPink/10">
          <div className="text-center mb-10">
            <span className="w-12 h-12 rounded-full bg-luxuryPink text-white flex items-center justify-center text-xl font-serif font-bold mx-auto mb-4 shadow-lg shadow-luxuryPink/20">!</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Massage & Xcort Booking Policies</h2>
            <p className="text-gray-500 italic max-w-2xl mx-auto">Please review our policies to ensure a seamless and premium experience for both you and our providers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {BOOKING_POLICIES.map((policy, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-luxuryPink/5 hover:shadow-md transition-shadow">
                {policy.title && (
                  <h3 className="font-serif text-xl font-bold text-luxuryPink mb-6 flex items-center gap-3 border-b border-luxuryPink/10 pb-4">
                    <Sparkles size={20} className="fill-luxuryPink/20" />
                    {policy.title}
                  </h3>
                )}
                <ul className="space-y-4">
                  {policy.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-600 leading-relaxed group">
                      <span className="mt-2 w-2 h-2 rounded-full bg-luxuryPink/40 shrink-0 group-hover:bg-luxuryPink transition-colors" />
                      <span className="italic">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
