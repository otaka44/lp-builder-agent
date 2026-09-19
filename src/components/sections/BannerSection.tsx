import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback, ImageAsset } from '../common/ImageWithFallback';

export interface BannerSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: { label: string; href?: string };
  asset_id?: string;
  assets?: ImageAsset[];
}

export const BannerSection: React.FC<BannerSectionProps> = ({
  badge = '豊富なテンプレート',
  title = 'ライフスタイルに合わせて選べる多彩なデザイン',
  subtitle,
  description = '日々の暮らしになじむシンプルなものから、ギフトを華やかに彩る特別なデザインまで。',
  cta = { label: 'テンプレートを見る', href: '#templates' },
  asset_id,
  assets = [],
}) => {
  const bannerAsset = assets.find((a) => a.id === asset_id) || assets[0];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2B2B2B] via-[#383838] to-[#2B2B2B] text-white p-8 sm:p-12 md:p-16 shadow-float border border-white/10">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6A817]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute inset-0 subtle-grid-bg opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className={`${bannerAsset ? 'lg:col-span-7' : 'lg:col-span-8'} text-center lg:text-left`}>
              {badge && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E6A817] text-xs font-bold mb-4 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{badge}</span>
                </div>
              )}
              
              {subtitle && (
                <p className="text-xs sm:text-sm font-bold text-[#E6A817] tracking-wider uppercase mb-2">
                  {subtitle}
                </p>
              )}

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white leading-tight">
                {title}
              </h2>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                {description}
              </p>

              {cta && (
                <div>
                  <a
                    href={cta.href || '#cta'}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E6A817] text-[#2B2B2B] font-bold text-sm shadow-glow hover:bg-amber-400 hover:scale-105 transition-all duration-200"
                  >
                    {cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {bannerAsset && (
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                  <ImageWithFallback
                    asset={bannerAsset}
                    alt={title}
                    className="w-full h-56 sm:h-72 object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
