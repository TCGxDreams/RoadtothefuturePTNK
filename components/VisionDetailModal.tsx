import { useState, useEffect } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import { loadVisionContent, VisionType } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface VisionDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    color: 'amber' | 'green' | 'blue';
    image: string;
    icon: React.ReactNode;
    visionType: VisionType;
}

export const VisionDetailModal: React.FC<VisionDetailModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    color,
    image,
    icon,
    visionType
}) => {
    const [aiContent, setAiContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (isOpen && visionType) {
            setLoading(true);
            setAiContent('');

            loadVisionContent(visionType)
                .then((content) => {
                    setAiContent(content);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error loading vision meaning:', error);
                    setAiContent('Không thể tải nội dung lúc này. Vui lòng thử lại.');
                    setLoading(false);
                });
        }
    }, [isOpen, visionType]);

    if (!isOpen) return null;

    const colorClasses = {
        amber: {
            // bg: 'from-amber-500 to-orange-600',
            // text: 'text-amber-600',
            // border: 'border-amber-200',
            // badge: 'bg-amber-100 text-amber-700',
            // spinner: 'text-amber-600'
        },
        green: {
            // bg: 'from-emerald-500 to-green-600',
            // text: 'text-emerald-600',
            // border: 'border-emerald-200',
            // badge: 'bg-emerald-100 text-emerald-700',
            // spinner: 'text-emerald-600'
        },
        blue: {
            // bg: 'from-sky-500 to-blue-600',
            // text: 'text-sky-600',
            // border: 'border-sky-200',
            // badge: 'bg-sky-100 text-sky-700',
            // spinner: 'text-sky-600'
        }
    };

    const currentColor = colorClasses[color];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-md hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                >
                    <X className="text-slate-800" size={24} />
                </button>

                {/* Header with Image */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${currentColor.bg} opacity-60 backdrop-blur-md`} />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white drop-shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                                {icon}
                            </div>
                            <h2 className="text-4xl font-bold">
                                {title}
                            </h2>
                        </div>
                        <p className="text-white/90 text-lg max-w-2xl">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                    {/* <div className={`inline-block px-4 py-2 rounded-full ${currentColor.badge} font-bold text-sm mb-6`}>
                        Ý Nghĩa Từ Lịch Sử Đến Tương Lai
                    </div> */}

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-16 space-y-4">
                            <Loader2 className={`w-12 h-12 ${currentColor.spinner} animate-spin`} />
                            <p className="text-slate-500 text-lg">Đang tải lý giải từ Giáo sư Sử học...</p>
                        </div>
                    ) : (
                        <div className={`prose prose-lg max-w-none prose-slate 
                            prose-headings:font-serif prose-headings:${currentColor.text}
                            prose-p:text-slate-700 prose-p:leading-relaxed
                            prose-strong:${currentColor.text} prose-strong:font-bold
                            prose-ul:text-slate-700 prose-li:my-1`}>
                            <ReactMarkdown>{aiContent}</ReactMarkdown>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-10 pt-6 border-t border-slate-200">
                        <button
                            onClick={onClose}
                            className={`group flex items-center gap-2 px-6 py-3 ${currentColor.text} font-bold hover:gap-4 transition-all duration-300`}
                        >
                            <span>Đóng</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
