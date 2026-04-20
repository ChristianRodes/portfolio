'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const spring = [0.22, 1, 0.36, 1] as const;

interface ProjectCardProps {
  title: string;
  description: string;
  metric: string;
  image: string;
  href?: string;
  cta?: string;
  index: number;
  inView: boolean;
}

export default function ProjectCard({
  title,
  description,
  metric,
  image,
  href,
  cta,
  index,
  inView,
}: ProjectCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: spring, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col sm:flex-row gap-6 border-t border-[#E2DCC8] py-8 first:border-t-0 first:pt-0 cursor-pointer group"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video sm:w-44 sm:aspect-auto sm:self-stretch shrink-0 rounded-xl bg-[#F0EDD8] border border-[#E2DCC8]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain sm:object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] drop-shadow-sm group-hover:drop-shadow-md"
          />
        ) : (
          <span className="text-xs text-[#1F4C34]/40 font-medium flex items-center justify-center h-full">{title}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-2">
        <h3 className="font-bold text-[#1F4C34] text-base">{title}</h3>
        <p className="text-sm text-[#1F4C34]/70 leading-relaxed">{description}</p>
        {!cta && (
          <span className="inline-flex self-start items-center text-xs font-medium text-[#1F4C34] bg-[#1F4C34]/10 px-2.5 py-1 rounded-full mt-1">
            {metric}
          </span>
        )}
        {cta && (
          <span className="inline-flex self-center sm:self-start items-center gap-2 text-sm text-[#1F4C34] border border-[#1F4C34]/30 px-3 py-1.5 rounded-xl mt-2 group-hover:bg-[#1F4C34]/5 transition-colors duration-200">
            {cta}
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{card}</Link>;
  }

  return card;
}
