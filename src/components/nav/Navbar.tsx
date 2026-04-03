'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === 'es' ? 'en' : 'es';
    router.replace(pathname, { locale: next });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#1F4C34] flex items-center justify-between px-6 md:px-10">
      <Link href="/" className="md:block hidden">
        <Image
          src="/img/global/logo 1.webp"
          alt="CR"
          width={24}
          height={24}
          className="rounded-full"
          priority
        />
      </Link>
      <div className="flex items-center gap-4 md:gap-0 ml-auto md:ml-0">
        <Link href="/" className="md:hidden">
          <Image
            src="/img/global/logo 1.webp"
            alt="CR"
            width={24}
            height={24}
            className="rounded-full"
            priority
          />
        </Link>
        <button
          onClick={toggleLocale}
          className="text-white/60 hover:text-white text-xs uppercase tracking-[0.25em] transition-colors duration-200 cursor-pointer"
        >
          {locale === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>
  );
}
