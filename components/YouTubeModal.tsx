import { useState } from 'react';
import { X, Play } from 'lucide-react';

interface YouTubeModalProps {
    videoId: string;
    title: string;
    description?: string;
    thumbnail?: string;
}

export const YouTubeModal: React.FC<YouTubeModalProps> = ({
    videoId,
    title,
    description,
    thumbnail
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <>
            {/* Trigger Card */}
            <div
                onClick={() => setIsOpen(true)}
                className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-slate-700 to-slate-900"
            >
                {/* Background Image */}
                <div className="relative h-96">
                    <img
                        src={thumbnailUrl}
                        alt={title}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        {/* Play Button */}
                        <div className="mb-6 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <Play className="text-white" size={40} fill="white" />
                        </div>

                        {/* Badge */}
                        <div className="mb-4 px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            Tư Liệu Lịch Sử
                        </div>

                        {/* Title */}
                        <h3 className="text-4xl font-bold text-white mb-3">
                            {title}
                        </h3>

                        {/* Description */}
                        {description && (
                            <p className="text-slate-300 text-lg max-w-2xl mb-4">
                                {description}
                            </p>
                        )}

                        {/* CTA */}
                        <div className="text-slate-400 text-sm flex items-center gap-2 group-hover:text-white transition-colors">
                            <Play size={16} />
                            Xem tài liệu
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                        >
                            <X className="text-white" size={20} />
                        </button>

                        {/* YouTube iFrame */}
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
};
