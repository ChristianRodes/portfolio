'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FooterSection from '@/components/footer/FooterSection';

const spring = [0.22, 1, 0.36, 1] as const;

const TECH_STACK = [
  'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Vercel',
];

function TechCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0 w-32">
      <div className="w-20 h-20 rounded-2xl bg-[#1F4C34]" />
      <span className="text-xs font-medium text-[#1F4C34]/70 tracking-wide">{name}</span>
    </div>
  );
}

function DeliveryRow({
  title,
  bullets,
  reverse,
  index,
  inView,
}: {
  title: string;
  bullets: string[];
  reverse?: boolean;
  index: number;
  inView: boolean;
}) {
  const imgPlaceholder = (
    <div className="w-full aspect-[4/3] rounded-2xl bg-[#1F4C34] shrink-0" />
  );

  const content = (
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-[#1F4C34] mb-4">{title}</h3>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#1F4C34]/70 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F4C34]/40 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: spring, delay: index * 0.15 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      {reverse ? (
        <>
          {content}
          {imgPlaceholder}
        </>
      ) : (
        <>
          {imgPlaceholder}
          {content}
        </>
      )}
    </motion.div>
  );
}

export default function FeaturedProjectSection() {
  const t = useTranslations('CaseStudyPP');
  const { ref: deliveryRef, inView: deliveryInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: testimonialRef, inView: testimonialInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const duplicated = [...TECH_STACK, ...TECH_STACK];

  return (
    <>
      {/* ── Hero header ── */}
      <div className="bg-[#1F4C34] px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="block text-xs tracking-[0.25em] uppercase text-white/40 mb-4">
              {t('label')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              {t('title')}
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              {t('desc')}
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs font-medium text-white/70 border border-white/20 px-3 py-1.5 rounded-full">
                {t('tag1')}
              </span>
              <span className="text-xs font-medium text-white/70 border border-white/20 px-3 py-1.5 rounded-full">
                {t('tag2')}
              </span>
            </div>
          </div>
          {/* Placeholder laptop mockup */}
          <div className="w-full aspect-video rounded-2xl bg-white/10" />
        </div>
      </div>

      {/* ── End-to-end delivery ── */}
      <div className="bg-[#F9F7EB] py-20 md:py-28 px-6 md:px-10 border-t border-[#E2DCC8]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: spring }}
            className="text-3xl md:text-4xl font-bold text-[#1F4C34] text-center mb-16 md:mb-20"
          >
            {t('delivery-title')}
          </motion.h2>

          <div ref={deliveryRef} className="flex flex-col gap-16 md:gap-24">
            <DeliveryRow
              title={t('delivery-1-title')}
              bullets={[t('delivery-1-b1'), t('delivery-1-b2'), t('delivery-1-b3')]}
              reverse={false}
              index={0}
              inView={deliveryInView}
            />
            <DeliveryRow
              title={t('delivery-2-title')}
              bullets={[t('delivery-2-b1'), t('delivery-2-b2'), t('delivery-2-b3')]}
              reverse={true}
              index={1}
              inView={deliveryInView}
            />
          </div>
        </div>
      </div>

      {/* ── Tech stack carousel ── */}
      <div className="bg-[#F9F7EB] pb-20 md:pb-28 px-6 md:px-10 border-t border-[#E2DCC8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F4C34] text-center mb-12">
            {t('stack-title')}
          </h2>
        </div>
        <div className="overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div
            className="flex gap-8"
            style={{ animation: 'marquee 18s linear infinite', width: 'max-content' }}
          >
            {duplicated.map((name, i) => (
              <TechCard key={i} name={name} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonial ── */}
      <div className="bg-[#1F4C34] py-20 md:py-28 px-6 md:px-10">
        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: spring }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-10">
            {t('quote')}
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
              <Image
                src="/img/avatars/colin_cooper.webp"
                alt="Colin Cooper"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{t('quote-author')}</p>
              <p className="text-white/50 text-xs">{t('quote-role')}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <FooterSection />
    </>
  );
}
