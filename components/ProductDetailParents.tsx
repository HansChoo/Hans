import React from 'react';
import { Smile, Play, Images, Video, MessageCircle } from 'lucide-react';

const ProductDetailParents: React.FC = () => {
  const YOUTUBE_LINK = "https://youtu.be/2ORnXx6yCPw";
  // Using a high quality placeholder or youtube thumbnail
  const THUMBNAIL_URL = "https://img.youtube.com/vi/2ORnXx6yCPw/maxresdefault.jpg";

  return (
    <div className="w-full bg-[#050505] text-white py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
           {/* Left Column: Visual / Thumbnail */}
           <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <a 
              href={YOUTUBE_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block aspect-video rounded-3xl overflow-hidden bg-gray-900 border border-white/10"
            >
              <img 
                src={THUMBNAIL_URL} 
                alt="AI Parents Video Sample" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center text-white font-bold text-lg">
                   <Video className="w-5 h-5 mr-2 text-orange-500" />
                   샘플 영상 보기
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: Text & Info */}
          <div>
            <div className="flex space-x-2 mb-4">
                 <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-wider">
                  HOT
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold tracking-wider">
                  EVENT
                </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              AI 부모님 감사 영상
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-300 mb-6 leading-tight break-keep">
              멈춰있던 사진이 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">살아 움직이는 순간</span>
            </p>

            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm">
                <span className="text-orange-400 text-sm font-bold mr-3">1절패키지</span>
                <span className="text-xl font-bold text-white">70,000원 ~</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep md:break-words">
              부모님의 젊은 시절, 빛나던 순간을 AI 기술로 생생하게 되살려드립니다.<br />
              눈을 깜빡이고 미소 짓는 부모님의 모습으로 평생 잊지 못할<br /> 
              감동을 선물하세요. (환갑, 칠순, 결혼식 영상 추천)
            </p>

            <div className="space-y-4 mb-10">
                <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/5">
                    <Smile className="w-8 h-8 text-orange-500 mr-4" />
                    <div>
                        <h4 className="font-bold text-white">1절 패키지 (70,000원)</h4>
                        <p className="text-sm text-gray-400">AI 모션 사진 11장 + 1절 배경음악 영상</p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-xl border border-orange-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-orange-600 text-[10px] px-2 py-0.5 text-white font-bold rounded-bl-lg">BEST</div>
                    <Images className="w-8 h-8 text-orange-500 mr-4" />
                    <div>
                        <h4 className="font-bold text-white">1곡 패키지 (170,000원)</h4>
                        <p className="text-sm text-gray-400">AI 모션 사진 21장 + 1곡 전체 배경음악 영상</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="http://pf.kakao.com/_PKavxd/chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                제작 상담하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailParents;