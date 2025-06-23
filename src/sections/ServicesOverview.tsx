"use client";

import { motion, Variants } from "framer-motion";
import {
  FlaskConical,
  Microscope,
  Stethoscope,
  TestTube2,
} from "lucide-react";

const services = [
  {
    title: "Blood Tests",
    description:
      "Comprehensive analysis for accurate diagnosis and health tracking.",
    icon: <FlaskConical className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Urine Analysis",
    description:
      "Quick and reliable results for common urinary infections and disorders.",
    icon: <TestTube2 className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Pathology",
    description:
      "Advanced pathology services with expert review and consultation.",
    icon: <Microscope className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "General Checkups",
    description:
      "Routine tests to keep your health in check and prevent future issues.",
    icon: <Stethoscope className="w-8 h-8 text-blue-700" />,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Test Services
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We offer a wide range of diagnostic tests with fast results and reliable accuracy.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:border hover:border-blue-400 hover:bg-blue-100 overflow-hidden"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4 group-hover:animate-bounce-slow">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>

              {/* Glowing border layer */}
              <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-400 group-hover:shadow-[0_0_30px_2px_rgba(59,130,246,0.3)] transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
