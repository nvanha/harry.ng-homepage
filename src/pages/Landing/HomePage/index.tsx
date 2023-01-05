import Helmet from "@/components/helmet";
import {
  AboutSection,
  BioSection,
  ContactSection,
  SkillsSection,
  WorkSection,
} from "./section";

const HomePage = () => {
  return (
    <Helmet title="Homepage" customClassName="home-page">
      <AboutSection />
      <WorkSection />
      <BioSection />
      <SkillsSection />
      <ContactSection />
    </Helmet>
  );
};

export default HomePage;
