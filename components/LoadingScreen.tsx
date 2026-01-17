
import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-6">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-pink-100 border-t-pink-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <span className="text-2xl">💄</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-pink-600 font-bold text-lg">あなたの肌を分析中...</p>
        <p className="text-pink-300 text-xs mt-1 italic tracking-widest uppercase animate-pulse">
          Stay Beautiful
        </p>
      </div>
    </div>
  );
};
