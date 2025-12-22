import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight, Check } from "lucide-react";

const BRAND_LOGO_SRC = "/assets/logo.jpeg";
const BRAND_NAME = "THE SONSHIP HUB";
const BRAND_MOTTO = "TRANSFORMING THE TOTAL MAN – FROM ORDINARY TO OUTSTANDING";

interface AuthProps {
  initialMode: "login" | "register";
  onViewChange: (
    view: "home" | "login" | "register" | "support-vision",
  ) => void;
}

const Auth: React.FC<AuthProps> = ({ initialMode, onViewChange }) => {
  const [mode, setMode] = useState<"login" | "register">(initialMode);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        {/* Branding Side */}
        <div className="md:w-5/12 bg-brand-purple p-12 text-white flex flex-col justify-between">
          <div>
            <button
              onClick={() => onViewChange("home")}
              className="flex items-center space-x-3 mb-12"
            >
              {/* Facebook-style logo avatar: inner image crops to a circle, outer ring stays crisp */}
              <div className="w-10 h-10 rounded-full bg-brand-purple p-[2px] ring-2 ring-brand-gold shadow-lg overflow-visible">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <img
                    src={BRAND_LOGO_SRC}
                    alt="Sonship Hub logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-white font-black tracking-widest text-lg">
                {BRAND_NAME}
              </span>
            </button>
            <h2 className="text-4xl font-black mb-6 leading-tight uppercase tracking-tighter">
              {mode === "login"
                ? "Welcome Back to the Hub"
                : "Join Our Global Community"}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              <span className="text-brand-gold font-bold">MOTTO:</span>{" "}
              {BRAND_MOTTO}
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-brand-gold">
              <Check size={16} />
              <span>Personalized Devotionals</span>
            </div>
            <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-brand-gold">
              <Check size={16} />
              <span>Event Early Access</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-7/12 p-12 lg:p-16">
          <div className="mb-10 flex space-x-8 border-b border-gray-100">
            <button
              onClick={() => setMode("login")}
              className={`pb-4 text-xs font-black tracking-widest uppercase transition-all ${mode === "login" ? "text-brand-purple border-b-2 border-brand-purple" : "text-gray-400 hover:text-gray-600"}`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`pb-4 text-xs font-black tracking-widest uppercase transition-all ${mode === "register" ? "text-brand-purple border-b-2 border-brand-purple" : "text-gray-400 hover:text-gray-600"}`}
            >
              Register
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {mode === "register" && (
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                />
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded checked:bg-brand-purple checked:border-brand-purple transition-all cursor-pointer"
                  />
                  <Check
                    size={12}
                    className="absolute left-1 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-xs text-gray-500 font-medium group-hover:text-gray-700 transition-colors">
                  Remember me
                </span>
              </label>
              {mode === "login" && (
                <button
                  type="button"
                  className="text-xs font-bold text-brand-purple hover:text-brand-purpleLight"
                >
                  Forgot Password?
                </button>
              )}
            </div>

            <button className="w-full bg-brand-purple text-white py-4 rounded-lg font-black text-xs tracking-[0.2em] uppercase shadow-xl hover:bg-brand-purpleLight hover:-translate-y-1 transition-all flex items-center justify-center space-x-2">
              <span>{mode === "login" ? "Sign In" : "Create Account"}</span>
              <ArrowRight size={14} />
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-gray-400 font-medium">
            {mode === "login" ? "Don't have an account?" : "Already a member?"}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-brand-purple font-black uppercase tracking-widest hover:underline ml-2"
            >
              {mode === "login" ? "Register Now" : "Login Instead"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
