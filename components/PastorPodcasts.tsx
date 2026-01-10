import React, { useState } from "react";
import { Play, ChevronDown } from "lucide-react";

const LEADERSHIP_IMAGE_SRC = "/assets/Samson Agube.png";

const PastorPodcasts: React.FC = () => {
  const [expandSermons, setExpandSermons] = useState(false);

  const podcasts = [
    { title: "The gap between", author: "By Agube Samson O, TSH President" },
    { title: "Who am I?", author: "By Agube Samson O, TSH President" },
    { title: "Why am I born?", author: "By Agube Samson O, TSH President" },
    { title: "The voyage - Ships To Tarshish", author: "By Agube Samson O, TSH President" },
    { title: "Heart makers vs Heart breakers", author: "By Agube Samson O, TSH President" },
    { title: "The visionary man", author: "By Agube Samson O, TSH President" },
    { title: "Wake up, Wisen up, Win up", author: "By Agube Samson O, TSH President" },
  ];

  const displayedPodcasts = expandSermons ? podcasts : podcasts.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Leader Column */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h4 className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-2">
              Leadership
            </h4>
            <p className="text-gray-400 text-xs italic mb-8">
              The core teachings of our hub
            </p>
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-brand-gold -z-10"></div>
              <img
                src={LEADERSHIP_IMAGE_SRC}
                alt="Leadership"
                className="w-full object-contain bg-white border border-brand-gold/60 shadow-lg transition-all duration-500 p-3"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-black leading-tight mb-6 uppercase tracking-tighter">
              Nobody is perfect.
              <br />
              Everything is possible
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              There is Hope: Don't faint, Rise again - if thou faint in the days of adversity, thy strength is small.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              A righteous man falleth seven times and riseth again! There is hope of a tree, if it be cut down, it shall sprout again! Don't be weary in well doing, for in due season, thou shalt reap if thou faint not.
            </p>
            <div>
              <h5 className="font-bold text-gray-900">
                Agube Samson. O.
                <br />
                <span className="text-brand-purple uppercase text-[10px] tracking-widest">
                  President, The Sonship Hub
                </span>
              </h5>
            </div>
          </div>
        </div>

        {/* Podcasts Column */}
        <div>
          <h4 className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-2">
            Sermons
          </h4>
          <p className="text-gray-400 text-xs italic mb-12">
            Listen to the latest messages
          </p>
          <div className="space-y-6">
            {displayedPodcasts.map((podcast, i) => (
              <div
                key={i}
                className="flex items-start space-x-6 pb-6 border-b border-gray-100 group cursor-pointer animate-in fade-in"
              >
                <div className="bg-gray-100 p-2 rounded group-hover:bg-brand-purple group-hover:text-white transition-all">
                  <Play size={16} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight group-hover:text-brand-purple transition-colors mb-1 uppercase">
                    {podcast.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    {podcast.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setExpandSermons(!expandSermons)}
            className="mt-8 bg-brand-gold hover:bg-brand-goldDark text-brand-purple px-6 py-2 rounded text-[10px] font-bold tracking-widest uppercase transition-all flex items-center space-x-2"
          >
            <span>{expandSermons ? "Show Less" : "View All Messages"}</span>
            <ChevronDown size={14} className={`transition-transform ${expandSermons ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PastorPodcasts;
