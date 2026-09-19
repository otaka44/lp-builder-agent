import React from 'react';
import { Sparkles } from 'lucide-react';

export interface SectionHeaderProps {
  badge?: string;
  title?: string;
  highlight_word?: string;
  description?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlight_word,
  description,
  centered = true,
  theme = 'light',
  className = '',
}) => {
  if (!badge && !title && !description) return null;

  const isDark = theme === 'dark';

  return (
    <div
      className={`${
        centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
            isDark
              ? 'bg-white/10 text-[#E6A817] border border-white/15 backdrop-blur-md'
              : 'bg-[#E6A817]/10 text-[#B8820B] border border-[#E6A817]/20'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
      )}

      {/* Title with optional highlight word */}
      {title && (
        <h2
          className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4 ${
            isDark ? 'text-white' : 'text-[#2B2B2B]'
          }`}
        >
          {highlight_word && title.includes(highlight_word) ? (
            <>
              {title.split(highlight_word)[0]}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#B8820B] via-[#E6A817] to-[#B8820B] pb-0.5">
                {highlight_word}
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#E6A817]/30 rounded-full -z-10" />
              </span>
              {title.split(highlight_word)[1]}
            </>
          ) : (
            title
          )}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-white/80' : 'text-[#2B2B2B]/70'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
