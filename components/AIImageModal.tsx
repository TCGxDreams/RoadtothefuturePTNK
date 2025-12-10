import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { generateHistoricalImageDetail, HistoricalImageId } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface AIImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageId: HistoricalImageId;
    title: string;
    imageUrl: string;
    imageCaption?: string;
    color?: 'amber' | 'red' | 'blue' | 'slate';
}

export const AIImageModal: React.FC<AIImageModalProps> = ({
    isOpen,
    onClose,
    imageId,
    title,
    imageUrl,
    imageCaption,
    color = 'amber'
}) => {
    const [aiContent, setAiContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (isOpen && imageId) {
            setLoading(true);
            setAiContent('');

            generateHistoricalImageDetail(imageId)
                .then((content) => {
                    setAiContent(content);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error generating image detail:', error);
                    setAiContent('Không thể tải phân tích lúc này. Vui lòng thử lại.');
                    setLoading(false);
                });
        }
    }, [isOpen, imageId]);

    if (!isOpen) return null;

    const colorClasses = {
        amber: {
            bg: 'from-amber-600 to-amber-800',
            text: 'text-amber-600',
            border: 'border-amber-200',
            spinner: 'text-amber-600',
            button: 'text-amber-700 hover:text-amber-800'
        },
        red: {
            bg: 'from-red-600 to-red-800',
            text: 'text-red-600',
            border: 'border-red-200',
            spinner: 'text-red-600',
            button: 'text-red-700 hover:text-red-800'
        },
        blue: {
            bg: 'from-sky-600 to-blue-800',
            text: 'text-sky-600',
            border: 'border-sky-200',
            spinner: 'text-sky-600',
            button: 'text-sky-700 hover:text-sky-800'
        },
        slate: {
            bg: 'from-slate-600 to-slate-800',
            text: 'text-slate-600',
            border: 'border-slate-200',
            spinner: 'text-slate-600',
            button: 'text-slate-700 hover:text-slate-800'
        }
    };

    const currentColor = colorClasses[color];

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur rounded-full flex items-center justify-center transition-all text-white"
                >
                    <X size={20} />
                </button>

                {/* Left Side: Image */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-stone-900">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${currentColor.bg} opacity-40 mix-blend-multiply`} />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex items-center gap-2 text-white/80 text-sm font-bold uppercase tracking-wider mb-2">
                            <Sparkles size={14} className="text-yellow-400" />
                            <span>Tư liệu lịch sử</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                            {title}
                        </h2>
                        {imageCaption && (
                            <p className="text-white/70 text-sm mt-2 font-light italic">
                                "{imageCaption}"
                            </p>
                        )}
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-3/5 p-8 md:p-12 bg-white relative">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-full min-h-[300px] space-y-4">
                            <Loader2 className={`w-10 h-10 ${currentColor.spinner} animate-spin`} />
                            <p className="text-slate-500 font-medium animate-pulse">
                                Giáo sư Sử học đang phân tích tư liệu...
                            </p>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col text-slate-900">
                            <div className="prose prose-lg max-w-none prose-slate 
                                prose-headings:font-serif prose-headings:${currentColor.text}
                                prose-p:text-slate-700 prose-p:leading-relaxed text-justify
                                prose-strong:text-slate-900 prose-strong:font-bold
                                prose-li:text-slate-700">
                                <ReactMarkdown>{aiContent}</ReactMarkdown>
                            </div>

                            <div className="mt-auto pt-8 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className={`group flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-all ${currentColor.button} font-bold text-sm`}
                                >
                                    <span>Đóng tư liệu</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
