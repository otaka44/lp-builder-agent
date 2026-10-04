import React, { useEffect, useState } from 'react';
import pageData from './constants/page-structure.json';

import HeroSection from './components/sections/HeroSection';
import TabbedFeatureSection from './components/sections/TabbedFeatureSection';
import FeatureHighlightSection from './components/sections/FeatureHighlightSection';
import IconGridSection from './components/sections/IconGridSection';
import BannerSection from './components/sections/BannerSection';
import LinkBoxSection from './components/sections/LinkBoxSection';
import CTASection from './components/sections/CTASection';

import LanguageSwitcher from './components/common/LanguageSwitcher';
import LegalModal, { LegalPageType } from './components/common/LegalModal';

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
  const [locale, setLocale] = useState<'ja' | 'en'>(
    (pageData as any).i18n?.default_locale || 'ja'
  );
  const [activeLegalModal, setActiveLegalModal] = useState<LegalPageType | null>(null);

  useEffect(() => {
    if (pageData.site_metadata?.title) {
      document.title = pageData.site_metadata.title;
    }
  }, []);

  const backgroundColor = pageData.site_metadata?.theme?.background_color || '#F4F5F0';
  const legalData = (pageData as any).legal_pages;

  return (
    <div 
      className="min-h-screen transition-colors duration-300 selection:bg-[#E6A817]/20 selection:text-[#2B2B2B]" 
      style={{ backgroundColor }}
    >
      {/* Header / Brand Nav */}
      <header className="sticky top-0 z-40 bg-[#F4F5F0]/80 backdrop-blur-md border-b border-black/5">
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
            <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
            <a
              href="#cta"
              className="px-4 py-2 rounded-full bg-[#2B2B2B] text-white text-xs font-semibold hover:bg-black transition-colors"
            >
              {locale === 'ja' ? '無料ではじめる' : 'Get Started Free'}
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
      <footer className="py-12 border-t border-black/5 text-center text-xs text-gray-500">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {/* Mandatory Legal & Support Links */}
          <nav aria-label="Legal and Support" className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600 font-medium">
            <button
              type="button"
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
            >
              {locale === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
            </button>
            <span className="text-gray-300">・</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
            >
              {locale === 'ja' ? '利用規約' : 'Terms of Service'}
            </button>
            <span className="text-gray-300">・</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('support')}
              className="hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
            >
              {locale === 'ja' ? 'サポート・FAQ' : 'Support & FAQ'}
            </button>
          </nav>

          <p>© {new Date().getFullYear()} {pageData.site_metadata?.title?.split('｜')[0] || 'LP Builder'}. All rights reserved.</p>
        </div>
      </footer>

      {/* Legal / Support Modal */}
      <LegalModal
        isOpen={!!activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
        type={activeLegalModal}
        locale={locale}
        data={legalData}
      />
    </div>
  );
}
