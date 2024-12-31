import React, { useState } from 'react';
import { Calendar, MapPin, Clock, X } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registrationUrl: string;
}

interface RegistrationFormData {
  name: string;
  email: string;
  event: Event | null;
}

const events: Event[] = [
  {
    title: "Product Management Workshop",
    date: "2024-04-15",
    time: "10:00 AM - 2:00 PM",
    location: "Virtual Event",
    description: "Join Olanrewaju Bello for an intensive workshop on modern product management practices and strategies.",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=800",
    registrationUrl: "https://forms.gle/productninjas-workshop-2024"
  },
  {
    title: "Product Ninjas Networking Night",
    date: "2024-04-28",
    time: "6:00 PM - 9:00 PM",
    location: "Tech Hub, San Francisco", 
    description: "Connect with fellow product managers and industry leaders in an evening of networking and knowledge sharing.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800", 
    registrationUrl: "https://forms.gle/productninjas-networking-2024"
  },
  {
    title: "Product Strategy Masterclass",
    date: "2024-03-10",
    time: "9:00 AM - 1:00 PM",
    location: "Virtual Event",
    description: "A comprehensive masterclass on developing effective product strategies in today's market.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
    registrationUrl: "https://forms.gle/productninjas-masterclass-2024"
  },
  {
    title: "Design Thinking Workshop",
    date: "2024-02-20",
    time: "2:00 PM - 5:00 PM",
    location: "Innovation Hub, New York",
    description: "Learn how to apply design thinking principles to product management.",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&w=800",
    registrationUrl: "https://forms.gle/productninjas-design-2024"
  }
];

const RegistrationModal: React.FC<{
  event: Event;
  onClose: () => void;
  onSubmit: (formData: RegistrationFormData) => void;
}> = ({ event, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    event: event
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="glass-card rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">Register for {event.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
};

const EventCard: React.FC<Event> = (event) => {
  const [showModal, setShowModal] = useState(false);

  const handleRegistration = (formData: RegistrationFormData) => {
    console.log('Registration data:', formData);
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    registrations.push(formData);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    window.open(event.registrationUrl, '_blank', 'noopener,noreferrer');
    setShowModal(false);
  };

  const isPastEvent = new Date(event.date) < new Date();

  return (
    <div className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-300 mb-4">{event.description}</p>
        {!isPastEvent && (
          <button
            onClick={() => setShowModal(true)}
            className="block w-full bg-indigo-600 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Register Now
          </button>
        )}
        {isPastEvent && (
          <span className="block w-full text-center py-2 px-4 bg-gray-700 text-gray-400 rounded-md cursor-not-allowed">
            Event Completed
          </span>
        )}
      </div>
      {showModal && (
        <RegistrationModal
          event={event}
          onClose={() => setShowModal(false)}
          onSubmit={handleRegistration}
        />
      )}
    </div>
  );
};

const Events: React.FC = () => {
  const currentDate = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = events.filter(event => new Date(event.date) < currentDate);

  return (
    <section id="events" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Events
        </h2>
        
        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;