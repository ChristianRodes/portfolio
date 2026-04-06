'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SectionLabel from '@/components/ui/section-label';

const spring = [0.22, 1, 0.36, 1] as const;
const KEYS = ['0', '1', '2'] as const;
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
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image src={IMAGES[key]} alt={t(`items.${key}.category` as any)} fill className="object-cover" />
              </div>
              <h3 className="font-bold text-[#1F4C34] text-base">
                {t(`items.${key}.category` as any)}
              </h3>
              <p className="text-sm text-[#1F4C34]/70 leading-relaxed">
                {t(`items.${key}.desc` as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
