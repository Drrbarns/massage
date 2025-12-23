
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  category: 'Massage' | 'Treatment' | 'Experience' | 'Companionship';
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}
