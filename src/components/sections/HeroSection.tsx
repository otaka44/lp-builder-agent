import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { ImageWithFallback, ImageAsset } from '../common/ImageWithFallback';

export interface HeroSectionProps {
  badge?: string;
  title?: string;
  highlight_word?: string;
  description?: string;
  primary_cta?: { label: string; href?: string };
  secondary_cta?: { label: string; href?: string };
  stats?: Array<{ value: string; label: string }>;
  assets?: ImageAsset[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title = '驚くほど簡単に、高品質な体験を。',
  highlight_word,
  description = 'あらゆるプロセスを自動化し、あなたのビジネスを次のステージへと導きます。',
  primary_cta = { label: '無料で試す', href: '#cta' },
  secondary_cta = { label: '詳しく見る', href: '#features' },
  stats = [],
  assets = [],
}) => {
  const heroAsset = assets.find((a) => a.id === 'hero_visual') || assets[0];

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#E6A817]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/5 shadow-soft mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#E6A817]" />
              <span className="text-xs font-semibold text-[#2B2B2B] tracking-wide">{badge}</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2B2B2B] tracking-tight leading-[1.15] mb-6">
            {highlight_word && title.includes(highlight_word) ? (
              <>
                {title.split(highlight_word)[0]}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2B2B2B] via-[#E6A817] to-[#2B2B2B] pb-1">
                  {highlight_word}
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#E6A817]/30 rounded-full -z-10" />
                </span>
                {title.split(highlight_word)[1]}
              </>
            ) : (
              title
            )}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#2B2B2B]/75 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {primary_cta && (
              <a
                href={primary_cta.href || '#cta'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2B2B2B] text-white font-semibold text-sm shadow-md hover:bg-black hover:shadow-float transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {primary_cta.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
            {secondary_cta && (
              <a
                href={secondary_cta.href || '#features'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#2B2B2B] font-semibold text-sm border border-black/10 shadow-soft hover:bg-gray-50 transition-all duration-200"
              >
                {secondary_cta.label}
              </a>
            )}
          </div>
        </div>

        {/* Hero Visual Area */}
        <div className="relative max-w-4xl mx-auto">
          <div className="p-2 sm:p-3 rounded-3xl bg-white/60 backdrop-blur-md border border-white/80 shadow-float">
            <ImageWithFallback
              asset={heroAsset}
              alt={title}
              className="w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-2xl"
            />
          </div>
        </div>

        {/* Social Proof Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-black/5 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B] tracking-tight">{stat.value}</span>
                <span className="text-xs sm:text-sm text-gray-500 font-medium mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
