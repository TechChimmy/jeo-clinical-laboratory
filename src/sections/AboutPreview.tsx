"use client";

import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white text-center px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Jeo Clinical Laboratory is committed to providing precise, timely, and
          affordable diagnostic testing services. Our expert technicians and
          state-of-the-art equipment ensure the highest standards of quality and
          care.
        </motion.p>

        <motion.a
          href="/about"
          className="inline-block mt-6 text-blue-600 hover:underline font-semibold text-base md:text-lg transition hover:scale-105 active:scale-95"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Learn More →
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutPreview;
