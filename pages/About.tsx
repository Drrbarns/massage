
import React from 'react';
import { Shield, Sparkles, UserCheck, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-luxuryPink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-luxuryGold/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Premium Mobile Luxury. <br />
            <span className="text-luxuryPink italic">Discreet. Professional. Unforgettable.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed italic">
            "Luxury Sensation Massage GH is a premium mobile and incall service bringing relaxation and refined companionship directly to you."
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block border-l-4 border-luxuryPink pl-6">
                <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Our Commitment</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Whether in the comfort of your private space or our exclusive incall setting, our expertly trained therapists deliver calm, confidence, and satisfaction with the highest level of discretion.
                </p>
              </div>
              <p className="text-gray-500 leading-relaxed">
                In a world that never stops, we provide the ultimate pause. Our philosophy centers on the holistic well-being of our elite clientele, ensuring every touch is purposeful and every session is an escape from the ordinary.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-luxuryPink/10 flex items-center justify-center text-luxuryPink">
                    <Shield size={24} />
                  </div>
                  <span className="font-bold text-gray-700 tracking-wider">SECURE & PRIVATE</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-luxuryPink/10 flex items-center justify-center text-luxuryPink">
                    <UserCheck size={24} />
                  </div>
                  <span className="font-bold text-gray-700 tracking-wider">ELITE THERAPISTS</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-luxuryPink/10 flex items-center justify-center text-luxuryPink">
                    <Sparkles size={24} />
                  </div>
                  <span className="font-bold text-gray-700 tracking-wider">LUXURY PRODUCTS</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-luxuryPink/10 flex items-center justify-center text-luxuryPink">
                    <MapPin size={24} />
                  </div>
                  <span className="font-bold text-gray-700 tracking-wider">MOBILE SERVICE</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 border-2 border-luxuryPink rounded-[3rem] translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1000"
                alt="About Luxury Sensation"
                className="relative rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-16">The Sensation Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-luxuryPink mb-4">ELEGANCE</h3>
              <p className="text-gray-500 italic">Every detail of our service, from the aesthetics of our space to the conduct of our staff, reflects true elegance.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-luxuryPink mb-4">COMFORT</h3>
              <p className="text-gray-500 italic">Your peace of mind is our priority. We create environments where you can truly let go.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-luxuryPink mb-4">EXCELLENCE</h3>
              <p className="text-gray-500 italic">We don't just meet standards; we set them. Expect nothing less than perfection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapists */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 text-gray-900">Our Elite Therapists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl aspect-[3/4]">
              <img
                src="/lady1.jpg"
                alt="Elite Therapist 1"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <span className="text-white text-xl font-serif tracking-widest">ELAINE</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl aspect-[3/4]">
              <img
                src="/lady2.jpg"
                alt="Elite Therapist 2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <span className="text-white text-xl font-serif tracking-widest">SOPHIA</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl aspect-[3/4]">
              <img
                src="/lady3.jpg"
                alt="Elite Therapist 3"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <span className="text-white text-xl font-serif tracking-widest">ISABELLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
