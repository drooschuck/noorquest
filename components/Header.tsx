
import React from 'react';
import { UserStats } from '../types';

interface HeaderProps {
  stats: UserStats;
}

const Header: React.FC<HeaderProps> = ({ stats }) => {
  return (
    <header className="fixed top-0 left-0 right-0 md:left-64 lg:left-72 bg-[#fdfbf7]/90 backdrop-blur-md z-30 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-emerald-100">
      <div className="flex items-center gap-2 md:hidden">
        <div className="w-8 h-8 emerald-gradient rounded-lg flex items-center justify-center text-white font-bold">N</div>
        <h1 className="text-emerald-900 font-bold text-lg tracking-tight">NoorQuest</h1>
      </div>
      <div className="hidden md:block">
         <p className="text-emerald-900 font-semibold">Assalamu alaikum, Knowledge Seeker</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200 shadow-sm">
          <span className="text-lg">🔥</span>
          <span className="text-sm font-extrabold text-yellow-800">{stats.streak}</span>
        </div>
        <div className="flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 shadow-sm">
          <span className="text-lg">💎</span>
          <span className="text-sm font-extrabold text-emerald-800">{stats.points}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
