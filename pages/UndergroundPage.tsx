import React, { useState } from 'react';
import { Map, Zap, Home, Shield, Lightbulb, Ghost, Users, ArrowDown, FileText } from 'lucide-react';
import { AIImageModal } from '../components/AIImageModal';
import { HistoricalImageId } from '../services/geminiService';

export const UndergroundPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ id: HistoricalImageId, title: string, src: string, caption?: string } | null>(null);

    return (
        <div className="min-h-screen bg-stone-950 text-stone-200 pb-20">
            {/* Immersive Header */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef7ce41a171fbac542c982fd4c32d085f4602a048e155081c2779cc5190e69c97765394fdf37e53ff55f6473ff5147f17de954aaecab68e94a3944a44b9346cadb/hinh-anh-dia-dao-cu-chi-1-8244-9810.jpg"
                        className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
                        alt="Địa đạo Củ Chi"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/80 to-stone-950" />

                    {/* Spotlight Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <span className="inline-block py-1 px-3 border border-amber-800/50 rounded-full text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-stone-900/50 backdrop-blur">
                        1940 - 1975
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-white tracking-tight leading-tight">
                        Mạch Máu Ngầm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Huyền Thoại</span>
                    </h1>
                    <p className="text-xl font-light text-stone-400 max-w-2xl mx-auto leading-relaxed">
                        "Thành phố trong lòng đất" - 250km địa đạo kiên cường trước bom đạn.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-32 relative z-20">
                <div className="grid md:grid-cols-12 gap-12 items-start">

                    {/* Stats Card (Floating Glass) */}
                    <div className="md:col-span-4 bg-stone-900/60 backdrop-blur-xl p-8 rounded-[2rem] border border-stone-800 shadow-2xl sticky top-24">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center text-amber-500 border border-amber-900/50">
                                <Map size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-white">Hệ Thống</h2>
                                <p className="text-stone-500 text-sm font-mono">Củ Chi</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <StatRow label="Tổng chiều dài" value="200-250" unit="km" />
                            <div className="h-px bg-stone-800"></div>
                            <StatRow label="Độ sâu tối đa" value="12" unit="mét" />
                            <div className="h-px bg-stone-800"></div>
                            <StatRow label="Số tầng" value="03" unit="tầng" />
                            <div className="h-px bg-stone-800"></div>
                            <StatRow label="Hy sinh" value="45k+" unit="người" />
                            <div className="h-px bg-stone-800"></div>
                            <StatRow label="Trận đánh" value="4.200+" unit="trận" />
                        </div>

                        <div className="mt-8 pt-6 border-t border-stone-800">
                            <p className="text-xs text-stone-500 mb-3 uppercase tracking-wide font-bold">Chiến dịch chống phá</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-red-900/20 text-red-400 rounded-lg text-xs font-bold border border-red-900/30 hover:bg-red-900/30 transition-colors cursor-help" title="8,000 quân Mỹ, 30 tấn bom B-52">Crimp (1966)</span>
                                <span className="px-3 py-1.5 bg-red-900/20 text-red-400 rounded-lg text-xs font-bold border border-red-900/30 hover:bg-red-900/30 transition-colors cursor-help" title="30,000 quân Mỹ">Cedar Falls (1967)</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Text */}
                    <div className="md:col-span-8 space-y-20 pt-10 md:pt-0">
                        <section>
                            <h3 className="text-4xl font-serif font-bold mb-8 text-white flex items-center gap-4">
                                <span className="text-stone-800 text-6xl opacity-40 -ml-4 absolute -z-10 font-sans font-black">01</span>
                                Cuộc Sống Trong Bóng Tối
                            </h3>
                            <p className="text-lg md:text-xl text-stone-400 leading-relaxed mb-8">
                                Dưới lớp đất dày là một xã hội thu nhỏ hoàn chỉnh. Bất chấp không khí ngột ngạt, bóng tối tuyệt đối và sự đe dọa từ côn trùng độc hại,
                                quân dân Củ Chi vẫn duy trì bệnh xá, lớp học, văn nghệ và cả trụ sở chỉ huy Mặt trận Giải phóng miền Nam.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <FeatureBox icon={<Lightbulb size={20} />} title="Bếp Hoàng Cầm" desc="Hệ thống tản khói tinh vi, nấu ăn không lộ vị trí." />
                                <FeatureBox icon={<Ghost size={20} />} title="Bẫy Chông" desc="Ma trận bẫy tre, bẫy hổ gây ám ảnh cho quân địch." />
                                <FeatureBox icon={<Users size={20} />} title="Đời Sống" desc="Chung sống với dơi, chuột, rắn rết nhưng vẫn lạc quan." />
                                <FeatureBox icon={<Shield size={20} />} title="Bất Khả Xâm Phạm" desc="Chịu được bom B-52 'thảm' và xe tăng càn quét." />
                            </div>
                        </section>

                        <section>
                            <h3 className="text-4xl font-serif font-bold mb-12 text-white flex items-center gap-4">
                                <span className="text-stone-800 text-6xl opacity-40 -ml-4 absolute -z-10 font-sans font-black">02</span>
                                Cấu Trúc 3 Tầng
                            </h3>

                            {/* Visual Depth Chart */}
                            <div className="relative rounded-3xl overflow-hidden border border-stone-800">
                                {/* Level 1 */}
                                <div className="relative bg-[#5D4037] p-8 h-48 flex items-center border-b border-[#3E2723]/50 transition-all hover:bg-[#6D4C41] group">
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="text-9xl font-black text-black">1</span>
                                    </div>
                                    <div className="flex gap-6 items-start relative z-10">
                                        <div className="flex flex-col items-center">
                                            <span className="text-3xl font-bold text-amber-200/50">3m</span>
                                            <ArrowDown size={16} className="text-amber-200/50 mt-1" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Tầng 1: Chiến Đấu & Phòng Thủ</h4>
                                            <p className="text-stone-300 text-sm max-w-md">Chịu được đạn pháo, sức nặng xe tăng và vũ khí hóa học. Bố trí các ổ bắn tỉa, lỗ châu mai và bẫy chông.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Level 2 */}
                                <div className="relative bg-[#4E342E] p-8 h-48 flex items-center border-b border-[#3E2723]/50 transition-all hover:bg-[#5D4037] group">
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="text-9xl font-black text-black">2</span>
                                    </div>
                                    <div className="flex gap-6 items-start relative z-10">
                                        <div className="flex flex-col items-center">
                                            <span className="text-3xl font-bold text-amber-200/50">6m</span>
                                            <ArrowDown size={16} className="text-amber-200/50 mt-1" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Tầng 2: Sinh Hoạt & Chỉ Huy</h4>
                                            <p className="text-stone-300 text-sm max-w-md">Nơi đặt Bếp Hoàng Cầm, bệnh viện dã chiến, nơi nghỉ ngơi. Có nắp hầm bí mật ngăn hơi độc từ tầng trên.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Level 3 */}
                                <div className="relative bg-[#3E2723] p-8 h-48 flex items-center transition-all hover:bg-[#4E342E] group">
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="text-9xl font-black text-black">3</span>
                                    </div>
                                    <div className="flex gap-6 items-start relative z-10">
                                        <div className="flex flex-col items-center">
                                            <span className="text-3xl font-bold text-amber-200/50">12m</span>
                                            <ArrowDown size={16} className="text-amber-200/50 mt-1" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Tầng 3: Trú Ẩn An Toàn</h4>
                                            <p className="text-stone-300 text-sm max-w-md">Tầng sâu nhất, nơi trú ẩn cuối cùng trước bom hạng nặng B-52. Có lối thoát hiểm bí mật dẫn ra sông Sài Gòn.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Visual Gallery Section */}
                        <section>
                            <h3 className="text-4xl font-serif font-bold mb-12 text-white flex items-center gap-4">
                                <span className="text-stone-800 text-6xl opacity-40 -ml-4 absolute -z-10 font-sans font-black">03</span>
                                Hình Ảnh Lịch Sử
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Tunnel Entrance */}
                                <div
                                    className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
                                    onClick={() => setSelectedImage({
                                        id: 'cuchi-entrance',
                                        title: 'Lối vào địa đạo Củ Chi',
                                        src: 'https://mia.vn/media/uploads/blog-du-lich/dia-dao-cu-chi-5-1721208626.jpg',
                                        caption: 'Cửa hầm ngụy trang bí mật'
                                    })}
                                >
                                    <img
                                        src="https://mia.vn/media/uploads/blog-du-lich/dia-dao-cu-chi-5-1721208626.jpg"
                                        alt="Lối vào địa đạo Củ Chi"
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                        <p className="text-white font-bold text-lg">Lối vào địa đạo Củ Chi</p>
                                    </div>
                                </div>

                                {/* Cross Section */}
                                <div
                                    className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
                                    onClick={() => setSelectedImage({
                                        id: 'cuchi-cross-section',
                                        title: 'Mô hình cắt ngang 3 tầng',
                                        src: 'https://mia.vn/media/uploads/blog-du-lich/so-do-dia-dao-cu-chi-1744081186.jpg',
                                        caption: 'Cấu trúc địa đạo phức tạp như tơ nhện'
                                    })}
                                >
                                    <img
                                        src="https://mia.vn/media/uploads/blog-du-lich/so-do-dia-dao-cu-chi-1744081186.jpg"
                                        alt="Mô hình cắt ngang 3 tầng"
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                        <p className="text-white font-bold text-lg">Mô hình cắt ngang 3 tầng</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-stone-900/50 p-8 rounded-2xl border border-stone-800 hover:border-amber-900/30 transition-colors">
                            <h3 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
                                <Ghost className="text-amber-600" />
                                Đối Đầu: "Tunnel Rats" (Lính Chuột Hầm)
                            </h3>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Quân đội Mỹ đã phải thành lập đội đặc nhiệm "Tunnel Rats" - những người lính nhỏ con, trang bị chỉ đèn pin và súng ngắn để chui vào địa đạo.
                                Họ phải đối mặt với nỗi kinh hoàng từ bóng tối, bẫy chông và sự phục kích bất ngờ.
                            </p>

                            <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 flex gap-4 items-start">
                                <div className="bg-stone-800 p-2 rounded-lg">
                                    <FileText size={20} className="text-stone-400" />
                                </div>
                                <div>
                                    <h5 className="text-amber-500 font-bold text-sm uppercase tracking-wide mb-1">Dữ liệu lịch sử</h5>
                                    <p className="text-stone-300 text-sm">
                                        Ngày <strong>18/1/1967</strong>, "Lính chuột hầm" tìm thấy 500.000 trang tài liệu tại trụ sở Củ Chi, nhưng không thể phá hủy được hệ thống.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <AIImageModal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    imageId={selectedImage.id}
                    title={selectedImage.title}
                    imageUrl={selectedImage.src}
                    imageCaption={selectedImage.caption}
                    color="amber"
                />
            )}
        </div>
    );
};

const StatRow = ({ label, value, unit }: any) => (
    <div className="flex justify-between items-end">
        <span className="text-stone-500 uppercase text-xs tracking-wider font-bold">{label}</span>
        <div className="text-right">
            <span className="text-3xl font-serif font-bold text-white">{value}</span>
            <span className="text-stone-600 ml-1">{unit}</span>
        </div>
    </div>
);

const FeatureBox = ({ icon, title, desc }: any) => (
    <div className="relative bg-stone-900 p-5 rounded-xl border border-stone-800 hover:border-amber-900/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:z-10 cursor-pointer active:scale-[0.98] group">
        <div className="text-amber-600 mb-3 group-hover:scale-110 transition-transform duration-500 origin-left">{icon}</div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
);