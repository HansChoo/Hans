import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { generateCreativeContent } from '../services/geminiService';

const StudioChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '안녕하세요! HEMA AI STUDIO의 AI디렉터입니다. \n\n[AI 노래 녹음](#detail-recording)\n[AI 부모님 감사영상](#detail-parents)\n[AI 뮤직비디오 제작](#detail-mv)\n[AI 음반 발매](#detail-album)\n\n서비스 중 어떤 것이 궁금하신가요?',
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

  // Unified function to handle sending messages (user typed or link clicked)
  const processMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading === LoadingState.LOADING) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(LoadingState.LOADING);
    
    // Clear input if the message matches the current input (typed case)
    if (textToSend === input) {
      setInput('');
    }

    try {
      const responseText = await generateCreativeContent(textToSend);
      
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

  const handleSendClick = () => {
    processMessage(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };

  // Helper to render text with clickable links (Markdown style [text](url) and raw URLs)
  const renderMessageContent = (text: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s]+)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[1] && match[2]) {
        // Markdown Link [text](url)
        const linkText = match[1];
        const linkUrl = match[2];
        parts.push(
          <button
            key={match.index}
            onClick={() => {
              if (linkUrl.startsWith('#')) {
                // Modified behavior: Instead of scrolling, ask the AI about the topic
                // We send the link text (e.g., "AI 노래 녹음") as a user message
                processMessage(`${linkText}에 대해 자세히 설명해줘`);
              } else {
                window.open(linkUrl, '_blank');
              }
            }}
            className="text-purple-400 hover:text-purple-300 font-bold hover:underline cursor-pointer bg-transparent border-none p-0 inline mx-1 text-left"
          >
            {linkText}
          </button>
        );
      } else if (match[3]) {
        // Raw URL
        const url = match[3];
        parts.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline break-all"
          >
            {url}
          </a>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
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
            onClick={handleSendClick}
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