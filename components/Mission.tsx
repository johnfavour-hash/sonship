import React from "react";
import { Eye, Target, Shield, Users } from "lucide-react";

const Mission: React.FC = () => {
  const pillars = [
    {
      title: "VISION",
      content:
        "To see that a generation of young men and all males who are on a journey to adulthood and eternity, don't just live like ordinary men, but are transformed and outstanding in every positive area of their lives.",
      icon: <Eye className="text-brand-gold" size={32} />,
      bg: "bg-brand-purple",
    },
    {
      title: "MISSION",
      content:
        "“To raise up the foundation of many generations, bringing many sons to glory” – Isaiah 62:1, 2",
      icon: <Target className="text-brand-purple" size={32} />,
      bg: "bg-white",
    },
    {
      title: "PLEDGE",
      content:
        "Acts 20:24 “But none of these things move me, neither count I my life dear unto myself, so that I might finish my course with joy, to testify the gospel of the grace of God.”",
      icon: <Shield className="text-brand-purple" size={32} />,
      bg: "bg-white",
    },
  ];

  return (
    <section id="mission" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Foundation Header */}
        <div className="text-center mb-12 md:mb-20">
          <h4 className="text-brand-purple font-black tracking-[0.4em] text-[10px] uppercase mb-4">
            The Blueprint
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 uppercase tracking-tighter">
            OUR FOUNDATION
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
        </div>

        {/* Pillars Grid - Responsive stacking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl mb-16 md:mb-24">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`${pillar.bg} p-10 md:p-12 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/10 last:border-none transition-all duration-500 hover:scale-[1.01] z-10`}
            >
              <div
                className={`mb-6 md:mb-8 p-4 rounded-2xl ${pillar.bg === "bg-brand-purple" ? "bg-white/10" : "bg-brand-purple/5"}`}
              >
                {pillar.icon}
              </div>
              <h3
                className={`text-lg md:text-xl font-black mb-4 md:mb-6 uppercase tracking-widest ${pillar.bg === "bg-brand-purple" ? "text-brand-gold" : "text-brand-purple"}`}
              >
                {pillar.title}
              </h3>
              <p
                className={`text-xs md:text-sm leading-relaxed font-medium ${pillar.bg === "bg-brand-purple" ? "text-white/80" : "text-gray-500"}`}
              >
                {pillar.content}
              </p>
            </div>
          ))}
        </div>

        {/* Target Audience Featured Section */}
        <div className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row items-stretch border border-gray-100">
          <div className="lg:w-1/2 relative min-h-[300px] md:min-h-[400px]">
            <img
              src="/assets/pexels-green-odette-232224115-32197535.jpg"
              alt="Young Men Brotherhood"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-brand-purple/20 mix-blend-multiply"></div>
            <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-brand-gold text-brand-purple font-black text-[9px] md:text-[10px] tracking-widest uppercase px-4 md:px-6 py-2 rounded-full shadow-lg">
              All Males Welcome
            </div>
          </div>
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-purple rounded-xl flex items-center justify-center shadow-lg">
                <Users className="text-brand-gold" size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-brand-purple uppercase tracking-tight">
                TARGET AUDIENCE
              </h3>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 italic">
              "The Sonship Hub presents a safe space{" "}
              <strong className="text-brand-purple">"for all males"</strong>{" "}
              to thrive, despite modern vices..."
            </p>

            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 md:mb-10">
              Through physical meetings, online sessions, and special events, we
              provide the catalyst necessary to transform you into a hero.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="block text-brand-purple font-black text-xs uppercase tracking-widest mb-1">
                  Meetings
                </span>
                <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase">
                  Physical & Digital
                </span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="block text-brand-purple font-black text-xs uppercase tracking-widest mb-1">
                  Frequency
                </span>
                <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase">
                  Live Broadcasts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
