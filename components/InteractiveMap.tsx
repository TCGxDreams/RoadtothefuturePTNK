import React, { useState } from 'react';
import { Map, Route, Plane, Layers } from 'lucide-react';

type Layer = 'underground' | 'ground' | 'air';

interface MapLocation {
    name: string;
    description: string;
    layer: 'underground' | 'ground' | 'air';
    x: number;
    y: number;
    icon: React.ReactNode;
}

interface InteractiveMapProps {
    className?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ className = '' }) => {
    const [activeLayer, setActiveLayer] = useState<'underground' | 'ground' | 'air'>('ground');
    const [hoveredLocation, setHoveredLocation] = useState<MapLocation | null>(null);

    // Historical locations for 1971-1973 Vietnam War Map
    const locations: MapLocation[] = [
        // ========== UNDERGROUND (2 markers) ==========
        {
            name: 'Địa Đạo Củ Chi',
            description: 'Hệ thống địa đạo 250km phía Tây Sài Gòn',
            layer: 'underground',
            x: 49,  // TRONG VN - Tây Sài Gòn
            y: 88,  // Cực Nam
            icon: <Map size={20} className="text-white" />
        },
        {
            name: 'Địa Đạo Vĩnh Mốc',
            description: 'Địa đạo ven biển DMZ',
            layer: 'underground',
            x: 58,  // Ven biển DMZ
            y: 43,  // Vùng DMZ
            icon: <Map size={20} className="text-white" />
        },

        // ========== GROUND - HO CHI MINH TRAIL (4 markers dọc biên Lào) ==========
        {
            name: 'Đường Trường Sơn (Bắc)',
            description: 'Đoạn Bắc - trong VN ven biên Lào',
            layer: 'ground',
            x: 50,  // Dọc biên Lào trong VN
            y: 28,  // Miền Bắc
            icon: <Route size={20} className="text-white" />
        },
        {
            name: 'Đường Trường Sơn (Trung-Bắc)',
            description: 'Đoạn Trung-Bắc trong VN',
            layer: 'ground',
            x: 53,  // Dọc trail trong VN
            y: 36,  // Miền Trung-Bắc
            icon: <Route size={20} className="text-white" />
        },
        {
            name: 'Đường 9 - Khe Sanh',
            description: 'Vùng Quảng Trị trong VN',
            layer: 'ground',
            x: 58,  // Quảng Trị trong VN
            y: 46,  // Miền Trung gần DMZ
            icon: <Route size={20} className="text-white" />
        },
        {
            name: 'Đường Trường Sơn (Nam)',
            description: 'Đoạn Nam - Tây Nguyên VN',
            layer: 'ground',
            x: 64,  // Tây Nguyên trong VN
            y: 67,  // Khu vực Tây Nguyên
            icon: <Route size={20} className="text-white" />
        },

        // ========== AIR - MIỀN BẮC (3 markers tập trung) ==========
        {
            name: 'Hà Nội',
            description: 'Thủ đô - mục tiêu Linebacker II',
            layer: 'air',
            x: 54,  // Đồng bằng Bắc Bộ đúng vị trí HN
            y: 18,  // Miền Bắc
            icon: <Plane size={20} className="text-white" />
        },
        {
            name: 'Hải Phòng',
            description: 'Cảng biển chiến lược miền Bắc',
            layer: 'air',
            x: 55,  // Ven biển Đông gần HN
            y: 22,  // Gần Hà Nội
            icon: <Plane size={20} className="text-white" />
        },
        {
            name: 'Đồng Hới',
            description: 'Miền Trung - Bắc DMZ',
            layer: 'air',
            x: 53,  // Ven biển miền Trung
            y: 38,  // Bắc DMZ
            icon: <Plane size={20} className="text-white" />
        },
    ];

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
                    <Map size={18} />
                    Dưới Đất
                </button>
                <button
                    onClick={() => setActiveLayer('ground')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${activeLayer === 'ground'
                        ? 'bg-ground text-white shadow-lg scale-105'
                        : 'bg-white text-ground border-2 border-ground-light hover:bg-ground-light hover:text-white'
                        }`}
                >
                    <Route size={18} />
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
                {/* Vietnam Map Background */}
                <div className="relative w-full aspect-[3/4] md:aspect-[4/3]">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Vietnam_war_1971-1973_map_es.svg/960px-Vietnam_war_1971-1973_map_es.svg.png"
                        alt="Bản đồ Việt Nam"
                        className={`w-full h-full object-contain transition-all duration-500 ${activeLayer === 'underground' ? 'opacity-40 sepia' :
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
                    <div className="absolute inset-0">
                        {visibleLocations
                            .map((loc, idx) => (
                                <div
                                    key={idx}
                                    className="absolute group"
                                    style={{
                                        left: `${loc.x}%`,
                                        top: `${loc.y}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    {/* Marker Pin */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 hover:scale-125 ${activeLayer === 'underground' ? 'bg-underground border-4 border-amber-900' :
                                        activeLayer === 'ground' ? 'bg-ground border-4 border-emerald-900' :
                                            'bg-air border-4 border-sky-900'
                                        }`}>
                                        {loc.icon}
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                        <div className="bg-stone-900/95 backdrop-blur text-white text-xs font-bold px-3 py-2 rounded-lg shadow-xl">
                                            {loc.name}
                                        </div>
                                        <div className="w-2 h-2 bg-stone-900/95 rotate-45 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>

                                    {/* Pulse Animation */}
                                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${activeLayer === 'underground' ? 'bg-amber-500' :
                                        activeLayer === 'ground' ? 'bg-emerald-500' :
                                            'bg-sky-500'
                                        }`}></div>
                                </div>
                            ))}
                    </div>
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
