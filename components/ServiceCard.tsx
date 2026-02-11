import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const CardContent = (
    <div className="group relative w-full h-auto md:h-[400px] rounded-3xl p-[1px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20">
      {/* Base Border (Subtle) */}
      <div className="absolute inset-0 bg-white/10 transition-opacity duration-300 group-hover:opacity-0" />
      
      {/* Active Border (Gradient on Hover) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Inner Content Background */}
      <div className="relative h-full w-full bg-[#080808] rounded-[23px] overflow-hidden backdrop-blur-3xl">
        {/* Ambient Hover Glow */}
        <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-[60px] transition-all duration-700`} />
        
        <div className="relative h-full flex flex-col justify-between p-5 md:p-8 z-10">
            <div>
                {/* Icon Container */}
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-8 bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                     <div className="text-white drop-shadow-md transform scale-75 md:scale-100">
                        {service.icon}
                     </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-3xl font-black text-white mb-2 md:mb-6 leading-tight tracking-tight transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] whitespace-nowrap">
                    {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-xs md:text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300 break-keep md:break-words">
                    {service.description}
                </p>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-white/5 mt-4 md:mt-0">
                <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-70 group-hover:opacity-100 transition-all duration-300`}>
                    View Details
                </span>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-300">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </div>
  );

  if (service.link) {
    const isInternal = service.link.startsWith('#');
    
    if (isInternal) {
      return (
        <div 
          onClick={() => {
            const element = document.getElementById(service.link!.substring(1));
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="block w-full cursor-pointer"
        >
          {CardContent}
        </div>
      );
    }

    return (
      <a 
        href={service.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-full"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default ServiceCard;