import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, BookOpen, User, Bot, Sparkles, ChevronRight } from 'lucide-react';
import { sendMessageToHistorian } from '../services/geminiService';
import { ChatMessage, PageId } from '../types';
import ReactMarkdown from 'react-markdown';

interface HistorianChatProps {
  currentPage: PageId;
}

const SUGGESTIONS: Record<PageId, string[]> = {
  'home': ['Ý nghĩa tên gọi "Con đường vô hình"?', 'Tóm tắt 3 mặt trận chính?', 'Vai trò của giao thông trong chiến tranh?'],
  'duoi-dat': ['Bếp Hoàng Cầm hoạt động ra sao?', 'Cấu trúc 3 tầng địa đạo?', 'Làm sao đào địa đạo bằng tay?'],
  'mat-dat': ['Tiểu đội xe không kính là gì?', 'Đường ống xăng dầu xuyên rừng?', 'Các binh trạm hoạt động thế nào?'],
  'tren-khong': ['Tại sao gọi là Điện Biên Phủ trên không?', 'Cách chống nhiễu radar B-52?', 'SAM-2 hoạt động thế nào?'],
  'tuong-lai': ['Bài học lịch sử cho thế hệ trẻ?', 'Hệ thống cao tốc Bắc Nam hiện nay?', 'Tầm nhìn giao thông 2050?']
};

export const HistorianChat: React.FC<HistorianChatProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Kính chào! Tôi là **GS. Sử**. Tôi có thể giúp bạn giải mã trang sử hào hùng nào hôm nay?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const responseText = await sendMessageToHistorian(text, currentPage);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end pointer-events-none font-sans">
      {/* Chat Window */}
      <div className={`pointer-events-auto bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_25px_60px_-10px_rgba(0,0,0,0.6)] w-[90vw] sm:w-[450px] mb-6 overflow-hidden transition-all duration-500 cubic-bezier(0.2, 0.8, 0.2, 1) origin-bottom-right border border-white/50 ring-1 ring-black/5 ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 p-5 flex justify-between items-center text-white shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg border border-white/20 transform rotate-3">
                <BookOpen size={22} className="text-white drop-shadow-md" />
            </div>
            <div>
                <h3 className="font-serif font-bold text-xl leading-tight text-amber-50 tracking-wide">GS. Sử Học AI</h3>
                <p className="text-[11px] text-stone-300 uppercase tracking-widest flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                    Trực tuyến
                </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="hover:bg-white/10 p-2 rounded-full transition-all duration-300 relative z-10 hover:rotate-90 active:scale-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-[450px] overflow-y-auto p-5 bg-stone-50/80 space-y-5 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 animate-fade-up ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center mt-1 shadow-md border ${
                  msg.role === 'user' 
                  ? 'bg-white border-stone-200 text-stone-600' 
                  : 'bg-gradient-to-br from-amber-100 to-white text-amber-800 border-amber-200'
              }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Sparkles size={16} />}
              </div>
              <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-sm border ${
                msg.role === 'user' 
                  ? 'bg-stone-800 text-white border-stone-700 rounded-tr-none' 
                  : 'bg-white border-stone-100 text-stone-800 rounded-tl-none prose prose-sm prose-p:my-1 prose-strong:text-amber-800 prose-ul:my-1 prose-li:my-0'
              }`}>
                {msg.role === 'user' ? (
                    msg.text
                ) : (
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
               <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-800 border border-amber-100 flex-shrink-0 flex items-center justify-center">
                    <Bot size={18} />
               </div>
               <div className="bg-white border border-stone-200 rounded-2xl rounded-tl-none px-4 py-4 shadow-sm">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="px-4 py-3 bg-white border-t border-stone-100 overflow-x-auto whitespace-nowrap custom-scrollbar flex gap-2 shadow-[inset_0_4px_6px_-4px_rgba(0,0,0,0.05)]">
            {SUGGESTIONS[currentPage]?.map((q, i) => (
                <button 
                    key={i}
                    onClick={() => handleSend(q)}
                    className="group inline-flex items-center px-4 py-1.5 bg-stone-50 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white text-stone-600 hover:text-amber-900 text-xs font-medium rounded-full border border-stone-200 hover:border-amber-300 transition-all duration-300 hover:shadow-sm active:scale-95"
                >
                    <span className="mr-1.5 text-amber-500 group-hover:rotate-12 transition-transform">✦</span>
                    {q}
                </button>
            ))}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-stone-100 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Đặt câu hỏi cho Giáo sư..."
            className="flex-grow bg-stone-100 hover:bg-stone-50 focus:bg-white rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all text-stone-800 placeholder-stone-400 font-medium border border-transparent focus:border-amber-100"
          />
          <button 
            onClick={() => handleSend(inputValue)}
            disabled={!inputValue.trim() || isTyping}
            className="group bg-stone-900 hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-800 text-white w-12 h-12 flex items-center justify-center rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-amber-500/30 active:scale-95 duration-300"
          >
            <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto group relative flex items-center justify-center w-16 h-16 bg-stone-900 text-white rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_40px_rgba(245,158,11,0.4)] ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-amber-400/50 transition-colors"></div>
        
        <MessageSquare size={28} className="group-hover:text-amber-300 transition-colors relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-5 bg-white text-stone-900 px-5 py-2.5 rounded-2xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none flex items-center gap-2 border border-stone-100">
          <BookOpen size={16} className="text-amber-600" />
          Hỏi GS. Sử Học
          <ChevronRight size={14} className="text-stone-400" />
        </span>
        
        {/* Notification Dot */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-stone-900"></span>
        </span>
      </button>
    </div>
  );
};