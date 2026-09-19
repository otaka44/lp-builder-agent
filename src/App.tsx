import React, { useEffect } from 'react';
import pageData from './constants/page-structure.json';

import HeroSection from './components/sections/HeroSection';
import TabbedFeatureSection from './components/sections/TabbedFeatureSection';
import FeatureHighlightSection from './components/sections/FeatureHighlightSection';
import IconGridSection from './components/sections/IconGridSection';
import BannerSection from './components/sections/BannerSection';
import LinkBoxSection from './components/sections/LinkBoxSection';
import CTASection from './components/sections/CTASection';

const componentMap: Record<string, React.FC<any>> = {
  Hero: HeroSection,
  TabbedFeature: TabbedFeatureSection,
  FeatureHighlight: FeatureHighlightSection,
  IconGrid: IconGridSection,
  Banner: BannerSection,
  LinkBox: LinkBoxSection,
  CTA: CTASection,
};

export default function App() {
  useEffect(() => {
    if (pageData.site_metadata?.title) {
      document.title = pageData.site_metadata.title;
    }
  }, []);

  const backgroundColor = pageData.site_metadata?.theme?.background_color || '#F4F5F0';

  return (
    <div 
      className="min-h-screen transition-colors duration-300 selection:bg-[#E6A817]/20 selection:text-[#2B2B2B]" 
      style={{ backgroundColor }}
    >
      {/* Header / Brand Nav */}
      <header className="sticky top-0 z-50 bg-[#F4F5F0]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#2B2B2B] text-[#E6A817] font-extrabold flex items-center justify-center text-sm shadow-sm">
              LP
            </div>
            <span className="font-extrabold text-base tracking-tight text-[#2B2B2B]">
              {pageData.site_metadata?.title?.split('｜')[0] || 'LP Builder Agent'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="px-4 py-2 rounded-full bg-[#2B2B2B] text-white text-xs font-semibold hover:bg-black transition-colors"
            >
              無料ではじめる
            </a>
          </div>
        </div>
      </header>

      {/* Main Dynamic Sections */}
      <main>
        {pageData.sections.map((section) => {
          const Component = componentMap[section.type];
          if (!Component) {
            console.warn(`[LP Builder] Unrecognized section type: ${section.type}`);
            return null;
          }
          return (
            <Component 
              key={section.id} 
              {...section.props} 
              assets={section.required_assets} 
            />
          );
        })}
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-black/5 text-center text-xs text-gray-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} {pageData.site_metadata?.title?.split('｜')[0] || 'LP Builder'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
