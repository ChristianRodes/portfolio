'use client';

import { motion } from 'framer-motion';

const spring = [0.22, 1, 0.36, 1] as const;

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  index: number;
  inView: boolean;
}

export default function ExperienceItem({
  company,
  role,
  period,
  bullets,
  index,
  inView,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: spring, delay: index * 0.12 }}
      className="border-t border-[#E2DCC8] py-8 first:border-t-0 first:pt-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
        <h3 className="font-bold text-[#1F4C34] text-base">{role}</h3>
        <span className="text-xs text-[#1F4C34]/60 shrink-0 tabular-nums">{period}</span>
      </div>
      <p className="text-sm text-[#1F4C34]/60 mb-4 uppercase tracking-wide">{company}</p>
      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm text-[#1F4C34] leading-relaxed">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1F4C34]" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
