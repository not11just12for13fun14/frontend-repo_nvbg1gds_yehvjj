import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 animate-pulse" />
          <span className="text-white/90 font-semibold tracking-wide">Digital Support</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/917208292904"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-black font-semibold shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] transition-shadow"
          >
            Book a Strategy Call
          </a>
        </nav>

        <button
          className="md:hidden text-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/917208292904"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex justify-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-black font-semibold"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
