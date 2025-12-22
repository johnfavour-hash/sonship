
import React, { useState } from 'react';
import { CreditCard, Globe, Landmark, Copy, Check, Heart } from 'lucide-react';

const SupportVision: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [method, setMethod] = useState<'international' | 'local'>('international');

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0123456789");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
         <div className="inline-flex items-center space-x-2 bg-brand-gold/20 px-4 py-1 rounded-full mb-6">
            <Heart size={14} className="text-brand-purple fill-brand-purple" />
            <span className="text-[10px] font-black text-brand-purple uppercase tracking-widest">Supporting the Vision</span>
         </div>
         <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Invest in the Kingdom</h1>
         <p className="text-gray-500 text-lg max-w-2xl mx-auto italic">"Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver." — 2 Cor 9:7</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Selection Column */}
        <div className="lg:col-span-4 space-y-4">
          <button 
            onClick={() => setMethod('international')}
            className={`w-full p-6 rounded-2xl border-2 flex items-center space-x-6 transition-all ${method === 'international' ? 'bg-brand-purple border-brand-purple shadow-xl -translate-y-1' : 'bg-white border-white hover:border-gray-200 grayscale'}`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${method === 'international' ? 'bg-brand-gold text-brand-purple' : 'bg-gray-100 text-gray-400'}`}>
              <Globe size={24} />
            </div>
            <div className="text-left">
              <h3 className={`font-black text-xs uppercase tracking-widest ${method === 'international' ? 'text-white' : 'text-gray-900'}`}>International</h3>
              <p className={`text-[10px] font-medium ${method === 'international' ? 'text-white/60' : 'text-gray-400'}`}>Card, PayPal, USD/GBP/EUR</p>
            </div>
          </button>

          <button 
            onClick={() => setMethod('local')}
            className={`w-full p-6 rounded-2xl border-2 flex items-center space-x-6 transition-all ${method === 'local' ? 'bg-brand-purple border-brand-purple shadow-xl -translate-y-1' : 'bg-white border-white hover:border-gray-200 grayscale'}`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${method === 'local' ? 'bg-brand-gold text-brand-purple' : 'bg-gray-100 text-gray-400'}`}>
              <Landmark size={24} />
            </div>
            <div className="text-left">
              <h3 className={`font-black text-xs uppercase tracking-widest ${method === 'local' ? 'text-white' : 'text-gray-900'}`}>Local Support</h3>
              <p className={`text-[10px] font-medium ${method === 'local' ? 'text-white/60' : 'text-gray-400'}`}>Direct Bank Transfer</p>
            </div>
          </button>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          {method === 'international' ? (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-black mb-8 uppercase tracking-tighter">Vision Seed</h2>
              <div className="space-y-6">
                 <div className="grid grid-cols-3 gap-4 mb-8">
                    {['$10', '$50', '$100', '$250', '$500', 'Custom'].map((amt) => (
                      <button key={amt} className="py-4 border-2 border-gray-50 rounded-xl font-bold text-gray-500 hover:border-brand-gold hover:text-brand-purple hover:bg-brand-gold/5 transition-all">
                        {amt}
                      </button>
                    ))}
                 </div>
                 <div className="space-y-4">
                    <div className="relative">
                      <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input 
                        type="text" 
                        placeholder="Card Number"
                        className="w-full bg-gray-50 border border-gray-100 rounded-lg py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-brand-purple/20 outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-100 rounded-lg py-4 px-4 text-sm focus:ring-2 focus:ring-brand-purple/20 outline-none" />
                       <input type="text" placeholder="CVC" className="w-full bg-gray-50 border border-gray-100 rounded-lg py-4 px-4 text-sm focus:ring-2 focus:ring-brand-purple/20 outline-none" />
                    </div>
                 </div>
                 <button className="w-full bg-brand-purple text-white py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase shadow-xl hover:bg-brand-purpleLight transition-all">
                   Process Secure Support
                 </button>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-black mb-8 uppercase tracking-tighter">Bank Transfer</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-8">
                 <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Bank Name</p>
                      <p className="text-lg font-bold text-gray-900">Access Bank PLC</p>
                    </div>
                    <Landmark size={24} className="text-brand-purple opacity-20" />
                 </div>
                 <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Account Number</p>
                      <p className="text-3xl font-black text-brand-purple tracking-tighter">0123456789</p>
                    </div>
                    <button 
                      onClick={copyToClipboard}
                      className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 text-brand-purple"
                    >
                      {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                    </button>
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Account Name</p>
                    <p className="text-lg font-bold text-gray-900 uppercase">The Sonship Hub Global</p>
                 </div>
              </div>
              <p className="mt-8 text-xs text-gray-400 italic text-center">Please use "VISION SUPPORT" as the transfer description.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportVision;
