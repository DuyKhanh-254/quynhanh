import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import type { Tab } from '../types';

interface NavbarProps {
  currentTab: Tab;
  setTab: (tab: Tab) => void;
}

const navItems: { label: string; tab: Tab }[] = [
  { label: 'Trang chủ', tab: 'home' },
  { label: 'Bài tập', tab: 'assignments' },
  { label: 'Tổng kết', tab: 'conclusion' },
];

export default function Navbar({ currentTab, setTab }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const go = (tab: Tab) => {
    setTab(tab);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-background/88 backdrop-blur-xl border-b border-surface-variant shadow-sm">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 md:px-6 h-[68px]">
        <button onClick={() => go('home')} className="flex items-center gap-3 text-left cursor-pointer group">
          <img src="/a1.jpg" alt="Nguyễn Đặng Quỳnh Anh" className="w-10 h-10 rounded-full object-cover border-[3px] border-white shadow-md group-hover:rotate-6 transition-transform" />
          <div>
            <p className="font-headline font-bold text-primary leading-none">Quỳnh Anh</p>
            <p className="text-[10px] uppercase tracking-[0.16em] text-secondary mt-1">Digital portfolio</p>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item.tab} onClick={() => go(item.tab)} className={`relative py-2 text-sm font-bold cursor-pointer transition-colors ${currentTab === item.tab ? 'text-primary' : 'text-secondary hover:text-primary'}`}>
              {item.label}
              {currentTab === item.tab && <motion.span layoutId="nav-line" className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-primary" />}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 bg-primary-container/70 border border-white rounded-full px-4 py-2 text-xs font-bold text-on-primary-container">
          MSSV 25042332
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-full text-primary hover:bg-primary-container/50" aria-label="Mở menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden px-4 pb-4 grid gap-2 bg-background">
          {navItems.map((item) => (
            <button key={item.tab} onClick={() => go(item.tab)} className={`text-left px-4 py-3 rounded-2xl font-bold ${currentTab === item.tab ? 'bg-primary-container text-primary' : 'text-secondary bg-white/60'}`}>
              {item.label}
            </button>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
