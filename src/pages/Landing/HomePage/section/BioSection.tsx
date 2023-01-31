import SpanGG from "@/components/spangg";

const BioSection = () => {
  return (
    <section className="section-wrapper bio-section mb-6">
      <h3 className="section-title">
        <SpanGG color="green" />
        Bio
      </h3>
      <p className="mb-1 sm:pl-[183.5px] sm:-indent-[183.5px]">
        <span className="mr-4 font-bold">Jan 2022 to Dec 2022</span>Worked at
        Biwoco, Can Tho, Vietnam (Software Engineer - Frontend Team Lead)
      </p>
      <p className="mb-1 sm:pl-[185.31px] sm:-indent-[185.31px]">
        <span className="mr-4 font-bold">Nov 2021 to Dec 2022</span>
        Worked at CredShare, West Perth, Australia (Remote - Software Engineer -
        Frontend Developer)
      </p>
      <p className="mb-1 sm:pl-[114.54px] sm:-indent-[114.54px]">
        <span className="mr-4 font-bold">2018 to 2022</span>
        Completed the Bachelor's Program in the Can Tho University of
        Information Technology - GPA: 3.28/4
      </p>
      <p className="mb-1">
        <span className="mr-4 font-bold">Nov, 1st 2021 to Nov, 12nd 2021</span>
        Internship at PTN Global, Can Tho, Vietnam
      </p>
      <p>
        <span className="mr-4 font-bold">2000</span>
        Born in Can Tho, Vietnam.
      </p>
    </section>
  );
};

export default BioSection;
