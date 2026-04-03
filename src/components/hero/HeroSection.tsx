'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const spring = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
	const t = useTranslations('Hero');
	const locale = useLocale();

	return (
		<section className="sticky top-0 z-0 min-h-[100svh] bg-[#1F4C34] flex items-center">
			<div className="w-full max-w-5xl mx-auto px-6 md:px-10 xl:px-0 pt-20 pb-10 md:py-24">
				<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

					{/* ── LEFT: Photo + greeting ── */}
					<div className="flex flex-col items-center lg:flex-1 gap-5 lg:pr-16">

						<motion.div
							initial={{ opacity: 0, y: 36 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.9, ease: spring }}
							className="relative w-36 md:w-60 lg:w-72 aspect-[3/4] rounded-[360px] overflow-hidden"
							style={{ filter: 'drop-shadow(0 28px 52px rgba(0,0,0,0.55))' }}
						>
							<Image
								src="/img/avatars/christian_nbg.webp"
								alt={t('photo-alt')}
								fill
								className="object-contain object-bottom"
								priority
							/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: spring, delay: 0.25 }}
							className="text-center"
						>
							<span className="block text-white/40 text-xs uppercase tracking-[0.25em] mb-1.5">
								{t('greeting')}
							</span>
							<span className="block text-white text-2xl md:text-3xl font-bold tracking-tight">
								{t('name-short')}
							</span>
						</motion.div>

					</div>

					{/* ── DIVIDER ── */}
					<div className="hidden lg:block w-px h-80 bg-white/10 shrink-0" />

					{/* ── RIGHT: Headline + description ── */}
					<div className="flex flex-col lg:flex-1 lg:pl-16 gap-6 lg:gap-8 text-center">

						{/* Main headline */}
						<motion.h1
							initial={{ opacity: 0, x: 28 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.85, ease: spring, delay: 0.18 }}
							className="font-bold tracking-tighter leading-[0.88] text-[clamp(3rem,10vw,6.5rem)]"
						>
							<span className={`block text-white mb-4 ${locale === 'en' ? 'font-bold' : 'italic font-normal'}`}>{t('headline-1')}</span>
							<span className={`block text-white ${locale === 'en' ? 'italic font-normal' : 'font-bold'}`}>{t('headline-2')}</span>
						</motion.h1>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, ease: spring, delay: 0.36 }}
							className="text-white/50 text-base md:text-lg leading-relaxed max-w-xs lg:max-w-sm mx-auto"
						>
							{t('description')}
						</motion.p>

						{/* CTA */}
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, ease: spring, delay: 0.48 }}
							className="flex justify-center"
						>
							<a
								href="#contact"
								className="inline-flex items-center gap-2 bg-white text-[#1F4C34] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
							>
								{t('cta')}
							</a>
						</motion.div>

					</div>
				</div>
			</div>
		</section>
	);
}
