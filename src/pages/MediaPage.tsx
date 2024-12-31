import React from 'react';
import EventCard from '../components/EventCard';

const events = [
  {
    title: "Product Management Summit 2024",
    date: "March 15, 2024",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
    description: "Join us for an intensive day of product management insights, featuring keynote speakers and interactive workshops.",
    registrationLink: "#"
  },
  {
    title: "Template Mastery Workshop",
    date: "April 2, 2024",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2000",
    description: "Learn how to maximize the potential of our templates in this hands-on workshop led by Olanrewaju Bello.",
    registrationLink: "#"
  },
  {
    title: "Product Ninjas Networking Night",
    date: "May 20, 2024",
    location: "New York City, NY",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000",
    description: "Connect with fellow product managers and share experiences in using our templates.",
    registrationLink: "#"
  }
];

const MediaPage = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Events & Media
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Join our upcoming events and connect with the Product Angels community
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPage;