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
                        src="https://mod.gov.vn/wcm/connect/045ee540-bcaf-4aca-bfd3-ea7712c0f024/1/1.jpg?MOD=AJPERES"
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
                            <div className="absolute inset-0 bg-[url('https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef7ce41a171fbac542c982fd4c32d085f4602a048e155081c2779cc5190e69c97765394fdf37e53ff55f6473ff5147f17de954aaecab68e94a3944a44b9346cadb/hinh-anh-dia-dao-cu-chi-1-8244-9810.jpg')] bg-cover bg-[center_right] opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform" />
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
                                <div className="absolute inset-0 bg-[url('data:image/jpeg;base64,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')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform" />
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
                                <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmjEbYiYmQzzh5yHoIbxYzWs_0eiCV6Pz8g&s')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform" />
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