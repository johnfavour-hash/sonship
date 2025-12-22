
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, ArrowLeft, Share2 } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio?: string;
}

interface TeamMemberBioProps {
  member: TeamMember;
  onBack: () => void;
}

const TeamMemberBio: React.FC<TeamMemberBioProps> = ({ member, onBack }) => {
  // Default detailed bio if none provided
  const detailedBio = member.bio || `With over 15 years of dedicated service in ministry, ${member.name.split(' ')[0]} brings a wealth of spiritual wisdom and a heart for the community to the Sonship Hub. Their journey in faith has been marked by a profound commitment to the Great Commission and a deep-seated belief in the transformative power of the Gospel. 

At Sonship Hub, ${member.name.split(' ')[0]} focuses on cultivating a culture of authenticity and spiritual growth. They believe that every individual has a unique divine purpose waiting to be unlocked. Through their role as ${member.role}, they have spearheaded numerous initiatives that bridge the gap between traditional worship and modern community needs.

${member.name.split(' ')[0]} is known for their approachable nature and their ability to provide compassionate counsel. When not serving at the Hub, they enjoy deep theological studies and spending quality time with their family, finding God's presence in the simplicity of everyday life.`;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-brand-purple hover:text-brand-gold font-black text-[10px] tracking-widest uppercase mb-12 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Team</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image Sidebar */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-gold -z-10"></div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 shadow-2xl">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            <div className="mt-8 flex items-center justify-between p-6 bg-brand-purple text-white rounded-sm shadow-xl">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold mb-1">Reach Out</span>
                <span className="text-xs font-medium opacity-60">Connect with {member.name.split(' ')[0]}</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={18} /></a>
                <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={18} /></a>
                <a href="#" className="hover:text-brand-gold transition-colors"><Mail size={18} /></a>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <h4 className="text-brand-purple font-black tracking-[0.3em] text-[10px] uppercase mb-3">Team Leadership</h4>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-none tracking-tighter uppercase mb-4">
                {member.name}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="h-[2px] w-12 bg-brand-gold"></div>
                <span className="text-brand-purple font-black text-sm uppercase tracking-widest italic">{member.role}</span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line first-letter:text-5xl first-letter:font-black first-letter:text-brand-purple first-letter:mr-3 first-letter:float-left">
                {detailedBio}
              </p>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Share2 size={14} className="text-brand-gold" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Share Profile</span>
                </div>
              </div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-brand-gold hover:bg-brand-goldDark text-brand-purple px-8 py-3 rounded-sm font-black text-[10px] tracking-widest uppercase transition-all shadow-md active:scale-95"
              >
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberBio;
