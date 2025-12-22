import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";

const BRAND_LOGO_SRC = "/assets/logo.jpeg";
const BRAND_NAME = "THE SONSHIP HUB";
const BRAND_MOTTO = "TRANSFORMING THE TOTAL MAN – FROM ORDINARY TO OUTSTANDING";

const FB_POST_LINK_1 =
  "https://www.facebook.com/photo/?fbid=122107825209152527&set=a.122100879729152527";
const FB_POST_LINK_2 =
  "https://www.facebook.com/photo?fbid=122107824315152527&set=a.122100879729152527";

const Footer: React.FC = () => {
  const footerGallery = [
    // Use local optimized WebP thumbs to avoid broken external links and speed up footer load.
    "/assets/gallery/pexels-shvetsa-3845458-480.webp",
    "/assets/gallery/pexels-vanessa-loring-7869049-480.webp",
    "/assets/gallery/pexels-green-odette-232224115-32197535-480.webp",
    "/assets/gallery/pexels-a-r-shimanto-321946427-14509165-480.webp",
    "/assets/gallery/pexels-case-originals-3420517-480.webp",
    "/assets/gallery/pexels-julia-m-cameron-4144099-480.webp",
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Finding Your Divine Purpose?",
      img: "/assets/Orange Minimalist Motivational Quote Twitter Post (4).png",
      href: FB_POST_LINK_1,
    },
    {
      id: 2,
      title: "The Power of Male Accountability",
      img: "/assets/Orange Minimalist Motivational Quote Twitter Post (5).png",
      href: FB_POST_LINK_2,
    },
    {
      id: 3,
      title: "Modern Vices vs Ancient Truth",
      img: "/assets/Orange Minimalist Motivational Quote Twitter Post (6).png",
      href: FB_POST_LINK_2,
    },
  ];

  return (
    <footer className="bg-[#111] text-white pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* About Column */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-3 mb-8">
            {/* Facebook-style logo avatar: inner image crops to a circle, outer ring stays crisp */}
            <div className="w-10 h-10 rounded-full bg-brand-purple p-[2px] ring-2 ring-brand-gold shadow-lg overflow-visible">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <img
                  src={BRAND_LOGO_SRC}
                  alt="Sonship Hub logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-white font-black tracking-widest text-lg">
              {BRAND_NAME}
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 italic mx-auto sm:mx-0 max-w-xs">
            <span className="font-bold text-gray-300">MOTTO:</span>{" "}
            {BRAND_MOTTO}
          </p>
          <div className="space-y-4">
            <div className="flex items-start justify-center sm:justify-start space-x-3 text-sm text-gray-400 group">
              <MapPin size={18} className="text-brand-gold flex-shrink-0" />
              <span className="group-hover:text-white transition-colors">
                PH, Rivers State, Nigeria
              </span>
            </div>
            <div className="flex items-start justify-center sm:justify-start space-x-3 text-sm text-gray-400 group">
              <Phone size={18} className="text-brand-gold flex-shrink-0" />
              <span className="group-hover:text-white transition-colors">
                +2348104459237
              </span>
            </div>
            <div className="flex items-start justify-center sm:justify-start space-x-3 text-sm text-gray-400 group">
              <Mail size={18} className="text-brand-gold flex-shrink-0" />
              <a
                href="mailto:thesonshiphub25@gmail.com"
                className="group-hover:text-white transition-colors truncate"
              >
                thesonshiphub25@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Recent Posts Column */}
        <div className="hidden sm:block">
          <h3 className="text-xs font-black tracking-widest uppercase mb-8 flex items-center">
            Recent Posts
            <div className="ml-4 flex-grow h-[1px] bg-white/5"></div>
          </h3>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex space-x-4 items-center group cursor-pointer"
                aria-label={`Open "${post.title}" on Facebook`}
              >
                <div className="w-14 h-14 bg-gray-800 flex-shrink-0 rounded-sm overflow-hidden border border-white/10">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-90"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold leading-tight group-hover:text-brand-gold transition-colors uppercase">
                    {post.title}
                  </h4>
                  <p className="text-[9px] text-gray-500 mt-1 uppercase font-bold tracking-widest">
                    03 March 2024
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Subscribe Column */}
        <div className="text-center sm:text-left">
          <h3 className="text-xs font-black tracking-widest uppercase mb-8 flex items-center justify-center sm:justify-start">
            Subscribe
            <div className="ml-4 flex-grow h-[1px] bg-white/5 hidden sm:block"></div>
          </h3>
          <p className="text-gray-400 text-sm mb-6 italic">
            Stay connected with our hub.
          </p>
          <div className="relative max-w-xs mx-auto sm:mx-0">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#1a1a1a] border border-white/5 rounded p-4 text-xs font-medium focus:ring-1 focus:ring-brand-gold outline-none"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-brand-purple text-white px-4 rounded hover:bg-brand-purpleLight transition-all">
              <Mail size={16} />
            </button>
          </div>
          <div className="flex justify-center sm:justify-start space-x-4 mt-8">
            <a
              href="https://www.facebook.com/share/16d1pJ8995/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-brand-gold hover:text-brand-purple rounded-full transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.youtube.com/@thesonshiphub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-brand-gold hover:text-brand-purple rounded-full transition-all"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://www.instagram.com/the_sonship_hub?utm_source=qr&igsh=MTdqNHYzM3RrYW9jZg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-brand-gold hover:text-brand-purple rounded-full transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Gallery Column */}
        <div className="hidden lg:block">
          <h3 className="text-xs font-black tracking-widest uppercase mb-8 flex items-center">
            Gallery
            <div className="ml-4 flex-grow h-[1px] bg-white/5"></div>
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {footerGallery.map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-800 overflow-hidden cursor-pointer group"
              >
                <img
                  src={src}
                  alt="Gallery"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:opacity-100 transition-all opacity-40"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col items-center justify-between gap-8 md:flex-row">
        <p className="text-gray-500 text-[9px] md:text-[10px] tracking-[0.2em] font-bold uppercase text-center md:text-left">
          {BRAND_NAME} © 2025. MOTTO: {BRAND_MOTTO}
        </p>
        <div className="flex flex-wrap justify-center space-x-6 md:space-x-8 text-gray-500 text-[9px] md:text-[10px] tracking-widest font-black uppercase">
          <a href="#" className="hover:text-brand-gold transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-brand-gold transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-brand-gold transition-colors">
            Support FAQ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
