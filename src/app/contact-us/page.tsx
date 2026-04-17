// src/app/contact-us/page.tsx
"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else throw new Error();
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
      <Header />
      {/* Header */}
      <section className="py-20 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold">Let’s Talk About Your Project</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're here to answer your questions and bring your vision to life.
          Reach out to us anytime.
        </p>
      </section>

      {/* Combined Info & Map Section */}
      <section className="pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="h-full min-h-[350px] lg:min-h-full">
            <div className="lg:sticky lg:top-24 border border-gray-200 overflow-hidden shadow-lg h-[400px] sm:h-[450px] lg:h-[480px]">
              <iframe
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.273022512683!2d77.08428587630282!3d28.483321591384073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzYwLjAiTiA3N8KwMDUnMTIuNSJF!5e0!3m2!1sen!2sin!4v1700000000000"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="space-y-8">
            <div className="bg-white text-gray-900 border border-gray-100 p-8 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-none -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="bg-gray-100 p-3 text-gray-800 flex-shrink-0">
                    <MapPin size={24} className="scale-90 sm:scale-100" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight lowercase">our office address</h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed lowercase">
                  spacemanthan,<br />
                  j-2/5, dlf city phase - 2, sector - 25,<br />
                  gurugram, haryana - 122008
                </p>
              </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 sm:p-6 border border-gray-100 shadow-sm flex items-center gap-3 sm:gap-4 hover:border-gray-800/30 transition-colors">
                <div className="bg-green-50 p-3 text-green-600 flex-shrink-0"><MessageCircle size={20} /></div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-bold lowercase">whatsapp</p>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">+91-9958097927</p>
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 border border-gray-100 shadow-sm flex items-center gap-3 sm:gap-4 hover:border-gray-800/30 transition-colors">
                <div className="bg-blue-50 p-3 text-blue-600 flex-shrink-0"><Phone size={20} /></div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-bold lowercase">call us</p>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">+91-9958097927</p>
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 border border-gray-100 shadow-sm flex items-center gap-3 sm:gap-4 hover:border-gray-800/30 transition-colors col-span-full">
                <div className="bg-orange-50 p-3 text-orange-600 flex-shrink-0"><Mail size={20} /></div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-bold lowercase">email</p>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">hello@spacemanthan.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="booking-form" className="pt-20 pb-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto bg-white dark:bg-background shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gray-200 p-8 text-center text-black">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 lowercase tracking-tight">send us a message</h2>
            <p className="text-gray-600 font-light lowercase">we usually respond within 24 hours</p>
          </div>
          <div className="p-6 sm:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">full name *</label>
                <Input
                  className="py-6 bg-gray-50 border-gray-200 focus-visible:ring-[#273027] rounded-none"
                  placeholder="john doe"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">email address (optional)</label>
                <Input
                  type="email"
                  className="py-6 bg-gray-50 border-gray-200 focus-visible:ring-[#273027] rounded-none"
                  placeholder="john@example.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">phone number *</label>
                <Input
                  type="tel"
                  className="py-6 bg-gray-50 border-gray-200 focus-visible:ring-[#273027] rounded-none"
                  placeholder="+91 98765 43210"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">your message *</label>
                <Textarea
                  className="py-5 bg-gray-50 border-gray-200 focus-visible:ring-[#273027] resize-none rounded-none"
                  placeholder="Tell us more about what you need..."
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full py-8 text-lg font-bold tracking-wide mt-4 bg-[#273027] hover:bg-[#273027]/90 text-white rounded-none"
                disabled={status === "sending"}
              >
                {status === "sending" ? "requesting..." : "submit message"}
              </Button>

              {status === "sent" && (
                <p className="text-green-500 text-center font-bold mt-4">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-bold mt-4">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
