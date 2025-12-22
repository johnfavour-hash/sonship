import React from "react";
import { Plus } from "lucide-react";
import {
  teamMembers,
  TEAM_IMAGE_FIT_BY_NAME,
  type TeamMember,
} from "../data/teamMembers";

interface TeamProps {
  onMemberSelect: (member: TeamMember) => void;
}

const Team: React.FC<TeamProps> = ({ onMemberSelect }) => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-brand-purple font-black tracking-[0.3em] text-[10px] uppercase mb-2">
            Our Leadership
          </h4>
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">
            Meet The Team
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-400 text-xs italic">
            A dedicated family committed to serving the Sonship Hub community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              className="group cursor-pointer"
              onClick={() => onMemberSelect(member)}
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-gray-100 rounded-sm">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className={[
                    "w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700",
                    TEAM_IMAGE_FIT_BY_NAME[member.name] === "contain"
                      ? "object-contain bg-gray-100 p-6"
                      : "object-cover group-hover:scale-105",
                  ].join(" ")}
                />
                <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                    <Plus size={24} className="text-brand-purple" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight group-hover:text-brand-purple transition-colors px-2">
                  {member.name}
                </h3>
                <p className="text-[9px] font-black text-brand-gold uppercase tracking-[0.2em] mt-1 italic leading-tight">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
