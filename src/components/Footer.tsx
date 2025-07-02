'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-blue-600 text-white pt-12 pb-6 relative"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About + Certifications */}
        <motion.div variants={fadeInUp} custom={0}>
          <h2 className="text-xl font-bold mb-4">Jeo Clinical Laboratory</h2>
          <p className="text-sm leading-relaxed mb-3">
            We are a trusted and certified diagnostic laboratory committed to precision, ethics, and care.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" />
              Registered under Tamil Nadu CEA (TNCEA)
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" />
              SSI Certified Medical Lab
            </li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp} custom={1}>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="text-sm space-y-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Book Test', href: '/book' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-blue-200 transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeInUp} custom={2}>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              20A,Khanishk Complex, VGP Nagar, Mogappair West, Chennai - 600037
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              +91 9790784779
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              +91 9600144135
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              +91 7338760135
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope />
              jeolab2004@gmail.com
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-center text-sm text-white/80"
      >
        <p>
          &copy; {currentYear} Jeo Clinical Laboratory. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
