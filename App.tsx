
import React, { useState, useEffect } from 'react';
import { View, UserStats, Story, Quiz } from './types';
import Dashboard from './components/Dashboard';
import StoryLibrary from './components/StoryLibrary';
import StoryDetail from './components/StoryDetail';
import QuizEngine from './components/QuizEngine';
import Tasbih from './components/Tasbih';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { STORIES, QUIZZES } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('noor_quest_stats');
    return saved ? JSON.parse(saved) : {
      points: 0,
      streak: 1,
      badges: [],
      completedQuizzes: [],
      completedStories: [],
      lastActiveDate: new Date().toISOString().split('T')[0]
    };
  });

  useEffect(() => {
    localStorage.setItem('noor_quest_stats', JSON.stringify(stats));
  }, [stats]);

  const updatePoints = (amount: number) => {
    setStats(prev => ({ ...prev, points: prev.points + amount }));
  };

  const completeStory = (storyId: string, badgeId: string) => {
    if (!stats.completedStories.includes(storyId)) {
      setStats(prev => ({
        ...prev,
        completedStories: [...prev.completedStories, storyId],
        badges: Array.from(new Set([...prev.badges, badgeId])),
        points: prev.points + 50
      }));
    }
  };

  const completeQuiz = (quizId: string) => {
    if (!stats.completedQuizzes.includes(quizId)) {
      setStats(prev => ({
        ...prev,
        completedQuizzes: [...prev.completedQuizzes, quizId],
        points: prev.points + 100
      }));
    }
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <Dashboard 
            stats={stats} 
            onNavigate={(view) => setCurrentView(view)} 
          />
        );
      case View.LIBRARY:
        return (
          <StoryLibrary 
            stories={STORIES} 
            onSelectStory={(story) => {
              setSelectedStory(story);
              setCurrentView(View.STORY_DETAIL);
            }} 
          />
        );
      case View.STORY_DETAIL:
        return selectedStory ? (
          <StoryDetail 
            story={selectedStory} 
            onComplete={() => completeStory(selectedStory.id, selectedStory.badgeId)}
            onBack={() => setCurrentView(View.LIBRARY)}
            onTakeQuiz={(quizId) => {
              const q = QUIZZES.find(quiz => quiz.id === quizId) || QUIZZES[0];
              setSelectedQuiz(q);
              setCurrentView(View.QUIZ_ACTIVE);
            }}
          />
        ) : null;
      case View.QUIZ:
        return (
          <div className="p-4 md:p-8 space-y-4 pb-24 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-900">Choose a Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {QUIZZES.map(q => (
                <button
                  key={q.id}
                  onClick={() => { setSelectedQuiz(q); setCurrentView(View.QUIZ_ACTIVE); }}
                  className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-yellow-600 text-left hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">{q.category}</span>
                      <h3 className="text-lg font-bold text-emerald-900 mt-1">{q.title}</h3>
                    </div>
                    {stats.completedQuizzes.includes(q.id) && (
                      <span className="text-green-500 text-xl">✅</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      case View.QUIZ_ACTIVE:
        return selectedQuiz ? (
          <QuizEngine 
            quiz={selectedQuiz} 
            onComplete={() => {
              completeQuiz(selectedQuiz.id);
              setCurrentView(View.QUIZ);
            }} 
            onCancel={() => setCurrentView(View.QUIZ)}
          />
        ) : null;
      case View.TASBIH:
        return <Tasbih />;
      case View.PROFILE:
        return <Profile stats={stats} />;
      default:
        return <Dashboard stats={stats} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="bg-[#fdfbf7] min-h-screen relative flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 lg:w-72 flex-col fixed h-full border-r border-emerald-100 bg-white z-40">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 emerald-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">N</div>
            <h1 className="text-emerald-900 font-bold text-xl tracking-tight">NoorQuest</h1>
          </div>
        </div>
        <Navigation currentView={currentView} onNavigate={setCurrentView} desktop />
        <div className="mt-auto p-6 border-t border-emerald-50">
          <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-2xl">
             <div className="w-10 h-10 rounded-full emerald-gradient flex items-center justify-center text-xl">🌙</div>
             <div>
               <p className="text-xs font-bold text-emerald-800">Seeker of Light</p>
               <p className="text-[10px] text-emerald-600 font-medium">Lvl 1 Knowledge Seeker</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 lg:ml-72 flex flex-col">
        <Header stats={stats} />
        <main className="mt-16 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderView()}
        </main>
        {/* Mobile Nav */}
        <Navigation currentView={currentView} onNavigate={setCurrentView} />
      </div>
    </div>
  );
};

export default App;
