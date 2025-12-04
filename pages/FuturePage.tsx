import React from 'react';
import { Send, ArrowUpRight, TrendingUp, Globe, Cpu, ChevronRight, Train, Plane, Waypoints } from 'lucide-react';

export const FuturePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 pt-24 pb-20 px-4">
                {/* Hero Header */}
                <div className="container mx-auto max-w-6xl mb-24 text-center">
                    <span className="inline-block py-1.5 px-4 border border-blue-200 bg-blue-50/50 backdrop-blur-sm rounded-full text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm hover:bg-blue-100/50 transition-colors cursor-default">
                        Sự Kế Thừa
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                        Hòa Bình <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">Đẹp Lắm</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                        "Từ những con đường tối tăm trong lòng đất, những lối mòn hiểm trở xuyên rừng, và bầu trời lửa đạn, chúng ta đã đi đến hòa bình."
                    </p>
                </div>

                {/* Legacy Mapping Cards */}
                <div className="container mx-auto max-w-6xl mb-32">
                    <h2 className="text-2xl font-serif font-bold text-slate-800 mb-8 text-center">Từ Di Sản Đến Hiện Đại</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <VisionCard
                            icon={<Train size={32} />}
                            title="Từ Hầm Ngầm... đến Metro"
                            desc="Tinh thần đào địa đạo Củ Chi năm xưa nay được kế thừa trong việc xây dựng hệ thống Metro hiện đại tại TP.HCM và Hà Nội, giải quyết bài toán giao thông đô thị."
                            color="amber"
                            image="https://images.unsplash.com/photo-1494516192674-b86b1f1515c3?w=1200"
                            tag="Hạ Tầng Ngầm"
                        />
                        <VisionCard
                            icon={<Waypoints size={32} />}
                            title="Từ Đường Mòn... đến Cao Tốc"
                            desc="Huyết mạch Trường Sơn năm nào nay là Đại lộ Hồ Chí Minh và Cao tốc Bắc - Nam, nối liền các vùng kinh tế trọng điểm, rút ngắn khoảng cách địa lý."
                            color="green"
                            image="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200"
                            tag="Kết Nối"
                        />
                        <VisionCard
                            icon={<Plane size={32} />}
                            title="Từ Bầu Trời Lửa... đến Quốc Tế"
                            desc="Bầu trời bom đạn năm xưa nay tấp nập những đường bay quốc tế, đưa Việt Nam vươn mình ra thế giới 5 châu, trở thành điểm đến an toàn và thân thiện."
                            color="blue"
                            image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200"
                            tag="Hội Nhập"
                        />
                    </div>

                    {/* Conclusion Message */}
                    <div className="mt-16 text-center max-w-3xl mx-auto">
                        <blockquote className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed mb-4">
                            "Không có sức mạnh quân sự nào khuất phục được ý chí dân tộc.
                            Hòa bình được xây dựng từ sự hy sinh."
                        </blockquote>
                        <p className="text-slate-500 text-sm">— Bài học lịch sử cho tương lai</p>
                    </div>
                </div>

                {/* Legacy Form Section */}
                <div className="container mx-auto max-w-5xl">
                    <div className="relative bg-white/60 backdrop-blur-xl p-8 md:p-14 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white">
                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                            <Send size={150} />
                        </div>

                        <div className="grid md:grid-cols-12 gap-12">
                            <div className="md:col-span-5 flex flex-col justify-center">
                                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Chia Sẻ Ký Ức</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Mỗi gia đình Việt Nam đều có một câu chuyện. Ông bà, cha mẹ bạn đã từng tham gia vào những con đường lịch sử này chưa? Hãy giúp chúng tôi lưu giữ những ký ức vô giá đó.
                                </p>
                                <div className="bg-amber-50/80 p-6 rounded-3xl border border-amber-100 shadow-inner">
                                    <h4 className="font-bold text-amber-900 mb-2 text-xs uppercase tracking-wide">Số liệu đã thu thập</h4>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-serif font-bold text-amber-600">12,450</span>
                                        <span className="text-amber-800 text-sm">câu chuyện</span>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-7">
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 font-medium transition-all shadow-sm outline-none"
                                            placeholder="Họ tên người kể chuyện"
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 font-medium transition-all shadow-sm outline-none"
                                                placeholder="Năm (VD: 1968)"
                                            />
                                            <select className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 text-slate-800 font-medium transition-all shadow-sm outline-none">
                                                <option value="">Chọn mặt trận...</option>
                                                <option value="dia-dao">Địa Đạo Củ Chi/Vĩnh Mốc</option>
                                                <option value="truong-son">Đường Trường Sơn</option>
                                                <option value="ha-noi">Điện Biên Phủ Trên Không</option>
                                                <option value="khac">Khác</option>
                                            </select>
                                        </div>
                                        <textarea
                                            rows={4}
                                            className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 font-medium transition-all shadow-sm outline-none resize-none"
                                            placeholder="Chia sẻ câu chuyện hoặc kỷ vật của gia đình bạn..."
                                        ></textarea>
                                    </div>
                                    <button className="w-full group relative overflow-hidden bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-lg hover:shadow-2xl hover:shadow-slate-900/30 flex items-center justify-center gap-3 active:scale-[0.98] btn-shimmer">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Gửi Vào Thư Viện Di Sản
                                            <span className="bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                                                <ChevronRight size={16} />
                                            </span>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const VisionCard = ({ icon, title, desc, color, image, tag }: any) => {
    const colorClasses = {
        amber: 'text-amber-600 bg-amber-50 group-hover:bg-amber-600 group-hover:text-white',
        blue: 'text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white',
        green: 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white'
    };

    // Derived light color for button hover bg
    const buttonHoverClass = {
        amber: 'group-hover:bg-amber-50 group-hover:text-amber-700',
        blue: 'group-hover:bg-blue-50 group-hover:text-blue-700',
        green: 'group-hover:bg-emerald-50 group-hover:text-emerald-700'
    };

    return (
        <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 h-[550px] flex flex-col cursor-default border border-slate-100">
            <div className="h-64 overflow-hidden relative">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 shadow-sm">
                    {tag}
                </div>
            </div>

            <div className="p-8 relative flex-grow flex flex-col -mt-16 bg-gradient-to-t from-white via-white to-transparent">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-colors duration-500 ${(colorClasses as any)[color]}`}>
                    {icon}
                </div>

                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3 group-hover:text-slate-900">
                    {title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-8 flex-grow">
                    {desc}
                </p>

                <button className={`w-full py-4 rounded-xl border border-slate-200 text-slate-500 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${(buttonHoverClass as any)[color]}`}>
                    Xem chi tiết <ArrowUpRight size={16} />
                </button>
            </div>
        </div>
    );
};