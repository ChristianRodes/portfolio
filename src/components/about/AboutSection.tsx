'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import SectionLabel from '@/components/ui/section-label';

const spring = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const t = useTranslations('About');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const bold = (chunks: React.ReactNode) => (
    <strong className="font-bold text-[#1F4C34]">{chunks}</strong>
  );

  return (
    <section className="bg-[#F9F7EB] py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 md:px-10 xl:px-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: spring }}
        >
          <SectionLabel>{t('label')}</SectionLabel>
          <div className="space-y-5 text-[#1F4C34] text-base leading-relaxed">
            <p>{t.rich('p1', { b: bold })}</p>
            <p>{t.rich('p2', { b: bold })}</p>
            <p>{t.rich('p3', { b: bold })}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
