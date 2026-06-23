'use client';

import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import SectionLabel from '@/components/ui/section-label';

const spring = [0.22, 1, 0.36, 1] as const;

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  cta: string;
  href: string;
  index: number;
  inView: boolean;
}

function CaseStudyCard({ title, description, image, cta, href, index, inView }: CaseStudyCardProps) {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: spring, delay: index * 0.12 }}
        className="flex flex-col cursor-pointer group"
      >
        <div className="relative w-full aspect-video bg-[#F0EDD8] rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04] drop-shadow-sm"
          />
        </div>
        <div className="pt-2 md:pt-4 flex flex-col items-center gap-1 md:gap-2 text-center">
          <h3 className="font-bold text-[#1F4C34] text-base">
            {title.split('|')[0]}
            {title.includes('|') && <span className="font-normal">| {title.split('|')[1].trim()}</span>}
          </h3>
          <p className="text-sm text-[#1F4C34]/70 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ProjectsSection() {
  const t = useTranslations('Projects');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-[#F9F7EB] py-12 md:py-16 border-t border-[#E2DCC8]">
      <div className="max-w-2xl mx-auto px-6 md:px-10 xl:px-0">
        <SectionLabel>{t('label')}</SectionLabel>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <CaseStudyCard
            title={t('featured.title')}
            description={t('featured.desc')}
            image="/img/global/pppc.webp"
            cta={t('featured.cta')}
            href="/projects/productpartner"
            index={0}
            inView={inView}
          />
          <CaseStudyCard
            title={t('golfclass.title')}
            description={t('golfclass.desc')}
            image="/img/global/gcpc.webp"
            cta={t('golfclass.cta')}
            href="/projects/golfclass"
            index={1}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
}
