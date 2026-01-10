
import React from 'react';
import { MapPin, User, Heart, Facebook, Youtube, Instagram, Mail } from 'lucide-react';

interface HeaderProps {
  onViewChange: (view: 'home' | 'login' | 'register' | 'support-vision') => void;
}

const Header: React.FC<HeaderProps> = ({ onViewChange }) => {
  return (
    <div className="bg-[#1a1a1a] text-white text-[10px] py-3 md:py-2 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile View */}
        <div className="md:hidden space-y-2">
          <div className="flex items-center space-x-2 opacity-60">
            <MapPin size={12} className="text-brand-purple" />
            <span>Port Harcourt, Rivers State, Nigeria</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center space-x-3">
              <a href="https://www.facebook.com/share/16d1pJ8995/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><Facebook size={12} /></a>
              <a href="https://www.youtube.com/@thesonshiphub" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><Youtube size={12} /></a>
              <a href="https://www.instagram.com/the_sonship_hub?utm_source=qr&igsh=MTdqNHYzM3RrYW9jZg==" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><Instagram size={12} /></a>
              <a href="mailto:thesonshiphub25@gmail.com" className="hover:text-brand-gold transition-colors"><Mail size={12} /></a>
            </div>
            <button 
              onClick={() => onViewChange('support-vision')}
              className="bg-brand-purple hover:bg-brand-purpleLight text-white px-2 py-1 rounded text-[9px] font-bold flex items-center space-x-1 transition-all"
            >
              <Heart size={8} className="fill-white" />
              <span>Support</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 pt-1">
            <button onClick={() => onViewChange('register')} className="hover:text-brand-gold text-[9px] font-bold uppercase">Register</button>
            <span className="opacity-20">|</span>
            <button onClick={() => onViewChange('login')} className="hover:text-brand-gold text-[9px] font-bold uppercase">Login</button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 opacity-60">
              <MapPin size={12} className="text-brand-purple" />
              <span>Port Harcourt, Rivers State, Nigeria</span>
            </div>
            <div className="h-3 w-[1px] bg-white/10"></div>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/share/16d1pJ8995/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><Facebook size={12} /></a>
              <a href="https://www.youtube.com/@thesonshiphub" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><Youtube size={12} /></a>
              <a href="https://www.instagram.com/the_sonship_hub?utm_source=qr&igsh=MTdqNHYzM3RrYW9jZg==" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><Instagram size={12} /></a>
              <a href="mailto:thesonshiphub25@gmail.com" className="hover:text-brand-gold transition-colors"><Mail size={12} /></a>
            </div>
          </div>
          <div className="flex items-center space-x-6 font-bold tracking-widest uppercase">
            <div className="flex items-center space-x-4">
              <button onClick={() => onViewChange('register')} className="hover:text-brand-gold flex items-center space-x-1">
                <User size={10} />
                <span>Register</span>
              </button>
              <span className="opacity-20">|</span>
              <button onClick={() => onViewChange('login')} className="hover:text-brand-gold">Login</button>
            </div>
            <button 
              onClick={() => onViewChange('support-vision')}
              className="bg-brand-purple hover:bg-brand-purpleLight text-white px-4 py-1 rounded flex items-center space-x-2 transition-all shadow-lg"
            >
              <Heart size={10} className="fill-white" />
              <span>Support Vision</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
