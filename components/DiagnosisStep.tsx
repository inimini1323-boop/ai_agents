
import React from 'react';
import { SkinType } from '../types';
import { SKIN_TYPE_DETAILS } from '../constants';

interface DiagnosisStepProps {
  onSelect: (type: SkinType) => void;
}

export const DiagnosisStep: React.FC<DiagnosisStepProps> = ({ onSelect }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-center text-gray-600 font-medium mb-8">
        あなたの現在の肌状態に近いものを<br/>選んでくださいね ✨
      </p>
      
      <div className="grid gap-4">
        {Object.entries(SKIN_TYPE_DETAILS).map(([type, detail]) => (
          <button
            key={type}
            onClick={() => onSelect(type as SkinType)}
            className={`flex items-center p-5 rounded-2xl border-2 transition-all hover:scale-102 active:scale-95 group ${detail.color}`}
          >
            <span className="text-3xl mr-4 group-hover:animate-bounce">{detail.icon}</span>
            <div className="text-left">
              <div className="font-bold text-lg">{detail.label}</div>
              <div className="text-sm opacity-80">{detail.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
