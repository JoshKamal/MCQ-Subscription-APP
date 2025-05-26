import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string | number): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

export const subscriptionPlanFeatures = {
  basic: [
    { text: "Access to 1,000+ MCQs", included: true },
    { text: "Basic performance tracking", included: true },
    { text: "Core medical topic modules", included: true },
    { text: "Detailed explanations", included: false },
    { text: "Advanced analytics", included: false },
    { text: "Specialized modules", included: false },
  ],
  premium: [
    { text: "Access to 3,500+ MCQs", included: true },
    { text: "Advanced performance analytics", included: true },
    { text: "All standard medical modules", included: true },
    { text: "Detailed explanations", included: true },
    { text: "Personalized study plans", included: true },
    { text: "Specialty exam preparation", included: false },
  ],
  professional: [
    { text: "Access to all 5,000+ MCQs", included: true },
    { text: "Comprehensive analytics dashboard", included: true },
    { text: "All medical modules and specialties", included: true },
    { text: "Expert detailed explanations", included: true },
    { text: "AI-powered study recommendations", included: true },
    { text: "Specialty exam preparation", included: true },
  ],
};

export const testimonials = [
  {
    text: "This platform has been instrumental in my USMLE preparation. The comprehensive question bank and detailed explanations helped me understand complex concepts.",
    name: "Dr. Sarah Johnson",
    title: "Medical Resident",
    rating: 5,
  },
  {
    text: "The analytics feature is fantastic for identifying knowledge gaps. I've seen a significant improvement in my exam scores since subscribing to the Premium plan.",
    name: "James Rodriguez",
    title: "Medical Student",
    rating: 5,
  },
  {
    text: "Worth every penny! The specialized modules and practice questions align perfectly with my board exam curriculum. The mobile responsiveness is a huge plus.",
    name: "Dr. Michael Chen",
    title: "Family Medicine",
    rating: 4.5,
  },
];

export const faqs = [
  {
    question: "Can I switch between subscription plans?",
    answer: "Yes, you can upgrade or downgrade your subscription plan at any time. Changes will take effect at the start of your next billing cycle."
  },
  {
    question: "Is there a free trial available?",
    answer: "We offer a 7-day free trial for all new subscribers. You can cancel anytime during the trial period without being charged."
  },
  {
    question: "How often is new content added?",
    answer: "We update our question bank weekly with new questions and improve explanations based on the latest medical guidelines and research."
  },
  {
    question: "Can I access the platform on mobile devices?",
    answer: "Yes, our platform is fully responsive and works on desktops, tablets, and mobile phones."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period."
  }
];
