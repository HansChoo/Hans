import React from 'react';
import { Smartphone, Wand2, Clock, Play, Music, MessageCircle } from 'lucide-react';

const ProductDetailRecording: React.FC = () => {
  const YOUTUBE_LINK = "https://youtu.be/T0Q6jaN38uU";
  const THUMBNAIL_URL = "https://img.youtube.com/vi/T0Q6jaN38uU/maxresdefault.jpg";

  return (
    <div className="w-full bg-[#050505] text-white py-16 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & Info */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-bold tracking-wider mb-4">
              BEST SELLER
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              AI 노래 녹음
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-300 mb-6 leading-tight break-keep">
              스마트폰 녹음이 <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">프로 음원</span>으로 재탄생
            </p>
            
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 backdrop-blur-sm">
                <span className="text-pink-400 text-sm font-bold mr-3">1곡 제작</span>
                <span className="text-xl font-bold text-white">250,000원</span>
              </div>
            </div>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep md:break-words">
              복잡한 장비 없이 집에서 편안하게 녹음하세요.<br />
              HEMA의 AI 딥러닝 기술이 음정, 박자, 톤을 완벽하게 보정하여<br />
              마치 스튜디오에서 녹음한 듯한 퀄리티를 만들어드립니다.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: <Smartphone className="w-6 h-6" />, label: "간편한 녹음" },
                { icon: <Wand2 className="w-6 h-6" />, label: "AI 정밀 보정" },
                { icon: <Clock className="w-6 h-6" />, label: "4일 내 완성" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-pink-500 mb-2">{item.icon}</div>
                  <span className="text-xs md:text-sm font-medium text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="http://pf.kakao.com/_PKavxd/chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                제작 상담하기
              </a>
            </div>
          </div>

          {/* Right Column: Visual / Thumbnail */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <a 
              href={YOUTUBE_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block aspect-video rounded-3xl overflow-hidden bg-gray-900 border border-white/10"
            >
              <img 
                src={THUMBNAIL_URL} 
                alt="AI Singing Voice Conversion Sample" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center text-white font-bold text-lg">
                   <Music className="w-5 h-5 mr-2 text-pink-500" />
                   Before & After 비교 청취
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailRecording;