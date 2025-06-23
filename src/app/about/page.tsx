"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  ShieldCheck,
  Clock10,
  TrendingUp,
} from "lucide-react";

const stats = [
  { label: "Patients Served", value: "1,000,000+", icon: <Users className="w-6 h-6 text-blue-600" /> },
  { label: "Years of Trust", value: "20+", icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> },
  { label: "Accuracy Rate", value: "100% Trusted Results", icon: <TrendingUp className="w-6 h-6 text-blue-600" /> },
  { label: "Report Consistency", value: "0% Value Fluctuation", icon: <Clock10 className="w-6 h-6 text-blue-600" /> },
];

const AboutPage = () => {
  return (
    <main className="bg-gradient-to-br from-white to-blue-50 text-gray-800 overflow-x-hidden">
      
      {/* HERO */}
      <section className="relative h-[70vh] bg-[url('/lab-banner.jpg')] bg-cover bg-center flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-black/70 z-0" />
        <motion.div
          className="relative z-10 max-w-3xl text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            Empowering Health for Over 20 Years
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Where trust meets technology — <span className="font-semibold">Jeo Clinical Laboratory</span>
          </p>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/about.png"
              alt="Inside the Lab"
              width={600}
              height={400}
              className="rounded-xl w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-4">
              For over two decades, Jeo Clinical Laboratory has been at the forefront of diagnostics, delivering accurate results with compassion, consistency, and care.
            </p>
            <p className="text-gray-600 text-md">
              Our commitment to zero-value fluctuation and precision has earned the trust of over 1 million patients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-3">{stat.icon}</div>
              <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section className="bg-blue-50 py-24 px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Legacy
        </motion.h2>

        <div className="max-w-4xl mx-auto relative border-l-4 border-blue-600 pl-6 space-y-14">
          {[
            {
              year: "2004",
              title: "Founded",
              desc: "We started with a simple goal — accurate, accessible diagnostics for all.",
              icon: <ShieldCheck className="text-white w-5 h-5" />,
            },
            {
              year: "2010",
              title: "Technology Upgrade",
              desc: "Invested in automated machines and modern pathology infrastructure.",
              icon: <TrendingUp className="text-white w-5 h-5" />,
            },
            {
              year: "2015",
              title: "500k Patients",
              desc: "Crossed the half-million mark in patients served with unwavering accuracy.",
              icon: <Users className="text-white w-5 h-5" />,
            },
            {
              year: "2025",
              title: "Digital Era Begins",
              desc: "Launched our website to go global — appointment booking & reports online.",
              icon: <Clock10 className="text-white w-5 h-5" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative pl-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-5 top-0 bg-blue-700 rounded-full p-2 shadow-md">
                {item.icon}
              </div>
              <p className="text-sm text-blue-700 font-bold">{item.year}</p>
              <h3 className="text-xl font-semibold text-blue-900">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
