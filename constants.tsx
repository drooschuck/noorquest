
import React from 'react';
import { Reflection, Story, Quiz } from './types';

export const REFLECTIONS: Reflection[] = [
  {
    id: '1',
    type: 'ayah',
    arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
    content: '"And say: My Lord, increase me in knowledge."',
    source: 'Surah Taha, 114',
    action: 'Spend 10 minutes today learning something new about your faith.'
  },
  {
    id: '2',
    type: 'hadith',
    content: '"The best of you are those who learn the Quran and teach it."',
    source: 'Sahih Bukhari',
    action: 'Recite one page of the Quran today and reflect on its meaning.'
  }
];

export const STORIES: Story[] = [
  {
    id: 'musa',
    title: 'Prophet Musa (AS) & The Red Sea',
    summary: 'A journey of courage, faith, and the ultimate miracle.',
    content: 'Musa (AS) was born in Egypt during the time of Fir\'aun...',
    chapters: [
      'The Birth of Musa (AS)',
      'The Burning Bush at Mount Sinai',
      'The Confrontation with Fir\'aun',
      'The Miracle of the Red Sea'
    ],
    difficulty: 'kids',
    badgeId: 'courage_badge',
    icon: '🌊'
  },
  {
    id: 'ibrahim',
    title: 'Prophet Ibrahim (AS): The Search for Truth',
    summary: 'How Ibrahim (AS) found the Creator through contemplation.',
    content: 'Long ago in the city of Ur, Ibrahim (AS) looked at the stars...',
    chapters: [
      'The Youth of Ibrahim (AS)',
      'Breaking the Idols',
      'The Miracle of the Fire',
      'Building the Kaaba'
    ],
    difficulty: 'kids',
    badgeId: 'faith_badge',
    icon: '🔥'
  }
];

export const QUIZZES: Quiz[] = [
  {
    id: 'basics_1',
    title: 'The Five Pillars',
    category: 'Kids',
    questions: [
      {
        id: 'q1',
        text: 'How many daily prayers are mandatory for Muslims?',
        options: ['3', '5', '7', '1'],
        correctAnswer: 1,
        explanation: 'The five daily prayers (Salah) are Fajr, Dhuhr, Asr, Maghrib, and Isha.'
      },
      {
        id: 'q2',
        text: 'Which pillar involves giving a portion of your wealth to the needy?',
        options: ['Salah', 'Hajj', 'Zakat', 'Sawm'],
        correctAnswer: 2,
        explanation: 'Zakat is the third pillar of Islam and purifies one\'s wealth.'
      }
    ]
  },
  {
    id: 'seerah_1',
    title: 'Life of Prophet Muhammad (PBUH)',
    category: 'Seerah',
    questions: [
      {
        id: 'sq1',
        text: 'In which city was the Prophet Muhammad (PBUH) born?',
        options: ['Madinah', 'Jerusalem', 'Makkah', 'Taif'],
        correctAnswer: 2,
        explanation: 'Prophet Muhammad (PBUH) was born in Makkah in the Year of the Elephant.'
      }
    ]
  },
  {
    id: 'ramadan_d1',
    title: 'Ramadan Challenge: Day 1',
    category: 'Ramadan',
    questions: [
      {
        id: 'rq1',
        text: 'The Quran was first revealed in which month?',
        options: ['Rajab', 'Dhul-Hijjah', 'Muharram', 'Ramadan'],
        correctAnswer: 3,
        explanation: 'The Quran was revealed in the month of Ramadan on the night of Laylat al-Qadr.'
      }
    ]
  }
];

export const ZIKR_PRESETS = [
  { text: 'SubhanAllah', arabic: 'سُبْحَانَ ٱللَّٰهِ', target: 33 },
  { text: 'Alhamdulillah', arabic: 'ٱلْحَمْدُ لِلَّٰهِ', target: 33 },
  { text: 'Allahu Akbar', arabic: 'ٱللَّٰهُ أَكْبَرُ', target: 34 }
];
