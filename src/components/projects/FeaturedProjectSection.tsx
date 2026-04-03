'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FooterSection from '@/components/footer/FooterSection';

const spring = [0.22, 1, 0.36, 1] as const;

const TECH_STACK = [
  { name: 'DigitalOcean',   src: '/img/logos/digitalocean.svg' },
  { name: 'GitHub',         src: '/img/logos/github-icon.svg' },
  { name: 'Node.js',        src: '/img/logos/node.webp' },
  { name: 'Next.js',        src: '/img/logos/nextjs.svg' },
  { name: 'TypeScript',     src: '/img/logos/typescript.svg' },
  { name: 'React',          src: '/img/logos/react.svg' },
  { name: 'Framer Motion',  src: '/img/logos/framer-motion.svg' },
  { name: 'Figma',          src: '/img/logos/figma.svg' },
  { name: 'shadcn/ui',      src: '/img/logos/shadcn.svg' },
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
  imageSrc,
}: {
  title: string;
  bullets: string[];
  imageLeft: boolean;
  imageSrc: string;
}) {
  const imgEl = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? -48 : 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: spring }}
      className="relative w-full min-h-[260px]"
    >
      <Image src={imageSrc} alt={title} fill className="object-contain" />
    </motion.div>
  );

  const contentEl = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? 48 : -48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: spring }}
      className="flex flex-col justify-center h-full py-2"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-[#1F4C34] mb-6 leading-tight">{title}</h3>
      <ul className="space-y-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-base text-[#1F4C34]/70 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1F4C34]/50 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      {imageLeft ? (
        <>{imgEl}{contentEl}</>
      ) : (
        <>{contentEl}{imgEl}</>
      )}
    </div>
  );
}

export default function FeaturedProjectSection() {
  const t = useTranslations('CaseStudyPP');
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
          <a
            href="https://www.productpartner.io/en"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full aspect-video transition-transform duration-300 ease-out hover:scale-[1.04]"
          >
            <Image
              src="/img/global/pp_computer.svg"
              alt="ProductPartner Web"
              fill
              className="object-contain drop-shadow-md"
            />
          </a>
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
                viewBox="0 0 320 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-7 left-[5%] w-[90%]"
                aria-hidden="true"
              >
                <path
                  d="M4 16 C80 6, 240 6, 316 12"
                  stroke="#1F4C34"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </svg>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-24">
            <DeliveryRow
              title={t('delivery-1-title')}
              bullets={[t('delivery-1-b1'), t('delivery-1-b2'), t('delivery-1-b3')]}
              imageLeft={true}
              imageSrc="/img/global/design.svg"
            />
            <DeliveryRow
              title={t('delivery-2-title')}
              bullets={[t('delivery-2-b1'), t('delivery-2-b2'), t('delivery-2-b3')]}
              imageLeft={false}
              imageSrc="/img/global/development.svg"
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
          <span className="block text-5xl text-[#1F4C34]/20 font-serif leading-none mb-6" aria-hidden="true">{'\u201C'}</span>
          <p className="text-[#1F4C34] text-xl md:text-2xl font-medium leading-relaxed mb-10">
            {t('quote')}
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#1F4C34] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-base">CC</span>
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
