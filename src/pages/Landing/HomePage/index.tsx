import {
  AboutSection,
  BioSection,
  ContactSection,
  SkillsSection,
  WorkSection,
} from "./section";

const HomePage = () => {
  return (
    <div className="home-page">
      <AboutSection />
      <WorkSection />
      <BioSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
