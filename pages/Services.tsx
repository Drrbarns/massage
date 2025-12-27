
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Info, CalendarCheck } from 'lucide-react';
import { SERVICES, CONTACT_INFO, OTHER_SERVICES, SERVICE_LOCATIONS, BOOKING_REQUIREMENTS } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-luxuryPink font-semibold uppercase tracking-widest text-sm mb-2 block">Menu of Indulgence</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Premium Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            Select from our curated list of elite treatments and experiences. Each session is tailored to your desires with the highest professionalism.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-luxuryPink/10 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative w-full h-[400px] object-cover rounded-[2.5rem] shadow-2xl"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-luxuryPink bg-luxuryPink/10 px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {service.category}
                  </span>
                  <span className="text-gray-400 text-sm italic">{service.duration}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">{service.title}</h2>
                <p className="text-gray-500 leading-relaxed italic text-lg">{service.description}</p>
                <div className="text-3xl font-serif text-luxuryPink font-bold border-b border-luxuryPink/20 pb-4 inline-block">
                  {service.price}
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to={`/book?service=${service.id}`}
                    className="flex items-center gap-2 bg-luxuryPink text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-luxuryPink/90 transition-all shadow-lg"
                  >
                    <CalendarCheck size={18} /> Book This Service
                  </Link>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-2 border-2 border-luxuryPink text-luxuryPink px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-luxuryPink hover:text-white transition-all"
                  >
                    <Phone size={18} /> Call Us
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Special Fantasy Section */}
          <div className="bg-luxuryPink/5 border border-luxuryPink/20 rounded-[3rem] p-12 text-center mt-20">
            <Info className="mx-auto mb-6 text-luxuryPink" size={40} />
            <h3 className="font-serif text-3xl font-bold mb-4">{OTHER_SERVICES[0].title}</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto italic">
              {OTHER_SERVICES[0].description}
            </p>
            <Link
              to="/book?service=fantasy"
              className="inline-block bg-luxuryPink text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-luxuryPink/90 transition-all shadow-xl"
            >
              Private Booking Inquiry
            </Link>
          </div>

          {/* Additional Info Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 mb-20">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h3 className="font-serif text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Service Locations</h3>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h4 className="font-bold text-luxuryPink mb-2">Incall Service</h4>
                  <p className="italic">The client will come to our location at Eric Abang Amewuda Street Adjiringanor.</p>
                </div>
                <div>
                  <h4 className="font-bold text-luxuryPink mb-2">Outcall Service</h4>
                  <p className="italic">Our therapists will come to your location (hotel or apartment).</p>
                  <p className="text-sm mt-2 text-gray-500">* Attracts an extra 200gh for transportation.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Booking Policy</h3>
              <p className="text-gray-600 leading-relaxed text-lg text-center font-medium">
                {BOOKING_REQUIREMENTS}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ServicesPage;
