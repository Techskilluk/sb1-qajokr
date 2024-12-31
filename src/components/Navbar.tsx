import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="glass-card backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-yellow-400">Product Ninjas</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                to="/"
                onClick={(e) => handleNavClick(e, 'home')}
                className="border-yellow-400 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                to="/"
                onClick={(e) => handleNavClick(e, 'templates')}
                className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Templates
              </Link>
              <Link 
                to="/"
                onClick={(e) => handleNavClick(e, 'books')}
                className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Books
              </Link>
              <Link 
                to="/"
                onClick={(e) => handleNavClick(e, 'events')}
                className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Events
              </Link>
              <Link
                to="/training"
                className={`border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === '/training' ? 'border-yellow-400 text-white' : ''}`}
              >
                Training
              </Link>
              <div className="relative inline-flex items-center">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className={`border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname.match(/^\/(curriculum|mentorship)/) ? 'border-yellow-400 text-white' : ''}`}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {showDropdown && (
                  <div className="absolute left-0 mt-8 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      <Link
                        to="/resources/curriculum"
                        className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white ${location.pathname === '/resources/curriculum' ? 'bg-gray-700 text-white' : ''}`}
                        onClick={() => setShowDropdown(false)}
                      >
                        Curriculum
                      </Link>
                      <Link
                        to="/resources/mentorship"
                        className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white ${location.pathname === '/resources/mentorship' ? 'bg-gray-700 text-white' : ''}`}
                        onClick={() => setShowDropdown(false)}
                      >
                        Mentorship
                      </Link>
                      <Link
                        to="/resources/blog"
                        className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white ${location.pathname === '/resources/blog' ? 'bg-gray-700 text-white' : ''}`}
                        onClick={() => setShowDropdown(false)}
                      >
                        Blog
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/"
                onClick={(e) => handleNavClick(e, 'about')}
                className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={() => setShowRegisterModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              Register
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, 'home')}
              className="bg-gray-900/50 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, 'templates')}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Templates
            </Link>
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, 'books')}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Books
            </Link>
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, 'events')}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Events
            </Link>
            <Link
              to="/training"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Training
            </Link>
            <div className="px-3 py-2">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-gray-300 hover:text-white flex items-center w-full"
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {showDropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/resources/curriculum"
                      className="block text-gray-300 hover:text-white"
                      onClick={() => {
                        setShowDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      Curriculum
                    </Link>
                    <Link
                      to="/resources/mentorship"
                      className="block text-gray-300 hover:text-white"
                      onClick={() => {
                        setShowDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      Mentorship
                    </Link>
                    <Link
                      to="/resources/blog"
                      className="block text-gray-300 hover:text-white"
                      onClick={() => {
                        setShowDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      Blog
                    </Link>
                  </div>
                )}
              </div>
            <button
              onClick={() => {
                setShowRegisterModal(true);
                setIsOpen(false);
              }}
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Register
            </button>
          </div>
        </div>
      )}

      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-white mb-6">Register for Updates</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              setShowRegisterModal(false);
            }}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowRegisterModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;