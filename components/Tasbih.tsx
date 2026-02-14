
import React, { useState, useCallback } from 'react';
import { ZIKR_PRESETS } from '../constants';

const Tasbih: React.FC = () => {
  const [count, setCount] = useState(0);
  const [selectedPreset, setSelectedPreset] = useState(0);

  const handleCount = useCallback(() => {
    setCount(prev => prev + 1);
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }, []);

  const handleReset = () => {
    setCount(0);
  };

  const switchPreset = (idx: number) => {
    setSelectedPreset(idx);
    setCount(0);
  };

  const preset = ZIKR_PRESETS[selectedPreset];
  const progress = (count / preset.target) * 100;

  return (
    <div className="p-4 md:p-8 space-y-8 flex flex-col items-center pb-24 h-[calc(100vh-8rem)] justify-center max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-emerald-900">Digital Tasbih</h2>
        <p className="text-lg text-gray-500 font-medium">Keep your tongue moist with the remembrance of Allah.</p>
      </div>

      <div className="flex flex-wrap gap-3 w-full justify-center">
        {ZIKR_PRESETS.map((p, i) => (
          <button
            key={i}
            onClick={() => switchPreset(i)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              selectedPreset === i 
                ? 'bg-emerald-900 text-white border-emerald-900 shadow-lg scale-110' 
                : 'bg-white text-emerald-900 border border-emerald-100 hover:bg-emerald-50'
            }`}
          >
            {p.text}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="46%"
              fill="none"
              stroke="currentColor"
              strokeWidth="16"
              className="text-emerald-50"
            />
            <circle
              cx="50%"
              cy="50%"
              r="46%"
              fill="none"
              stroke="currentColor"
              strokeWidth="16"
              strokeDasharray="100% 100%"
              style={{
                strokeDashoffset: `${100 - Math.min(progress, 100)}%`,
                strokeDasharray: '289% 100%' // Approximate circumference
              }}
              strokeLinecap="round"
              className="text-emerald-600 transition-all duration-300"
            />
          </svg>

          <button 
            onClick={handleCount}
            className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white shadow-[0_20px_60px_-15px_rgba(6,78,59,0.4)] border-8 border-emerald-900 flex flex-col items-center justify-center active:scale-95 transition-all hover:border-emerald-700"
          >
            <span className="text-7xl font-extrabold text-emerald-900">{count}</span>
            <span className="text-sm font-black text-emerald-600 uppercase tracking-[0.3em] mt-3">TAP</span>
          </button>
        </div>

        <div className="text-center lg:text-left space-y-6 max-w-sm">
          <div className="space-y-2">
            <p className="font-arabic text-5xl md:text-6xl text-emerald-800 leading-tight">{preset.arabic}</p>
            <p className="text-base font-extrabold text-yellow-600 uppercase tracking-[0.2em]">Target Goal: {preset.target}</p>
          </div>
          
          <p className="text-gray-600 leading-relaxed font-medium italic">
            "The comparison of one who remembers Allah and one who does not is like that of the living and the dead." 
          </p>

          <button 
            onClick={handleReset}
            className="w-full px-8 py-4 bg-emerald-50 text-emerald-900 font-bold rounded-2xl hover:bg-emerald-100 transition-all border border-emerald-100 shadow-sm"
          >
            Reset Count
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasbih;
