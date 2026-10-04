import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLocale: 'ja' | 'en';
  onLocaleChange: (locale: 'ja' | 'en') => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  onLocaleChange,
}) => {
  return (
    <div className="inline-flex items-center gap-1.5 bg-black/5 hover:bg-black/10 px-2.5 py-1 rounded-full text-xs font-medium text-gray-700 transition-colors">
      <Globe className="w-3.5 h-3.5 text-gray-500" />
      <button
        type="button"
        onClick={() => onLocaleChange('ja')}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          currentLocale === 'ja'
            ? 'font-bold text-gray-900 bg-white/80 shadow-xs'
            : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        JP
      </button>
      <span className="text-gray-300">/</span>
      <button
        type="button"
        onClick={() => onLocaleChange('en')}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          currentLocale === 'en'
            ? 'font-bold text-gray-900 bg-white/80 shadow-xs'
            : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
