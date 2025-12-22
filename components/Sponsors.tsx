
import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section className="py-20 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-2">Our Sponsors</h4>
          <p className="text-gray-400 text-xs italic">The SONSHIP HUB is a sure plug, whose primary purpose is to transform you from being your ordinary self into an outstanding hero!</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
          {['MOUNTAIN', 'MARK&JONES', 'ORIGINAL', 'MANSELL', 'PANTHERE', 'VINTAGE'].map((s) => (
            <span key={s} className="text-xl font-black tracking-tighter">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
