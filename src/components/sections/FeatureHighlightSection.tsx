import React from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback, ImageAsset } from '../common/ImageWithFallback';
import { SectionHeader } from '../common/SectionHeader';

export interface SceneCard {
  tag?: string;
  title: string;
  description: string;
  asset_id?: string;
  photo_asset_id?: string;
}

export interface HighlightItem {
  tag?: string;
  title: string;
  catchphrase?: string;
  description: string;
  bullets?: string[];
  asset_id?: string;
  image_position?: 'left' | 'right';
  scenes?: SceneCard[];
}

export interface FeatureHighlightSectionProps {
  badge?: string;
  title?: string;
  highlight_word?: string;
  description?: string;
  items?: HighlightItem[];
  assets?: ImageAsset[];
}

export const FeatureHighlightSection: React.FC<FeatureHighlightSectionProps> = ({
  badge = '注目機能',
  title = '日々の生活を支える 便利なフォーカス機能',
  highlight_word,
  description = '用途に合わせて活用することで、暮らしと仕事が驚くほど整います。',
  items = [],
  assets = [],
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge={badge}
          title={title}
          highlight_word={highlight_word}
          description={description}
          centered={true}
          className="mb-16 md:mb-20"
        />

        {/* Feature Items */}
        <div className="space-y-20 lg:space-y-28">
          {items.map((item, idx) => {
            const isImageRight = item.image_position !== 'left';
            const matchedAsset = assets.find((a) => a.id === item.asset_id) || assets[idx] || assets[0];

            return (
              <div key={idx} className="space-y-10">
                {/* Main Feature Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Text Content */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isImageRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="w-8 h-8 rounded-full bg-[#E6A817]/15 text-[#B8820B] font-mono font-bold text-sm flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      {item.tag && (
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-black/5 px-3 py-1 rounded-full">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {item.catchphrase && (
                      <p className="text-sm font-bold text-[#E6A817] tracking-wider mb-2">
                        {item.catchphrase}
                      </p>
                    )}

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B] tracking-tight mb-4 leading-tight">
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
                        className="w-full h-[280px] sm:h-[380px] rounded-2xl object-contain bg-[#F9F9F8]"
                      />
                    </div>
                  </div>
                </div>

                {/* Sub Scene Cards (利用シーン別カード: 防災備蓄、ゴミ回収など) */}
                {item.scenes && item.scenes.length > 0 && (
                  <div className="pt-6 border-t border-black/5">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6 text-center lg:text-left">
                      主な利用シーン・実例
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {item.scenes.map((scene, sIdx) => {
                        const sceneAsset = assets.find((a) => a.id === scene.asset_id);
                        return (
                          <div
                            key={sIdx}
                            className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-soft flex flex-col justify-between"
                          >
                            <div>
                              {sceneAsset && (
                                <div className="mb-4 rounded-xl overflow-hidden bg-[#F9F9F8]">
                                  <ImageWithFallback
                                    asset={sceneAsset}
                                    alt={scene.title}
                                    className="w-full h-36 object-cover"
                                  />
                                </div>
                              )}
                              {scene.tag && (
                                <span className="inline-block text-[11px] font-bold text-[#B8820B] bg-[#E6A817]/10 px-2.5 py-0.5 rounded-md mb-2">
                                  {scene.tag}
                                </span>
                              )}
                              <h5 className="text-base font-bold text-[#2B2B2B] mb-2">
                                {scene.title}
                              </h5>
                              <p className="text-xs sm:text-sm text-[#2B2B2B]/70 leading-relaxed">
                                {scene.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSection;
