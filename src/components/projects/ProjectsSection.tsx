'use client';

import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import SectionLabel from '@/components/ui/section-label';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const t = useTranslations('Projects');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-[#F9F7EB] py-20 md:py-28 border-t border-[#E2DCC8]">
      <div className="max-w-2xl mx-auto px-6 md:px-10 xl:px-0">
        <SectionLabel>{t('label')}</SectionLabel>
        <div ref={ref}>
          <ProjectCard
            title={t('featured.title')}
            description={t('featured.desc')}
            metric={t('featured.metric')}
            image="/img/global/pppc.webp"
            href="/projects/productpartner"
            cta={t('featured.cta')}
            index={0}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
}
