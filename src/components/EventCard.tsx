import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface EventProps {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  registrationLink: string;
}

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  location,
  image,
  description,
  registrationLink
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <div className="flex items-center text-gray-400 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <a
          href={registrationLink}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover-glow"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default EventCard;