import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { CodeInput } from './components/CodeInput';
import { ReviewOutput } from './components/ReviewOutput';
import { LanguageSelector } from './components/LanguageSelector';
import { SparklesIcon } from './components/icons';
import { ReviewFeedback } from './types';
import { reviewCode } from './services/geminiService';
import { LANGUAGES } from './constants';

function App() {
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>(LANGUAGES[0]);
  const [feedback, setFeedback] = useState<ReviewFeedback | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleReviewCode = useCallback(async () => {
    if (!code.trim()) {
      setError('Please enter some code to review.');
      return;
    }
    setError(null);
    setFeedback(null);
    setIsLoading(true);

    try {
      const result = await reviewCode(code, language);
      setFeedback(result);
    } catch (e: any) {
      console.error(e);
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [code, language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="flex flex-col gap-4">
          <LanguageSelector
            selectedLanguage={language}
            onLanguageChange={setLanguage}
          />
          <CodeInput
            code={code}
            onCodeChange={setCode}
            language={language}
          />
          <button
            onClick={handleReviewCode}
            disabled={isLoading || !code.trim()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              'Analyzing...'
            ) : (
              <>
                <SparklesIcon className="w-5 h-5" />
                Review Code
              </>
            )}
          </button>
        </div>
        <div className="flex flex-col">
          <ReviewOutput
            feedback={feedback}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
