import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

const BRAND_LOGO_SRC = "/assets/logo.jpeg";
const BRAND_NAME = "THE SONSHIP HUB";
const BRAND_MOTTO_LINE_1 = "Transforming the total man";
const BRAND_MOTTO_LINE_2 = "From ordinary to outstanding";

interface NavbarProps {
  onViewChange: (
    view: "home" | "login" | "register" | "support-vision",
  ) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onViewChange, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "ELEMENTS", id: "mission" },
    { name: "EVENTS", id: "events" },
    { name: "SERMONS", id: "sermons" },
    { name: "GALLERY", id: "gallery" },
    { name: "BLOG", id: "blog" },
  ];

  const handleLinkClick = (id: string) => {
    if (id === "home") {
      onViewChange("home");
      window.scrollTo(0, 0);
    } else {
      onViewChange("home");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentView !== "home" ? "bg-brand-purple py-3" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button
            onClick={() => onViewChange("home")}
            className="flex items-center space-x-3 group"
          >
            {/* Facebook-style logo avatar: inner image crops to a circle, outer ring stays crisp */}
            <div className="w-10 h-10 rounded-full bg-brand-purple p-[2px] ring-2 ring-brand-gold shadow-lg transition-transform group-hover:scale-110">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <img
                  src={BRAND_LOGO_SRC}
                  alt="Sonship Hub logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-start leading-none max-w-[240px] sm:max-w-[320px] md:max-w-none">
              <span className="text-white font-black tracking-tighter text-xl md:text-2xl">
                {BRAND_NAME}
              </span>
              <span className="text-brand-gold font-semibold tracking-[0.12em] text-[6px] sm:text-[7px] md:text-[8px] mt-1 uppercase leading-snug">
                <span className="block">MOTTO: {BRAND_MOTTO_LINE_1}</span>
                <span className="block">{BRAND_MOTTO_LINE_2}</span>
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-white hover:text-brand-gold font-bold text-[10px] tracking-[0.2em] transition-colors uppercase ${currentView === "home" ? "" : "opacity-80"}`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => onViewChange("support-vision")}
              className="bg-brand-gold hover:bg-brand-goldDark text-brand-purple px-6 py-2 rounded font-black text-[10px] tracking-widest transition-all flex items-center space-x-2"
            >
              <Heart size={14} className="fill-brand-purple" />
              <span>SUPPORT VISION</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-purple absolute top-full left-0 w-full border-t border-white/10 shadow-2xl p-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left py-2 text-white font-bold text-sm tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              onViewChange("support-vision");
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-brand-gold text-brand-purple py-3 rounded font-black text-xs tracking-widest"
          >
            SUPPORT VISION
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
