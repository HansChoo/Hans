import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { generateCreativeContent } from '../services/geminiService';

const StudioChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '안녕하세요! HEMA AI STUDIO의 AI디렉터입니다. \n\n저희는 AI 노래 녹음, 부모님 감사영상, 뮤직비디오 제작, 음반 발매 서비스를 제공하고 있습니다. \n\n어떤 서비스에 대해 안내해 드릴까요?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);
  
  // Ref for the scrollable container instead of a dummy element at the bottom
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading === LoadingState.LOADING) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(LoadingState.LOADING);

    try {
      const responseText = await generateCreativeContent(input);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setLoading(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setLoading(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper to render text with clickable links
  const renderMessageContent = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={index} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-400 hover:text-purple-300 underline break-all"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[600px] flex flex-col bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center bg-white/5">
        <div className="p-2 rounded-full bg-purple-500/20 mr-3">
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="font-bold text-white">HEMA AI STUDIO의 AI디렉터</h3>
          <p className="text-xs text-gray-400">Powered by Gemini 3 Flash</p>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
      >
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex items-start ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'model' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            
            <div 
              className={`max-w-[80%] p-4 rounded-2xl text-sm md:text-base leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-tr-none' 
                  : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
              }`}
            >
              {renderMessageContent(msg.text)}
            </div>

            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center ml-2 flex-shrink-0">
                <User className="w-4 h-4 text-gray-300" />
              </div>
            )}
          </div>
        ))}
        {loading === LoadingState.LOADING && (
          <div className="flex items-center space-x-2 text-gray-400 p-2">
            <Bot className="w-4 h-4 animate-pulse" />
            <span className="text-xs">생각 중입니다...</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-black/20 border-t border-white/10">
        <div className="flex items-center space-x-2 bg-gray-800/50 rounded-xl border border-white/10 p-2 focus-within:border-purple-500/50 transition-colors">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="예: 부모님 영상 편지에 들어갈 감동적인 문구를 추천해줘..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none h-12 py-3 px-2"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || loading === LoadingState.LOADING}
            className="p-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudioChat;