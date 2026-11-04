import { useLanguage } from '@/i18n/LanguageProvider';
import WhatsAppIcon from './WhatsAppIcon';

const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  const message = t('Olá, Gabriel! Vi seu portfólio e gostaria de conversar sobre um projeto.');

  return (
    <a
      href={`https://wa.me/5581982071987?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('Falar pelo WhatsApp')}
      title={t('Falar pelo WhatsApp')}
      className="fixed z-40 flex h-14 w-14 items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366] text-white shadow-lg shadow-emerald-950/25 transition duration-200 hover:-translate-y-1 hover:bg-[#1DA851] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transform-none"
      style={{
        right: 'max(1.25rem, env(safe-area-inset-right))',
        bottom: 'calc(1.25rem + env(safe-area-inset-bottom))',
      }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsApp;
