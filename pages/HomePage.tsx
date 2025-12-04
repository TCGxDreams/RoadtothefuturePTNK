import React from 'react';
import { ArrowRight, Mountain, Cloud, Map, Compass, ChevronRight, Star } from 'lucide-react';
import { PageId } from '../types';
import { InteractiveMap } from '../components/InteractiveMap';

interface HomePageProps {
    setPage: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
    return (
        <div className="fade-in bg-stone-50 overflow-x-hidden">
            {/* Cinematic Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/60 to-stone-950 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1533230919799-2cdfa4c25602?w=1920"
                        className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
                        alt="Vietnam War Memorial"
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 px-4 max-w-7xl mx-auto w-full">
                    <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-12">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-3 mb-6 opacity-0 animate-[fade-up_1s_ease-out_forwards]">
                                <div className="h-[2px] w-12 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                                <span className="text-amber-400 tracking-[0.3em] text-sm font-bold uppercase drop-shadow-md">Di Sản Việt Nam</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-[0.9] tracking-tighter mb-8 opacity-0 animate-[fade-up_1s_ease-out_0.2s_forwards] drop-shadow-2xl">
                                Những Con Đường <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-500 italic pr-4 filter drop-shadow-lg">
                                    Vô Hình
                                </span>
                            </h1>

                            {/* Poem / Message Block - UPDATED FROM SPECIFICATION */}
                            <div className="border-l-4 border-amber-600 pl-6 py-2 mb-8 opacity-0 animate-[fade-up_1s_ease-out_0.4s_forwards] bg-black/20 backdrop-blur-sm rounded-r-xl max-w-2xl">
                                <p className="text-lg md:text-xl font-serif italic text-stone-200 leading-relaxed">
                                    "Những con hầm như hổ gầm trong góc tối<br />
                                    Kháng chiến thành rợp nắng khắp muôn phương"
                                </p>
                            </div>

                            <p className="text-stone-300 font-light text-lg mb-8 opacity-0 animate-[fade-up_1s_ease-out_0.5s_forwards] max-w-xl">
                                Hệ thống phòng thủ ba tầng không gian: <span className="text-amber-400 font-medium border-b border-amber-500/50">Dưới đất</span> • <span className="text-emerald-400 font-medium border-b border-emerald-500/50">Mặt đất</span> • <span className="text-sky-400 font-medium border-b border-sky-500/50">Trên không</span>. <br />
                                Biến thiên nhiên và con người thành pháo đài bất khả xâm phạm.
                            </p>
                        </div>

                        <div className="md:mb-12 opacity-0 animate-[fade-up_1s_ease-out_0.6s_forwards]">
                            {/* Primary Hero CTA */}
                            <button
                                onClick={() => setPage('duoi-dat')}
                                className="group relative flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 pl-8 pr-2 py-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] active:scale-95"
                            >
                                <div className="flex flex-col items-start">
                                    <span className="text-white text-lg font-serif italic">Khám phá Ngay</span>
                                    <span className="text-amber-400 text-[10px] uppercase tracking-widest font-bold">Start Journey</span>
                                </div>
                                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-amber-500 transition-colors relative overflow-hidden btn-shimmer">
                                    <ArrowRight size={24} className="text-white relative z-10 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Introduction Section - "Hòa Bình đẹp lắm" */}
            <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-6">
                        Hòa Bình Đẹp Lắm
                    </h2>
                    <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto mb-8">
                        Từ những con đường tối tăm trong chiến tranh - xuyên tỉnh, xuyên rừng, xuyên núi -
                        ta xây dựng những con đường rộng mở dẫn đến tương lai.
                    </p>
                    <div className="inline-block px-6 py-2 bg-amber-50 border-2 border-amber-200 rounded-full">
                        <p className="text-amber-800 font-bold text-sm italic">
                            "Từ những hy sinh của quá khứ, hòa bình được sinh ra"
                        </p>
                    </div>
                </div>
            </section>

            {/* 3-Layer Strategy Map Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                            Chiến lược quân sự
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-4">
                            Tam Giác Phòng Thủ Ba Tầng
                        </h2>
                        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
                            Ba mặt trận phối hợp tạo nên sức mạnh tổng hợp, đánh bại các chiến lược
                            chiến tranh hiện đại nhất thời bấy giờ.
                        </p>
                    </div>

                    <InteractiveMap className="mb-12" />

                    {/* Strategy Summary Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-underground/5 border-2 border-underground/20 rounded-2xl p-6 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-underground rounded-xl flex items-center justify-center text-white mb-4">
                                <Map size={24} />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-underground mb-2">Dưới Đất</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                Địa Đạo Củ Chi - Trụ sở chỉ huy ngầm, nơi trú ẩn và cất giấu vũ khí.
                                Hệ thống 3 tầng chống bom B-52.
                            </p>
                        </div>

                        <div className="bg-ground/5 border-2 border-ground/20 rounded-2xl p-6 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-ground rounded-xl flex items-center justify-center text-white mb-4">
                                <Mountain size={24} />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-ground mb-2">Mặt Đất</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                Đường Trường Sơn - Huyết mạch vận tải xuyên rừng già.
                                20.000km mạng lưới tiếp tế cho tiền tuyến.
                            </p>
                        </div>

                        <div className="bg-air/5 border-2 border-air/20 rounded-2xl p-6 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-air rounded-xl flex items-center justify-center text-white mb-4">
                                <Cloud size={24} />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-air mb-2">Trên Không</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                Điện Biên Phủ Trên Không - Lưới lửa 3 tầng phòng không.
                                Đánh bại "pháo đài bay" B-52 tại Hà Nội 1972.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaign Highlights Marquee */}
            <section className="bg-stone-900 border-b border-stone-800 py-6 overflow-hidden">
                <div className="flex gap-12 animate-[shimmer_30s_linear_infinite] whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                    {[
                        "Chiến dịch Hồ Chí Minh", "Đường 9 - Khe Sanh (1968)", "Tổng tiến công Mậu Thân (1968)",
                        "Biệt động Sài Gòn", "Linebacker II (12 Ngày Đêm)", "Chiến dịch Sấm Rền", "Đường Hồ Chí Minh trên biển"
                    ].map((camp, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <Star size={12} className="text-amber-500" fill="currentColor" />
                            <span className="text-stone-300 text-sm font-bold uppercase tracking-widest">{camp}</span>
                        </div>
                    ))}
                    {[
                        "Chiến dịch Hồ Chí Minh", "Đường 9 - Khe Sanh (1968)", "Tổng tiến công Mậu Thân (1968)",
                        "Biệt động Sài Gòn", "Linebacker II (12 Ngày Đêm)", "Chiến dịch Sấm Rền", "Đường Hồ Chí Minh trên biển"
                    ].map((camp, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-3">
                            <Star size={12} className="text-amber-500" fill="currentColor" />
                            <span className="text-stone-300 text-sm font-bold uppercase tracking-widest">{camp}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modern Bento Grid Navigation */}
            <section className="py-24 px-4 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-3">Tam Giác Phòng Thủ</h2>
                            <p className="text-stone-500 text-lg max-w-2xl">Ba mặt trận phối hợp tạo nên sức mạnh tổng hợp, đánh bại các chiến lược chiến tranh hiện đại nhất thời bấy giờ.</p>
                        </div>
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                                Select a Chapter
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px]">

                        {/* Card 1: Underground */}
                        <div
                            onClick={() => setPage('duoi-dat')}
                            className="md:col-span-5 relative group overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-stone-900 active:scale-[0.98]"
                        >
                            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cu_Chi_Tunnel.jpg/640px-Cu_Chi_Tunnel.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform" />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />

                            <div className="absolute top-6 left-6 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-inner group-hover:bg-amber-600 group-hover:border-amber-500 transition-colors duration-300">
                                <Map className="text-amber-400 group-hover:text-white" size={24} />
                            </div>

                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                <div className="bg-white/20 backdrop-blur rounded-full p-3 hover:bg-white/30 transition-colors">
                                    <ArrowRight className="text-white" size={24} />
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-8 right-8">
                                <span className="text-amber-500 font-mono text-xs tracking-widest mb-3 block border-l-2 border-amber-500 pl-3">01 — LÒNG ĐẤT</span>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">Địa Đạo Củ Chi</h3>
                                <p className="text-stone-300 line-clamp-3 group-hover:text-white transition-colors text-sm leading-relaxed max-w-sm">
                                    Hệ thống 250km mạch máu ngầm 3 tầng. Nơi trú ẩn của hàng vạn quân dân, bếp Hoàng Cầm không khói và nỗi khiếp sợ của lính Mỹ "Tunnel Rats".
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-7 grid grid-rows-2 gap-6">
                            {/* Card 2: Ground */}
                            <div
                                onClick={() => setPage('mat-dat')}
                                className="relative group overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-emerald-900 active:scale-[0.98]"
                            >
                                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ho_Chi_Minh_Trail_map.jpg/800px-Ho_Chi_Minh_Trail_map.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/50 to-transparent" />

                                <div className="absolute top-6 left-6 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-inner group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-colors duration-300">
                                    <Mountain className="text-emerald-400 group-hover:text-white" size={24} />
                                </div>

                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                    <div className="bg-white/20 backdrop-blur rounded-full p-3 hover:bg-white/30 transition-colors">
                                        <ArrowRight className="text-white" size={24} />
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-8 max-w-lg">
                                    <span className="text-emerald-400 font-mono text-xs tracking-widest mb-2 block border-l-2 border-emerald-500 pl-3">02 — MẶT ĐẤT</span>
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Đường Trường Sơn</h3>
                                    <p className="text-emerald-100/80 group-hover:text-white transition-colors text-sm">
                                        20.000km "trận đồ bát quái" xuyên rừng. Nơi in dấu chân 2 triệu binh sĩ và bánh xe của những chiếc xe không kính huyền thoại.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Sky */}
                            <div
                                onClick={() => setPage('tren-khong')}
                                className="relative group overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-blue-900 active:scale-[0.98]"
                            >
                                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/90/Vietnam_Peoples_Air_Force_MiG-21_MF.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/50 to-transparent" />

                                <div className="absolute top-6 left-6 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-inner group-hover:bg-sky-600 group-hover:border-sky-500 transition-colors duration-300">
                                    <Cloud className="text-sky-400 group-hover:text-white" size={24} />
                                </div>

                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                    <div className="bg-white/20 backdrop-blur rounded-full p-3 hover:bg-white/30 transition-colors">
                                        <ArrowRight className="text-white" size={24} />
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-8 max-w-lg">
                                    <span className="text-sky-400 font-mono text-xs tracking-widest mb-2 block border-l-2 border-sky-500 pl-3">03 — BẦU TRỜI</span>
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Điện Biên Phủ Trên Không</h3>
                                    <p className="text-sky-100/80 group-hover:text-white transition-colors text-sm">
                                        12 ngày đêm lịch sử 1972. Đánh bại "Pháo đài bay" B-52 bằng lưới lửa phòng không 3 tầng và đèn đuốc nhân dân.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-32 bg-stone-900 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[100px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Compass className="mx-auto text-amber-500 mb-8 animate-spin-slow drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" size={48} />
                    <blockquote className="text-4xl md:text-6xl font-serif font-medium text-white max-w-4xl mx-auto leading-tight">
                        "Hòa Bình đẹp lắm"
                    </blockquote>
                    <p className="mt-8 text-stone-400 max-w-2xl mx-auto italic text-lg leading-relaxed">
                        "Vẻ đẹp ấy được đánh đổi bằng xương máu và trí tuệ, được xây dựng từ những con đường vô hình xuyên lòng đất, vượt rừng sâu và vươn cao trên bầu trời."
                    </p>
                    <div className="mt-12">
                        <button
                            onClick={() => setPage('tuong-lai')}
                            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold uppercase tracking-widest text-sm border-b border-amber-500/30 hover:border-amber-500 pb-1 transition-all"
                        >
                            Viết tiếp tương lai <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};