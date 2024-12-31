import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Download, FileText, Briefcase, Target, Users, CheckCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import TemplateCard from './components/TemplateCard';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import BookOfMonth from './components/BookOfMonth';
import AboutUs from './pages/AboutUs';
import TrainingPage from './pages/TrainingPage';
import CurriculumPage from './pages/CurriculumPage';
import MentorshipPage from './pages/MentorshipPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ResourcesLayout from './pages/ResourcesLayout';

function App() {
  const templates = [
    {
      title: "Product Requirements Doc",
      description: "Comprehensive template for documenting product requirements, features, and specifications.",
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: "/templates/product-requirements-doc.pdf",
      category: "Documentation",
      format: "PDF"
    },
    {
      title: "Product Roadmap",
      description: "Strategic planning template for product development and feature releases.",
      icon: <Target className="w-6 h-6" />,
      downloadUrl: "/templates/product-roadmap.xlsx",
      category: "Planning",
      format: "XLSX"
    },
    {
      title: "User Research Plan",
      description: "Template for planning and conducting user research and interviews.",
      icon: <Users className="w-6 h-6" />,
      downloadUrl: "/templates/user-research-plan.docx",
      category: "Research",
      format: "DOCX"
    },
    {
      title: "Sprint Planning",
      description: "Agile sprint planning and tracking template for product teams.",
      icon: <CheckCircle className="w-6 h-6" />,
      downloadUrl: "/templates/sprint-planning.xlsx",
      category: "Agile",
      format: "XLSX"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-yellow-300/10 pointer-events-none" />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
      <section id="home" className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000')] opacity-5 bg-cover bg-center" />
        <div className="text-center relative">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Product Ninjas</span>
            <span className="block text-yellow-400">Curated by Olanrewaju Bello</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Download professional templates to streamline your product management workflow. Free, customizable, and ready to use.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md">
              <a href="#templates" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 hover-glow">
                Browse Templates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Available Templates</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {templates.map((template, index) => (
              <TemplateCard key={index} {...template} />
            ))}
          </div>
        </div>
      </section>

      {/* Book of the Month Section */}
      <BookOfMonth />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Events Section */}
      <Events />

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>

          </>
        } />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/resources" element={<ResourcesLayout />}>
          <Route path="curriculum" element={<CurriculumPage />} />
          <Route path="mentorship" element={<MentorshipPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;