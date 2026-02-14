
import React, { useState } from 'react';
import { Quiz } from '../types';

interface QuizEngineProps {
  quiz: Quiz;
  onComplete: () => void;
  onCancel: () => void;
}

const QuizEngine: React.FC<QuizEngineProps> = ({ quiz, onComplete, onCancel }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = quiz.questions[currentQuestion];
  const isCorrect = selectedOption === question.correctAnswer;

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === question.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onComplete();
    }
  };

  return (
    <div className="p-4 md:p-8 pb-32 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-8 bg-white/50 p-4 rounded-2xl backdrop-blur-sm">
        <button 
          onClick={onCancel} 
          className="p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors rounded-xl"
        >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
             <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
           </svg>
        </button>
        <div className="flex-1 mx-6 h-3 bg-emerald-100 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-emerald-600 transition-all duration-500 ease-out" 
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs font-bold text-emerald-700 uppercase">Question</span>
          <span className="text-lg font-extrabold text-emerald-900">{currentQuestion + 1}/{quiz.questions.length}</span>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-emerald-50">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-10 leading-tight">
          {question.text}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, idx) => {
            let bgColor = 'bg-white';
            let borderColor = 'border-emerald-100';
            let textColor = 'text-emerald-900';
            
            if (isAnswered) {
              if (idx === question.correctAnswer) {
                bgColor = 'bg-green-100';
                borderColor = 'border-green-500';
                textColor = 'text-green-900';
              } else if (idx === selectedOption) {
                bgColor = 'bg-red-100';
                borderColor = 'border-red-500';
                textColor = 'text-red-900';
              } else {
                bgColor = 'bg-gray-50';
                borderColor = 'border-gray-200';
                textColor = 'text-gray-400';
              }
            } else if (idx === selectedOption) {
              borderColor = 'border-emerald-600';
              bgColor = 'bg-emerald-50';
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full p-6 text-left rounded-2xl border-2 transition-all font-bold text-lg md:text-xl ${bgColor} ${borderColor} ${textColor} active:scale-[0.99] shadow-sm hover:shadow-md`}
              >
                <div className="flex justify-between items-center">
                  <span>{option}</span>
                  <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                    {isAnswered && idx === question.correctAnswer && <span className="text-xl">✓</span>}
                    {isAnswered && idx === selectedOption && idx !== question.correctAnswer && <span className="text-xl">✗</span>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
            <div className={`p-6 rounded-2xl border-2 ${isCorrect ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{isCorrect ? '🌟' : '💡'}</span>
                <p className="text-lg font-extrabold">{isCorrect ? 'Excellent!' : 'Keep Learning'}</p>
              </div>
              <p className="text-base leading-relaxed font-medium">{question.explanation}</p>
            </div>
            <button 
              onClick={handleNext}
              className="w-full mt-8 py-5 bg-emerald-900 text-white text-lg font-bold rounded-2xl shadow-xl active:scale-95 transition-all hover:bg-emerald-800 flex items-center justify-center gap-2"
            >
              {currentQuestion === quiz.questions.length - 1 ? 'Finish Results' : 'Next Question'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizEngine;
