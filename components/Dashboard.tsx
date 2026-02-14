
import React from 'react';
import { View, UserStats } from '../types';
import { REFLECTIONS } from '../constants';

interface DashboardProps {
  stats: UserStats;
  onNavigate: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ stats, onNavigate }) => {
  const reflection = REFLECTIONS[Math.floor(Math.random() * REFLECTIONS.length)];

  return (
    <div className="p-4 md:p-8 space-y-8 pb-24 md:pb-8">
      {/* Top Section: Reflection & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daily Reflection */}
        <section className="lg:col-span-2 bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl min-h-[300px] flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden sm:block">
            <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase bg-white/20 px-3 py-1.5 rounded tracking-widest mb-4 inline-block">Daily Reflection</span>
            {reflection.arabic && (
              <p className="font-arabic text-3xl md:text-4xl mt-4 text-left leading-relaxed text-yellow-100">
                {reflection.arabic}
              </p>
            )}
            <p className="mt-6 text-xl md:text-2xl italic font-medium leading-relaxed">
              {reflection.content}
            </p>
            <p className="text-sm md:text-base text-emerald-300 mt-4">— {reflection.source}</p>
            <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20 inline-block">
              <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Actionable Step</p>
              <p className="mt-1 text-sm md:text-base">{reflection.action}</p>
            </div>
          </div>
        </section>

        {/* Right Panel: Ramadan Challenge (Desktop Only context) */}
        <section className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-yellow-200 shadow-sm flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-emerald-900">Ramadan Streak</h3>
              <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">LIVE</span>
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-5 gap-3 pb-2">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-xl flex items-center justify-center font-bold text-sm transition-all
                    ${i < stats.streak ? 'bg-emerald-600 text-white scale-110 shadow-md' : 'bg-gray-100 text-gray-400'}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={() => onNavigate(View.QUIZ)}
            className="w-full mt-6 bg-emerald-900 text-white py-4 rounded-xl font-bold shadow-lg shadow-emerald-900/20 active:scale-95 transition-transform hover:bg-emerald-800"
          >
            Take Today's Quiz
          </button>
        </section>
      </div>

      {/* Grid of Actions & Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button 
          onClick={() => onNavigate(View.LIBRARY)}
          className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50 text-left flex flex-col items-start gap-4 hover:bg-emerald-50 transition-all hover:shadow-md group"
        >
          <span className="text-5xl group-hover:scale-110 transition-transform">📖</span>
          <div>
            <span className="font-bold text-2xl text-emerald-900 block">Prophet Stories</span>
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1 block">Explore the Library</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Learn from the messengers of Allah through interactive storytelling and miracles.</p>
        </button>

        <button 
          onClick={() => onNavigate(View.TASBIH)}
          className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50 text-left flex flex-col items-start gap-4 hover:bg-emerald-50 transition-all hover:shadow-md group"
        >
          <span className="text-5xl group-hover:scale-110 transition-transform">📿</span>
          <div>
            <span className="font-bold text-2xl text-emerald-900 block">Digital Tasbih</span>
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1 block">Start Zikr session</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">A peaceful companion for your daily remembrance and spiritual connection.</p>
        </button>

        <section className="bg-white p-8 rounded-3xl border border-emerald-100 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Continue Learning</h3>
          <p className="text-sm text-gray-500 mb-6">Master the questions you missed earlier using spaced repetition.</p>
          <div className="bg-emerald-50/50 p-6 rounded-2xl border border-dashed border-emerald-200 flex items-center justify-center text-center">
            <p className="text-emerald-800 text-sm font-semibold italic">New Adaptive Challenges arriving in the next update!</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
