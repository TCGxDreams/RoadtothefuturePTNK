import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export const ComparisonSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl select-none group">
      {/* Modern Image (Background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1565626424178-d7821eb19965?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80")', 
        }}
      >
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 text-sm font-bold rounded-full shadow-sm">
          Ngày Nay
        </div>
      </div>

      {/* Historic Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 bg-cover bg-center border-r-2 border-white/80"
        style={{ 
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ho_Chi_Minh_Trail_map.jpg/500px-Ho_Chi_Minh_Trail_map.jpg")',
          width: `${sliderValue}%`,
          filter: 'sepia(0.5) contrast(1.2)'
        }}
      >
        <div className="absolute top-4 left-4 bg-earth/80 backdrop-blur-md text-white px-4 py-1 text-sm font-bold rounded-full shadow-sm">
          Quá Khứ
        </div>
      </div>

      {/* Slider Input */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderValue} 
        onChange={(e) => setSliderValue(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />
      
      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white/50 z-10 pointer-events-none"
        style={{ left: `${sliderValue}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-earth">
          <ArrowLeftRight size={18} />
        </div>
      </div>
    </div>
  );
};
