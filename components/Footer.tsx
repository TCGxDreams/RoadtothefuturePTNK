import React from 'react';
import { PageId } from '../types';

interface FooterProps {
    setPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
                <h3 className="text-white font-serif font-bold text-lg mb-4">Di Sản Việt</h3>
                <p className="text-sm leading-relaxed">
                    Dự án giáo dục tương tác nhằm tôn vinh sự sáng tạo và lòng dũng cảm của con người Việt Nam trong việc xây dựng hệ thống giao thông thời chiến.
                </p>
            </div>
            <div>
                <h3 className="text-white font-serif font-bold text-lg mb-4">Khám Phá</h3>
                <ul className="space-y-2 text-sm">
                    <li><button onClick={() => setPage('duoi-dat')} className="hover:text-amber-500 transition-colors">Địa Đạo</button></li>
                    <li><button onClick={() => setPage('mat-dat')} className="hover:text-green-500 transition-colors">Đường Trường Sơn</button></li>
                    <li><button onClick={() => setPage('tren-khong')} className="hover:text-blue-500 transition-colors">Điện Biên Phủ Trên Không</button></li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-serif font-bold text-lg mb-4">Liên Kết</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Về dự án</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Tài liệu tham khảo</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Đóng góp tư liệu</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center pt-8 border-t border-slate-800 text-xs">
          <p>&copy; 2024 Những Con Đường Vô Hình. Designed with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};
