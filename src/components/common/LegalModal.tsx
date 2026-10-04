import React from 'react';
import { X, Mail, ShieldCheck, FileText, HelpCircle } from 'lucide-react';

export type LegalPageType = 'privacy' | 'terms' | 'support';

interface LegalSection {
  heading: { ja: string; en: string };
  body: { ja: string; en: string };
}

interface FaqItem {
  question: { ja: string; en: string };
  answer: { ja: string; en: string };
}

interface LegalPagesData {
  privacy?: {
    title: { ja: string; en: string };
    last_updated?: string;
    sections?: LegalSection[];
  };
  terms?: {
    title: { ja: string; en: string };
    last_updated?: string;
    sections?: LegalSection[];
  };
  support?: {
    title: { ja: string; en: string };
    email?: string;
    faq?: FaqItem[];
  };
}

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: LegalPageType | null;
  locale: 'ja' | 'en';
  data?: LegalPagesData;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  type,
  locale,
  data,
}) => {
  if (!isOpen || !type || !data) return null;

  const currentData = data[type];
  if (!currentData) return null;

  const getTitle = () => {
    return currentData.title?.[locale] || (type === 'privacy' ? (locale === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy') : type === 'terms' ? (locale === 'ja' ? '利用規約' : 'Terms of Service') : (locale === 'ja' ? 'サポート・FAQ' : 'Support & FAQ'));
  };

  const getIcon = () => {
    switch (type) {
      case 'privacy':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'terms':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'support':
        return <HelpCircle className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col border border-black/10 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-2.5">
            {getIcon()}
            <h2 id="legal-modal-title" className="text-lg font-bold text-gray-900">
              {getTitle()}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-700 leading-relaxed">
          {type === 'support' ? (
            <div className="space-y-6">
              {data.support?.email && (
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-700 shrink-0" />
                  <div>
                    <p className="text-xs text-amber-800 font-semibold">
                      {locale === 'ja' ? 'お問い合わせ窓口' : 'Customer Support Email'}
                    </p>
                    <a
                      href={`mailto:${data.support.email}`}
                      className="text-amber-900 font-medium hover:underline text-sm"
                    >
                      {data.support.email}
                    </a>
                  </div>
                </div>
              )}

              {data.support?.faq && data.support.faq.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-base">
                    {locale === 'ja' ? 'よくあるご質問 (FAQ)' : 'Frequently Asked Questions'}
                  </h3>
                  <div className="space-y-3">
                    {data.support.faq.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1.5">
                        <p className="font-semibold text-gray-900 flex items-start gap-2">
                          <span className="text-amber-600 font-bold">Q.</span>
                          <span>{item.question[locale]}</span>
                        </p>
                        <p className="text-gray-600 pl-6 text-xs sm:text-sm">
                          {item.answer[locale]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {(currentData as any).last_updated && (
                <p className="text-xs text-gray-400">
                  {locale === 'ja' ? `最終改定日: ${(currentData as any).last_updated}` : `Last updated: ${(currentData as any).last_updated}`}
                </p>
              )}

              {(currentData as any).sections?.map((sec: LegalSection, idx: number) => (
                <section key={idx} className="space-y-2">
                  <h3 className="font-bold text-gray-900 text-base">
                    {sec.heading[locale]}
                  </h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                    {sec.body[locale]}
                  </p>
                </section>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-black transition-colors"
          >
            {locale === 'ja' ? '閉じる' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
