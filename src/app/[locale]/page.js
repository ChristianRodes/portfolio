import Navbar from '@/components/nav/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import EducationSection from '@/components/education/EducationSection';
import SkillsSection from '@/components/skills/SkillsSection';
import FooterSection from '@/components/footer/FooterSection';

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<div className="relative z-10">
				<AboutSection />
				<SkillsSection />
				<ExperienceSection />
				<ProjectsSection />
				<EducationSection />
				<FooterSection />
			</div>
		</main>
	);
}
