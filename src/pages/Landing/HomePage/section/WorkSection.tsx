import { ButtonCustom } from "@/components/forms";
import SpanGG from "@/components/spangg";

const WorkSection = () => {
  return (
    <section className="section-wrapper work-section mb-6">
      <h3 className="section-title">
        <SpanGG color="red" />
        Work
      </h3>
      <p className="text-justify indent-4">
        I am a quality-oriented software engineer who always wants to do right
        things and do things right. Hence, I can collaborate very well with
        teammates meanwhile working independently is one of my strong points.
      </p>
      <ButtonCustom customClassName="mx-auto mt-4">Download CV</ButtonCustom>
    </section>
  );
};

export default WorkSection;
