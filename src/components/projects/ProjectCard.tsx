'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const spring = [0.22, 1, 0.36, 1] as const;

interface ProjectCardProps {
  title: string;
  description: string;
  metric: string;
  image: string;
  index: number;
  inView: boolean;
}

export default function ProjectCard({
  title,
  description,
  metric,
  image,
  index,
  inView,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: spring, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col sm:flex-row gap-6 border-t border-[#E2DCC8] py-8 first:border-t-0 first:pt-0 cursor-pointer group"
    >
      {/* Thumbnail */}
      <div className="relative w-full sm:w-44 h-28 shrink-0 rounded-xl overflow-hidden bg-[#F0EDD8] border border-[#E2DCC8] flex items-center justify-center p-4">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="text-xs text-[#1F4C34]/40 font-medium">{title}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-2">
        <h3 className="font-bold text-[#1F4C34] text-base">{title}</h3>
        <p className="text-sm text-[#1F4C34]/70 leading-relaxed">{description}</p>
        <span className="inline-flex self-start items-center text-xs font-medium text-[#1F4C34] bg-[#1F4C34]/10 px-2.5 py-1 rounded-full mt-1">
          {metric}
        </span>
      </div>
    </motion.div>
  );
}
