
import { Service, NavItem, PolicySection } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy', path: '/privacy' },
];

export const SERVICES: Service[] = [
  {
    id: 'luxury-relaxing',
    title: 'Luxury Relaxing Massage',
    description: 'A combination of Swedish and deep tissue… No sex or happy ending involved.',
    price: 'GHS 1500',
    duration: '60mins',
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'erotic-nuru',
    title: 'Luxury Erotic Nuru Only',
    description: 'Body to body erotic massages only (No happy ending sex).',
    price: 'GHS 1800',
    duration: '90mins',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'reg-nuru',
    title: 'Luxury Reg Nuru Massage',
    description: 'Naked body to body erotic massage and happy ending Sex.',
    price: 'GHS 2300',
    duration: '120mins',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vip-nuru',
    title: 'Luxury Vip Nuru Massage',
    description: 'This is an erotic Nuru Blow and a happy ending sex.',
    price: 'GHS 2500 - GHS 2800',
    duration: '120mins',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sexual-escort',
    title: 'Sexual Escort',
    description: 'Sex service only.',
    price: 'GHS 2000',
    duration: '90mins',
    category: 'Companionship',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vip-ffm-mmf',
    title: 'Vip FFM & Vip MMF',
    description: 'This service gives you the opportunity to explore premium 3some with two sweet ladies.',
    price: 'GHS 4500 - GHS 5500',
    duration: '120mins',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'couples-nuru',
    title: 'Luxury Couples Nuru Massage',
    description: 'An intimate experience for couples.',
    price: 'GHS 4000',
    duration: '180mins',
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'companionship',
    title: 'Luxury Companionship Massage',
    description: 'Elite companionship massage.',
    price: 'GHS 3500',
    duration: '120mins',
    category: 'Companionship',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'special-request',
    title: 'Luxury Special Request',
    description: 'Specifically for those who want a specific body or face type outside our already provided therapists. Special Request for big ass, big boobs, Bbl, white & black ladies.',
    price: 'GHS 5000 - $1,000',
    duration: '180mins',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800'
  }
];

export const OTHER_SERVICES = [
  {
    title: 'Luxury Exclusive Fantasy',
    description: 'Tell us your secret desires and we will make them come true. Lesbians, BDSM, Strippers, Orgy, Anal Raw, Raw Sex,& More.'
  }
];

export const CONTACT_INFO = {
  location: 'Adjiringanor East Legon, Accra Ghana',
  email: 'luxurysensationmassage@gmail.com',
  phone: '+233531131648',
  whatsapp: '233531131648'
};

export const SERVICE_LOCATIONS = {
  incall: 'Incall service means: the client will come to our location at East Legon',
  outcall: 'Outcall service means: our therapists will come to your location hotel, or apartment. Outcall service attracts an extra GHS 200 for transportation going & coming back'
};

export const BOOKING_REQUIREMENTS = 'Half or Full Payment Validate Your Booking To Avoid Any Disappointment From The Client Thanks';

export const HOURS = [
  { day: 'Monday - Saturday', time: '8:00am to 11:30pm' },
  { day: 'Sunday', time: 'By Appointment' }
];

export const BOOKING_POLICIES: PolicySection[] = [
  {
    title: "Before you engage us, Be READY!",
    content: [
      "Please note that part payment validates incall and outcall booking."
    ]
  },
  {
    title: "BOOKING PROCEDURES",
    content: [
      "PROVIDE YOUR NAME & LOCAL CALL NUMBER",
      "CHOOSE YOUR SERVICE, INCALL OR OUTCALL",
      "CHOOSE YOUR THERAPIST & RELAX"
    ]
  },
  {
    title: "Payment & Privacy",
    content: [
      "Make payment deposits to our account",
      "Wait for your therapist to contact you",
      "Map location will be shared with you",
      "Privacy and security is 100% Guaranteed"
    ]
  },
  {
    title: "Important Rules",
    content: [
      "Cancellation of appointments 5hrs before time attracts 30% total fee.",
      "We demand a respectful behavior towards our therapist/service provider",
      "Kindly disclose any health condition or symptoms before your massage session"
    ]
  }
];
