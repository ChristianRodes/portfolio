import { getTranslations } from 'next-intl/server';
import FeaturedProjectSection from '@/components/projects/FeaturedProjectSection';
import Navbar from '@/components/nav/Navbar';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'CaseStudyPP' });
  return {
    title: t('title'),
    description: t('desc'),
  };
}

export default function ProductPartnerPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-14">
        <FeaturedProjectSection />
      </div>
    </main>
  );
}
