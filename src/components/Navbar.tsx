'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-sm py-2 shadow-xl' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-yellow-500 tracking-wider">
                THE FLASH PHOTO FILMS
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? 'text-yellow-500 font-medium border-b-2 border-yellow-500'
                    : 'text-white hover:text-yellow-400'
                } transition-colors duration-300 px-1 py-2`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-6 px-6 py-2 bg-yellow-500 text-black font-medium rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20"
            >
              Book a Shoot
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black/95 backdrop-blur-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                pathname === link.path
                  ? 'bg-yellow-500/10 text-yellow-500 border-l-4 border-yellow-500'
                  : 'text-white hover:bg-gray-800 hover:text-yellow-400'
              } block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 border-t border-gray-800">
            <Link
              href="/contact"
              className="w-full text-center px-6 py-3 bg-yellow-500 text-black font-medium rounded-full hover:bg-yellow-400 transition-all duration-300"
            >
              Book a Shoot
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;