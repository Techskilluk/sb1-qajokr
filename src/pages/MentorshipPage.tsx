import React from 'react';
import { Users, Calendar, Video, Star, Award, Briefcase } from 'lucide-react';

interface Mentor {
  name: string;
  role: string;
  company: string;
  expertise: string[];
  image: string;
  rating: number;
}

const mentors: Mentor[] = [
  {
    name: "David Chen",
    role: "Senior Product Manager",
    company: "TechGiant Inc.",
    expertise: ["B2B Products", "Enterprise Software", "Product Strategy"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150",
    rating: 4.9
  },
  {
    name: "Sarah Williams",
    role: "Director of Product",
    company: "InnovateCorp",
    expertise: ["Consumer Apps", "Mobile Products", "Growth Strategy"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
    rating: 4.8
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Product",
    company: "StartupX",
    expertise: ["Product Leadership", "Team Building", "Product Operations"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150",
    rating: 4.9
  }
];

const MentorshipPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-yellow-300/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              1:1 Product Mentorship
            </h1>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              Learn directly from experienced product leaders who've been there and done that
            </p>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 hover-glow transition-duration-300">
              <Video className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">1:1 Video Sessions</h3>
              <p className="text-gray-400">
                Weekly one-on-one video calls with your mentor for personalized guidance
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 hover-glow transition-duration-300">
              <Calendar className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Flexible Scheduling</h3>
              <p className="text-gray-400">
                Book sessions at times that work best for your schedule
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 hover-glow transition-duration-300">
              <Award className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Career Growth</h3>
              <p className="text-gray-400">
                Get guidance on career development and advancement opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-glow transition-duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                    <p className="text-yellow-400">{mentor.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <Briefcase className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-400">{mentor.company}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-gray-400">{mentor.rating} rating</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Expertise:</h4>
                  <ul className="space-y-1">
                    {mentor.expertise.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors">
                  Book a Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-transparent to-yellow-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Choose Your Mentor</h3>
              <p className="text-gray-400">Browse profiles and select a mentor who matches your goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Book a Session</h3>
              <p className="text-gray-400">Schedule your first mentoring session at a convenient time</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Meet Your Mentor</h3>
              <p className="text-gray-400">Connect via video call for personalized guidance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-white mb-2">Grow & Learn</h3>
              <p className="text-gray-400">Implement feedback and track your progress</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorshipPage;