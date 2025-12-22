import React from "react";
import { Shield, Zap, Heart, Hand, Sun, Star, Anchor } from "lucide-react";

const Promises: React.FC = () => {
  const promiseList = [
    {
      verse: "“…I AM WITH THEE….”",
      concept: "GOD'S PRESENCE",
      icon: <Sun className="text-brand-gold" size={24} />,
    },
    {
      verse: "“…I AM THY GOD….”",
      concept: "GOD'S PREEMINENCE",
      icon: <Star className="text-brand-gold" size={24} />,
    },
    {
      verse: "“…I WILL STRENGTHEN THEE….”",
      concept: "GOD'S POWER",
      icon: <Zap className="text-brand-gold" size={24} />,
    },
    {
      verse: "“…I WILL HELP THEE….”",
      concept: "GOD'S PROVISION",
      icon: <Heart className="text-brand-gold" size={24} />,
    },
    {
      verse: "“…I WILL UPHOLD THEE….”",
      concept: "GOD'S POTENCY",
      icon: <Shield className="text-brand-gold" size={24} />,
    },
    {
      verse: "“…WITH THE RIGHT HAND….”",
      concept: "GOD'S PLEASANTNESS",
      icon: <Hand className="text-brand-gold" size={24} />,
    },
    {
      verse: "“…OF MY RIGHTEOUSNESS….”",
      concept: "GOD'S PURITY",
      icon: <Anchor className="text-brand-gold" size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <h4 className="text-brand-purple font-black tracking-[0.4em] text-[10px] uppercase mb-4">
              The Covenant
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-none">
              T.S.H 7 – FOLD <br />
              <span className="text-brand-purple">PROMISES</span>
            </h2>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-1 bg-brand-gold"></div>
              <p className="text-xl font-black text-brand-purple uppercase tracking-widest italic">
                ISAIAH 41:10
              </p>
            </div>
            <p className="text-gray-500 text-lg italic leading-relaxed">
              These seven pillars of divine assurance form the bedrock of our
              community. In every challenge, we lean on the unwavering Word that
              transforms ordinary men into heroes of faith.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 border-2 border-brand-gold/20 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
            <img
              src="/assets/pexels-rdne-5875444.jpg"
              alt="Divine Light"
              className="w-full rounded-2xl shadow-2xl grayscale brightness-110 contrast-125"
            />
            <div className="absolute inset-0 bg-brand-purple/10 mix-blend-multiply rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promiseList.map((p, idx) => (
            <div
              key={idx}
              className={`group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${idx === 6 ? "lg:col-span-2 lg:max-w-md lg:mx-auto w-full" : ""}`}
            >
              <div className="mb-6 w-12 h-12 bg-brand-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                {p.icon}
              </div>
              <h3 className="text-brand-purple font-black text-lg mb-4 leading-tight uppercase tracking-tighter">
                {p.verse}
              </h3>
              <div className="pt-4 border-t border-gray-50">
                <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-1">
                  Conceptual Mapping
                </p>
                <p className="text-sm font-black text-gray-900 uppercase tracking-widest">
                  {p.concept}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promises;
