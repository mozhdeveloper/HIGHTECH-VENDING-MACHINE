"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap, MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, NAV_LINKS, INDUSTRIES } from "@/data/mockData";

export default function Footer() {
  const [logoErr, setLogoErr] = useState(false);

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2">
            {logoErr ? (
              <>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <Zap className="w-5 h-5" />
                </span>
                <span className="font-extrabold tracking-tight text-slate-900 text-sm">{COMPANY.name}</span>
              </>
            ) : (
              <div className="relative h-10 w-36">
                <Image
                  src="/images/logo.png"
                  alt={COMPANY.name}
                  fill
                  className="object-contain object-left"
                  onError={() => setLogoErr(true)}
                />
              </div>
            )}
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Premium smart vending solutions engineered for the next generation
            of self-service retail.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-slate-900">Quick Navigation</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="font-bold text-slate-900">Solutions by Industry</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {INDUSTRIES.map((i) => (
              <li key={i.label}>
                <a
                  href="#"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-bold text-slate-900">Corporate Address</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-2.5">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              {COMPANY.address}
            </li>
            <li className="flex gap-2.5">
              <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              {COMPANY.phone}
            </li>
            <li className="flex gap-2.5">
              <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              {COMPANY.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-blue-600">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
