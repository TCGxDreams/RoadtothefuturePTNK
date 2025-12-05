import React from 'react';
import { Play, CloudLightning, Radar, Target, ArrowRight, Flame, Plane, ShieldAlert } from 'lucide-react';
import { YouTubeModal } from '../components/YouTubeModal';

export const SkyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero */}
            <div className="relative h-[80vh] bg-[#0F172A] text-white overflow-hidden flex flex-col justify-end pb-20 px-4">
                {/* Abstract Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#1e293b]/50 z-10" />
                    <div className="absolute inset-0 bg-[url('https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/12/19/mig-21-sam21-1671425116720-16714251171871218986856.jpg')] opacity-20 animate-pulse"></div>

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
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6RipoUR5py7ChwxHSMPlV2_RbgIrTwjf_A&s"
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
                                src="data:image/jpeg;base64,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"
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
                                src="data:image/jpeg;base64,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"
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
                <YouTubeModal
                    videoId="hBQT8mEMnHg"
                    title="Hà Nội 1972"
                    description="Tài liệu lịch sử về chiến dịch Điện Biên Phủ trên không"
                />

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