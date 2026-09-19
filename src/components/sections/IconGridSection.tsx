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
  LucideIcon
} from 'lucide-react';
import { ImageAsset } from '../common/ImageWithFallback';

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
};

export interface IconGridItem {
  icon?: string;
  title: string;
  description: string;
}

export interface IconGridSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  columns?: number;
  items?: IconGridItem[];
  assets?: ImageAsset[];
}

export const IconGridSection: React.FC<IconGridSectionProps> = ({
  badge = 'メリット',
  title = '選ばれ続ける3つの理由',
  description = 'あらゆる規模のチームやプロジェクトで価値を発揮します。',
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

        {/* Grid */}
        <div className={`grid ${gridColsClass} gap-6 sm:gap-8`}>
          {items.map((item, idx) => {
            const IconComponent = (item.icon && iconMap[item.icon]) ? iconMap[item.icon] : Sparkles;

            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#E6A817] border border-amber-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E6A817] group-hover:text-white transition-all duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#2B2B2B] tracking-tight mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#2B2B2B]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IconGridSection;
