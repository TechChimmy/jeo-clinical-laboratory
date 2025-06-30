"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FlaskConical,
  HeartPulse,
  Syringe,
  Microscope,
  TestTube,
  ShieldCheck,
  Thermometer,
} from "lucide-react"

const services = [
  {
    title: "Haematology",
    icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
    desc: "All major blood investigations from basic CBC to advanced coagulation and genetic blood markers.",
    image: "/blood.png",
    tests: [
      "Complete Blood Count",
      "TC",
      "DC",
      "ESR",
      "HB",
      "RBC",
      "MCV",
      "MCH",
      "MCHC",
      "PCV",
      "AEC",
      "Platelet Count",
      "Blood Group & Rh",
      "BT/CT/PT/aPTT",
      "Coomb's Tests",
      "HB Electrophoresis",
      "Thalassemia Screening",
      "Folic Acid",
      "D-Dimer",
      "Protein C/S",
      "Antithrombin III",
      "Iron Studies",
      "Osmotic Fragility",
      "Lupus Anticoagulants",
    ],
  },
  {
    title: "Biochemistry",
    icon: <TestTube className="w-8 h-8 text-yellow-600" />,
    desc: "Metabolic, liver, kidney and electrolyte profiling including hormones and trace elements.",
    image: "/biochemistry.png",
    tests: [
      "Blood Sugar (F/PP/R)",
      "GTT",
      "HbA1C",
      "Urea",
      "Total Billirubin",
      "Total Protein",
      "ALP",
      "Serum Creatinine",
      "Vitamin B12",
      "Vitamin D3",
      "Vitamin B6",
      "SGOT / SGPT",
      "Cholesterol",
      "Triglycerides",
      "Electrolytes",
      "Calcium / Phosphorous",
      "Uric Acid",
      "Amylase / Lipase",
      "Ferritin",
      "Iron",
      "TIBC",
      "Folic Acid",
      "Copper / Zinc",
      "Fructosamine",
      "Cystatin C",
      "e-GFR",
      "Homocysteine",
    ],
  },
  {
    title: "Serology & Immunology",
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    desc: "From viral markers to autoimmune diagnostics — antibody & antigen testing made reliable.",
    image: "/serology.png",
    tests: [
      "HIV I & II",
      "HbsAg",
      "HCV",
      "Anti HBeAG",
      "VDRL",
      "Typhoid IgM/IgG",
      "Dengue IgG/IgM/NS1",
      "Leptospira Tests",
      "Widal",
      "Scrub Typhus",
      "CRP / ASO / RA",
      "ANA / dsDNA",
      "Cardiolipin Abs",
      "ANCA (c/p)",
      "Immunoglobulins (A/G/M/E)",
      "Chlamydia IGG/IGM",
      "Alpha-1 Antitrypsin",
      "Anti Smooth Muscle Ab",
      "Anti Mitochondrial Ab",
    ],
  },
  {
    title: "Profiles & Health Packages",
    icon: <Thermometer className="w-8 h-8 text-orange-600" />,
    desc: "Tailored test packages for lifestyle, chronic illness, reproductive health and full body screening.",
    image: "/profile & health.png",
    tests: [
      "Cardiac Profile",
      "Lipid Profile",
      "Liver Function Test",
      "Renal Profile",
      "Hypertensive Profile",
      "Anaemia Profile",
      "Fertility Profile",
      "SLE Profile",
      "Diabetic Profile",
      "Master Health Checkup",
      "Well Women / Child Health",
      "STD Profile",
      "Hair Loss / Acne Profile",
      "Fever Panel",
    ],
  },
  {
    title: "Cultures & Pathology",
    icon: <Microscope className="w-8 h-8 text-purple-600" />,
    desc: "Microbial cultures, biopsy studies, and diagnostic pathology for infection and inflammation.",
    image: "/pathology.png",
    tests: [
      "Blood Culture",
      "Urine Culture",
      "Sputum Culture",
      "Stool Culture",
      "Throat Swab",
      "Wound/Pus Swab",
      "Skin Biopsy",
      "Conjunctival Smear",

    ],
  },
  {
    title: "Cardiology",
    icon: <HeartPulse className="w-8 h-8 text-purple-600" />,
    desc: "Cardiac risk profiling, ECG, cholesterol levels, and heart health testing.",
    image: "/heart.png",
    tests: [
      "ECG",
      "Lipid Profile",
      "Cardiac Enzymes",
      "Blood Pressure Check",
    ],
  },
  {
    title: "Urine Biochemistry",
    icon: <Microscope className="w-8 h-8 text-purple-600" />,
    desc: "Urine biochemistry tests for kidney function, electrolyte balance, and metabolic health.",
    image: "/urine.png",
    tests: [
      "Urea",
      "Creatinine",
      "Albumin",
      "Protein",
      "Sodium",
      "Chloride",
      "Microalbumin",
      "Calcium",
      "Phosphorous",
      "Potassium",
      "Uric Acid",
      "Bicarbonate",
      "Creatinine Clearance",
      "24 Hour Urine V.M.A",
      "24 Hour Urine Analysis",
    ],
  },
  {
    title: "Allergy Panel",
    icon: <Microscope className="w-8 h-8 text-purple-600" />,
    desc: "Allergy panel tests for immune system function and potential allergens.",
    image: "/allergy.png",
    tests: [
      "Vegetarian",
      "Non-Vegetarian",
      "Inhalant",
    ],
  },
  {
    title: "Endocrinology",
    icon: <Microscope className="w-8 h-8 text-purple-600" />,
    desc: "Endocrinology tests for hormone balance and metabolism.",
    image: "/endocrinology.png",
    tests: [
      "Free T3",
      "Free T4",
      "TSH",
      "T3",
      "T4",
      "BhCG",
      "Testosterone",
      "Cortisol",
      "Progesterone",
      "Growth Hormone",
      "Pyrilinks-D (DPD) Urine",
      "Prolactin",
      "AMH",
      "Dheas",
      "ACTH",
      " Estradiol",
      "Insulin",
      "Androstenedione",
      "Catecholamines",
      "Thyroglobulin",
    ],
  },
  {
    title: "PCR Based Tests",
    icon: <Microscope className="w-8 h-8 text-purple-600" />,
    desc: "PCR based tests for immune system function and potential allergens.",
    image: "/pcr.png",
    tests: [
      "PCR for MTB RT PCR",
      "HIV 1 (Viral Load - Quantitative)",
      "HIV 1 (Western Bloat Method)",
      "HBV DNA PCR for Quantitative & Qualitative",
      "HCV RNA PCR for Quantitative / Viral Load & Qualitative",
    ],
  },
  {
    title: "Tumor Markers",
    icon: <Microscope className="w-8 h-8 text-purple-600" />,
    desc: "Tumor markers for cancer detection and monitoring.",
    image: "/tumor.png",
    tests: [
      "CEA",
      "CA 125",
      "CA 19-9",
      "PSA",
      "PSA Free",
      "AFP",
    ],
  },
  {
    title: "Special Tests",
    icon: <Microscope className="w-8 h-8 text-purple-600" />,
    desc: "Special tests for cancer detection and monitoring.",
    image: "/special.png",
    tests: [
      "H1N1 Swine Flu by PCR",
      "COVID - 19 RT PCR",
      "COVID - 19 Anti-Body"
    ],
  },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <main className="bg-white text-gray-800 overflow-hidden">
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
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-evenly items-center">
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
