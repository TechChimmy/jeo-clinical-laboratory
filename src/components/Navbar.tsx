'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaStethoscope } from 'react-icons/fa'; // <-- Add this
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Book', href: '/book' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Jeo Clinical Lab
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-blue-600 transition-colors ${
                pathname === item.href ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Stethoscope Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            <FaStethoscope />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium bg-white shadow-inner animate-slide-down">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 ${
                pathname === item.href ? 'text-blue-600 font-semibold' : ''
              }`}
              onClick={() => setMenuOpen(false)} // Close on click
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
