import React from "react";
import { Quote } from "lucide-react";

const Fathers: React.FC = () => {
  const fathers = [
    {
      name: "Pst. Engr. Imarhiagbe Henry",
      role: "FAMILY LIFE",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Pst. Engr. Uko Robson",
      role: "LEADERSHIP & FINANCE",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Pst. Prof. Chujor Jacobs Chujor",
      role: "THERAPY & COUNSELLING",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Pastor Meibi Ofubu",
      role: "CAREER",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="py-24 bg-brand-purple relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-brand-gold font-black tracking-[0.4em] text-[10px] uppercase mb-4">
            The Pillars
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            T.S.H FATHERS
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {fathers.map((father, idx) => (
            <div key={idx} className="group">
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl border-2 border-brand-gold/20 shadow-2xl transition-all duration-500 group-hover:border-brand-gold">
                <img
                  src={father.img}
                  alt={father.name}
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div className="text-center px-2">
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-brand-gold transition-colors">
                  {father.name}
                </h3>
                <div className="inline-block px-4 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full">
                  <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em]">
                    {father.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Quote Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[2rem] border border-white/10 text-center shadow-2xl relative">
            <Quote
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-brand-gold"
              size={48}
              fill="currentColor"
            />
            <p className="text-2xl md:text-3xl font-black text-white italic leading-tight tracking-tight uppercase">
              “LET EVERY MAN MAINTAIN THE VOCATION WHEREIN HE IS CALLED”
            </p>
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <div className="w-8 h-2 rounded-full bg-brand-gold/30"></div>
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fathers;
