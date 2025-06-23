"use client";

import { motion } from "framer-motion";
import { HeartPulse, Microscope, ShieldCheck, Stethoscope } from "lucide-react";

const features = [
  {
    icon: <HeartPulse className="w-10 h-10 text-red-500 animate-pulse" />,
    title: "Patient-Centric Care",
    desc: "Our lab prioritizes comfort, clarity, and compassion — ensuring every patient feels secure.",
  },
  {
    icon: <Microscope className="w-10 h-10 text-blue-700" />,
    title: "Advanced Equipment",
    desc: "We use modern diagnostic technology to detect even the smallest anomalies with precision.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    title: "Secure & Confidential",
    desc: "All your data and reports are handled with strict privacy and encrypted access systems.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-purple-700 animate-bounce" />,
    title: "24/7 Diagnostics Access",
    desc: "Online reports, quick bookings, and responsive support — whenever you need us.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-blue-50 px-6 overflow-hidden">
      {/* Decorative SVG Pulse Line */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full fill-current text-blue-200">
          <path
            d="M0,160L80,170.7C160,181,320,203,480,213.3C640,224,800,224,960,197.3C1120,171,1280,117,1360,90.7L1440,64V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Diagnostics, You Can Trust
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-12">
          Where cutting-edge science meets human care. Here’s what sets us apart.
        </p>

        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="relative group flex items-start gap-5 p-6 bg-white border-l-4 border-blue-600 rounded-xl shadow-md transition-all duration-300 ease-out hover:scale-[1.025] hover:shadow-xl hover:border-blue-800"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {/* Left glowing pulse effect */}
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded" />

              <div className="mt-1">{item.icon}</div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-blue-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
