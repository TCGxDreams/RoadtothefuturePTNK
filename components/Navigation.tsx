import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { PageId, NavItem } from '../types';

interface NavigationProps {
  activePage: PageId;
  setPage: (page: PageId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'duoi-dat', label: 'Dưới Đất' },
    { id: 'mat-dat', label: 'Mặt Đất' },
    { id: 'tren-khong', label: 'Trên Không' },
    { id: 'tuong-lai', label: 'Tương Lai' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: PageId) => {
    setPage(id);
    setIsOpen(false);
  };

  const isHome = activePage === 'home';
  const textColor = scrolled || !isHome ? 'text-stone-800' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-amber-800' : 'text-white';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-sm border-stone-200/50 py-3' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className={`group flex items-center gap-3 cursor-pointer select-none`}
        >
          <div className={`p-2 rounded-xl transition-all duration-300 ${
            scrolled || !isHome ? 'bg-amber-100/50' : 'bg-white/10 backdrop-blur-md'
          }`}>
             <Compass className={`transition-transform duration-700 group-hover:rotate-180 ${logoColor}`} size={24} />
          </div>
          <span className={`font-serif font-bold text-lg tracking-wide ${logoColor}`}>
            Di Sản Việt
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center p-1 rounded-full border border-transparent">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
                <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                    isActive 
                    ? 'text-white shadow-md' 
                    : scrolled || !isHome
                        ? 'text-stone-600 hover:text-stone-900'
                        : 'text-white/80 hover:text-white'
                }`}
                >
                {/* Active Background */}
                {isActive && (
                    <span className="absolute inset-0 bg-stone-900 z-0"></span>
                )}
                
                {/* Hover Background for non-active */}
                {!isActive && (
                    <span className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full ${
                        scrolled || !isHome ? 'bg-stone-100' : 'bg-white/10'
                    }`}></span>
                )}

                <span className="relative z-10">{item.label}</span>
                </button>
            )
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-3 rounded-xl transition-colors active:scale-95 ${
            scrolled || !isHome 
                ? 'hover:bg-stone-100 text-stone-800' 
                : 'hover:bg-white/10 text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) overflow-hidden border-t border-stone-100 ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col p-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-5 py-4 rounded-2xl font-medium transition-all duration-200 flex justify-between items-center group ${
                activePage === item.id
                  ? 'bg-stone-900 text-white shadow-lg shadow-stone-900/20'
                  : 'text-stone-600 hover:bg-stone-50 hover:pl-7'
              }`}
            >
              {item.label}
              {activePage === item.id && <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};