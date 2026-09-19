import React from 'react';

export interface AppStoreLinks {
  ios?: string;
  android?: string;
}

export interface AppStoreButtonsProps {
  app_store_url?: string;
  google_play_url?: string;
  note?: string;
  theme?: 'dark' | 'light' | 'outline';
  align?: 'center' | 'left' | 'right';
  className?: string;
}

// Apple Icon SVG
const AppleIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.02.62-2.67 1.37-.58.66-1.08 1.73-.95 2.76 1.03.08 2.08-.53 2.7-1.28z" />
  </svg>
);

// Google Play Icon SVG
const GooglePlayIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.396-.61-.98-.61-1.686V3.5c0-.706.242-1.29.61-1.686zm11.597 11.598l2.586-2.586-11.75-6.784 9.164 9.37zm2.586-4.824l-2.586-2.586-9.164 9.37 11.75-6.784zm1.383 1.977l-1.08-.624-2.062 2.062 2.062 2.062 1.08-.624c.723-.418.723-1.458 0-1.876z" />
  </svg>
);

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  app_store_url = '#',
  google_play_url = '#',
  note = '※iOS 14.0以降 / Android 9.0以降対応',
  theme = 'dark',
  align = 'center',
  className = '',
}) => {
  const getButtonClass = () => {
    switch (theme) {
      case 'light':
        return 'bg-white text-[#2B2B2B] hover:bg-gray-100 border border-black/10 shadow-soft';
      case 'outline':
        return 'bg-transparent text-white border border-white/30 hover:bg-white/10';
      case 'dark':
      default:
        return 'bg-[#2B2B2B] text-white hover:bg-black border border-black/10 shadow-md';
    }
  };

  const alignClass =
    align === 'left'
      ? 'items-start text-left'
      : align === 'right'
      ? 'items-end text-right'
      : 'items-center text-center';

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {/* Store Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3.5">
        {/* App Store Button */}
        {app_store_url && (
          <a
            href={app_store_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl transition-all duration-200 transform hover:-translate-y-0.5 ${getButtonClass()}`}
          >
            <AppleIcon className="w-6 h-6 shrink-0" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] font-medium opacity-80 uppercase tracking-wider">
                Download on the
              </span>
              <span className="text-sm font-bold tracking-tight mt-0.5">
                App Store
              </span>
            </div>
          </a>
        )}

        {/* Google Play Button */}
        {google_play_url && (
          <a
            href={google_play_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl transition-all duration-200 transform hover:-translate-y-0.5 ${getButtonClass()}`}
          >
            <GooglePlayIcon className="w-5 h-5 shrink-0" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] font-medium opacity-80 uppercase tracking-wider">
                GET IT ON
              </span>
              <span className="text-sm font-bold tracking-tight mt-0.5">
                Google Play
              </span>
            </div>
          </a>
        )}
      </div>

      {/* Note / Disclaimer Text */}
      {note && (
        <p className="mt-3.5 text-xs text-gray-500 max-w-md leading-normal">
          {note}
        </p>
      )}
    </div>
  );
};

export default AppStoreButtons;
