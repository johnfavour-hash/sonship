
import React, { useState, useEffect, useRef } from 'react';

const Stats: React.FC = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  const stats = [
    { value: 5000, label: 'Young Heroes', suffix: '+' },
    { value: 120, label: 'Lead Mentors', suffix: '' },
    { value: 840, label: 'Hub Sessions', suffix: '+' },
    { value: 94, label: 'Transformation Rate', suffix: '%' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          
          // Start counting animation
          stats.forEach((stat, idx) => {
            const duration = 2000; // 2 seconds for counting
            const startTime = Date.now();
            
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const currentCount = Math.floor(stat.value * progress);
              
              setCounts(prevCounts => {
                const newCounts = [...prevCounts];
                newCounts[idx] = currentCount;
                return newCounts;
              });
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            animate();
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden bg-black flex items-center justify-center text-center">
      {/* Background Image with Warm/Dark Tones */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000" 
          alt="Impact Background" 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-20">
          <h4 className="text-brand-gold font-black tracking-[0.5em] text-xs md:text-sm uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            GLOBAL IMPACT
          </h4>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            TRANSFORMING <br />THE FUTURE
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed italic animate-in fade-in duration-1000 delay-300">
            Our hub is open, focused on active transformation and mental resilience.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="animate-in zoom-in duration-700" 
              style={{ animationDelay: `${500 + (idx * 150)}ms`, animationFillMode: 'both' }}
            >
              <div className="text-5xl md:text-7xl font-black text-brand-gold mb-3 tracking-tighter">
                {counts[idx].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-white/40 uppercase tracking-[0.3em] text-[10px] md:text-xs font-black">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
