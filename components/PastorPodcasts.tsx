import React from "react";
import { Play } from "lucide-react";

const LEADERSHIP_IMAGE_SRC = "/assets/Samson Agube.png";

const PastorPodcasts: React.FC = () => {
  const podcasts = [
    { title: "Taste and see that the Lord is good", author: "By Hub Leaders" },
    { title: "The Journey to Sonship: Part 1", author: "By Hub Leaders" },
    { title: "Breaking Vices and Modern Bondage", author: "By Hub Leaders" },
  ];

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
              We have a strong sense of community at the Sonship Hub. We
              encourage young men to find their identity in Christ.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The mission of our hub is to transform ordinary men into heroes
              through the power of God's word and accountability.
            </p>
            <div>
              <h5 className="font-bold text-gray-900">
                Visionary Leadership,{" "}
                <span className="text-brand-purple uppercase text-[10px] tracking-widest">
                  Sonship Hub
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
            {podcasts.map((podcast, i) => (
              <div
                key={i}
                className="flex items-start space-x-6 pb-6 border-b border-gray-100 group cursor-pointer"
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
          <button className="mt-8 bg-brand-gold hover:bg-brand-goldDark text-brand-purple px-6 py-2 rounded text-[10px] font-bold tracking-widest uppercase transition-all">
            View All Messages
          </button>
        </div>
      </div>
    </section>
  );
};

export default PastorPodcasts;
