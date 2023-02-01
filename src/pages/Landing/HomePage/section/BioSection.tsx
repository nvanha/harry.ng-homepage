import SpanGG from "@/components/spangg";

const BioSection = () => {
  return (
    <section className="section-wrapper bio-section mb-6">
      <h3 className="section-title">
        <SpanGG color="green" />
        Bio
      </h3>
      {/* width + 18.07 */}
      <p className="mb-1 sm:pl-[172.32px] sm:-indent-[172.32px]">
        <span className="mr-4 font-bold">Jan 2023 to present</span>Worked at{" "}
        <a
          href="https://mekotrading.vn/"
          target="_blank"
          className="cursor-pointer font-normal text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          @Meko Trading
        </a>
        , Can Tho, Vietnam (Software Engineer - Frontend Developer)
      </p>
      <p className="mb-1 sm:pl-[183.5px] sm:-indent-[183.5px]">
        <span className="mr-4 font-bold">Jan 2022 to Dec 2022</span>Worked at{" "}
        <a
          href="https://www.linkedin.com/company/biwoco/"
          target="_blank"
          className="cursor-pointer font-normal text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          @Biwoco
        </a>
        , Can Tho, Vietnam (Software Engineer - Frontend Team Lead)
      </p>
      <p className="mb-1 sm:pl-[185.31px] sm:-indent-[185.31px]">
        <span className="mr-4 font-bold">Nov 2021 to Dec 2022</span>Worked at{" "}
        <a
          href="https://www.linkedin.com/company/credshare/"
          target="_blank"
          className="cursor-pointer font-normal text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          @CredShare
        </a>
        , West Perth, Australia (Remote - Software Engineer - Frontend
        Developer)
      </p>
      <p className="mb-1 sm:pl-[114.54px] sm:-indent-[114.54px]">
        <span className="mr-4 font-bold">2018 to 2022</span>
        Completed the Bachelor's Program in the{" "}
        <a
          href="https://www.linkedin.com/school/can-tho-university-daihoccantho/"
          target="_blank"
          className="cursor-pointer font-normal text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          @Can Tho University
        </a>{" "}
        of Information Technology - GPA: 3.28/4
      </p>
      <p className="mb-1 sm:pl-[255.43px] sm:-indent-[255.43px]">
        <span className="mr-4 font-bold">Nov, 1st 2021 to Nov, 12nd 2021</span>
        Internship at{" "}
        <a
          href="https://www.linkedin.com/company/ptn-global/"
          target="_blank"
          className="cursor-pointer font-normal text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
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
