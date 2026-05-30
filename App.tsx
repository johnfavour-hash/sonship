import React, { useMemo, useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Fathers from "./components/Fathers";
import Promises from "./components/Promises";
import Events from "./components/Events";
import Stats from "./components/Stats";
import Team from "./components/Team";
import TeamMemberBio from "./components/TeamMemberBio";
import FatherBio from "./components/FatherBio";
import PastorPodcasts from "./components/PastorPodcasts";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import SupportVision from "./components/SupportVision";
import { teamMembers, type TeamMember } from "./data/teamMembers";
import { fathers } from "./data/fathers";

type GallerySource = {
  alt: string;
  src: string;
  srcSet?: string;
  sizes?: string;
};

function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const HomePage: React.FC = () => {
  // Keep this to 12 images so the gallery renders as 2 rows on lg (6 columns).
  // Reference actual local gallery photos from public/assets/gallery.
  const galleryImages: GallerySource[] = useMemo(
    () => [
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01724.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01725.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01726.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01730.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01731.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01732.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01734.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01738.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01740.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01743.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01744.jpg",
      },
      {
        alt: "Gallery photo",
        src: "/assets/gallery/PAM01745.jpg",
      },
    ],
    [],
  );

  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleMemberSelect = (member: TeamMember) => {
    const slug = slugify(member.name);
    navigate(`/team/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeLightbox = () => setLightboxIndex(null);
  const showPreviousImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + galleryImages.length) % galleryImages.length,
    );
  };
  const showNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }
      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  return (
    <>
      <Hero />

      {/* Top Banner Feature - Responsive Overlap */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 md:-mt-16 relative z-20">
        <div className="bg-white py-6 md:py-8 px-6 md:px-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 border-b-4 border-brand-purple rounded-xl">
          <div className="flex items-center space-x-6 md:space-x-8 w-full lg:w-auto">
            <div className="bg-brand-purple text-white p-3 md:p-4 rounded-lg text-center leading-none min-w-[90px] md:min-w-[110px] shadow-lg flex-shrink-0">
              <span className="block text-[10px] md:text-xs font-black uppercase tracking-widest">
                Anniversary
              </span>
              <span className="block text-xl md:text-2xl font-black mt-1">
                29 Oct
              </span>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-90">
                Annually
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-4 text-[9px] md:text-[10px] font-black uppercase text-brand-purple mb-1 md:mb-2 tracking-widest">
                <span className="flex items-center space-x-1 italic">
                  ANNIVERSARY: 29th October annually
                </span>
              </div>
              <h4 className="font-black text-lg md:text-xl text-gray-900 tracking-tighter uppercase leading-tight">
                THE SONSHIP HUB ANNIVERSARY
              </h4>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full lg:w-auto border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
            <div className="flex items-center space-x-2 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center sm:text-left">
              <span>📍 PH, Rivers State, Nigeria</span>
            </div>
            <button className="bg-brand-gold hover:bg-brand-goldDark text-brand-purple px-6 md:px-8 py-3 rounded-lg text-[9px] md:text-[10px] font-black tracking-widest uppercase transition-all shadow-md active:scale-95 w-full sm:w-auto">
              View Details
            </button>
          </div>
        </div>
      </div>

      <Mission />
      <Fathers />
      <Promises />
      <Events />

      {/* Testimonials */}
      <Testimonials />

      {/* Our Gallery */}
      <section className="py-0" id="gallery">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h4 className="text-brand-purple font-black tracking-widest text-[10px] uppercase mb-2">
            Moments of Faith
          </h4>
          <p className="text-gray-400 text-xs italic">
            Capturing the life of our global community.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-[320px] md:h-[360px] lg:h-[420px]">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="relative group overflow-hidden focus:outline-none"
            >
              <img
                src={img.src}
                srcSet={img.srcSet}
                sizes={img.sizes}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-110 contrast-105"
                alt={img.alt}
              />
              <div className="absolute inset-0 bg-brand-purple/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                <span className="text-white text-3xl md:text-4xl font-thin">
                  +
                </span>
              </div>
            </button>
          ))}
        </div>

        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery lightbox"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh] w-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 bg-black/60 text-white rounded-full p-3 hover:bg-black"
                aria-label="Close gallery"
              >
                ×
              </button>

              <img
                src={galleryImages[lightboxIndex].src}
                srcSet={galleryImages[lightboxIndex].srcSet}
                sizes="100vw"
                className="w-full h-[calc(90vh-96px)] object-contain rounded-3xl bg-black"
                alt={galleryImages[lightboxIndex].alt}
              />

              <div className="absolute inset-x-0 top-1/2 flex items-center justify-between px-2 pointer-events-none">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPreviousImage();
                  }}
                  className="pointer-events-auto bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNextImage();
                  }}
                  className="pointer-events-auto bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between text-white text-[11px] uppercase tracking-[0.2em]">
                <span>{`${lightboxIndex + 1} / ${galleryImages.length}`}</span>
                <span className="text-right text-white/80">Moments of Faith</span>
              </div>
            </div>
          </div>
        )}
      </section>

      <Team onMemberSelect={handleMemberSelect} />
      <PastorPodcasts />
      <Stats />
      <Sponsors />

      {/* From The Blog */}
      {/* <section id="blog" className="py-16 md:py-24 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-brand-purple font-black tracking-widest text-[10px] uppercase mb-2">
              Spiritual Growth
            </h4>
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
              Wisdom from the Hub
            </h2>
            <p className="text-gray-400 text-xs italic">
              Deep dives into theology and modern faith living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className={`bg-white border-b md:border-b-0 md:border-r border-gray-100 group flex flex-col last:border-none ${post === 3 ? "md:hidden lg:flex" : ""}`}
              >
                <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=600&seed=${post + 20}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    alt="blog"
                  />
                </div>
                <div className="p-8 md:p-12 flex-grow">
                  <div className="text-brand-purple text-[10px] font-black tracking-[0.2em] mb-4 uppercase">
                    FAITH JOURNAL / 2024
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-6 leading-tight group-hover:text-brand-purple transition-colors uppercase tracking-tighter">
                    Cultivating a Heart of Genuine Worship
                  </h3>
                  <p className="text-gray-500 text-xs mb-8 md:mb-10 leading-relaxed font-medium">
                    Learn the foundational principles of spiritual discipline in
                    a digital age.
                  </p>
                  <button className="text-brand-purple font-black text-[10px] tracking-[0.3em] uppercase hover:translate-x-2 transition-transform flex items-center group">
                    Explore More <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <div className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-[0.1em]">
              Divine Intercession awaits.
            </h2>
            <p className="text-gray-500 text-[10px] md:text-xs italic">
              Submit your prayer requests and our intercessory team will lift
              you up.
            </p>
          </div>
          <a
            href="mailto:thesonshiphub25@gmail.com"
            className="bg-brand-purple hover:bg-brand-purpleLight text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black shadow-xl transition-all uppercase tracking-[0.2em] text-[10px] flex items-center space-x-3 active:scale-95 hover:-translate-y-1 w-full md:w-auto justify-center"
          >
            <span>Request Prayer</span>
            <span>✉</span>
          </a>
        </div>
      </div>
    </>
  );
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Auth
      initialMode="login"
      onViewChange={(view) => navigate(view === "home" ? "/" : `/${view}`)}
    />
  );
};

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Auth
      initialMode="register"
      onViewChange={(view) => navigate(view === "home" ? "/" : `/${view}`)}
    />
  );
};

const SupportVisionPage: React.FC = () => {
  return <SupportVision />;
};

const TeamMemberBioRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const teamMembersFromData = teamMembers;

  const member = useMemo(() => {
    if (!slug) return null;
    return teamMembersFromData.find((m) => slugify(m.name) === slug) ?? null;
  }, [slug, teamMembersFromData]);

  if (!member) {
    return <Navigate to="/" replace />;
  }

  return <TeamMemberBio member={member} onBack={() => navigate("/#team")} />;
};

const FatherBioRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const fathersFromData = fathers;

  const father = useMemo(() => {
    if (!slug) return null;
    return fathersFromData.find((f) => slugify(f.name) === slug) ?? null;
  }, [slug, fathersFromData]);

  if (!father) {
    return <Navigate to="/" replace />;
  }

  return <FatherBio father={father} onBack={() => navigate("/#fathers")} />;
};

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-purple font-['Inter']">
      <Navbar
        onViewChange={(view) => navigate(view === "home" ? "/" : `/${view}`)}
        currentView="home"
      />

      <main className="transition-all duration-500">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/support-vision" element={<SupportVisionPage />} />
          <Route path="/team/:slug" element={<TeamMemberBioRoute />} />
          <Route path="/fathers/:slug" element={<FatherBioRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
