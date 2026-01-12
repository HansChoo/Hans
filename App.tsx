import React from 'react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import StudioChat from './components/StudioChat';
import { Mic2, Video, Film, Disc, MessageCircle } from 'lucide-react';
import { Service } from './types';

const services: Service[] = [
  {
    id: 'recording',
    title: 'AI 노래 녹음',
    description: '최첨단 AI 보정 기술로 당신의 목소리를 프로 가수의 퀄리티로 완성합니다. 원하는 스타일로 즉시 변환하고 믹싱하세요.',
    icon: <Mic2 className="w-8 h-8" />,
    gradient: 'from-pink-500 to-rose-500',
    link: 'https://hemastudio.com/shop_view?idx=312'
  },
  {
    id: 'parents',
    title: 'AI 부모님 감사 영상',
    description: '소중한 추억이 담긴 사진들을 AI가 분석하여 감동적인 스토리텔링 영상으로 제작합니다. 목소리 복원 내레이션 기능 포함.',
    icon: <Video className="w-8 h-8" />,
    gradient: 'from-amber-400 to-orange-500',
    link: 'https://hemastudio.com/shop_view/?idx=302'
  },
  {
    id: 'mv',
    title: 'AI 뮤직비디오 제작',
    description: 'AI를 활용하여 당신의 노래와 완벽하게 어우러지는 감성적인 뮤직비디오를 제작해 드립니다. 음악의 분위기를 시각적으로 극대화하세요.',
    icon: <Film className="w-8 h-8" />,
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    id: 'album',
    title: 'AI 음반 제작 발매',
    description: '앨범 아트워크 생성부터 스트리밍 플랫폼 등록까지. 당신만의 음악을 세상에 알리는 가장 빠르고 혁신적인 방법.',
    icon: <Disc className="w-8 h-8" />,
    gradient: 'from-cyan-400 to-blue-500',
    link: 'https://hemastudio.com/makemysong'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white">
      {/* Hero Section */}
      <main>
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] tracking-tight">
                Our Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                AI 기술의 정점에서 만나는 네 가지 혁신적인 크리에이티브 솔루션
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section id="assistant" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div className="mb-8 md:mb-0 md:pr-12">
                   <h2 className="text-3xl md:text-4xl font-bold mb-4">
                     지금 나에게 어떤 AI서비스가 필요할까요? <br />
                     <span className="text-purple-500">AI 디렉터</span>와 상의하세요.
                   </h2>
                </div>
             </div>
             
             <StudioChat />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-4 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="font-bold text-lg text-gray-500">HEMA AI STUDIO</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-gray-600 text-sm">
              © 2024 HEMA AI Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a 
        href="http://pf.kakao.com/_PKavxd/chat" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#FEE500] hover:bg-[#FEE500]/90 text-[#3c1e1e] p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(254,229,0,0.5)] flex items-center justify-center group"
        aria-label="카카오톡 문의하기"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          카카오톡 문의
        </span>
      </a>
    </div>
  );
};

export default App;