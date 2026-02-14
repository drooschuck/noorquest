
import React, { useState } from 'react';
import { Story } from '../types';

interface StoryDetailProps {
  story: Story;
  onComplete: () => void;
  onBack: () => void;
  onTakeQuiz: (quizId: string) => void;
}

const StoryDetail: React.FC<StoryDetailProps> = ({ story, onComplete, onBack, onTakeQuiz }) => {
  const [activeChapter, setActiveChapter] = useState(0);

  const isLastChapter = activeChapter === story.chapters.length - 1;

  const handleNext = () => {
    if (!isLastChapter) {
      setActiveChapter(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="p-4 md:p-8 pb-32 max-w-4xl mx-auto">
      <button onClick={onBack} className="mb-6 text-emerald-800 flex items-center gap-2 font-bold text-base hover:text-emerald-600 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
        Back to Library
      </button>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-emerald-50 overflow-hidden">
        <div className="h-48 md:h-64 bg-emerald-900 flex items-center justify-center text-8xl md:text-9xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <span className="relative z-10 drop-shadow-2xl">{story.icon}</span>
        </div>
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">{story.title}</h2>
          
          <div className="flex gap-2 mb-10">
             {story.chapters.map((_, i) => (
               <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= activeChapter ? 'bg-emerald-600' : 'bg-emerald-100'}`} />
             ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-sm font-extrabold text-yellow-600 uppercase tracking-widest mb-2">Chapter {activeChapter + 1}</h3>
              <h4 className="text-2xl font-bold text-emerald-800 mb-6">{story.chapters[activeChapter]}</h4>
              
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6 max-w-none">
                 <p className="text-lg md:text-xl">{story.content}</p>
                 <div className="bg-emerald-50 p-6 rounded-2xl italic text-emerald-900 text-lg border-l-4 border-emerald-600">
                   "Verily, with every hardship comes ease." - A reminder from this story.
                 </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            {activeChapter > 0 && (
              <button 
                onClick={() => setActiveChapter(prev => prev - 1)}
                className="flex-1 py-4 border-2 border-emerald-900 text-emerald-900 font-bold rounded-2xl active:scale-95 transition-all hover:bg-emerald-50"
              >
                Previous Chapter
              </button>
            )}
            <button 
              onClick={handleNext}
              className="flex-[2] py-4 bg-emerald-900 text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-all hover:bg-emerald-800"
            >
              {isLastChapter ? 'Complete Story & Reflect' : 'Next Chapter'}
            </button>
          </div>

          {isLastChapter && (
            <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-200 border-dashed animate-in fade-in duration-500">
              <h5 className="font-bold text-yellow-800 mb-2">Story Achievement Unlocked!</h5>
              <p className="text-sm text-yellow-700 mb-4">You've finished the journey. Now test your knowledge to earn a badge.</p>
              <button 
                onClick={() => onTakeQuiz('seerah_1')}
                className="w-full py-4 bg-yellow-600 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2 hover:bg-yellow-700"
              >
                Take the Story Quiz 🎯
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
