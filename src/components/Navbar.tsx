'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaStethoscope } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Book', href: '/book' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-0 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="relative w-24 h-24 md:w-28 md:h-28"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain w-full h-full"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group transition-all duration-300 ease-in-out ${
                pathname === item.href
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700'
              }`}
            >
              <span className="nav-anim group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:tracking-wide transition-all duration-300 inline-block">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 text-2xl"
            aria-label="Toggle menu"
          >
            <FaStethoscope />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-inner text-gray-700 font-medium animate-slide-down space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 px-2 rounded transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-blue-600 font-semibold bg-blue-50'
                  : 'hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setMenuOpen(false)}
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
