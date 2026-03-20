import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import groomPhoto1 from "@/assets/groom-photo-1.jpg";

const navItems = [
  { key: "home", href: "#home", short: { en: "Home", gu: "હોમ" } },
  { key: "personalDetails", href: "#personal", short: { en: "Personal", gu: "વ્યક્તિગત" } },
  { key: "familyBackground", href: "#family", short: { en: "Family", gu: "કુટુંબ" } },
  { key: "maternalDetails", href: "#maternal", short: { en: "Maternal", gu: "મામા" } },
  { key: "contactDetails", href: "#contact", short: { en: "Contact", gu: "સંપર્ક" } },
  { key: "photoGallery", href: "#gallery", short: { en: "Photo", gu: "ફોટો" } },
];

const FloatingNav = () => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fully transparent navbar with backdrop blur */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 py-2.5"
      >
        {/* Left: The Groom with round photo */}
        <div className="flex items-center gap-2 shrink-0">
          <a href="#home" className="flex items-center gap-2 nav-pill px-2.5 py-1.5 rounded-full">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/40 shrink-0">
              <img src={groomPhoto1} alt="Meet Parmar" className="w-full h-full object-cover object-top" />
            </div>
            <span className="font-display text-sm md:text-base text-gradient-gold tracking-wider whitespace-nowrap font-semibold">
              {t.theGroom}
            </span>
          </a>
        </div>

        {/* Center: Desktop nav items with pill backgrounds */}
        <nav className="hidden lg:flex items-center gap-1 mx-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="nav-pill px-3 py-1.5 text-xs font-body font-medium text-foreground/90 hover:text-primary transition-all duration-300 rounded-full whitespace-nowrap"
            >
              {item.short[lang]}
            </a>
          ))}
        </nav>

        {/* Right: toggles + menu */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="nav-pill rounded-full">
            <LanguageToggle />
          </div>
          <div className="nav-pill rounded-full">
            <ThemeToggle />
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden nav-pill p-2 rounded-full"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4 text-primary" /> : <Menu className="w-4 h-4 text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
          <nav
            className="absolute top-14 right-3 p-3 flex flex-col gap-1 min-w-[160px] rounded-2xl animate-in fade-in slide-in-from-top-2"
            style={{
              background: "hsla(var(--glass-bg))",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid hsla(var(--gold) / 0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-pill px-4 py-2.5 text-sm font-body font-medium text-foreground/90 hover:text-primary transition-all duration-300 rounded-full"
              >
                {item.short[lang]}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default FloatingNav;
