import React from 'react';
import { ComparisonSlider } from '../components/ComparisonSlider';
import { Timeline } from '../components/Timeline';
import { CounterAnimation } from '../components/CounterAnimation';
import { Music, Speaker, Play, Truck, MapPin, Droplets, User, Calendar, Cross, ShieldCheck, Flame } from 'lucide-react';

export const GroundPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-emerald-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-[#064e3b] to-[#047857] text-white py-24 px-4 relative overflow-hidden">
                {/* Abstract pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-4 animate-fade-up">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-200 border border-white/20">1959 - 1975</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-up tracking-tight" style={{ animationDelay: '0.1s' }}>Đường Trường Sơn</h1>
                    <p className="text-xl md:text-2xl font-light text-emerald-100 italic animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
                        "Xẻ dọc Trường Sơn đi cứu nước<br />Mà lòng phơi phới dậy tương lai"
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-16">

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 relative">
                    <StatCard icon={<MapPin />} value="16-20k" unit="km" label="Tổng chiều dài mạng lưới" />
                    <StatCard icon={<User />} value="2" unit="Triệu" label="Lượt binh sĩ hành quân" />
                    <StatCard icon={<Truck />} value="1" unit="Triệu" label="Tấn vật tư vận chuyển" />
                    <StatCard icon={<Flame />} value="4" unit="Triệu" label="Tấn bom Mỹ trút xuống" />
                </div>

                {/* History Block */}
                <div className="grid md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-7">
                        <h2 className="text-4xl font-serif font-bold text-emerald-900 mb-6">Đoàn 559 & Huyền Thoại Logistics</h2>
                        <div className="prose prose-lg text-slate-600 mb-8">
                            <p>
                                Ngày <strong>19/5/1959</strong>, Quân đoàn 559 được thành lập với nhiệm vụ mở đường tiếp tế cho miền Nam.
                                Với phương châm <em>"Đi không dấu, nấu không khói, nói không tiếng"</em>, từ những lối mòn đi bộ thô sơ,
                                Trường Sơn đã phát triển thành một hệ thống vận tải cơ giới khổng lồ.
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded">
                                <p className="text-red-900 font-bold mb-2 text-sm uppercase tracking-wide">Cuộc chiến phá hoại</p>
                                <p className="text-red-800 text-sm leading-relaxed">
                                    Trong tổng số <strong>7.25 triệu tấn bom đạn</strong> Mỹ trút xuống Việt Nam, riêng Đường Trường Sơn
                                    đã hứng chịu khoảng <strong>4 triệu tấn</strong> - một thử thách khủng khiếp nhưng không thể ngăn cản hành quân.
                                </p>
                            </div>
                            <ul className="space-y-4 list-none pl-0 mt-6">
                                <li className="flex gap-4 items-start">
                                    <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 mt-1"><ShieldCheck size={20} /></div>
                                    <div>
                                        <strong className="text-emerald-900 block mb-1">Cấu trúc mạng lưới</strong>
                                        5 trục dọc, 21 trục ngang chằng chịt như "trận đồ bát quái" để đánh lạc hướng địch.
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 mt-1"><Droplets size={20} /></div>
                                    <div>
                                        <strong className="text-emerald-900 block mb-1">Đường ống xăng dầu</strong>
                                        1.400km đường ống nhựa 8 inch bơm xăng dầu xuyên rừng, vượt núi từ Bắc vào Nam (1969).
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 mt-1"><Truck size={20} /></div>
                                    <div>
                                        <strong className="text-emerald-900 block mb-1">Vận tải thần tốc</strong>
                                        Năm 1975, vận chuyển 413.450 tấn hàng hóa chỉ riêng cho chiến dịch cuối cùng.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Cemetery Stat */}
                        <div className="flex items-center gap-4 bg-emerald-900 text-emerald-50 p-6 rounded-2xl shadow-lg">
                            <div className="p-3 bg-white/10 rounded-full">
                                <Cross size={24} />
                            </div>
                            <div>
                                <div className="text-3xl font-serif font-bold">72</div>
                                <div className="text-sm opacity-80 uppercase tracking-wider">Nghĩa trang liệt sĩ dọc tuyến đường</div>
                            </div>
                        </div>

                    </div>
                    <div className="md:col-span-5">
                        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-emerald-100 h-full flex flex-col">
                            <div className="p-6 text-center bg-stone-50 border-b border-emerald-50">
                                <h3 className="text-xl font-bold text-slate-800 font-serif">Quá Khứ & Hiện Tại</h3>
                            </div>
                            <div className="p-4 flex-grow bg-stone-50">
                                <ComparisonSlider
                                    beforeImage="https://special.vietnamplus.vn/wp-content/uploads/2021/03/1-1558226613-100-1568x758.jpg"
                                    afterImage="https://static.tuoitre.vn/tto/i/s626/2009/05/17/NyTrzBX8.jpg"
                                    beforeLabel="Đường mòn Trường Sơn"
                                    afterLabel="Đường Trường Sơn 2009"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Timeline Section */}
                <div className="mb-24">
                    <h3 className="text-center text-3xl font-serif font-bold text-emerald-900 mb-4">Giai Đoạn Phát Triển</h3>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        Hành trình từ đường mòn nhỏ hẹp đến hệ thống giao thông đa chức năng (1959-1975)
                    </p>

                    <Timeline
                        events={[
                            {
                                year: '1959-1960',
                                title: 'Khởi Nguyên',
                                description: 'Đường mòn nhỏ hẹp, chỉ đi bộ gùi hàng. Phương châm "Đi không dấu".',
                                color: 'bg-emerald-500'
                            },
                            {
                                year: '1960-1965',
                                title: 'Cơ Giới Hóa Sơ Khai',
                                description: 'Mở rộng cho xe đạp thồ (Peugeot cải tiến) chở 227kg và xe thô sơ.',
                                color: 'bg-emerald-600'
                            },
                            {
                                year: '1965-1970',
                                title: 'Đường Xe Tải',
                                description: 'Phát triển đường ô tô dã chiến. Đối mặt chiến tranh phá hoại ác liệt.',
                                color: 'bg-emerald-700'
                            },
                            {
                                year: '1970-1975',
                                title: 'Hoàn Thiện',
                                description: 'Đường nhựa 4 làn xe, hệ thống đường ống xăng dầu và thông tin liên lạc.',
                                color: 'bg-emerald-800'
                            }
                        ]}
                    />
                </div>

                {/* Audio/Cultural Section */}
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-emerald-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Music size={200} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-emerald-900 mb-4">Vang Vọng Giữa Rừng Già</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Tiếng bom đạn không át được tiếng hát. Âm nhạc là vũ khí tinh thần, là nguồn động viên to lớn cho những người lính lái xe và cô gái mở đường.
                            </p>
                            <div className="space-y-3">
                                <SongItem
                                    title="Cô Gái Mở Đường"
                                    artist="Nhạc sĩ: Xuân Giao"
                                    duration="03:45"
                                    youtubeUrl="https://youtu.be/q2evcToj9yQ?si=sUqzp1jMSTp4JLmd"
                                />
                                <SongItem
                                    title="Trường Sơn Đông, Trường Sơn Tây"
                                    artist="Thơ: Phạm Tiến Duật"
                                    duration="04:12"
                                    youtubeUrl="https://youtu.be/g7okMFk7VYQ?si=RsUUn_NwkyFTgJJR"
                                />
                                <SongItem
                                    title="Bài Ca Bên Cánh Võng"
                                    artist="Nhạc sĩ: Nguyên Nhung"
                                    duration="03:20"
                                    youtubeUrl="https://youtu.be/xHZEyyRlo30?si=zEo0yprzAf7tbsG6"
                                />
                                <SongItem
                                    title="Tiểu Đội Xe Không Kính"
                                    artist="Thơ: Phạm Tiến Duật"
                                    duration="03:55"
                                    youtubeUrl="https://youtu.be/h8EKX6i2qrY?si=hLAh53T-S6apZqWX"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative w-full max-w-sm aspect-square bg-emerald-900 rounded-full flex items-center justify-center shadow-2xl animate-[spin-slow]">
                                <div className="absolute inset-4 border-2 border-emerald-700/50 rounded-full"></div>
                                <div className="absolute inset-16 border border-emerald-700/30 rounded-full"></div>
                                <div className="w-32 h-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ho_Chi_Minh_Trail_map.jpg/500px-Ho_Chi_Minh_Trail_map.jpg')] bg-cover bg-center rounded-full border-4 border-emerald-500 shadow-inner"></div>
                                <div className="absolute w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, value, unit, label }: any) => (
    <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-emerald-50 hover:-translate-y-2 hover:z-10 hover:shadow-2xl transition-all duration-500 cursor-pointer active:scale-[0.98] group">
        <div className="text-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-500 origin-left">{icon}</div>
        <div className="text-2xl md:text-3xl font-bold text-slate-800">{value} <span className="text-sm font-normal text-slate-500">{unit}</span></div>
        <div className="text-xs text-slate-500 font-medium uppercase mt-1">{label}</div>
    </div>
);


const SongItem = ({ title, artist, duration, youtubeUrl }: any) => (
    <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 hover:shadow-md transition-all duration-300 cursor-pointer group border border-transparent hover:border-emerald-200 text-left active:scale-[0.99]"
    >
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors shadow-sm">
                <Play size={14} fill="currentColor" />
            </div>
            <div>
                <span className="block text-sm font-bold text-slate-800 group-hover:text-emerald-900 transition-colors">{title}</span>
                <span className="text-xs text-slate-500">{artist}</span>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">{duration}</span>
            <Speaker size={18} className="text-slate-300 group-hover:text-emerald-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" />
        </div>
    </a>
);