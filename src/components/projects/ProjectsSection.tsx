'use client';

import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import SectionLabel from '@/components/ui/section-label';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  { key: '0', image: '/img/logos/edesk-logo-grayscale.webp' },
  { key: '1', image: '/img/logos/okadoc-logo-grayscale.webp' },
  { key: '2', image: '/img/logos/airfocus-logo-grayscale.webp' },
] as const;

export default function ProjectsSection() {
  const t = useTranslations('Projects');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-[#F9F7EB] py-20 md:py-28 border-t border-[#E2DCC8]">
      <div className="max-w-2xl mx-auto px-6 md:px-10 xl:px-0">
        <SectionLabel>{t('label')}</SectionLabel>
        <div ref={ref}>
          {PROJECTS.map(({ key, image }, index) => (
            <ProjectCard
              key={key}
              title={t(`items.${key}.title` as any)}
              description={t(`items.${key}.desc` as any)}
              metric={t(`items.${key}.metric` as any)}
              image={image}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
