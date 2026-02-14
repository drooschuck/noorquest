
import React from 'react';
import { UserStats } from '../types';

interface ProfileProps {
  stats: UserStats;
}

const Profile: React.FC<ProfileProps> = ({ stats }) => {
  return (
    <div className="p-4 md:p-8 space-y-10 pb-24 md:pb-8 max-w-5xl mx-auto">
      {/* Header Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-6 bg-white p-8 rounded-[2.5rem] border border-emerald-50 shadow-sm">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full emerald-gradient border-8 border-white shadow-2xl flex items-center justify-center text-6xl text-white transform hover:rotate-12 transition-transform">
          🌙
        </div>
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">Seeker of Light</h2>
          <p className="text-lg text-emerald-600 font-bold flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Level 1 Knowledge Seeker
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-yellow-50 px-4 py-2 rounded-xl border border-yellow-100">
              <span className="text-xs font-bold text-yellow-800 uppercase block">Total Points</span>
              <span className="text-xl font-black text-emerald-900">{stats.points}</span>
            </div>
            <div className="bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
              <span className="text-xs font-bold text-emerald-800 uppercase block">Best Streak</span>
              <span className="text-xl font-black text-emerald-900">{stats.streak} Days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Badges Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-2xl font-bold text-emerald-900">Badges Earned</h3>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">{stats.badges.length} Unlocked</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 bg-white p-8 rounded-[2rem] border border-emerald-50 shadow-sm">
            {stats.badges.map(badge => (
              <div key={badge} className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 rounded-3xl bg-yellow-50 border-2 border-yellow-200 flex items-center justify-center text-4xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {badge === 'courage_badge' ? '🌊' : '🔥'}
                </div>
                <span className="text-[11px] font-black text-center text-emerald-900 uppercase tracking-tight leading-none px-1">
                  {badge.replace('_', ' ')}
                </span>
              </div>
            ))}
            {stats.badges.length === 0 && (
               <div className="col-span-full py-16 text-center text-gray-400 border-4 border-dashed border-gray-100 rounded-[2rem]">
                 <span className="text-4xl block mb-2">🏅</span>
                 <p className="text-base font-bold">Complete stories to earn badges!</p>
               </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-emerald-900 px-2">Knowledge Statistics</h3>
          <div className="bg-emerald-900 text-white rounded-[2rem] p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-base font-medium text-emerald-200">Stories Completed</span>
              <span className="text-3xl font-black">{stats.completedStories.length}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-base font-medium text-emerald-200">Quizzes Passed</span>
              <span className="text-3xl font-black">{stats.completedQuizzes.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-emerald-200">Learning Milestone</span>
              <span className="text-3xl font-black">{Math.floor(stats.points / 100)}%</span>
            </div>
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
               <div className="h-full bg-yellow-400" style={{ width: `${(stats.points / 1000) * 100}%` }}></div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-10">
        <button className="flex-1 py-4 bg-white text-emerald-900 font-bold rounded-2xl border border-emerald-100 shadow-sm active:scale-95 transition-all hover:bg-emerald-50">
          Sync Progress
        </button>
        <button className="flex-1 py-4 bg-red-50 text-red-600 font-bold rounded-2xl border border-red-100 active:scale-95 transition-all hover:bg-red-100">
          Reset All Data
        </button>
      </div>
    </div>
  );
};

export default Profile;
