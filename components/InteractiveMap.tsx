import React, { useState } from 'react';
import { Layers, MapPin, ArrowDown, Plane } from 'lucide-react';

type Layer = 'underground' | 'ground' | 'air';

interface MapLocation {
    name: string;
    description: string;
    x: number; // percentage from left
    y: number; // percentage from top
    layer: Layer;
}

interface InteractiveMapProps {
    className?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ className = '' }) => {
    const [activeLayer, setActiveLayer] = useState<Layer>('ground');
    const [hoveredLocation, setHoveredLocation] = useState<MapLocation | null>(null);

    const locations: MapLocation[] = [
        // Underground
        { name: 'Địa Đạo Củ Chi', description: '250km hệ thống ngầm 3 tầng', x: 35, y: 75, layer: 'underground' },
        { name: 'Địa Đạo Vĩnh Mốc', description: 'Hầm ngầm ven biển DMZ', x: 50, y: 40, layer: 'underground' },

        // Ground
        { name: 'Đường Trường Sơn', description: '20.000km mạng lưới xuyên rừng', x: 60, y: 50, layer: 'ground' },
        { name: 'Đường Hồ Chí Minh', description: 'Trục vận tải chính Bắc - Nam', x: 55, y: 35, layer: 'ground' },
        { name: 'Đường 9 - Khe Sanh', description: 'Cửa ngõ chiến lược', x: 52, y: 42, layer: 'ground' },

        // Air
        { name: 'Hà Nội', description: 'Điện Biên Phủ trên không 1972', x: 48, y: 25, layer: 'air' },
        { name: 'Hải Phòng', description: 'Cảng biển quan trọng', x: 52, y: 27, layer: 'air' },
    ];

    const getLayerColor = (layer: Layer) => {
        switch (layer) {
            case 'underground': return 'bg-underground text-white border-underground-light';
            case 'ground': return 'bg-ground text-white border-ground-light';
            case 'air': return 'bg-air text-white border-air-light';
        }
    };

    const getLayerIcon = (layer: Layer) => {
        switch (layer) {
            case 'underground': return <ArrowDown size={20} />;
            case 'ground': return <MapPin size={20} />;
            case 'air': return <Plane size={20} />;
        }
    };

    const visibleLocations = locations.filter(loc => loc.layer === activeLayer);

    return (
        <div className={`relative ${className}`}>
            {/* Layer Selector */}
            <div className="flex justify-center gap-3 mb-8">
                <button
                    onClick={() => setActiveLayer('underground')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${activeLayer === 'underground'
                        ? 'bg-underground text-white shadow-lg scale-105'
                        : 'bg-white text-underground border-2 border-underground-light hover:bg-underground-light hover:text-white'
                        }`}
                >
                    <ArrowDown size={18} />
                    Dưới Đất
                </button>
                <button
                    onClick={() => setActiveLayer('ground')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${activeLayer === 'ground'
                        ? 'bg-ground text-white shadow-lg scale-105'
                        : 'bg-white text-ground border-2 border-ground-light hover:bg-ground-light hover:text-white'
                        }`}
                >
                    <MapPin size={18} />
                    Mặt Đất
                </button>
                <button
                    onClick={() => setActiveLayer('air')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${activeLayer === 'air'
                        ? 'bg-air text-white shadow-lg scale-105'
                        : 'bg-white text-air border-2 border-air-light hover:bg-air-light hover:text-white'
                        }`}
                >
                    <Plane size={18} />
                    Trên Không
                </button>
            </div>

            {/* Map Container */}
            <div className="relative bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl overflow-hidden shadow-2xl border border-stone-300">
                {/* Vietnam Map SVG Background */}
                <div className="relative w-full aspect-[3/4] md:aspect-[4/3]">
                    <img
                        src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200"
                        alt="Bản đồ Việt Nam"
                        className={`w-full h-full object-cover transition-all duration-500 ${activeLayer === 'underground' ? 'opacity-40 sepia' :
                            activeLayer === 'ground' ? 'opacity-50' :
                                'opacity-30 saturate-150'
                            }`}
                    />

                    {/* Layer Overlay */}
                    <div className={`absolute inset-0 transition-all duration-500 ${activeLayer === 'underground' ? 'bg-underground/20' :
                        activeLayer === 'ground' ? 'bg-ground/20' :
                            'bg-air/20'
                        }`} />

                    {/* Location Markers */}
                    {visibleLocations.map((location, index) => (
                        <div
                            key={index}
                            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                            style={{ left: `${location.x}%`, top: `${location.y}%` }}
                            onMouseEnter={() => setHoveredLocation(location)}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            {/* Pulse Effect */}
                            <div className={`absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping ${activeLayer === 'underground' ? 'bg-underground' :
                                activeLayer === 'ground' ? 'bg-ground' :
                                    'bg-air'
                                } opacity-75`} />

                            {/* Marker */}
                            <div className={`relative w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-all duration-300 group-hover:scale-125 ${getLayerColor(location.layer)}`}>
                                {getLayerIcon(location.layer)}
                            </div>

                            {/* Tooltip */}
                            {hoveredLocation === location && (
                                <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
                                    <div className="bg-white px-4 py-3 rounded-xl shadow-2xl border-2 border-stone-200 min-w-[200px]">
                                        <h4 className="font-bold text-stone-900 mb-1">{location.name}</h4>
                                        <p className="text-xs text-stone-600">{location.description}</p>
                                    </div>
                                    {/* Arrow */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Layers size={16} className="text-stone-600" />
                        <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">Chiến lược 3 tầng</span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">
                        {activeLayer === 'underground' && 'Hệ thống địa đạo ngầm bảo vệ và chỉ huy'}
                        {activeLayer === 'ground' && 'Mạng lưới vận tải huyết mạch tiếp tế'}
                        {activeLayer === 'air' && 'Phòng không bảo vệ bầu trời Việt Nam'}
                    </p>
                </div>
            </div>
        </div>
    );
};
