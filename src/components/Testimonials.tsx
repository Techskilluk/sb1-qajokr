import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Teju Adeyinka",
    role: "Product Lead at TechCorp",
    content: "Product Ninjas has transformed how we approach product management. Their templates are invaluable for our team's success.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    content: "The resources provided by Olanrewaju Bello have been instrumental in shaping our product strategy and execution.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150",
    rating: 5
  },
  {
    name: "Petrina Tucker",
    role: "Senior PM at InnovateCo",
    content: "These templates saved us countless hours in planning and documentation. Highly recommended!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150",
    rating: 5
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ name, role, content, image, rating }) => (
  <div className="glass-card p-6 rounded-xl hover-glow transition-all duration-300">
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div className="ml-4">
        <h4 className="text-white font-semibold">{name}</h4>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
    <div className="flex mb-3">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-300">{content}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;