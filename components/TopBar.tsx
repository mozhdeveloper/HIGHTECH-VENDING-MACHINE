"use client";

import { Facebook, Linkedin, Instagram, Youtube, Twitter, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/data/mockData";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  LinkedIn: Linkedin,
  Instagram,
  YouTube: Youtube,
  X: Twitter,
};

export default function TopBar() {
  const socials = [
    { name: "Facebook", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "X", href: "#" },
  ];

  return (
    <div className="hidden md:block bg-slate-50 border-b border-slate-100 text-xs text-slate-600">
      <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = ICONS[s.name];
            return (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="text-slate-500 hover:text-black transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-slate-800" />
            {COMPANY.phone}
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-slate-800" />
            {COMPANY.email}
          </span>
        </div>
      </div>
    </div>
  );
}
