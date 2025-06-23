"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FlaskConical,
  HeartPulse,
  TestTube,
  Microscope,
  Syringe,
} from "lucide-react";

const services = [
  {
    title: "Blood Tests",
    icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
    desc: "Comprehensive blood panels, CBC, lipid profile, liver & kidney functions.",
    image: "/blood.png",
    tests: ["CBC", "Lipid Profile", "Liver Function", "Kidney Function", "Hemoglobin"],
  },
  {
    title: "Cardiac Health",
    icon: <HeartPulse className="w-8 h-8 text-red-500" />,
    desc: "ECG, cholesterol levels, and heart risk profiling with precision.",
    image: "/heart.png",
    tests: ["ECG", "Cholesterol Test", "Cardiac Enzymes", "Blood Pressure Check"],
  },
  {
    title: "Hormonal Tests",
    icon: <Syringe className="w-8 h-8 text-pink-600" />,
    desc: "Thyroid, insulin, cortisol, fertility and other hormone testing.",
    image: "/hormone.png",
    tests: ["Thyroid Panel", "Insulin", "Cortisol", "Estrogen", "Testosterone"],
  },
  {
    title: "Pathology",
    icon: <Microscope className="w-8 h-8 text-purple-600" />,
    desc: "Microscopic & culture testing for infections and chronic illness.",
    image: "/pathology.png",
    tests: ["Sputum Culture", "Skin Biopsy", "Wound Swab", "Blood Culture"],
  },
  {
    title: "Urine & Stool Tests",
    icon: <TestTube className="w-8 h-8 text-yellow-600" />,
    desc: "Routine urinalysis, stool examination and microbial detection.",
    image: "/urine.png",
    tests: ["Urinalysis", "Stool Microscopy", "Culture & Sensitivity"],
  },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-500">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-20 animate-ping"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full opacity-30 animate-pulse"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
        </div>
        <motion.div
          className="relative z-10 text-center text-white max-w-2xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore Our Advanced Testing Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Trusted diagnostics tailored for precision, speed, and care.
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto flex flex-wrap  gap-8 justify-evenly items-center">
          {services.map((service, i) => {
            const isActive = activeService === i;
            return (
              <motion.div
                key={i}
                layout
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 cursor-pointer w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div onClick={() => setActiveService(isActive ? null : i)}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <h3 className="text-xl font-semibold text-blue-800">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="tests"
                      className="p-4 border-t bg-blue-50"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ul className="space-y-2">
                        {service.tests.map((test, idx) => (
                          <li
                            key={idx}
                            className="flex justify-between items-center py-1 border-b"
                          >
                            <span>{test}</span>
                            <Link
                              href={`/book?test=${encodeURIComponent(test)}`}
                              className="text-blue-600 hover:underline text-sm font-semibold"
                            >
                              Book
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section
        className="bg-blue-800 text-white py-16 px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ready to Book a Test?
          </motion.h2>
          <motion.p
            className="mb-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Walk-in or book online for fast, accurate, and affordable testing services.
          </motion.p>
          <motion.a
            href="/book"
            className="inline-block bg-white text-blue-800 font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Book Appointment
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default ServicesPage;
