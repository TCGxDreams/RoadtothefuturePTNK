import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    color?: string;
}

interface TimelineProps {
    events: TimelineEvent[];
    className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ events, className = '' }) => {
    return (
        <div className={`w-full ${className}`}>
            <div className="relative overflow-x-auto pb-4 timeline-scroll">
                <div className="flex gap-6 min-w-max px-4">
                    {/* Connecting Line */}
                    <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-stone-300 to-transparent pointer-events-none"
                        style={{ width: `calc(100% - 2rem)`, left: '1rem' }} />

                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-72 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
                                <div className={`w-4 h-4 rounded-full border-4 border-white shadow-md transition-all duration-300 group-hover:scale-125 ${event.color || 'bg-amber-500'
                                    }`} />
                            </div>

                            {/* Card */}
                            <div className="mt-16 bg-white rounded-2xl p-6 shadow-lg border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default">
                                {/* Icon */}
                                {event.icon && (
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${event.color?.includes('amber') ? 'bg-amber-50 text-amber-600' :
                                            event.color?.includes('emerald') ? 'bg-emerald-50 text-emerald-600' :
                                                event.color?.includes('sky') ? 'bg-sky-50 text-sky-600' :
                                                    'bg-stone-50 text-stone-600'
                                        } group-hover:scale-110 transition-transform duration-300`}>
                                        {event.icon}
                                    </div>
                                )}

                                {/* Year Badge */}
                                <div className="flex items-center gap-2 mb-3">
                                    <Calendar size={14} className="text-stone-400" />
                                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                                        {event.year}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">
                                    {event.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-stone-600 leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="text-center mt-4">
                <p className="text-xs text-stone-400 uppercase tracking-wider">
                    ← Cuộn ngang để xem thêm →
                </p>
            </div>
        </div>
    );
};
