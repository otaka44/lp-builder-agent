import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageAsset } from '../common/ImageWithFallback';

export interface BannerSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  cta?: { label: string; href?: string };
  assets?: ImageAsset[];
}

export const BannerSection: React.FC<BannerSectionProps> = ({
  badge = 'SPECIAL OFFER',
  title = '今すぐ制作フローを革新しませんか？',
  description = '期間限定で全機能を無料でお試しいただけます。',
  cta = { label: '無料で試してみる', href: '#cta' },
}) => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2B2B2B] via-[#383838] to-[#2B2B2B] text-white p-8 sm:p-12 md:p-14 shadow-float border border-white/10">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6A817]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute inset-0 subtle-grid-bg opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              {badge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E6A817] text-xs font-bold mb-4 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{badge}</span>
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">
                {title}
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>

            {cta && (
              <div className="shrink-0">
                <a
                  href={cta.href || '#cta'}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E6A817] text-[#2B2B2B] font-bold text-sm shadow-glow hover:bg-amber-400 hover:scale-105 transition-all duration-200"
                >
                  {cta.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
