'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import SectionLabel from '@/components/ui/section-label';

const spring = [0.22, 1, 0.36, 1] as const;
const KEYS = ['2', '1', '0'] as const;

export default function EducationSection() {
  const t = useTranslations('Education');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#F9F7EB] py-20 md:py-28 border-t border-[#E2DCC8]">
      <div className="max-w-2xl mx-auto px-6 md:px-10 xl:px-0">
        <SectionLabel>{t('label')}</SectionLabel>
        <div ref={ref}>
          {KEYS.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: spring, delay: index * 0.1 }}
              className="border-t border-[#E2DCC8] py-6 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <h3 className="font-bold text-[#1F4C34] text-sm">
                  {t(`items.${key}.degree` as any)}
                </h3>
                <span className="text-xs text-[#1F4C34]/60 shrink-0 tabular-nums">
                  {t(`items.${key}.period` as any)}
                </span>
              </div>
              <p className="text-sm text-[#1F4C34]/60 mt-1">
                {t(`items.${key}.school` as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
