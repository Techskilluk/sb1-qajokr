import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  image,
  testimonial
}) => {
  return (
    <div className="glass-card rounded-xl p-6 hover-glow transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div className="flex-1">
          <Quote className="h-8 w-8 text-indigo-400 mb-2 opacity-50" />
          <p className="text-gray-300 mb-4">{testimonial}</p>
          <div>
            <h4 className="text-white font-semibold">{name}</h4>
            <p className="text-indigo-400 text-sm">{role}</p>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;