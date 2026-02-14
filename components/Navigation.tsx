
import React from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
  desktop?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate, desktop = false }) => {
  const tabs = [
    { id: View.HOME, label: 'Hub', icon: '🏠' },
    { id: View.LIBRARY, label: 'Learn', icon: '📚' },
    { id: View.QUIZ, label: 'Quiz', icon: '🎯' },
    { id: View.TASBIH, label: 'Zikr', icon: '📿' },
    { id: View.PROFILE, label: 'Profile', icon: '👤' },
  ];

  if (desktop) {
    return (
      <nav className="flex flex-col gap-2 p-4">
        {tabs.map(tab => {
          const isActive = currentView === tab.id || 
                           (tab.id === View.LIBRARY && currentView === View.STORY_DETAIL) || 
                           (tab.id === View.QUIZ && currentView === View.QUIZ_ACTIVE);
          
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all font-bold ${
                isActive 
                  ? 'bg-emerald-900 text-white shadow-md' 
                  : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-900'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="text-sm uppercase tracking-wider">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-emerald-50 flex justify-around py-3 pb-6 z-50">
      {tabs.map(tab => {
        const isActive = currentView === tab.id || 
                         (tab.id === View.LIBRARY && currentView === View.STORY_DETAIL) || 
                         (tab.id === View.QUIZ && currentView === View.QUIZ_ACTIVE);
        
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all ${
              isActive ? 'text-emerald-900' : 'text-gray-400'
            }`}
          >
            <span className="text-2xl">{tab.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
            {isActive && (
              <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
