
import React, { useState } from 'react';
import { SkinType, DiagnosisResult } from './types';
import { PRODUCT_MAPPING } from './constants';
import { getBeautyTip } from './services/geminiService';
import { Layout } from './components/Layout';
import { DiagnosisStep } from './components/DiagnosisStep';
import { ResultScreen } from './components/ResultScreen';
import { LoadingScreen } from './components/LoadingScreen';

enum AppState {
  START,
  LOADING,
  RESULT
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.START);
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  const handleStart = () => {
    setState(AppState.START);
    setResult(null);
  };

  const handleSelect = async (type: SkinType) => {
    setState(AppState.LOADING);
    
    try {
      // Simulate analysis time and fetch beauty tip
      const [tip] = await Promise.all([
        getBeautyTip(type),
        new Promise(resolve => setTimeout(resolve, 2000)) // Min 2s loading for "cute" effect
      ]);

      setResult({
        skinType: type,
        product: PRODUCT_MAPPING[type],
        aiTip: tip
      });
      setState(AppState.RESULT);
    } catch (error) {
      console.error("Diagnosis failed", error);
      // Fallback
      setResult({
        skinType: type,
        product: PRODUCT_MAPPING[type],
        aiTip: "毎日のスキンケアを大切にしましょう！"
      });
      setState(AppState.RESULT);
    }
  };

  return (
    <Layout>
      {state === AppState.START && (
        <DiagnosisStep onSelect={handleSelect} />
      )}
      
      {state === AppState.LOADING && (
        <LoadingScreen />
      )}
      
      {state === AppState.RESULT && result && (
        <ResultScreen result={result} onRestart={handleStart} />
      )}
    </Layout>
  );
};

export default App;
