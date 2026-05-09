import { getTranslations } from 'next-intl/server';
import GolfClassSection from '@/components/projects/GolfClassSection';
import Navbar from '@/components/nav/Navbar';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'CaseStudyGC' });
  return {
    title: t('title'),
    description: t('desc'),
  };
}

export default function GolfClassPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-14">
        <GolfClassSection />
      </div>
    </main>
  );
}
