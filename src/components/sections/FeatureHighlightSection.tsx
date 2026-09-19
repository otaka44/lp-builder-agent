import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { ImageWithFallback, ImageAsset } from '../common/ImageWithFallback';

export interface HighlightItem {
  title: string;
  description: string;
  bullets?: string[];
  asset_id?: string;
  image_position?: 'left' | 'right';
}

export interface FeatureHighlightSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  items?: HighlightItem[];
  assets?: ImageAsset[];
}

export const FeatureHighlightSection: React.FC<FeatureHighlightSectionProps> = ({
  badge = 'ハイライト',
  title = '細部までこだわり抜いた圧倒的なクオリティ',
  description = 'あらゆる制作プロセスを最適化し、成果へと直結させます。',
  items = [],
  assets = [],
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {badge && (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E6A817] bg-[#E6A817]/10 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {badge}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2B2B] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B]/70">
            {description}
          </p>
        </div>

        {/* Feature Items */}
        <div className="space-y-16 lg:space-y-24">
          {items.map((item, idx) => {
            const isImageRight = item.image_position !== 'left';
            const matchedAsset = assets.find((a) => a.id === item.asset_id) || assets[idx] || assets[0];

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isImageRight ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#E6A817]/15 text-[#E6A817] font-bold text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2B2B2B] tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#2B2B2B]/75 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {item.bullets && item.bullets.length > 0 && (
                    <div className="space-y-3">
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-sm font-medium text-[#2B2B2B]/85">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Visual Image */}
                <div
                  className={`lg:col-span-6 ${
                    isImageRight ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="p-3 bg-white rounded-3xl border border-black/5 shadow-float">
                    <ImageWithFallback
                      asset={matchedAsset}
                      alt={item.title}
                      className="w-full h-[280px] sm:h-[360px] rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSection;
