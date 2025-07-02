"use client"

import { motion, Variants } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const iconVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
}

export default function ContactPage() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={containerVariant}
      className="bg-gradient-to-br from-white via-blue-50 to-white text-gray-800 overflow-x-hidden px-6 py-20 relative"
    >
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-blue-100 to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-20">
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-blue-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <p className="mt-4 text-lg text-gray-700">
            Reach out to us — we&apos;re here for your health journey.
          </p>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          variants={fadeUp}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              Icon: Mail,
              href: "mailto:jeolab2004@gmail.com",
              value: "jeolab2004@gmail.com",
              label: "Email",
            },
            {
              Icon: Phone,
              href: null, // Remove the outer href
              value: (
                <div className="space-y-2">
                  <div>
                    <a href="tel:+919790784779" className="hover:text-blue-400 transition-colors">+91 97907 84779</a>
                  </div>
                  <div>
                    <a href="tel:+919600144135" className="hover:text-blue-400 transition-colors">+91 96001 44135</a>
                  </div>
                  <div>
                    <a href="tel:+917338760135" className="hover:text-blue-400 transition-colors">+91 73387 60135</a>
                  </div>
                </div>
              ),
              label: "Phone Numbers",
            },
            {
              Icon: MapPin,
              href: null,
              value: "20A,Khanishk Complex, VGP Nagar, Mogappair West, Chennai - 600037",
              label: "Location",
            },
          ].map(({ Icon, href, value, label }, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out ${
                href ? 'cursor-pointer' : ''
              }`}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true }}
              {...(href ? { onClick: () => window.location.href = href } : {})}
            >
              <motion.div variants={iconVariant}>
                <Icon className="w-7 h-7 text-blue-600 mb-3" />
              </motion.div>
              <div className="text-lg font-medium text-blue-800">
                {value}
              </div>
              <p className="text-sm text-gray-600 mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Map */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <motion.h2
            className="text-2xl font-bold text-blue-800 mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            📍 Find Us on the Map
          </motion.h2>
          <div className="w-full h-[400px] scale-[1] hover:scale-[1.01] transition-transform duration-500 ease-in-out">
            <iframe
              title="Jeo Clinical Lab Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.417421685171!2d80.17246327489502!3d13.08504828724088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52639f3e54f37d%3A0x9b01de058eed4f21!2sJEO%20CLINICAL%20LABORATORY!5e1!3m2!1sen!2sin!4v1750863032348!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}