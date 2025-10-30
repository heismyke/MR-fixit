export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
