import React from 'react';
import { Clapperboard, Sparkles, MonitorPlay, Play, MessageCircle } from 'lucide-react';

const ProductDetailMV: React.FC = () => {
  const YOUTUBE_LINK = "https://youtu.be/bYlf_xD_cwk?si=d-ZC8VGjHEGq9-1q";
  // Extracting ID from the provided URL: bYlf_xD_cwk
  const THUMBNAIL_URL = "https://img.youtube.com/vi/bYlf_xD_cwk/maxresdefault.jpg";

  return (
    <div className="w-full bg-[#050505] text-white py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-0 w-1/3 h-full bg-purple-900/10 blur-[100px] pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & Info */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-wider mb-4">
              PREMIUM CREATIVE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              AI 뮤직비디오 제작
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-300 mb-6 leading-tight break-keep">
              당신의 음악이 <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">시각적 예술</span>이 되는 순간
            </p>

            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <span className="text-purple-400 text-sm font-bold mr-3">제작비</span>
                <span className="text-xl font-bold text-white">900,000원 ~</span>
              </div>
            </div>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep md:break-words">
              신곡의 분위기에 딱 맞는 애니메이션부터 실사형 영상까지.<br />
              당신의 음악적 영감을 AI가 시각적으로 재해석하여<br />
              세상에 없던 독창적인 예술 작품으로 완성해 드립니다.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { 
                  icon: <Clapperboard className="w-5 h-5 text-purple-500" />, 
                  title: "다양한 스타일 연출", 
                  desc: "2D/3D 애니메이션, 실사, 수채화풍 등 원하는 화풍 구현" 
                },
                { 
                  icon: <Sparkles className="w-5 h-5 text-purple-500" />, 
                  title: "한계 없는 세계관 구현", 
                  desc: "시공간의 제약 없이, 상상하는 모든 배경과 오브제를 압도적인 퀄리티로 시각화" 
                },
                { 
                  icon: <MonitorPlay className="w-5 h-5 text-purple-500" />, 
                  title: "합리적인 프리미엄", 
                  desc: "기존 MV 제작 비용의 1/10 수준으로 만나는 고퀄리티 영상" 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="mt-1 mr-4 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">{item.title}</h4>
                    <p className="text-gray-400 text-xs md:text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="http://pf.kakao.com/_PKavxd/chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span className="mr-2">제작 상담하기</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual / Thumbnail */}
          <div className="order-1 lg:order-2 relative group">
            {/* Glow Effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <a 
              href={YOUTUBE_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block aspect-video rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl"
            >
              <img 
                src={THUMBNAIL_URL} 
                alt="AI Music Video Sample" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                 <div className="inline-flex items-center px-3 py-1 rounded-md bg-purple-600 text-white text-[10px] font-bold mb-2">
                    REFERENCE
                 </div>
                 <h3 className="text-white font-bold text-lg leading-tight truncate">
                    AI Generated Visualizer
                 </h3>
                 <p className="text-gray-400 text-xs mt-1">클릭하여 전체 영상 확인</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailMV;