import React from 'react';
import { 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Users, 
  Layers, 
  Smartphone, 
  CheckCircle, 
  Star,
  Type,
  Image as ImageIcon,
  Share2,
  Bookmark,
  LucideIcon
} from 'lucide-react';
import { ImageAsset } from '../common/ImageWithFallback';
import { SectionHeader } from '../common/SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Sparkles,
  ShieldCheck,
  Clock,
  TrendingUp,
  Users,
  Layers,
  Smartphone,
  CheckCircle,
  Star,
  Type,
  ImageIcon,
  Share2,
  Bookmark,
};

export interface IconGridItem {
  icon?: string;
  badge?: string;
  title: string;
  description: string;
  note?: string; // 例: 「※要会員登録」「※一部有料」
}

export interface IconGridSectionProps {
  badge?: string;
  title?: string;
  highlight_word?: string;
  description?: string;
  columns?: number; // 2, 3, 4
  items?: IconGridItem[];
  assets?: ImageAsset[];
}

export const IconGridSection: React.FC<IconGridSectionProps> = ({
  badge = 'その他の機能',
  title = '日々のラベル作りを快適にする多彩な機能',
  highlight_word,
  description = 'ちょっとした工夫と充実の機能で、毎日の暮らしがもっとスムーズに。',
  columns = 3,
  items = [],
}) => {
  if (!items || items.length === 0) return null;

  const gridColsClass = 
    columns === 4 
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
      : columns === 2 
      ? 'grid-cols-1 md:grid-cols-2' 
      : 'grid-cols-1 md:grid-cols-3';

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

        {/* Grid (2x2, 3x3, etc.) */}
        <div className={`grid ${gridColsClass} gap-6 sm:gap-8`}>
          {items.map((item, idx) => {
            const IconComponent = (item.icon && iconMap[item.icon]) ? iconMap[item.icon] : Sparkles;

            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#E6A817] border border-amber-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E6A817] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="text-[11px] font-bold text-[#B8820B] bg-[#E6A817]/10 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#2B2B2B] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-[#2B2B2B]/75 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {item.note && (
                  <p className="text-xs text-gray-500 pt-3 border-t border-black/5">
                    {item.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IconGridSection;
