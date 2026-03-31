'use client';

import { useTranslations } from 'next-intl';

export default function FooterSection() {
  const t = useTranslations('Footer');

  return (
    <>
      {/* CV download strip */}
      <div className="bg-[#F9F7EB] py-12 border-t border-[#E2DCC8] flex justify-center">
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 bg-[#1F4C34] text-[#F9F7EB] text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#1a3f2b] transition-colors"
        >
          {t('cv-button')}
        </a>
      </div>

      {/* Dark footer */}
      <footer className="bg-[#1F4C34] py-16 px-6">
        <div className="max-w-2xl mx-auto md:px-10 xl:px-0 space-y-10">
          {/* Location */}
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-[#F9F7EB]/50 mb-2">
              {t('location-label')}
            </p>
            <p className="text-lg font-bold tracking-widest uppercase text-[#F9F7EB]">
              {t('location-value')}
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-[#F9F7EB]/50 mb-2">
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
            className="text-xs tracking-[0.15em] uppercase text-[#F9F7EB]/50 hover:text-[#F9F7EB] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ChristianRodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] uppercase text-[#F9F7EB]/50 hover:text-[#F9F7EB] transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
