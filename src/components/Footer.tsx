import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-card mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://www.instagram.com/product_management?igsh=MTlsemx3NWU1aGY2eg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Product Ninjas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;