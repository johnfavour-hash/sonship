import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "/assets/pexels-mgshotz-16374182.jpg",
      alt: "Sonship Hub Graduation",
    },
    {
      url: "/assets/pexels-shvetsa-3845458.jpg",
      alt: "Sonship Hub Fellowship",
    },
    {
      url: "/assets/pexels-mohammed-17746214.jpg",
      alt: "Sonship Hub Leadership",
    },
    {
      url: "/assets/pexels-timur-weber-9127034.jpg",
      alt: "Sonship Hub Worship",
    },
    {
      url: "/assets/pexels-case-originals-3420517.jpg",
      alt: "Sonship Hub Growth",
    },
    {
      url: "/assets/pexels-green-odette-232224115-32197535.jpg",
      alt: "Sonship Hub Mentorship",
    },
    {
      url: "/assets/pexels-a-r-shimanto-321946427-14509165.jpg",
      alt: "Sonship Hub Service",
    },
    {
      url: "/assets/pexels-rdne-8500422.jpg",
      alt: "Sonship Hub Discipleship",
    },
    {
      url: "/assets/pexels-ron-lach-10643471.jpg",
      alt: "Sonship Hub Brotherhood",
    },
    {
      url: "/assets/pexels-saulo-leite-1491182-27254260.jpg",
      alt: "Sonship Hub Outreach",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      id="hero"
      className="relative h-[80vh] md:h-[85vh] min-h-[550px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-linear ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-50xl mx-auto">
        <div className="overflow-hidden mb-4">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tighter uppercase animate-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            <span className="whitespace-nowrap">ORDINARY</span>{" "}
            <span className="inline-flex items-baseline gap-3 lg:gap-4 whitespace-nowrap">
              <span>TO</span>
              <span>OUTSTANDING</span>
            </span>
          </h1>
        </div>
        <div className="w-12 h-1 bg-brand-gold mx-auto mb-8 animate-in zoom-in duration-1000 delay-300 fill-mode-both"></div>

        <p className="text-white/85 text-xs sm:text-sm md:text-base mb-10 max-w-2xl mx-auto font-medium leading-relaxed italic animate-in fade-in duration-1000 delay-650 fill-mode-both">
          Disheartened? Lone? Rejected? We are your safe space to thrive despite
          modern vices. The Sonship Hub is the best news you've been longing
          for.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-both">
          <button className="bg-brand-purple hover:bg-brand-purpleLight text-white px-8 md:px-10 py-4 font-black rounded shadow-lg transition-all uppercase tracking-[0.2em] text-[10px] w-full sm:w-auto hover:scale-105 active:scale-95">
            Our Manifesto
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 md:px-10 py-4 font-black rounded transition-all uppercase tracking-[0.2em] text-[10px] w-full sm:w-auto hover:scale-105 active:scale-95">
            Watch Story
          </button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center space-x-3 md:space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full h-1.5 ${
              index === currentSlide
                ? "w-10 md:w-12 bg-brand-gold"
                : "w-5 md:w-6 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
