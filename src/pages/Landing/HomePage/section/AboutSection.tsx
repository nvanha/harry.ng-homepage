import AvtURL from "@/assets/avt.jpg";

const AboutSection = () => {
  return (
    <section className="section-wrapper about-section">
      <div className="p-3 bg-white bg-opacity-25 dark:bg-opacity-10 backdrop-blur-sm text-center rounded-lg mb-6 shadow-sm">
        Hello, I'm a software engineer based in Vietnam!
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="md:flex-1 w-full md:w-auto">
          <h1 className="text-4xl font-bold">Ha (Harry) Nguyen Van</h1>
          <p>Software Engineer. Frontend Developer.</p>
        </div>
        <div className="md:ml-6 ml-auto mr-auto mt-4 md:mt-0 md:mr-0">
          <img
            src={AvtURL}
            alt=""
            className="w-[100px] h-[100px] border-2 border-white object-cover object-center rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
