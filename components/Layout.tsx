
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-pink-100">
        <div className="bg-pink-400 p-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wider">
            💖 コスメ診断メーカー 💖
          </h1>
          <p className="text-pink-100 text-sm mt-2">
            あなたにぴったりの運命のコスメを見つけよう
          </p>
        </div>
        <div className="p-6 sm:p-10">
          {children}
        </div>
      </div>
      <footer className="mt-8 text-pink-400 text-xs opacity-70">
        &copy; 2024 Cosme Diagnosis Maker
      </footer>
    </div>
  );
};
