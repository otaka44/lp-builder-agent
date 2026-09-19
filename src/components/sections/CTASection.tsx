import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ImageWithFallback, ImageAsset } from '../common/ImageWithFallback';
import { AppStoreButtons } from '../common/AppStoreButtons';

export interface CTASectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  app_store_url?: string;
  google_play_url?: string;
  note?: string;
  primary_cta?: { label: string; href?: string };
  secondary_cta?: { label: string; href?: string };
  guarantees?: string[];
  app_icon_asset_id?: string;
  assets?: ImageAsset[];
}

export const CTASection: React.FC<CTASectionProps> = ({
  badge = '今すぐダウンロード',
  title = '日々の暮らしを、あなたらしく彩る体験を',
  subtitle,
  description = '「Hello」アプリはApp Store、Google Playから無料でダウンロードいただけます。',
  app_store_url,
  google_play_url,
  note = '※iOS 14.0以降 / Android 9.0以降対応',
  primary_cta,
  secondary_cta,
  guarantees = [
    'アプリ本体のダウンロード無料',
    '最新テンプレートを随時配信',
    '安心の国内サポート'
  ],
  app_icon_asset_id,
  assets = [],
}) => {
  const hasAppStore = Boolean(app_store_url || google_play_url);
  const iconAsset = assets.find((a) => a.id === app_icon_asset_id);

  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2B2B2B] text-white p-8 sm:p-14 md:p-16 text-center shadow-float border border-white/10">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E6A817]/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 subtle-grid-bg opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* App Icon if available */}
            {iconAsset && (
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                  <ImageWithFallback
                    asset={iconAsset}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {badge && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E6A817] text-xs font-bold mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{badge}</span>
              </div>
            )}

            {subtitle && (
              <p className="text-xs sm:text-sm font-bold text-[#E6A817] tracking-wider uppercase mb-2">
                {subtitle}
              </p>
            )}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white leading-tight">
              {title}
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10">
              {description}
            </p>

            {/* App Store Buttons or Standard CTA */}
            {hasAppStore ? (
              <AppStoreButtons
                app_store_url={app_store_url}
                google_play_url={google_play_url}
                note={note}
                align="center"
                theme="light"
                className="mb-10 text-white/70"
              />
            ) : (
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
            )}

            {/* Guarantees / Badges */}
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
