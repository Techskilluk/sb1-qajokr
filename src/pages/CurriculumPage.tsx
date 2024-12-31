import React from 'react';
import { BookOpen, Code, Target, Users, BarChart, Award } from 'lucide-react';

interface Module {
  title: string;
  description: string;
  duration: string;
  topics: string[];
  icon: React.ReactNode;
}

const modules: Module[] = [
  {
    title: "Product Strategy Fundamentals",
    description: "Learn the core principles of product strategy and market analysis",
    duration: "2 weeks",
    icon: <Target className="w-6 h-6" />,
    topics: [
      "Market Analysis & Research",
      "Product Vision & Strategy",
      "Business Model Canvas",
      "Competitive Analysis"
    ]
  },
  {
    title: "User-Centered Design",
    description: "Master the art of creating products users love",
    duration: "2 weeks",
    icon: <Users className="w-6 h-6" />,
    topics: [
      "User Research Methods",
      "Persona Development",
      "Journey Mapping",
      "Usability Testing"
    ]
  },
  {
    title: "Technical Product Management",
    description: "Bridge the gap between business and technology",
    duration: "3 weeks",
    icon: <Code className="w-6 h-6" />,
    topics: [
      "Technical Architecture",
      "API Design Principles",
      "Agile Development",
      "Technical Requirements"
    ]
  },
  {
    title: "Data-Driven Decision Making",
    description: "Use data to drive product decisions",
    duration: "2 weeks",
    icon: <BarChart className="w-6 h-6" />,
    topics: [
      "Product Analytics",
      "A/B Testing",
      "Metrics & KPIs",
      "Data Visualization"
    ]
  }
];

const CurriculumPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-yellow-300/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Product Management Curriculum
            </h1>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive learning path to master modern product management
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-glow transition-duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                    {module.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{module.title}</h3>
                    <p className="text-yellow-400">{module.duration}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{module.description}</p>
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <BookOpen className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-yellow-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Professional Certification
                </h2>
                <p className="text-gray-400 max-w-2xl">
                  Upon completion of the curriculum, receive a professional certification
                  recognized by leading tech companies. Demonstrate your expertise and
                  advance your career in product management.
                </p>
                <button className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors inline-flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Get Certified
                </button>
              </div>
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-pulse" />
                <div className="absolute inset-4 bg-yellow-400/30 rounded-full" />
                <Award className="absolute inset-8 w-32 h-32 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurriculumPage;