import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ImageAsset } from '../common/ImageWithFallback';

export interface CTASectionProps {
  badge?: string;
  title?: string;
  description?: string;
  primary_cta?: { label: string; href?: string };
  secondary_cta?: { label: string; href?: string };
  guarantees?: string[];
  assets?: ImageAsset[];
}

export const CTASection: React.FC<CTASectionProps> = ({
  badge = 'START NOW',
  title = 'あなたのビジネスの魅力を、最短で世界に届けよう',
  description = 'クレジットカード登録不要。わずか数分であなただけのLPが完成します。',
  primary_cta = { label: '無料でLPを作成する', href: '#start' },
  secondary_cta = { label: 'デモを試す', href: '#demo' },
  guarantees = [
    '14日間無料トライアル',
    'いつでもキャンセル可能',
    '専門スタッフによるチャットサポート'
  ],
}) => {
  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2B2B2B] text-white p-8 sm:p-14 md:p-16 text-center shadow-float border border-white/10">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E6A817]/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 subtle-grid-bg opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E6A817] text-xs font-bold mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{badge}</span>
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white leading-tight">
              {title}
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10">
              {description}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              {primary_cta && (
                <a
                  href={primary_cta.href || '#'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E6A817] text-[#2B2B2B] font-bold text-sm shadow-glow hover:bg-amber-400 hover:scale-105 transition-all duration-200"
                >
                  {primary_cta.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
              {secondary_cta && (
                <a
                  href={secondary_cta.href || '#'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  {secondary_cta.label}
                </a>
              )}
            </div>

            {/* Guarantees */}
            {guarantees && guarantees.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-8 border-t border-white/10 text-xs sm:text-sm text-white/70">
                {guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E6A817]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
