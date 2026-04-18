"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import ConsultationForm from "./ConsultationForm";

export default function ConnectPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Vertical "CONNECT" trigger button — fixed to right edge */}
      <button
        onClick={() => setIsOpen(true)}
        className="block fixed right-0 top-1/2 -translate-y-1/2 z-[60] bg-[#012169] text-white text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.25em] uppercase
                   px-1.5 py-3 md:px-2.5 md:py-6 shadow-lg hover:bg-[#0a2e8a] transition-colors duration-300"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed", letterSpacing: "0.2em" }}
        aria-label="Open consultation form"
      >
        CONNECT
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide-in Panel from right */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {/* Panel Header */}
            <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  Book a Free Consultation
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Tell us about your project and we'll reach out shortly.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-4 mt-1 text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="Close panel"
              >
                <X size={22} />
              </button>
            </div>

            {/* Form */}
            <div className="px-8 py-6">
              <ConsultationForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
