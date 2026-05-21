"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/data/mockData";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 bg-white rounded-2xl shadow-glow border border-slate-100 p-5 animate-fade-up">
          <div className="flex items-center justify-between">
            <div className="font-bold text-slate-900">Quick Connect</div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-700"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Chat with our team — typical reply &lt; 5 min.
          </p>
          <div className="mt-4 space-y-2">
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500 text-white">
                <MessageCircle className="w-4 h-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  WhatsApp
                </div>
                <div className="text-[11px] text-slate-500">
                  {COMPANY.whatsapp}
                </div>
              </div>
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white">
                <Phone className="w-4 h-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Call Us
                </div>
                <div className="text-[11px] text-slate-500">
                  {COMPANY.phone}
                </div>
              </div>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-600 text-white">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Email
                </div>
                <div className="text-[11px] text-slate-500">
                  {COMPANY.email}
                </div>
              </div>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Open quick chat"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-glow transition-all hover:scale-105"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
