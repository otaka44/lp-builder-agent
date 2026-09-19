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
import { ImageAsset } from '../common/ImageWithFallback';

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
  icon?: string;
}

export interface LinkBoxSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  items?: LinkBoxItem[];
  assets?: ImageAsset[];
}

export const LinkBoxSection: React.FC<LinkBoxSectionProps> = ({
  badge = 'リソース',
  title = '導入をサポートする各種ドキュメント',
  description = 'スムーズな導入と運用のためのガイド・ナレッジを用意しています。',
  items = [],
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
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

        {/* Link Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const IconComponent = (item.icon && iconMap[item.icon]) ? iconMap[item.icon] : FileText;

            return (
              <a
                key={idx}
                href={item.href || '#'}
                className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#E6A817] border border-amber-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E6A817] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {item.tag && (
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#2B2B2B] tracking-tight mb-3 group-hover:text-[#E6A817] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#2B2B2B]/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2B2B2B] group-hover:text-[#E6A817] transition-colors pt-4 border-t border-black/5">
                  <span>詳細を見る</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
