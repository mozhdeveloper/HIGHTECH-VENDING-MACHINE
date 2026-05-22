"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { COMPANY } from "@/data/mockData";

const INTERESTS = [
  "Standard Vending Machine",
  "Refrigerated Vending Machine",
  "High-Capacity Vending Machine",
  "Custom / OEM Solution",
  "Smart Payment Integration",
  "Cloud Monitoring & Analytics",
  "General Inquiry",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setState("error");
      } else {
        setState("success");
        setForm({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-slate-100 text-slate-500 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Tell us about your project and our engineering team will get back to
            you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col gap-6 h-full">
              <h3 className="text-lg font-bold">Contact Information</h3>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-4 group"
              >
                <span className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium mt-0.5 group-hover:text-slate-300 transition-colors break-all">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-start gap-4 group"
              >
                <span className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Phone / WhatsApp</p>
                  <p className="text-sm font-medium mt-0.5">{COMPANY.phone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <span className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-sm font-medium mt-0.5 group-hover:text-slate-300 transition-colors">
                    Chat with us instantly
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Address</p>
                  <p className="text-sm font-medium mt-0.5 leading-relaxed text-slate-300">
                    {COMPANY.address}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 pt-6 mt-auto">
                <p className="text-xs text-slate-400">
                  Business hours: Mon – Fri, 9 AM – 6 PM CST (UTC+8)
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Average response time: &lt; 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3">
            {state === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 gap-4">
                <CheckCircle className="w-16 h-16 text-slate-900" />
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 max-w-sm">
                  Thank you for reaching out. Our team will reply to{" "}
                  <strong>{form.email || "your email"}</strong> within one
                  business day.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-4 px-6 py-2 rounded-lg border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Row 2: Company + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Row 3: Interest */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    I&apos;m interested in…
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition appearance-none cursor-pointer"
                  >
                    <option value="">Select a product or topic</option>
                    {INTERESTS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your requirements — number of machines, location, custom features, etc."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Error banner */}
                {state === "error" && (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors self-start"
                >
                  {state === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
