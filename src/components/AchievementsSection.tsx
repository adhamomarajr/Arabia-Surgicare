import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const { language } = useApp();

  const achievements = [
  
  ];

  return (
    <section className="bg-purple-950 text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 space-y-2">
          <span className="">
            
          </span>
          <h2 className="text-2xl md:text-3xl font-black">
           
          </h2>
          
        </div>

        <div className="">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className=""
            >
              <div className="text-3xl mb-2">{ach.icon}</div>
              <h3 className="font-extrabold text-lg text-white">{ach.title}</h3>
              <p className="text-xs text-purple-200 leading-relaxed">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
