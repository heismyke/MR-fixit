import type {
  Service,
  HowItWorksStep,
  Feature,
  Testimonial,
  Stat,
} from "./types";

export const services: Service[] = [
  {
    id: "mechanics",
    title: "Mechanics",
    description:
      "Expert mechanics at your location for any car repair or maintenance.",
    icon: "WrenchScrewdriverIcon",
  },
  {
    id: "electricians",
    title: "Auto Electricians",
    description:
      "Professional auto electricians to fix electrical issues on the spot.",
    icon: "BoltIcon",
  },
  {
    id: "tire-service",
    title: "Tire Services",
    description: "Quick tire pumping and repair services wherever you are.",
    icon: "ArrowPathIcon",
  },
  {
    id: "fuel-delivery",
    title: "Fuel Delivery",
    description: "Emergency fuel delivery when you run out on the road.",
    icon: "FireIcon",
  },
  {
    id: "towing",
    title: "Car Towing",
    description:
      "Partner towing services to transport your vehicle safely to your preferred location.",
    icon: "TruckIcon",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "breakdown",
    step: 1,
    title: "Car Breakdown",
    description: "Your car breaks down or needs service.",
  },
  {
    id: "request",
    step: 2,
    title: "Request Help",
    description: "Open the app and select the service you need.",
  },
  {
    id: "geofence",
    step: 3,
    title: "Auto-Match",
    description: "We scan your area and connect you with nearby technicians.",
  },
  {
    id: "fixed",
    step: 4,
    title: "Get Fixed",
    description: "Professional help arrives at your location.",
  },
];

export const features: Feature[] = [
  {
    id: "ai-matching",
    title: "AI-Powered Matching",
    description:
      "Machine learning algorithms analyze location, service type, and technician availability to connect you with the best match instantly.",
    icon: "CpuChipIcon",
  },
  {
    id: "geofencing",
    title: "Smart Geofencing",
    description:
      "AI-powered location matching connects you with the nearest available technician in real-time.",
    icon: "MapPinIcon",
  },
  {
    id: "predictive",
    title: "Predictive Analytics",
    description:
      "ML models predict peak demand times and pre-position technicians in high-traffic areas for faster response.",
    icon: "ChartBarIcon",
  },
  {
    id: "realtime",
    title: "Real-Time Tracking",
    description:
      "Track your technician's location and estimated arrival time on the map.",
    icon: "SignalIcon",
  },
  {
    id: "payment",
    title: "Secure Payments",
    description:
      "Multiple payment options including card, transfer, and cash on service.",
    icon: "CreditCardIcon",
  },
  {
    id: "verified",
    title: "Verified Technicians",
    description:
      "All technicians are background-checked and certified professionals.",
    icon: "ShieldCheckIcon",
  },
  {
    id: "support",
    title: "24/7 AI Support",
    description:
      "AI-powered chatbot for instant responses with human support escalation when needed.",
    icon: "ChatBubbleLeftRightIcon",
  },
  {
    id: "ratings",
    title: "Smart Rating System",
    description:
      "ML-based quality assurance analyzing ratings and feedback to maintain service standards.",
    icon: "StarIcon",
  },
  {
    id: "pricing",
    title: "Dynamic Pricing",
    description:
      "AI algorithms ensure fair, transparent pricing based on service type, location, and time of day.",
    icon: "BanknotesIcon",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Adebayo Johnson",
    role: "Business Owner",
    content:
      "My car broke down on Airport Road and within 15 minutes, a mechanic was at my location. Incredible service!",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Fatima Ahmed",
    role: "Software Engineer",
    content:
      "The geofencing feature is brilliant. No more calling multiple mechanics. The app finds them for you instantly.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Chinedu Okonkwo",
    role: "Entrepreneur",
    content:
      "I ran out of fuel late at night in Wuse. Fuel delivery arrived in 20 minutes. This app is a lifesaver!",
    rating: 5,
  },
  {
    id: "test-4",
    name: "Sarah Musa",
    role: "Marketing Manager",
    content:
      "Professional, fast, and affordable. Mr-Fixit has become my go-to for any car emergency.",
    rating: 5,
  },
];

export const stats: Stat[] = [
  {
    id: "stat-1",
    value: "500+",
    label: "Verified Technicians",
  },
  {
    id: "stat-2",
    value: "10K+",
    label: "Services Completed",
  },
  {
    id: "stat-3",
    value: "15min",
    label: "Average Response Time",
  },
  {
    id: "stat-4",
    value: "4.9/5",
    label: "Customer Rating",
  },
];
