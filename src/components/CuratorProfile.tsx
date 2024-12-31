import React from 'react';
import { Briefcase, Mail, Globe } from 'lucide-react';

const CuratorProfile = () => {
  return (
    <section id="curator" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-yellow-300/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Briefcase className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>Product Manager & Template Curator at Product Ninjas</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                  <a href="mailto:olanrewaju@productninjas.co" className="hover:text-yellow-400 transition-colors">
                    olanrewaju@productninjas.co
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="w-5 h-5 mr-3 text-yellow-400" />
                  <a href="https://productninjas.co" className="hover:text-yellow-400 transition-colors">
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
    </section>
  );
};

export default CuratorProfile;