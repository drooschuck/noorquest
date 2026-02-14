
export enum View {
  HOME = 'home',
  QUIZ = 'quiz',
  LIBRARY = 'library',
  TASBIH = 'tasbih',
  PROFILE = 'profile',
  STORY_DETAIL = 'story_detail',
  QUIZ_ACTIVE = 'quiz_active'
}

export interface Reflection {
  id: string;
  type: 'ayah' | 'hadith';
  content: string;
  arabic?: string;
  source: string;
  action: string;
}

export interface Story {
  id: string;
  title: string;
  summary: string;
  content: string;
  chapters: string[];
  difficulty: 'kids' | 'adults';
  badgeId: string;
  icon: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  category: 'Aqeedah' | 'Fiqh' | 'Seerah' | 'History' | 'Kids' | 'Ramadan';
  questions: Question[];
  unlockedAt?: number; // For Ramadan challenge
}

export interface UserStats {
  points: number;
  streak: number;
  badges: string[];
  completedQuizzes: string[];
  completedStories: string[];
  lastActiveDate: string;
}
