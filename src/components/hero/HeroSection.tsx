'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const spring = [0.22, 1, 0.36, 1] as const;
const ROLE_COUNT = 3;
const INTERVAL_MS = 2000;

const SLOTS_DESKTOP = [
	{ x: 0, y: 0, scale: 1, opacity: 1, zIndex: 10 },
	{ x: 0, y: 80, scale: 0.30, opacity: 0, zIndex: 0 },
	{ x: 0, y: -120, scale: 0.30, opacity: 0.05, zIndex: 0 },
];

const SLOTS_MOBILE = [
	{ x: 0, y: 0, scale: 1, opacity: 1, zIndex: 10 },
	{ x: 0, y: 100, scale: 0.25, opacity: 0, zIndex: 0 },
	{ x: 0, y: -65, scale: 0.25, opacity: 0.05, zIndex: 0 },
];

export default function HeroSection() {
	const t = useTranslations('Hero');
	const [step, setStep] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia('(max-width: 1023px)');
		setIsMobile(mq.matches);
		const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	}, []);

	useEffect(() => {
		const id = setInterval(() => setStep((s) => s + 1), INTERVAL_MS);
		return () => clearInterval(id);
	}, []);

	const slots = isMobile ? SLOTS_MOBILE : SLOTS_DESKTOP;

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

						{/* Main headline — circular carousel */}
						<motion.div
							initial={{ opacity: 0, x: 28 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.85, ease: spring, delay: 0.18 }}
							className="relative h-[7rem] md:h-[10rem]"
						>
							{Array.from({ length: ROLE_COUNT }).map((_, i) => {
								const slot = slots[(i + step % ROLE_COUNT) % ROLE_COUNT];
								return (
									<motion.h1
										key={i}
										animate={{
											x: slot.x,
											y: slot.y,
											scale: slot.scale,
											opacity: slot.opacity,
											zIndex: slot.zIndex,
										}}
										transition={{ duration: 0.7, ease: spring }}
										className="absolute inset-0 flex flex-col items-center justify-center font-bold tracking-tighter leading-[0.88] text-[clamp(2.5rem,8vw,6.5rem)]"
									>
										<span className="block text-white font-bold">
											{t(`role-${i}` as any)}
										</span>
										<span className="block text-white italic font-normal mt-2">
											{t(`suffix-${i}` as any)}
										</span>
									</motion.h1>
								);
							})}
						</motion.div>

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
								href="mailto:christianrodesvidal@gmail.com"
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
