import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, ShieldCheck, Heart, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SERVICES, HOURS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  const heroSlides = [
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000",
      tag: "Premium Massage & Companionship",
      title: "Welcome to Luxury Sensation",
      subtitle: "You deserve more than a rushed massage — experience true luxury, intimacy, and relaxation in a discreet environment."
    },
    {
      url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000",
      tag: "Discreet Mobile Services",
      title: "Luxury Brought To Your Door",
      subtitle: "Whether at a hotel or your private residence, our elite therapists provide the ultimate sanctuary of peace."
    },
    {
      url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000",
      tag: "Elite VIP Experiences",
      title: "Refined Companionship",
      subtitle: "Sophisticated, professional, and entirely bespoke. Experience the pinnacle of companionship in the heart of Accra."
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1200",
      title: "Full Body Rejuvenation",
      subtitle: "The ultimate escape from the daily grind."
    },
    {
      url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200",
      title: "Aromatherapy Excellence",
      subtitle: "Sensory delight with premium essential oils."
    },
    {
      url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200",
      title: "Intimate Tranquility",
      subtitle: "Bespoke settings tailored for deep relaxation."
    }
  ];

  // Hero Slider Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Gallery Slider Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGallerySlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextHero = () => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  const prevHero = () => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Slider Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentHeroSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
              }`}
          >
            <div className="absolute inset-0 z-0">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-luxuryPink/20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className={`max-w-2xl transition-all duration-1000 delay-300 ${index === currentHeroSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="inline-block text-luxuryPink font-semibold uppercase tracking-[0.3em] mb-4 text-sm">{slide.tag}</span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  {slide.title.split(' ').map((word, i) => (
                    word === 'Luxury' || word === 'Sensation' ? <span key={i} className="text-luxuryPink">{word} </span> : word + ' '
                  ))}
                  {index === 0 && <span className="text-gray-400">GH</span>}
                </h1>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">
                  "{slide.subtitle}"
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/book"
                    className="bg-luxuryPink text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-luxuryPink/90 transition-all shadow-xl shadow-luxuryPink/30 text-center"
                  >
                    Book Your Experience
                  </Link>
                  <Link
                    to="/services"
                    className="border-2 border-luxuryPink text-luxuryPink px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-luxuryPink hover:text-white transition-all text-center"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Hero Nav Controls */}
        <div className="absolute bottom-12 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroSlide(index)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${index === currentHeroSlide ? 'bg-luxuryPink w-12' : 'bg-gray-300 w-6'
                    }`}
                />
              ))}
            </div>
            <div className="hidden md:flex gap-4">
              <button onClick={prevHero} className="p-3 rounded-full border border-gray-200 hover:bg-luxuryPink hover:text-white hover:border-luxuryPink transition-all text-gray-400">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextHero} className="p-3 rounded-full border border-gray-200 hover:bg-luxuryPink hover:text-white hover:border-luxuryPink transition-all text-gray-400">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experience - The Nice Massage Feature Slider */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-luxuryPink font-semibold uppercase tracking-widest text-sm mb-2 block">The Gallery of Bliss</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pure Sensory Luxury</h2>
            <div className="w-24 h-1 bg-luxuryPink mx-auto rounded-full"></div>
          </div>

          <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl h-[500px] md:h-[600px]">
            {galleryImages.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentGallerySlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-12 md:p-20">
                  <div className={`max-w-xl text-white transition-all duration-700 delay-300 ${index === currentGallerySlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h3 className="font-serif text-3xl md:text-5xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-lg italic opacity-90 mb-8">{slide.subtitle}</p>
                    <Link to="/book" className="inline-flex items-center gap-2 text-white bg-luxuryPink/80 hover:bg-luxuryPink backdrop-blur-md px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all">
                      <Sparkles size={16} /> Explore This Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Gallery Navigation Buttons */}
            <button
              onClick={() => setCurrentGallerySlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentGallerySlide((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 right-12 z-20 flex gap-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGallerySlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentGallerySlide ? 'bg-luxuryPink w-10' : 'bg-white/40'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-luxuryPink font-semibold uppercase tracking-widest text-sm mb-2 block">Our Signature Offerings</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-16">Bespoke Experiences</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-luxuryPink uppercase tracking-tighter">
                    {service.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-3 line-clamp-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-luxuryPink font-bold uppercase tracking-widest text-xs hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-luxuryPink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all group border border-white/50">
              <div className="w-16 h-16 bg-luxuryPink/10 text-luxuryPink rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Star size={32} />
              </div>
              <h4 className="font-serif text-2xl font-bold mb-4">Elite Quality</h4>
              <p className="text-gray-500 leading-relaxed italic">
                Only the finest oils, linens, and trained therapists to ensure your total satisfaction.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all group border border-white/50">
              <div className="w-16 h-16 bg-luxuryPink/10 text-luxuryPink rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h4 className="font-serif text-2xl font-bold mb-4">Total Discretion</h4>
              <p className="text-gray-500 leading-relaxed italic">
                Privacy is our utmost priority. We operate with high standards of confidentiality.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all group border border-white/50">
              <div className="w-16 h-16 bg-luxuryPink/10 text-luxuryPink rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Heart size={32} />
              </div>
              <h4 className="font-serif text-2xl font-bold mb-4">Pure Intimacy</h4>
              <p className="text-gray-500 leading-relaxed italic">
                A warm, sensual environment designed for those who appreciate the finer things in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-luxuryPink/20 rounded-3xl p-12 text-center bg-white shadow-xl">
            <Clock className="mx-auto mb-6 text-luxuryPink" size={48} />
            <h2 className="font-serif text-3xl font-bold mb-10 uppercase tracking-widest">Opening Hours</h2>
            <div className="space-y-6">
              {HOURS.map((hour, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0">
                  <span className="font-medium text-gray-700">{hour.day}</span>
                  <span className="text-luxuryPink font-bold italic">{hour.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-luxuryPink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-8">
            Relax Now — You Owe Yourself This Moment.
          </h2>
          <Link
            to="/book"
            className="inline-block bg-white text-luxuryPink px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
