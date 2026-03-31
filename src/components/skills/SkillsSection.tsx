'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import SectionLabel from '@/components/ui/section-label';

const spring = [0.22, 1, 0.36, 1] as const;
const KEYS = ['0', '1', '2', '3'] as const;

export default function SkillsSection() {
  const t = useTranslations('Skills');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-[#F9F7EB] py-20 md:py-28 border-t border-[#E2DCC8] pb-32">
      <div className="max-w-2xl mx-auto px-6 md:px-10 xl:px-0">
        <SectionLabel>{t('label')}</SectionLabel>
        <div ref={ref}>
          {KEYS.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: spring, delay: index * 0.07 }}
              className="border-t border-[#E2DCC8] py-5 first:border-t-0 first:pt-0"
            >
              <p className="text-sm text-[#1F4C34] leading-relaxed">
                <span className="font-bold text-[#1F4C34]">
                  {t(`items.${key}.category` as any)}
                </span>{' '}
                {t(`items.${key}.desc` as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
