import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    name: "Teju Adeyinka",
    role: "Product Lead",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200",
    testimonial: "The templates from Product Ninjas have transformed how our team approaches product documentation. They're comprehensive yet flexible enough to adapt to our specific needs."
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior PM",
    company: "InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    testimonial: "These templates saved us countless hours in setup time. The structure and guidance provided helped us maintain consistency across all our product initiatives."
  },
  {
    name: "Petrina Tucker",
    role: "Product Director",
    company: "FutureScale",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200",
    testimonial: "Olanrewaju's curation of these templates shows deep understanding of product management needs. They've become an essential part of our product development toolkit."
  }
];

const TestimonialsPage = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            What Our Community Says
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Hear from product leaders who've transformed their workflow with our templates
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;