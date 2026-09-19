import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

export interface ImageAsset {
  id: string;
  path: string;
  aspect_ratio?: string;
  description?: string;
  ai_prompt?: string;
}

interface ImageWithFallbackProps {
  asset?: ImageAsset;
  src?: string;
  alt?: string;
  className?: string;
  fallbackKeywords?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  asset,
  src: propSrc,
  alt = 'Visual Asset',
  className = '',
  fallbackKeywords = 'technology,minimal,design',
}) => {
  const [hasError, setHasError] = useState(false);
  
  const targetSrc = propSrc || asset?.path;
  const description = asset?.description || alt;

  // If no source provided or error occurs, display an aesthetic placeholder card with gradient & details
  if (!targetSrc || hasError) {
    return (
      <div 
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 via-amber-50/40 to-slate-100 border border-black/5 shadow-soft flex flex-col items-center justify-center p-6 text-center group transition-all duration-300 hover:shadow-float ${className}`}
      >
        <div className="absolute inset-0 subtle-grid-bg opacity-70 pointer-events-none" />
        
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E6A817]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
        
        <div className="relative z-10 flex flex-col items-center max-w-sm">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center text-[#E6A817] mb-3 border border-amber-100 group-hover:scale-110 transition-transform">
            <ImageIcon className="w-6 h-6" />
          </div>
          
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-800 mb-2">
            <Sparkles className="w-3 h-3" />
            AI Asset Slot {asset?.id ? `(#${asset.id})` : ''}
          </span>
          
          <p className="text-sm font-medium text-[#2B2B2B]/80 line-clamp-2 mb-1">
            {description}
          </p>
          
          {asset?.ai_prompt && (
            <p className="text-[11px] text-gray-500 line-clamp-2 bg-white/70 px-2 py-1 rounded border border-gray-100 font-mono mt-2">
              💡 {asset.ai_prompt}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={targetSrc}
      alt={alt}
      onError={() => setHasError(true)}
      className={`rounded-2xl object-cover shadow-soft transition-all duration-300 ${className}`}
      loading="lazy"
    />
  );
};

export default ImageWithFallback;
