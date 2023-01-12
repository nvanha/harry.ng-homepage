import AvtURL from "@/assets/avt.jpg";
import SpanGG from "@/components/spangg";

const AboutSection = () => {
  return (
    <section className="mb-24 section-wrapper about-section">
      <div className="p-3 bg-white bg-opacity-25 backdrop-blur-sm text-center rounded-lg mb-6 shadow-md dark:bg-opacity-10">
        Hello, I'm a software engineer based in Vietnam!
      </div>
      <div>
        <div className="mb-3 flex">
          <SpanGG color="red" customClassName="!w-[140px]" />
          <SpanGG customClassName="!w-[84px]" />
          <SpanGG rounded customClassName="!w-[14px]" />
        </div>
        <div className="mb-3 flex">
          <SpanGG color="green" customClassName="!w-[140px]" />
          <SpanGG color="purple" customClassName="!w-[56px]" />
        </div>
        <div className="mb-3 flex">
          <SpanGG color="purple" customClassName="!w-[56px]" />
          <SpanGG customClassName="!w-[14px]" />
          <SpanGG customClassName="!w-[56px]" />
          <SpanGG color="green" customClassName="!w-[84px]" />
        </div>
        <div className="mb-3 flex">
          <SpanGG color="red" customClassName="!w-[140px]" />
          <SpanGG customClassName="!w-[84px]" />
          <SpanGG rounded customClassName="!w-[14px]" />
          <SpanGG color="red" customClassName="!w-[224px]" />
        </div>
      </div>
      <div className="w-full mt-7 flex flex-wrap md:flex-nowrap">
        <div className="w-full md:flex-1 md:w-auto">
          <h1 className="text-4xl font-bold font-poppins">
            Ha (Harry) Nguyen Van
          </h1>
          <p className="font-medium mt-2">
            Software Engineer. Frontend Developer.
          </p>
        </div>
        <div className="ml-auto mr-auto mt-4 md:ml-6 md:mt-0 md:mr-0">
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
