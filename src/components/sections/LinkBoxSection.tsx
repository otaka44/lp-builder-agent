import React from 'react';
import { 
  BookOpen, 
  Layers, 
  HelpCircle, 
  FileText, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { ImageWithFallback, ImageAsset } from '../common/ImageWithFallback';
import { SectionHeader } from '../common/SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Layers,
  HelpCircle,
  FileText,
  ExternalLink,
};

export interface LinkBoxItem {
  tag?: string;
  title: string;
  description: string;
  href?: string;
  button_label?: string; // 例: 「紹介ページはこちら」
  icon?: string;
  asset_id?: string;
}

export interface LinkBoxSectionProps {
  badge?: string;
  title?: string;
  highlight_word?: string;
  description?: string;
  items?: LinkBoxItem[];
  assets?: ImageAsset[];
}

export const LinkBoxSection: React.FC<LinkBoxSectionProps> = ({
  badge = '暮らしの読みもの',
  title = '暮らしに役立つラベルコンテンツ',
  highlight_word,
  description = '日々の整理整頓やギフトのアイデアなど、実践的な活用事例をご紹介します。',
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
          className="mb-14"
        />

        {/* Link Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const IconComponent = (item.icon && iconMap[item.icon]) ? iconMap[item.icon] : FileText;
            const itemAsset = assets.find((a) => a.id === item.asset_id);

            return (
              <a
                key={idx}
                href={item.href || '#'}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-3xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Eye-catch Image if present */}
                  {itemAsset ? (
                    <div className="w-full h-48 bg-[#F9F9F8] overflow-hidden border-b border-black/5">
                      <ImageWithFallback
                        asset={itemAsset}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="p-8 pb-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#E6A817] border border-amber-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E6A817] group-hover:text-white transition-all duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        {item.tag && (
                          <span className="text-xs font-bold text-[#B8820B] bg-[#E6A817]/10 px-2.5 py-1 rounded-full">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8 pt-6">
                    {itemAsset && item.tag && (
                      <span className="inline-block text-[11px] font-bold text-[#B8820B] bg-[#E6A817]/10 px-2.5 py-0.5 rounded-md mb-3">
                        {item.tag}
                      </span>
                    )}

                    <h3 className="text-xl font-bold text-[#2B2B2B] tracking-tight mb-3 group-hover:text-[#B8820B] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#2B2B2B]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 pt-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#2B2B2B] group-hover:text-[#B8820B] transition-colors pt-4 border-t border-black/5">
                    <span>{item.button_label || '紹介ページはこちら'}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LinkBoxSection;
