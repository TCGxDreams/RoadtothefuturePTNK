import React from 'react';
import { Play, CloudLightning, Radar, Target, ArrowRight, Flame, Plane, ShieldAlert } from 'lucide-react';

export const SkyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero */}
            <div className="relative h-[80vh] bg-[#0F172A] text-white overflow-hidden flex flex-col justify-end pb-20 px-4">
                {/* Abstract Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#1e293b]/50 z-10" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>

                    {/* Radar Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-sky-500/20 rounded-full animate-[spin_10s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-gradient-to-t from-sky-500/50 to-transparent blur-[1px]"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-sky-500/10 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                </div>

                <div className="container mx-auto relative z-20 text-center">
                    <span className="inline-block py-1 px-3 border border-red-500/50 rounded-full text-red-400 text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-red-900/20 backdrop-blur-md">
                        12 Ngày Đêm (18-29/12/1972)
                    </span>
                    <h1 className="text-6xl md:text-9xl font-serif font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl animate-fade-up">
                        Điện Biên Phủ<br />Trên Không
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-sky-200 tracking-wide mt-4 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        Cuộc đối đầu lịch sử giữa "Pháo đài bay" B-52 và ý chí bảo vệ bầu trời Hà Nội.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-16 relative z-30">

                {/* Bombing Stats Comparison */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl mb-24 border border-slate-100">
                    <h3 className="text-center text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">Tổng lượng bom đạn (Tấn)</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 min-h-[320px] pb-4">
                        <div className="flex flex-col items-center justify-end group h-full">
                            <span className="mb-4 text-2xl font-bold text-slate-400">2.15 Triệu</span>
                            <div className="w-24 bg-slate-300 rounded-t-lg relative transition-all duration-1000 group-hover:bg-slate-400" style={{ height: '60px' }}></div>
                            <span className="mt-4 text-sm font-bold text-slate-600 uppercase">Thế Chiến II</span>
                            <span className="text-xs text-slate-400">(6 năm)</span>
                        </div>
                        <div className="flex flex-col items-center justify-end group h-full">
                            <span className="mb-4 text-4xl font-bold text-red-600">7.5 Triệu</span>
                            <div className="w-32 bg-red-600 rounded-t-lg relative transition-all duration-1000 shadow-[0_0_20px_rgba(220,38,38,0.5)]" style={{ height: '210px' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <span className="mt-4 text-sm font-bold text-red-800 uppercase">Chiến Tranh VN</span>
                            <span className="text-xs text-slate-400">(20 năm)</span>
                        </div>
                    </div>
                    <p className="text-center text-slate-500 text-sm mt-8 italic max-w-2xl mx-auto border-t border-slate-100 pt-4">
                        Gấp hơn 3.5 lần tổng lượng bom trong Thế chiến II. Riêng tại Quảng Trị, Khe Sanh đã hứng chịu 100.000 tấn bom.
                    </p>
                </div>

                {/* Forces Comparison */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    {/* USA Forces */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10"><Plane size={120} /></div>
                        <h3 className="text-2xl font-serif font-bold mb-6 text-sky-400">Không Lực Hoa Kỳ</h3>
                        <div className="space-y-6 relative z-10">
                            <div className="border-b border-slate-700 pb-4">
                                <div className="text-4xl font-bold mb-1">207 <span className="text-lg font-normal text-slate-400">B-52</span></div>
                                <p className="text-sm text-slate-400">"Pháo đài bay" rải thảm. Gần 50% lực lượng B-52 của Mỹ thời đó.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-xl font-bold">1.274</div>
                                    <div className="text-xs uppercase text-slate-500">Máy bay chiến đấu</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold">20.237</div>
                                    <div className="text-xs uppercase text-slate-500">Tấn bom (Linebacker II)</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 bg-slate-800 rounded">F-4 Phantom</span>
                                <span className="px-2 py-1 bg-slate-800 rounded">F-105 Wild Weasel</span>
                                <span className="px-2 py-1 bg-slate-800 rounded">F-111</span>
                            </div>
                        </div>
                    </div>

                    {/* VN Forces */}
                    <div className="bg-red-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10"><ShieldAlert size={120} /></div>
                        <h3 className="text-2xl font-serif font-bold mb-6 text-yellow-400">Phòng Không Việt Nam</h3>
                        <div className="space-y-6 relative z-10">
                            <div className="border-b border-red-800 pb-4">
                                <div className="text-4xl font-bold mb-1">36 <span className="text-lg font-normal text-red-200">Tiểu đoàn SAM-2</span></div>
                                <p className="text-sm text-red-200">Tên lửa S-75M Dvina - Khắc tinh của B-52.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-xl font-bold">3 Tầng</div>
                                    <div className="text-xs uppercase text-red-300">Lưới lửa phòng không</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold">MiG-21</div>
                                    <div className="text-xs uppercase text-red-300">Đánh chặn ban đêm</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 bg-red-800 rounded">Pháo 100mm</span>
                                <span className="px-2 py-1 bg-red-800 rounded">Pháo 57mm</span>
                                <span className="px-2 py-1 bg-red-800 rounded">Dân quân tự vệ</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    <div className="relative bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-[0_30px_60px_rgba(14,165,233,0.15)] transition-all duration-500 hover:-translate-y-2 hover:z-10 group cursor-default">
                        <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-500 shadow-md">
                            <Radar size={32} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">Chiến Thuật: Lưới Lửa Ba Tầng</h3>
                        <div className="text-slate-600 leading-relaxed space-y-4">
                            <p>Việt Nam đã thiết lập thế trận phòng không độc đáo để vít cổ "Thần sấm" và "Pháo đài bay". Dự đoán chính xác đường bay của B-52 để đón lõng.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-center p-3 bg-slate-50 rounded-xl"><Target size={18} className="text-sky-600" /> <span className="text-sm"><strong>Tầng cao (&gt;10km):</strong> Tên lửa SAM-2 + MiG-21</span></li>
                                <li className="flex gap-3 items-center p-3 bg-slate-50 rounded-xl"><Target size={18} className="text-sky-600" /> <span className="text-sm"><strong>Tầng trung:</strong> Pháo cao xạ 100mm, 57mm</span></li>
                                <li className="flex gap-3 items-center p-3 bg-slate-50 rounded-xl"><Target size={18} className="text-sky-600" /> <span className="text-sm"><strong>Tầng thấp:</strong> Súng bộ binh, dân quân tự vệ</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-[0_30px_60px_rgba(239,68,68,0.15)] transition-all duration-500 hover:-translate-y-2 hover:z-10 group cursor-default">
                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500 shadow-md">
                            <Flame size={32} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">Chiến Thuật: Đèn Đuốc Dẫn Đường</h3>
                        <p className="text-slate-600 leading-relaxed text-lg mb-4">
                            Một chiến thuật đầy cảm động và sáng tạo: Nông dân thắp lửa rơm rạ trên đồng ruộng để tạo <strong>"sân bay giả"</strong> thu hút bom địch,
                            hoặc thắp đèn dầu xếp thành hàng dài làm đường băng dã chiến dẫn đường cho phi công MiG hạ cánh khi sân bay chính bị phá hủy.
                        </p>
                        <blockquote className="text-red-800/80 italic font-serif border-l-2 border-red-200 pl-4">
                            "Tình yêu quê hương biến thành ánh sáng dẫn lối giữa đêm đen chiến tranh."
                        </blockquote>
                    </div>
                </div>

                {/* Historical Images Gallery */}
                <div className="mb-24">
                    <h3 className="text-3xl font-serif font-bold text-center text-slate-800 mb-12">Hình Ảnh Lịch Sử</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* B-52 */}
                        <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                            <img
                                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200"
                                alt="B-52 Stratofortress"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end p-6">
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">B-52 "Pháo đài bay"</p>
                                    <p className="text-slate-300 text-sm">Máy bay nặng nhất tham chiến</p>
                                </div>
                            </div>
                        </div>

                        {/* MiG-21 */}
                        <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/90/Vietnam_Peoples_Air_Force_MiG-21_MF.jpg"
                                alt="MiG-21"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end p-6">
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">MiG-21</p>
                                    <p className="text-slate-300 text-sm">Chiến đấu cơ Việt Nam</p>
                                </div>
                            </div>
                        </div>

                        {/* SAM-2 */}
                        <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                            <img
                                src="https://images.unsplash.com/photo-1566229832810-cfbad83ce242?w=1200"
                                alt="Tên lửa phòng không"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end p-6">
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">Tên lửa SAM-2</p>
                                    <p className="text-slate-300 text-sm">Khắc tinh của B-52</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cinematic Stats */}
                <div className="mb-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                        <BigStat val="34" label="B-52 BỊ HẠ" sub="Theo số liệu Việt Nam" highlight />
                        <BigStat val="81" label="TỔNG MÁY BAY" sub="Mỹ bị bắn rơi" />
                        <BigStat val="1.6k" label="DÂN THƯỜNG" sub="Thiệt mạng do bom đạn" />
                        <BigStat val="12" label="NGÀY ĐÊM" sub="Buộc Mỹ ký Hiệp định Paris" />
                    </div>
                </div>

                {/* Video Area */}
                <button className="w-full text-left relative rounded-[2rem] overflow-hidden group cursor-pointer aspect-[21/9] shadow-2xl block outline-none ring-0 focus:ring-4 ring-red-500/20">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Vietnam_Peoples_Air_Force_MiG-21_MF.jpg"
                        alt="MiG-21"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        {/* Play Button */}
                        <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.2)] group-hover:bg-red-600/80 group-hover:border-red-500">
                            <Play fill="currentColor" className="ml-2 text-white" size={40} />
                        </div>

                        <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-3 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur border border-white/10 group-hover:bg-red-600 group-hover:text-white transition-colors">Tư Liệu Lịch Sử</span>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg group-hover:tracking-wide transition-all duration-500">Hà Nội 1972</h3>
                        <span className="mt-4 text-white/60 text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                            Xem tư liệu <ArrowRight size={14} />
                        </span>
                    </div>
                </button>

            </div>
        </div>
    );
};


const BigStat = ({ val, label, sub, highlight }: any) => (
    <div className={`relative p-8 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:z-10 cursor-pointer active:scale-[0.98] ${highlight ? 'bg-red-600 text-white shadow-2xl shadow-red-600/30' : 'bg-white text-slate-800 border border-slate-100 hover:shadow-xl hover:shadow-slate-200'}`}>
        <span className={`text-5xl md:text-6xl font-bold font-serif mb-2 ${highlight ? 'text-white' : 'text-slate-900'}`}>{val}</span>
        <span className={`text-xs font-bold tracking-widest uppercase mb-2 ${highlight ? 'text-red-100' : 'text-slate-400'}`}>{label}</span>
        <p className={`text-xs ${highlight ? 'text-red-100' : 'text-slate-500'}`}>{sub}</p>
    </div>
);