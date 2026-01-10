
import React from 'react';

const Sponsors: React.FC = () => {
  const sponsors = ['MOUNTAIN', 'MARK&JONES', 'ORIGINAL', 'MANSELL', 'PANTHERE', 'VINTAGE'];
  
  return (
    <section className="py-20 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-2">Our Sponsors</h4>
          <p className="text-gray-400 text-xs italic">The SONSHIP HUB is a sure plug, whose primary purpose is to transform you from being your ordinary self into an outstanding hero!</p>
        </div>
        
        {/* Scrolling Container */}
        <div className="overflow-hidden">
          <style>{`
            @keyframes scroll-left-to-right {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100vw);
              }
            }
            
            .sponsor-scroll {
              display: flex;
              gap: 3rem;
              animation: scroll-left-to-right 30s linear infinite;
              width: max-content;
            }
            
            .sponsor-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="sponsor-scroll opacity-30 grayscale contrast-125">
            {[...sponsors, ...sponsors].map((s, index) => (
              <span key={`${s}-${index}`} className="text-xl font-black tracking-tighter whitespace-nowrap flex-shrink-0">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
