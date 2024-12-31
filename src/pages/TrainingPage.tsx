import React from 'react';
import { BookOpen, Clock, Users, Award, CheckCircle } from 'lucide-react';

interface TrainingFormat {
  title: string;
  description: string;
  duration: string;
  format: string;
  features: string[];
}

const trainingFormats: TrainingFormat[] = [
  {
    title: "Live Workshop",
    description: "Interactive sessions with industry experts",
    duration: "2 days",
    format: "Virtual or In-person",
    features: [
      "Real-time feedback",
      "Group exercises",
      "Networking opportunities",
      "Certificate of completion"
    ]
  },
  {
    title: "Self-Paced Course",
    description: "Learn at your own pace with comprehensive materials",
    duration: "4 weeks",
    format: "Online",
    features: [
      "24/7 access to materials",
      "Practice assignments",
      "Community forum access",
      "Email support"
    ]
  },
  {
    title: "Intensive Bootcamp",
    description: "Accelerated learning program for rapid skill development",
    duration: "1 week",
    format: "Virtual",
    features: [
      "Daily live sessions",
      "1-on-1 coaching",
      "Project reviews",
      "Career guidance"
    ]
  }
];

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-yellow-300/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Product Management Training
            </h1>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              Master the art of product management with our comprehensive training programs
            </p>
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Training Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingFormats.map((format, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-glow transition-duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{format.title}</h3>
                <p className="text-gray-400 mb-4">{format.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                    <span>{format.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2 text-yellow-400" />
                    <span>{format.format}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {format.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center">
                  <button className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-b from-transparent to-yellow-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
                  alt="Sarah Chen"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Sarah Chen</h3>
                  <p className="text-yellow-400">Product Manager at TechCorp</p>
                  <p className="text-gray-400 mt-2">
                    "The training program gave me the confidence and skills to lead major product initiatives. Within 6 months of completion, I secured a promotion to Senior PM."
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150"
                  alt="Marcus Johnson"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Marcus Johnson</h3>
                  <p className="text-yellow-400">Founder & CPO at StartupX</p>
                  <p className="text-gray-400 mt-2">
                    "The practical approach and real-world scenarios covered in the bootcamp were invaluable. It helped me build my startup's product strategy from scratch."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;