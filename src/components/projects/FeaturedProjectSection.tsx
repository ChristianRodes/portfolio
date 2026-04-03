'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FooterSection from '@/components/footer/FooterSection';

const spring = [0.22, 1, 0.36, 1] as const;

const TECH_STACK = [
  { name: 'GitHub',         src: '/img/logos/github-icon.svg' },
  { name: 'TypeScript',     src: '/img/logos/typescript.svg' },
  { name: 'Framer Motion',  src: '/img/logos/framer-motion.svg' },
  { name: 'shadcn/ui',      src: '/img/logos/shadcn.svg' },
  { name: 'DigitalOcean',   src: '/img/logos/digitalocean.svg' },
  { name: 'Tailwind CSS',   src: '/img/logos/tailwind.webp' },
  { name: 'Vercel',         src: '/img/logos/vercel.webp' },
  { name: 'Node.js',        src: '/img/logos/node.webp' },
  { name: 'Next.js',        src: '/img/logos/nextjs.svg' },
  { name: 'React',          src: '/img/logos/react.svg' },
  { name: 'Figma',          src: '/img/logos/figma.svg' },
];

// Tripled so the carousel always looks full regardless of screen width
const MARQUEE_ITEMS = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

function TechCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="shrink-0 w-12 h-12 relative">
      <Image src={src} alt={name} fill className="object-contain" />
    </div>
  );
}

function DeliveryRow({
  title,
  bullets,
  imageLeft,
  index,
  inView,
}: {
  title: string;
  bullets: string[];
  imageLeft: boolean;
  index: number;
  inView: boolean;
}) {
  const imgPlaceholder = (
    <div className="w-full rounded-2xl bg-[#1F4C34] self-stretch min-h-[260px]" />
  );

  const content = (
    <div className="flex flex-col justify-center h-full py-2">
      <h3 className="text-2xl md:text-3xl font-bold text-[#1F4C34] mb-6 leading-tight">{title}</h3>
      <ul className="space-y-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-base text-[#1F4C34]/70 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1F4C34]/50 shrink-0" />
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
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch"
    >
      {imageLeft ? (
        <>
          {imgPlaceholder}
          {content}
        </>
      ) : (
        <>
          {content}
          {imgPlaceholder}
        </>
      )}
    </motion.div>
  );
}

export default function FeaturedProjectSection() {
  const t = useTranslations('CaseStudyPP');
  const { ref: deliveryRef, inView: deliveryInView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: testimonialRef, inView: testimonialInView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
          <div className="w-full aspect-video rounded-2xl bg-white/10" />
        </div>
      </div>

      {/* ── End-to-end delivery ── */}
      <div className="bg-[#F9F7EB] py-20 md:py-28 px-6 md:px-10 border-t border-[#E2DCC8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: spring }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4C34] inline-block relative">
              {t('delivery-title')}
              <svg
                viewBox="0 0 320 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-4 left-0 w-full"
                aria-hidden="true"
              >
                <path
                  d="M4 13 C60 4, 140 16, 200 8 C240 3, 290 14, 316 9"
                  stroke="#1F4C34"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.35"
                />
              </svg>
            </h2>
          </motion.div>

          <div ref={deliveryRef} className="flex flex-col gap-16 md:gap-24">
            <DeliveryRow
              title={t('delivery-1-title')}
              bullets={[t('delivery-1-b1'), t('delivery-1-b2'), t('delivery-1-b3')]}
              imageLeft={true}
              index={0}
              inView={deliveryInView}
            />
            <DeliveryRow
              title={t('delivery-2-title')}
              bullets={[t('delivery-2-b1'), t('delivery-2-b2'), t('delivery-2-b3')]}
              imageLeft={false}
              index={1}
              inView={deliveryInView}
            />
          </div>
        </div>
      </div>

      {/* ── Tech stack carousel ── */}
      <div className="bg-[#F9F7EB] pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F4C34] text-center mb-12">
            Stack
          </h2>
        </div>
        <div className="overflow-hidden max-w-5xl mx-auto">
          <style>{`
            @keyframes marquee-loop {
              0%   { transform: translateX(0); }
              100% { transform: translateX(calc(-100% / 3)); }
            }
          `}</style>
          <div
            className="flex gap-8"
            style={{
              animation: 'marquee-loop 20s linear infinite',
              width: 'max-content',
            }}
          >
            {MARQUEE_ITEMS.map((item, i) => (
              <TechCard key={i} name={item.name} src={item.src} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonial ── */}
      <div className="bg-[#F9F7EB] py-20 md:py-28 px-6 md:px-10 border-t border-[#E2DCC8]">
        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: spring }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[#1F4C34] text-xl md:text-2xl font-medium leading-relaxed mb-10">
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
              <p className="text-[#1F4C34] font-bold text-sm">{t('quote-author')}</p>
              <p className="text-[#1F4C34]/50 text-xs">{t('quote-role')}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <FooterSection />
    </>
  );
}
