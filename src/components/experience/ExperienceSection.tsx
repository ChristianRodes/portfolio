'use client';

import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import SectionLabel from '@/components/ui/section-label';
import ExperienceItem from './ExperienceItem';

const KEYS = ['0', '1', '2'] as const;

export default function ExperienceSection() {
  const t = useTranslations('Experience');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-[#F9F7EB] py-20 md:py-28 border-t border-[#E2DCC8]">
      <div className="max-w-2xl mx-auto px-6 md:px-10 xl:px-0">
        <SectionLabel>{t('label')}</SectionLabel>
        <div ref={ref}>
          {KEYS.map((key, index) => (
            <ExperienceItem
              key={key}
              company={t(`items.${key}.company` as any)}
              role={t(`items.${key}.role` as any)}
              period={t(`items.${key}.period` as any)}
              bullets={(['b0', 'b1', 'b2'] as const).map(b => t(`items.${key}.${b}` as any)).filter(Boolean)}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
