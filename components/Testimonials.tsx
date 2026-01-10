import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Robert Green",
      text: "Being part of Sonship Hub has completely transformed my spiritual journey. The community is welcoming and the teachings are deep.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Anna Jensen",
      text: "I found my purpose here. The community resources and shared wisdom help me stay grounded in the word every single morning.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "James Mitchell",
      text: "The mentorship I received here transformed my perspective on faith and life. I'm forever grateful for this incredible community.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Sarah Williams",
      text: "Sonship Hub gave me the tools and support to navigate challenges with confidence. Truly a blessing in my life.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-brand-purple font-black tracking-[0.3em] text-[10px] uppercase mb-2">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
            Your Hub, Your Stories
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-400 text-xs italic">
            Authentic encounters within our community.
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="overflow-hidden">
          <style>{`
            @keyframes scroll-testimonials-right-to-left {
              0% {
                transform: translateX(100vw);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            
            .testimonials-scroll {
              display: flex;
              gap: 2rem;
              animation: scroll-testimonials-right-to-left 40s linear infinite;
              width: max-content;
            }
            
            .testimonials-scroll:hover {
              animation-play-state: paused;
            }
            
            .testimonial-card {
              flex-shrink-0;
              width: 350px;
              min-width: 350px;
            }
          `}</style>

          <div className="testimonials-scroll">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="testimonial-card flex flex-col space-y-6 items-start p-8 bg-gray-50/50 border border-gray-100 relative group rounded-2xl"
              >
                <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <span className="text-brand-purple font-black text-6xl md:text-8xl leading-none">
                    "
                  </span>
                </div>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 md:w-20 md:h-20 grayscale rounded-full border-4 border-white shadow-xl flex-shrink-0"
                />
                <div>
                  <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
                    "{t.text}"
                  </p>
                  <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mt-1">
                    Life Group Member
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
