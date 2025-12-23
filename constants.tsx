
import { Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy', path: '/privacy' },
];

export const SERVICES: Service[] = [
  {
    id: 'nuru',
    title: 'Luxury Exclusive Nuru Massage',
    description: 'The ultimate full-body relaxation and sensory experience using specialized oils and techniques for profound connection.',
    price: 'GH¢2300',
    duration: '2hrs',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'couples',
    title: 'Luxury Couples Massage',
    description: 'An intimate, calming escape designed to strengthen connection and shared tranquility in a premium setting.',
    price: 'GH¢3000',
    duration: '2hrs',
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vip-ffm',
    title: 'Luxury VIP FFM Experience',
    description: 'A synchronized, premium session featuring two therapists for deep relaxation and total sensory indulgence.',
    price: 'GH¢4200',
    duration: 'Session',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'companionship',
    title: 'Luxury Companionship',
    description: 'Elite, discreet companionship for refined social and private experiences. Tailored to your specific preferences.',
    price: 'GH¢3000',
    duration: '2hrs',
    category: 'Companionship',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'facial',
    title: 'Luxury Facial Treatment',
    description: 'A rejuvenating facial using premium products to cleanse, exfoliate, and hydrate your skin.',
    price: 'GH¢1000',
    duration: 'Session',
    category: 'Treatment',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mani-pedi',
    title: 'Luxury Manicure & Pedicure',
    description: 'Complete grooming for hands and feet, including massage and premium polish application.',
    price: 'GH¢1200',
    duration: '2hrs',
    category: 'Treatment',
    image: 'https://images.unsplash.com/photo-1610991148667-08709f3e4c41?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'relaxing',
    title: 'Luxury Relaxing Massage',
    description: 'Classic full-body massage techniques designed to melt away stress and muscle tension.',
    price: 'GH¢1300',
    duration: '90mins',
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
  }
];

export const CONTACT_INFO = {
  location: 'Adjinganor by Trassaco, Accra, Ghana',
  email: 'luxuryillusiongh@gmail.com',
  phone: '+233207462928',
  whatsapp: '233207462928'
};

export const HOURS = [
  { day: 'Monday - Friday', time: '10AM – 8PM (Incall)' },
  { day: 'Saturday', time: '10AM – 11PM (Outcall)' },
  { day: 'Sunday', time: 'By Appointment' }
];
