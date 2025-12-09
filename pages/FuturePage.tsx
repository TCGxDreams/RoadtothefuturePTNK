import React, { useState, useEffect } from 'react';
import { Send, ChevronRight, Train, Plane, Waypoints, ArrowRight } from 'lucide-react';
import { sendToDiscord, saveStoryLocally, getTotalStories } from '../services/discordService';
import { VisionDetailModal } from '../components/VisionDetailModal';
import { VisionType } from '../services/geminiService';

export const FuturePage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        year: '',
        front: '',
        story: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [totalStories, setTotalStories] = useState(12450);
    const [modalOpen, setModalOpen] = useState<VisionType | null>(null);
    const [selectedVision, setSelectedVision] = useState<{
        title: string;
        description: string;
        color: 'amber' | 'green' | 'blue';
        image: string;
        icon: React.ReactNode;
    } | null>(null);

    useEffect(() => {
        setTotalStories(getTotalStories());
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.front || !formData.story) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
            return;
        }

        setIsSubmitting(true);

        const frontMapping: Record<string, string> = {
            'dia-dao': 'underground',
            'truong-son': 'ground',
            'ha-noi': 'sky',
            'khac': 'ground'
        };

        const storyData = {
            name: formData.name,
            year: formData.year,
            front: frontMapping[formData.front] || 'ground',
            story: formData.story
        };

        // Save locally first
        saveStoryLocally(storyData);

        // Try to send to Discord
        const success = await sendToDiscord(storyData);

        if (success) {
            setSubmitStatus('success');
            setTotalStories(getTotalStories());
            // Reset form
            setFormData({ name: '', year: '', front: '', story: '' });
        } else {
            setSubmitStatus('error');
        }

        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
    };

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
                            image="https://achievereal.com/resource/images/2024/11/tat-tan-tat-ve-metro-tp-hcm-tuyen-ben-thanh-suoi-tien-tu-a-z.jpg"
                            tag="Hạ Tầng Ngầm"
                            onClick={() => {
                                setModalOpen('metro');
                                setSelectedVision({
                                    title: 'Từ Hầm Ngầm... đến Metro',
                                    description: 'Tinh thần đào địa đạo Củ Chi năm xưa nay được kế thừa trong việc xây dựng hệ thống Metro hiện đại',
                                    color: 'amber',
                                    image: 'https://achievereal.com/resource/images/2024/11/tat-tan-tat-ve-metro-tp-hcm-tuyen-ben-thanh-suoi-tien-tu-a-z.jpg',
                                    icon: <Train size={32} />
                                });
                            }}
                        />
                        <VisionCard
                            icon={<Waypoints size={32} />}
                            title="Từ Đường Mòn... đến Cao Tốc"
                            desc="Huyết mạch Trường Sơn năm nào nay là Đại lộ Hồ Chí Minh và Cao tốc Bắc - Nam, nối liền các vùng kinh tế trọng điểm, rút ngắn khoảng cách địa lý."
                            // color="green"
                            image="https://bcp.cdnchinhphu.vn/334894974524682240/2025/9/23/cao-toc-dau-giay-phan-thiet-1758567206363928015943-1758621957759476742744.jpg"
                            tag="Kết Nối"
                            onClick={() => {
                                setModalOpen('highway');
                                setSelectedVision({
                                    title: 'Từ Đường Mòn... đến Cao Tốc',
                                    description: 'Huyết mạch Trường Sơn năm nào nay là Đại lộ Hồ Chí Minh và Cao tốc Bắc - Nam',
                                    color: 'green',
                                    image: 'https://bcp.cdnchinhphu.vn/334894974524682240/2025/9/23/cao-toc-dau-giay-phan-thiet-1758567206363928015943-1758621957759476742744.jpg',
                                    icon: <Waypoints size={32} />
                                });
                            }}
                        />
                        <VisionCard
                            icon={<Plane size={32} />}
                            title="Từ Bầu Trời Lửa... đến Quốc Tế"
                            desc="Bầu trời bom đạn năm xưa nay tấp nập những đường bay quốc tế, đưa Việt Nam vươn mình ra thế giới 5 châu, trở thành điểm đến an toàn và thân thiện."
                            color="blue"
                            image="https://www.vietnamairlines.com/~/media/ContentImage/TravelInfo/ChuyenBayMoUoc.jpg?la=en"
                            tag="Hội Nhập"
                            onClick={() => {
                                setModalOpen('aviation');
                                setSelectedVision({
                                    title: 'Từ Bầu Trời Lửa... đến Quốc Tế',
                                    description: 'Bầu trời bom đạn năm xưa nay tấp nập những đường bay quốc tế, đưa Việt Nam vươn mình ra thế giới',
                                    color: 'blue',
                                    image: 'https://www.vietnamairlines.com/~/media/ContentImage/TravelInfo/ChuyenBayMoUoc.jpg?la=en',
                                    icon: <Plane size={32} />
                                });
                            }}
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

                {/* Tầm Nhìn Tương Lai Section */}
                <div className="container mx-auto max-w-6xl mb-32">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-sm font-bold text-slate-700 mb-4">
                            Tiếp Bước Con Đường
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Tầm Nhìn Tương Lai</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Gìn giữ hòa bình, phát huy trí tuệ và ý chí kiên cường là di sản tinh thần quý báu để tiếp tục sống và phát triển trong thế hệ hôm nay và mai sau.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Vision 1: Smart City */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6">
                                <Train className="text-amber-600" size={28} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">Đô Thị Thông Minh</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Tinh thần sáng tạo đào hầm ngầm năm xưa giờ được áp dụng vào metro, quy hoạch đô thị xanh.Trong tương lai nó còn là những con đường xuyên biển, những khu đô thị lòng đất,... Tất cả những điều đó chính là sự kết hợp của sự kiên trì kế thừa từ "DNA" của quá khứ và tầm nhìn trí tuệ tiếp bước tương lai.
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs text-amber-700 font-medium italic">
                                    "Biến khó khăn thành động lực, từ đất đá cũng thành hình, hầm hào xây lên từ ý chí để tiếp bước tương lai thật hòa bình."
                                </p>
                            </div>
                        </div>

                        {/* Vision 2: Regional Connection */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <Waypoints className="text-emerald-600" size={28} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">Mạng Lưới Kết Nối</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Ý chí mở đường Trường Sơn giờ thể hiện qua kết nối và đoàn kết toàn dân. Bây giờ ta có cao tốc Bắc-Nam, đường sắt cao tốc, quốc lộ.Nhưng nhiều nơi vẫn còn khó khăn để tiếp nối sứ mệnh "thống nhất" tương lai ta sẽ phát triển thêm nữa.
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs text-emerald-700 font-medium italic">
                                    "Con đường mang ý chí, khác vọng năm ấy mang đầy bom đạn. Giờ là cầu nối cho trăm nhà, trăm người, trăm ngã, là cầu nối đưa thương hiệu nội địa Việt Nam ra quốc tế"
                                </p>
                            </div>
                        </div>

                        {/* Vision 3: Global Integration */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <Plane className="text-sky-600" size={28} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">Kết Nối Bầu Trời Tổ Quốc và Toàn Cầu</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Bầu trời từng bảo vệ bằng lưới lửa phòng không đầy chắp và giờ đây đã thống nhất kết nối bao bầu trời tổ quốc mở cửa ngõ hội nhập, mở con đường tới tương lai. Tương lai từ những sân bay nội địa, quốc tế nó sẽ phát triển và đưa Việt Nam ta tới 5 châu với ngoại giao mềm và du lịch văn hóa chúng ta sẽ sánh vai với cường quốc năm châu như Bác Hồ đã nói.
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs text-sky-700 font-medium italic">
                                    "Bầu trời đâu còn sắc đỏ đầy tiếng bom rơi. Giờ là chim hót, cầu nối hoà bình."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Closing Message */}
                    <div className="mt-16 text-center">
                        <div className="inline-block bg-gradient-to-r from-amber-50 via-white to-cyan-50 px-8 py-6 rounded-2xl border border-slate-100 shadow-sm">
                            <p className="text-lg text-slate-700 font-medium">
                                🕊️ <span className="font-serif italic">"Hòa bình không chỉ là hết có chiến tranh, mà còn là nối bước xây dựng một tương lai tốt đẹp hơn từ những con đường của quá khứ."</span>
                            </p>
                        </div>
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
                                        <span className="text-4xl font-serif font-bold text-amber-600">{totalStories.toLocaleString()}</span>
                                        <span className="text-amber-800 text-sm">câu chuyện</span>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-7">
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 font-medium transition-all shadow-sm outline-none"
                                            placeholder="Họ tên người kể chuyện"
                                            required
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                value={formData.year}
                                                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                                className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 font-medium transition-all shadow-sm outline-none"
                                                placeholder="Năm (VD: 1968)"
                                            />
                                            <select
                                                value={formData.front}
                                                onChange={(e) => setFormData({ ...formData, front: e.target.value })}
                                                className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 text-slate-800 font-medium transition-all shadow-sm outline-none"
                                                required
                                            >
                                                <option value="">Chọn mặt trận...</option>
                                                <option value="dia-dao">Địa Đạo Củ Chi/Vĩnh Mốc</option>
                                                <option value="truong-son">Đường Trường Sơn</option>
                                                <option value="ha-noi">Điện Biên Phủ Trên Không</option>
                                                <option value="khac">Câu chuyện về tương lai</option>
                                                <option value="khac">Khác</option>
                                            </select>
                                        </div>
                                        <textarea
                                            rows={4}
                                            value={formData.story}
                                            onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                                            className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 font-medium transition-all shadow-sm outline-none resize-none"
                                            placeholder="Chia sẻ câu chuyện hoặc kỷ vật của gia đình bạn..."
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full group relative overflow-hidden bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-lg hover:shadow-2xl hover:shadow-slate-900/30 flex items-center justify-center gap-3 active:scale-[0.98] btn-shimmer"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {isSubmitting ? 'Đang gửi...' : 'Gửi Vào Thư Viện Di Sản'}
                                            <span className="bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                                                <ChevronRight size={16} />
                                            </span>
                                        </span>
                                    </button>

                                    {/* Success/Error Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-[fadeIn_0.3s_ease-in]">
                                            <div className="text-green-600 mt-0.5"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-green-900 text-sm">Cảm ơn bạn đã chia sẻ!</h4>
                                                <p className="text-green-700 text-xs mt-1">Câu chuyện của bạn đã được lưu vào thư viện di sản.</p>
                                            </div>
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-[fadeIn_0.3s_ease-in]">
                                            <div className="text-red-600 mt-0.5"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-red-900 text-sm">Vui lòng điền đầy đủ thông tin</h4>
                                                <p className="text-red-700 text-xs mt-1">Tên, mặt trận và câu chuyện là bắt buộc.</p>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision Detail Modal */}
            {modalOpen && selectedVision && (
                <VisionDetailModal
                    isOpen={!!modalOpen}
                    onClose={() => {
                        setModalOpen(null);
                        setSelectedVision(null);
                    }}
                    title={selectedVision.title}
                    description={selectedVision.description}
                    color={selectedVision.color}
                    image={selectedVision.image}
                    icon={selectedVision.icon}
                    visionType={modalOpen}
                />
            )}
        </div>
    );
};

const VisionCard = ({ image, title, description, icon, onClick }: any) => {
    return (
        <div
            className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:z-10 h-[550px] flex flex-col cursor-pointer border border-slate-100"
            onClick={onClick}
        >
            <div className="h-64 overflow-hidden relative">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
            </div>

            <div className="flex-grow p-8 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-500">
                        <div className="text-blue-600 group-hover:text-white transition-colors">
                            {icon}
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-2xl font-serif font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{title}</h3>
                    </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{description}</p>

                <button className="group/btn flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                    Khám phá
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};