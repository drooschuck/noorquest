
import React from 'react';
import { Story } from '../types';

interface StoryLibraryProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

const StoryLibrary: React.FC<StoryLibraryProps> = ({ stories, onSelectStory }) => {
  return (
    <div className="p-4 md:p-8 space-y-8 pb-24 md:pb-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-emerald-900">The Library</h2>
        <p className="text-lg text-gray-500 italic font-medium">Timeless stories of faith, patience, and victory.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map(story => (
          <div 
            key={story.id}
            onClick={() => onSelectStory(story)}
            className="group bg-white rounded-[2rem] p-6 border border-emerald-50 shadow-sm flex flex-col gap-4 active:scale-[0.98] transition-all cursor-pointer hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-20 h-20 rounded-2xl bg-emerald-50 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
              {story.icon}
            </div>
            <div>
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                story.difficulty === 'kids' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
              }`}>
                {story.difficulty}
              </span>
              <h3 className="text-xl font-bold text-emerald-900 mt-3 leading-tight group-hover:text-emerald-700 transition-colors">{story.title}</h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">{story.summary}</p>
            </div>
            <div className="mt-auto pt-4 flex items-center text-emerald-800 font-bold text-sm gap-2">
              Read Story 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-900/5 p-8 rounded-[2rem] border border-emerald-100 text-center max-w-2xl mx-auto">
        <p className="text-base font-semibold text-emerald-800 mb-2">Knowledge is a treasure that grows when shared.</p>
        <p className="text-sm text-emerald-600">More stories being curated for your journey every month.</p>
      </div>
    </div>
  );
};

export default StoryLibrary;
