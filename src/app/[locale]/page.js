import Navbar from '@/components/nav/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import EducationSection from '@/components/education/EducationSection';
import SkillsSection from '@/components/skills/SkillsSection';

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<div className="relative z-10">
				<AboutSection />
				<ExperienceSection />
				<ProjectsSection />
				<EducationSection />
				<SkillsSection />
			</div>
		</main>
	);
}
