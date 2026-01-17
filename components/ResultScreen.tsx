
import React from 'react';
import { DiagnosisResult } from '../types';

interface ResultScreenProps {
  result: DiagnosisResult;
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  const { product, aiTip, skinType } = result;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold mb-2">
          診断結果：{skinType}
        </span>
        <h2 className="text-2xl font-bold text-gray-800">
          あなたへのオススメはこれ！
        </h2>
      </div>

      <div className="relative group">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-64 object-cover rounded-2xl shadow-md border-2 border-pink-50"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-pink-500 font-bold text-sm shadow-sm">
          Recommendation
        </div>
      </div>

      <div className="bg-pink-50 p-5 rounded-2xl border border-pink-100">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs text-pink-400 font-bold uppercase tracking-widest">{product.brand}</p>
            <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {product.features.map(feature => (
            <span key={feature} className="bg-white px-3 py-1 rounded-full text-xs text-pink-500 border border-pink-200">
              # {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-100 relative overflow-hidden">
        <div className="absolute -top-2 -right-2 text-4xl opacity-10">💡</div>
        <h4 className="text-sm font-bold text-yellow-700 mb-2 flex items-center">
          <span className="mr-2">🧸</span> 美容のプロからのアドバイス
        </h4>
        <p className="text-sm text-gray-700 italic">
          「{aiTip}」
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <a 
          href={product.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl text-center shadow-lg shadow-pink-200 transition-all flex items-center justify-center"
        >
          <span>詳細をチェックする</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <button 
          onClick={onRestart}
          className="w-full py-3 bg-white text-gray-400 font-medium rounded-2xl hover:bg-gray-50 transition-colors"
        >
          もう一度診断する
        </button>
      </div>
    </div>
  );
};
