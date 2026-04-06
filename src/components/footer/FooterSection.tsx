'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function FooterSection({ backButton = false }: { backButton?: boolean }) {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const cvHref = locale === 'es' ? '/cvesp.pdf' : '/cveng.pdf';

  return (
    <>
      {/* CV download or Back button */}
      <div className="bg-[#F9F7EB] py-12 border-t border-[#E2DCC8] flex justify-center">
        {backButton ? (
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1F4C34] text-[#F9F7EB] text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#1a3f2b] transition-colors"
          >
            ← {t('back-button')}
          </Link>
        ) : (
          <a
            href={cvHref}
            download
            className="inline-flex items-center gap-2 bg-[#1F4C34] text-[#F9F7EB] text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#1a3f2b] transition-colors"
          >
            {t('cv-button')}
          </a>
        )}
      </div>

      {/* Dark footer */}
      <footer id="contact" className="bg-[#1F4C34] py-16 px-6">
        <div className="max-w-2xl mx-auto md:px-10 xl:px-0">
          {/* Contact */}
          <div className="text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-[#F9F7EB]/50 mb-2">
              {t('contact-label')}
            </p>
            <a
              href={`mailto:${t('contact-email')}`}
              className="text-base font-bold tracking-widest uppercase text-[#F9F7EB] hover:text-[#F9F7EB]/70 transition-colors"
            >
              {t('contact-email')}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-2xl mx-auto md:px-10 xl:px-0 mt-14 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/christian-rodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-[0.15em] uppercase text-[#F9F7EB]/50 hover:text-[#F9F7EB] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ChristianRodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-[0.15em] uppercase text-[#F9F7EB]/50 hover:text-[#F9F7EB] transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
