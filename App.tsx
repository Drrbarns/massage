
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, MessageSquare, Clock, MapPin, Mail, ChevronRight } from 'lucide-react';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Booking from './pages/Booking';
import { NAV_ITEMS, CONTACT_INFO } from './constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-luxuryPink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col items-center">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-luxuryPink">LUXURY SENSATION</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 -mt-1">Massage GH</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase tracking-widest hover:text-luxuryPink transition-colors ${
                  location.pathname === item.path ? 'text-luxuryPink font-semibold' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-luxuryPink text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-luxuryPink/90 transition-all shadow-lg shadow-luxuryPink/20"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-luxuryPink/10">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 font-medium py-2 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-luxuryPink text-white py-3 rounded-full uppercase tracking-widest text-sm"
            >
              Book Your Experience
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-luxuryPink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold tracking-widest text-luxuryPink">LUXURY SENSATION</span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-gray-500">Massage GH</span>
            </Link>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed italic">
              Experience the pinnacle of relaxation and discretion in Accra. Our elite therapists are dedicated to your total well-being and satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-luxuryPink hover:bg-luxuryPink hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-luxuryPink hover:bg-luxuryPink hover:text-white transition-all">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 uppercase tracking-widest text-gray-800 border-b border-luxuryPink/20 pb-2">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-500 hover:text-luxuryPink transition-colors flex items-center group text-sm">
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/book" className="text-gray-500 hover:text-luxuryPink transition-colors flex items-center group text-sm">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 uppercase tracking-widest text-gray-800 border-b border-luxuryPink/20 pb-2">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-luxuryPink shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-luxuryPink shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-luxuryPink shrink-0" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxuryPink/10 pt-8 text-center text-xs text-gray-400">
          <p>Luxury Sensation Massage GH © {new Date().getFullYear()}. All Rights Reserved.</p>
          <p className="mt-2">Designed by Norton Digital Enterprises</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white selection:bg-luxuryPink selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/book" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageSquare size={24} />
          <span className="hidden md:block ml-2 font-medium">Chat with us</span>
        </a>
      </div>
    </HashRouter>
  );
};

export default App;
