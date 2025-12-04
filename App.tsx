import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HistorianChat } from './components/HistorianChat';
import { HomePage } from './pages/HomePage';
import { UndergroundPage } from './pages/UndergroundPage';
import { GroundPage } from './pages/GroundPage';
import { SkyPage } from './pages/SkyPage';
import { FuturePage } from './pages/FuturePage';
import { PageId } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial load for smooth entry
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setPage={setActivePage} />;
      case 'duoi-dat': return <UndergroundPage />;
      case 'mat-dat': return <GroundPage />;
      case 'tren-khong': return <SkyPage />;
      case 'tuong-lai': return <FuturePage />;
      default: return <HomePage setPage={setActivePage} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center relative">
          <div className="absolute inset-0 bg-amber-500 blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative z-10">
              <div className="w-20 h-20 border-t-2 border-b-2 border-amber-500 rounded-full animate-spin mx-auto mb-6"></div>
              <h1 className="text-white font-serif text-2xl tracking-[0.2em] font-light">DI SẢN VIỆT</h1>
              <p className="text-stone-500 text-sm mt-2 font-sans tracking-wider">Đang khởi tạo bảo tàng số...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-stone-50 selection:bg-amber-200 selection:text-amber-900">
      <Navigation activePage={activePage} setPage={setActivePage} />
      
      <main className="flex-grow">
        <div className="animate-fade-in w-full">
          {renderPage()}
        </div>
      </main>

      {/* Pass activePage to Chat for context awareness */}
      <HistorianChat currentPage={activePage} />
      <Footer setPage={setActivePage} />
    </div>
  );
}