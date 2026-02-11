import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAssistant = () => {
    const element = document.getElementById('assistant');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Spline Background Layer */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/updomi-XU64vi8sAx5DgRNmJPo42sqf/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="3D Abstract Art"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/80">
        {/* 
          Main Content Area: 
          Removed 'pointer-events-auto' to allow interaction with the 3D background behind the text.
        */}
        <div className="text-center px-4 animate-fade-in-up max-w-4xl mx-auto p-12">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] tracking-tight">
            HEMA AI STUDIO
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto mb-8 drop-shadow-md">
            당신의 상상을 현실로 만드는 미래형 크리에이티브 스튜디오
          </p>
          
          <div className="mt-12">
            <button 
              onClick={scrollToAssistant}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-white/10 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 pointer-events-auto"
            >
              AI 디렉터 상담하기
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;