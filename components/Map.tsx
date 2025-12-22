import React from "react";

const BRAND_LOGO_SRC = "/assets/logo.jpeg";

const Map: React.FC = () => {
  return (
    <div className="h-[450px] w-full relative bg-gray-200 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127160.9168953153!2d6.94273215!3d4.8155544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce5a1835003b%3A0x8037c3548e658e46!2sPort%20Harcourt%2C%20Nigeria!5e0!3m2!1sen!2s!4v1709400000000!5m2!1sen!2s"
        className="w-full h-full border-0 grayscale invert contrast-75 opacity-80"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="bg-white p-6 shadow-2xl rounded text-center min-w-[250px]">
          {/* Facebook-style logo avatar: inner image crops to a circle, outer ring stays crisp */}
          <div className="w-12 h-12 rounded-full bg-brand-purple p-[2px] ring-2 ring-brand-gold shadow-lg mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-white overflow-hidden">
              <img
                src={BRAND_LOGO_SRC}
                alt="Sonship Hub logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h4 className="font-bold text-gray-900">Sonship Hub</h4>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
            Port Harcourt, Rivers State, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
