import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { ImageWithFallback, ImageAsset } from '../common/ImageWithFallback';

export interface TabItem {
  id: string;
  label: string;
  title: string;
  description: string;
  points?: string[];
  asset_id?: string;
}

export interface TabbedFeatureSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  tabs?: TabItem[];
  assets?: ImageAsset[];
}

export const TabbedFeatureSection: React.FC<TabbedFeatureSectionProps> = ({
  badge = '機能紹介',
  title = 'あらゆるユースケースをカバーする高機能',
  description = '必要な機能がすべて揃っており、直感的に使いこなすことができます。',
  tabs = [],
  assets = [],
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || '');

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const activeAsset = assets.find((a) => a.id === activeTab?.asset_id) || assets[0];

  if (!tabs || tabs.length === 0) return null;

  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        {/* Tab Navigation Pill */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-white shadow-soft border border-black/5 gap-1.5">
            {tabs.map((tab) => {
              const isActive = (tab.id === activeTab?.id);
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#2B2B2B] text-white shadow-sm'
                      : 'text-[#2B2B2B]/70 hover:text-[#2B2B2B] hover:bg-black/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content Display */}
        {activeTab && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/80 shadow-float">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2B2B2B] tracking-tight mb-4">
                {activeTab.title}
              </h3>
              <p className="text-base text-[#2B2B2B]/75 leading-relaxed mb-6">
                {activeTab.description}
              </p>

              {activeTab.points && activeTab.points.length > 0 && (
                <ul className="space-y-3">
                  {activeTab.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#2B2B2B]/85 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#E6A817] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-black/5 shadow-soft">
                <ImageWithFallback
                  asset={activeAsset}
                  alt={activeTab.title}
                  className="w-full h-[280px] sm:h-[380px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabbedFeatureSection;
