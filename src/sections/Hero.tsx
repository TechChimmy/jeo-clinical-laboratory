"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = ["/lab.png", "/lab2.png", "/lab3.png", "/lab4.png"]; // Replace with actual paths

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 md:py-12 xl:py-12 px-4 md:px-12 overflow-hidden pb-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl xl:text-5xl font-extrabold text-blue-800 leading-tight mb-4 drop-shadow-sm">
            Accurate. Reliable. Human-Centered Diagnostics.
          </h1>
          <p className="text-gray-700 text-base xl:text-lg leading-relaxed mb-6">
            Welcome to{" "}
            <span className="font-bold text-blue-700">
              Jeo Clinical Laboratory
            </span>{" "}
            — where cutting-edge technology meets compassionate care. From
            blood tests to full-body checkups, your health is in expert hands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start w-full md:w-auto">
            <motion.a
              href="/book"
              className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 hover:scale-105 active:scale-95 transition-all shadow-md text-center text-lg md:text-base xl:text-lg md:text-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Test
            </motion.a>
            <motion.a
              href="/about"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-sm text-center text-lg md:text-base xl:text-lg md:text-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Why Choose Us?
            </motion.a>
          </div>
        </motion.div>

        {/* Image Carousel — Original Height Preserved */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-[450px] mx-auto overflow-hidden rounded-2xl shadow-xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`Hero Slide ${currentIndex + 1}`}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative SVG Wave */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[80px] overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="#e0f2fe"
            d="M0,96L80,101.3C160,107,320,117,480,128C640,139,800,149,960,138.7C1120,128,1280,96,1360,80L1440,64V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
