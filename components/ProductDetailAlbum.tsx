import React from 'react';
import { Disc, Globe, Mic2, Check, MessageCircle } from 'lucide-react';

const ProductDetailAlbum: React.FC = () => {
  return (
    <div className="w-full bg-[#050505] text-white py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
           {/* Left Column: Visual / Album Package Card */}
           <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 p-6 md:p-8 flex flex-col justify-between h-full">
                {/* Album Cover Art Placeholder */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/5 mb-8 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                    <div className="z-10 text-center">
                        <h3 className="text-2xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">Make My Song</h3>
                        <p className="text-gray-400 text-sm">SUNO AI Edition</p>
                    </div>
                </div>

                {/* Platform Icons */}
                <div className="space-y-4">
                    <p className="text-sm text-gray-400 text-center font-medium">Global Distribution Partners</p>
                    <div className="flex flex-wrap justify-center gap-3 opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500">
                        {['Melon', 'Genie', 'Spotify', 'Apple Music', 'YouTube Music'].map((platform) => (
                            <span key={platform} className="px-3 py-1 bg-white/5 rounded-full text-[10px] md:text-xs border border-white/5 font-bold">
                                {platform}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Text & Info */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-wider mb-4">
              NEW ARRIVAL
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              AI 음반 제작 발매
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-300 mb-6 leading-tight break-keep">
              Suno AI로 만든 멜로디, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">전 세계 음원</span>으로 데뷔
            </p>

            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <span className="text-cyan-400 text-sm font-bold mr-3">발매까지</span>
                <span className="text-xl font-bold text-white">590,000원</span>
              </div>
              <p className="mt-3 text-xs text-gray-500 pl-1 break-keep md:break-words">
                * 베이직(65만원), 프리미엄(118만원), 마스터(149만원) 등<br className="md:hidden"/> 실제 연주 옵션도 선택 가능합니다.
              </p>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep md:break-words">
              내가 만든 AI 음악, 혼자만 듣기 아까우셨나요?<br />
              HEMA 스튜디오의 프로 엔지니어링을 거쳐 고퀄리티 음원으로 재탄생합니다.<br />
              멜론, 스포티파이 등 국내외 모든 음원 포털에 정식 발매해 드립니다.
            </p>

            {/* Pricing Card */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-colors mb-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white flex items-center">
                            SUNO AI 음반제작 패키지
                            <span className="ml-2 px-2 py-0.5 bg-red-600 text-white text-[10px] rounded font-bold">HIT</span>
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">AI 데모를 완벽한 마스터 음원으로</p>
                    </div>
                </div>
                
                <ul className="space-y-3">
                    {[
                        "내가 직접 만든 AI 음원을 고퀄리티 사운드로 리마스터링",
                        "발라드, 힙합, K-pop, 트로트 등 모든 장르 가능",
                        "국내외 음원 사이트 발매 및 유통 대행"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-start text-sm md:text-base text-gray-300">
                            <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="http://pf.kakao.com/_PKavxd/chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                발매 상담하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailAlbum;