import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback, ImageAsset } from '../common/ImageWithFallback';
import { SectionHeader } from '../common/SectionHeader';

export interface TabItem {
  id: string;
  tab_number?: string;
  label: string;
  title: string;
  catchphrase?: string;
  description: string;
  points?: string[];
  asset_id?: string;
}

export interface TabbedFeatureSectionProps {
  badge?: string;
  title?: string;
  highlight_word?: string;
  description?: string;
  tabs?: TabItem[];
  assets?: ImageAsset[];
}

export const TabbedFeatureSection: React.FC<TabbedFeatureSectionProps> = ({
  badge = '機能紹介',
  title = '使い方に合わせて選べる 3つの作成方法',
  highlight_word,
  description = '用途やこだわりに合わせて、最適な作成アプローチを選べます。',
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
        {/* Section Header */}
        <SectionHeader
          badge={badge}
          title={title}
          highlight_word={highlight_word}
          description={description}
          centered={true}
          className="mb-12"
        />

        {/* Tab Navigation with numbered buttons (01, 02, 03...) */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-2 rounded-2xl bg-white/90 backdrop-blur-md shadow-soft border border-black/5 gap-2">
            {tabs.map((tab, idx) => {
              const isActive = (tab.id === activeTab?.id);
              const tabNum = tab.tab_number || `0${idx + 1}`;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#2B2B2B] text-white shadow-md'
                      : 'text-[#2B2B2B]/70 hover:text-[#2B2B2B] hover:bg-black/5'
                  }`}
                >
                  <span
                    className={`text-xs px-2 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-[#E6A817] text-[#2B2B2B]' : 'bg-black/5 text-[#2B2B2B]/60'
                    }`}
                  >
                    {tabNum}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content Display Card */}
        {activeTab && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-12 border border-white/80 shadow-float transition-all duration-300">
            <div className="lg:col-span-5 flex flex-col justify-center">
              {activeTab.catchphrase && (
                <p className="text-sm font-bold text-[#E6A817] uppercase tracking-wider mb-2">
                  {activeTab.catchphrase}
                </p>
              )}

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B] tracking-tight mb-4 leading-tight">
                {activeTab.title}
              </h3>

              <p className="text-base text-[#2B2B2B]/75 leading-relaxed mb-6 font-normal">
                {activeTab.description}
              </p>

              {activeTab.points && activeTab.points.length > 0 && (
                <ul className="space-y-3 pt-2">
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
              <div className="p-2 sm:p-3 rounded-2xl bg-white border border-black/5 shadow-soft overflow-hidden">
                <ImageWithFallback
                  asset={activeAsset}
                  alt={activeTab.title}
                  className="w-full h-[280px] sm:h-[380px] md:h-[420px] rounded-xl object-contain bg-[#F9F9F8]"
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
