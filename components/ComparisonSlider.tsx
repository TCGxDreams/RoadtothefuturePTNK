import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface ComparisonSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ho_Chi_Minh_Trail_map.jpg/500px-Ho_Chi_Minh_Trail_map.jpg',
  afterImage = 'https://images.unsplash.com/photo-1565626424178-d7821eb19965?w=1200',
  beforeLabel = 'Quá Khứ',
  afterLabel = 'Ngày Nay'
}) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl select-none group">
      {/* After Image (Background) */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url("${afterImage}")`,
          backgroundPosition: 'left center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-white/50 text-emerald-900 px-4 py-1.5 text-sm font-bold rounded-full shadow-lg">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div
        className="absolute inset-0 bg-cover border-r-4 border-white"
        style={{
          backgroundImage: `url("${beforeImage}")`,
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          width: `${sliderValue}%`,
          filter: 'sepia(0.3) contrast(1.1)'
        }}
      >
        <div className="absolute top-4 left-4 bg-stone-800/90 backdrop-blur-md text-white px-4 py-1.5 text-sm font-bold rounded-full shadow-lg">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Input - Larger touch area */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      />

      {/* Slider Handle - Larger and easier to grab */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none"
        style={{ left: `${sliderValue}%` }}
      >
        {/* Vertical line */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white to-white/50 shadow-lg" />

        {/* Handle button - BIGGER */}
        <div className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-emerald-600 transition-all duration-200 ${isDragging ? 'scale-110' : 'scale-100 group-hover:scale-105'}`}>
          <ArrowLeftRight size={24} className="text-emerald-600" />
        </div>

        {/* Touch area indicator */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20 rounded-full pointer-events-none opacity-0 group-hover:opacity-20 bg-emerald-500 transition-opacity" />
      </div>
    </div>
  );
};
