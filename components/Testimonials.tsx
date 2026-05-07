import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Samson O. Agube",
      text: "The Tortise does not go anywhere, until it sticks out it's neck.",
      img: "./assets/Samson Agube.png",
    },
    {
      name: "Samson O. Agube",
      text: "In life concentrate on one thing, 'this one thing I do', if you dance to the tune of others, you'll forget the tune of your own life, you'll dance until you become lame.",
      img: "./assets/Samson Agube.png",
    },
    {
      name: "Samson O. Agube",
      text: "Your conviction is what you tell yourself, privately or publicly",
      img: "./assets/Samson Agube.png",
    },
    {
      name: "Samson O. Agube",
      text: "Living one day at a time is not difficult, attaining greatness is not difficult, it's a matter of daily living.",
      img: "./assets/Samson Agube.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-brand-purple font-black tracking-[0.3em] text-[10px] uppercase mb-2">
            Quotes
          </h4>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
            WORDS OF WISDOM FROM THE HUB
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
                    President, The Sonship Hub
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
