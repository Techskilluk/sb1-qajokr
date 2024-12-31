import React from 'react';
import { Briefcase, Mail, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Empowering product teams with curated templates and resources
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Meet Your Curator</h2>
              <div className="prose prose-invert">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Olanrewaju Bello is a passionate Product Manager dedicated to building tools that transform businesses and lives. With a keen eye for innovation and a deep understanding of user needs, he curates templates and resources that empower product teams to excel.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  His mission is to simplify product management processes and enable teams to focus on what truly matters - creating impactful products that make a difference.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Briefcase className="w-5 h-5 mr-3 text-indigo-400" />
                  <span>Product Manager & Template Curator at Product Ninjas</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-indigo-400" />
                  <a href="mailto:olanrewaju@productninjas.co" className="hover:text-indigo-400 transition-colors">
                    olanrewaju@productninjas.co
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="w-5 h-5 mr-3 text-indigo-400" />
                  <a href="https://productninjas.co" className="hover:text-indigo-400 transition-colors">
                    productninjas.co
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="https://res.cloudinary.com/dxa3i3h49/image/upload/v1735165022/PHOTO-2024-12-07-11-59-49_lywfgf.jpg"
                  alt="Olanrewaju Bello"
                  className="rounded-xl object-cover shadow-2xl w-full h-full"
                />
              </div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;