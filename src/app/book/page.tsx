"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileUp } from "lucide-react";
import "../globals.css";

const services = [
  {
    category: "Haematology",
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
    category: "Biochemistry",
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
    category: "Serology & Immunology",
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
    category: "Profiles & Health Packages",
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
    category: "Cultures & Pathology",
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
    category: "Cardiology",
    tests: [
      "ECG",
      "Lipid Profile",
      "Cardiac Enzymes",
      "Blood Pressure Check",
    ],
  },
  {
    category: "Urine Biochemistry",
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
    category: "Allergy Panel",
    tests: [
      "Vegetarian",
      "Non-Vegetarian",
      "Inhalant",
    ],
  },
  {
    category: "Endocrinology",
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
    category: "PCR Based Tests",
    tests: [
      "PCR for MTB RT PCR",
      "HIV 1 (Viral Load - Quantitative)",
      "HIV 1 (Western Bloat Method)",
      "HBV DNA PCR for Quantitative & Qualitative",
      "HCV RNA PCR for Quantitative / Viral Load & Qualitative",
    ],
  },
  {
    category: "Tumor Markers",
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
    category: "Special Tests",
    tests: [
      "H1N1 Swine Flu by PCR",
      "COVID - 19 RT PCR",
      "COVID - 19 Anti-Body",
    ],
  },
];

interface FormData {
  name: string;
  age: string;
  gender: string;
  contact: string;
  tests: string[];
  date: string;
  time: string;
  fileName: string | null;
}

const BookPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    gender: "",
    contact: "",
    tests: [],
    date: "",
    time: "",
    fileName: null,
  });

  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTestToggle = (testName: string) => {
    setFormData(prev => {
      const exists = prev.tests.includes(testName);
      const updated = exists
        ? prev.tests.filter(t => t !== testName)
        : [...prev.tests, testName];
      return { ...prev, tests: updated };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      contact: "",
      tests: [],
      date: "",
      time: "",
      fileName: null,
    });
    setFile(null);
    setSubmitted(false);
  };

  const submitToGoogleSheets = async (formData: FormData) => {
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("API error");

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Client error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    try {
      const result = await submitToGoogleSheets({
        ...formData,
        fileName: file?.name || null,
      });

      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        resetForm();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center">
      <motion.div
        className="bg-white shadow-lg rounded-2xl w-full max-w-2xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
              Book an Appointment
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="input text-black placeholder:text-gray-400"
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                required
                value={formData.age}
                onChange={handleChange}
                className="input text-black placeholder:text-gray-400"
              />
              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="input text-black placeholder:text-gray-400"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                required
                value={formData.contact}
                onChange={handleChange}
                className="input text-black placeholder:text-gray-400"
              />

              <div>
                <label className="block font-semibold mb-2 text-blue-700">
                  Select Required Tests
                </label>
                <div className="space-y-4 max-h-64 overflow-y-auto border rounded-md p-4 bg-blue-50">
                  {services.map((group, i) => (
                    <div key={i}>
                      <p className="font-medium text-blue-800 mb-2">{group.category}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {group.tests.map((test, j) => (
                          <label key={j} className="flex items-center text-black gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={formData.tests.includes(test)}
                              onChange={() => handleTestToggle(test)}
                              className="accent-blue-700"
                            />
                            {test}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {formData.tests.length > 0 && (
                  <p className="text-sm mt-2 text-gray-600">
                    <span className="font-medium">Selected:</span>{" "}
                    {formData.tests.join(", ")}
                  </p>
                )}
              </div>

              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="input text-black placeholder:text-gray-400"
              />
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="input text-black placeholder:text-gray-400"
              />

              <div className="flex flex-col gap-2">
                <label className="font-medium text-gray-700 flex items-center gap-2">
                  <FileUp className="w-5 h-5 text-blue-700" />
                  Upload Doctor Prescription (optional)
                </label>
                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  className="input p-2 file:bg-blue-600 file:text-white file:rounded-md file:px-4 file:py-2 file:mr-4 file:border-0"
                />
                {file && (
                  <p className="text-sm text-gray-600">
                    Selected: <span className="font-semibold">{file.name}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-blue-700 text-white font-semibold py-3 rounded-full hover:bg-blue-800 transition"
              >
                {submitting ? "Submitting..." : "Confirm Booking"}
              </button>
            </form>
          </>
        ) : (
          <motion.div
            className="text-center flex flex-col items-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              Appointment Confirmed!
            </h3>
            <p className="text-gray-600">
              We’ve received your booking and will contact you shortly.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default BookPage;
