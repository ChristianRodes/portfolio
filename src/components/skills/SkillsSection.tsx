'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SectionLabel from '@/components/ui/section-label';

const spring = [0.22, 1, 0.36, 1] as const;
const KEYS = ['0', '1', '2'] as const;
const BULLET_KEYS = ['b0', 'b1'] as const;
const IMAGES: Record<string, string> = {
  '0': '/img/skills/bi.webp',
  '1': '/img/skills/dev.webp',
  '2': '/img/skills/pm.webp',
};

export default function SkillsSection() {
  const t = useTranslations('Skills');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-[#F9F7EB] py-20 md:py-28 border-t border-[#E2DCC8] pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10 xl:px-0">
        <SectionLabel>{t('label')}</SectionLabel>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {KEYS.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: spring, delay: index * 0.07 }}
              className="flex flex-col gap-4"
            >
              <div className="relative w-3/4 mx-auto aspect-square rounded-3xl overflow-hidden">
                <Image src={IMAGES[key]} alt={t(`items.${key}.category` as any)} fill className="object-cover" />
              </div>
              <h3 className="font-bold text-[#1F4C34] text-base text-center">
                {t(`items.${key}.category` as any)}
              </h3>
              <ul className="space-y-2">
                {BULLET_KEYS.map((bk) => (
                  <li key={bk} className="flex items-start gap-2.5 text-sm text-[#1F4C34]/90 leading-relaxed">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 mt-0.5 text-[#1F4C34]" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t(`items.${key}.${bk}` as any)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
