'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const spring = [0.22, 1, 0.36, 1] as const;

export default function FeaturedProjectSection() {
  const t = useTranslations('FeaturedProject');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#F9F7EB] border-t border-[#E2DCC8]">

      {/* ── Hero image ── */}
      <div className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/img/global/ppheader.webp"
          alt="ProductPartner Web"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1c]/80 via-[#0d2b1c]/20 to-transparent" />

        {/* Overlay text */}
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-10 xl:px-20 pb-10 md:pb-14">
          <span className="block text-xs tracking-[0.25em] uppercase text-white/50 mb-3">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
            {t('title')}
          </h2>
        </div>
      </div>

      {/* ── Content ── */}
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 md:px-10 xl:px-0 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: meta + description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: spring }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#1F4C34]/50 mb-4">
              {t('about-label')}
            </p>
            <p className="text-[#1F4C34] text-base md:text-lg leading-relaxed mb-8">
              {t('desc')}
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs font-medium text-[#1F4C34] border border-[#1F4C34]/25 px-3 py-1.5 rounded-full">
                {t('tag1')}
              </span>
              <span className="text-xs font-medium text-[#1F4C34] border border-[#1F4C34]/25 px-3 py-1.5 rounded-full">
                {t('tag2')}
              </span>
            </div>
          </motion.div>

          {/* Right: screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: spring, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/img/global/pp.webp"
                alt="ProductPartner Web – vista principal"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/img/global/pp2.webp"
                  alt="ProductPartner Web – servicios"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/img/global/pp3.webp"
                  alt="ProductPartner Web – casos de éxito"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
