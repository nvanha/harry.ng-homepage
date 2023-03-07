import SpanGG from "@/components/spangg";

const BioSection = () => {
  return (
    <section className="section-wrapper bio-section mb-6">
      <h3 className="section-title">
        <SpanGG color="green" />
        Bio
      </h3>
      <p className="mb-1 sm:pl-[198.44px] sm:-indent-[198.44px]">
        <span className="mr-4 font-bold">Feb 2023 to present</span>Worked at{" "}
        <a
          href="https://mekotrading.vn/"
          target="_blank"
          className="cursor-pointer font-medium text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          @Meko Trading
        </a>
        , Can Tho, Vietnam (Software Engineer - Frontend Developer)
      </p>
      <p className="mb-1 sm:pl-[208.03px] sm:-indent-[208.03px]">
        <span className="mr-4 font-bold">Jan 2022 to Dec 2022</span>Worked at{" "}
        <a
          href="https://www.linkedin.com/company/biwoco/"
          target="_blank"
          className="cursor-pointer font-medium text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          @Biwoco
        </a>
        , Can Tho, Vietnam (Software Engineer - Frontend Team Lead)
      </p>
      <p className="mb-1 sm:pl-[208.03px] sm:-indent-[208.03px]">
        <span className="mr-4 font-bold">Nov 2021 to Dec 2022</span>Worked at{" "}
        <a
          href="https://www.linkedin.com/company/credshare/"
          target="_blank"
          className="cursor-pointer font-medium text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          @CredShare
        </a>
        , West Perth, Australia (Remote - Software Engineer - Frontend
        Developer)
      </p>
      <p className="mb-1 sm:pl-[131.22px] sm:-indent-[131.22px]">
        <span className="mr-4 font-bold">2018 to 2022</span>
        Completed the Bachelor's Program in the{" "}
        <a
          href="https://www.linkedin.com/school/can-tho-university-daihoccantho/"
          target="_blank"
          className="cursor-pointer font-medium text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          @Can Tho University
        </a>{" "}
        of Information Technology - Degree: Very good - GPA: 3.28/4
      </p>
      <p className="mb-1 sm:pl-[313.66px] sm:-indent-[313.66px]">
        <span className="mr-4 font-bold">Nov, 1st 2021 to Nov, 12nd 2021</span>
        Internship at{" "}
        <a
          href="https://www.linkedin.com/company/ptn-global/"
          target="_blank"
          className="cursor-pointer font-medium text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          @PTN Global
        </a>
        , Can Tho, Vietnam (On Job Training)
      </p>
      <p>
        <span className="mr-4 font-bold">2000</span>
        Born in Can Tho, Vietnam.
      </p>
    </section>
  );
};

export default BioSection;
