import AvtURL from "@/assets/avt.jpg";
import SpanGG from "@/components/spangg";
import BG from "@/assets/background/hello-world-html-code-768x384.png";

const AboutSection = () => {
  return (
    <section className="section-wrapper about-section mb-24">
      <div className="mb-6 rounded-lg bg-white bg-opacity-70 p-3 text-center shadow-shadowLargeLight backdrop-blur-sm dark:bg-opacity-10 dark:shadow-shadowLargeDark">
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
          <SpanGG color="red" customClassName="!w-[224px]" />
        </div>
      </div>
      <div className="relative z-[2] mt-7 flex w-full flex-wrap md:flex-nowrap">
        <div className="w-full md:w-auto md:flex-1">
          <h1 className="font-poppins text-4xl font-bold">
            Ha (Harry) Nguyen Van
          </h1>
          <p className="mt-2 font-medium">
            Software Engineer. Frontend Developer.
          </p>
        </div>
        <div className="ml-auto mr-auto mt-4 md:ml-6 md:mt-0 md:mr-0">
          <img
            src={AvtURL}
            alt=""
            className="h-[100px] w-[100px] rounded-full border-2 border-colorBorderDefaultLight object-cover object-center dark:border-colorBorderDefaultDark"
          />
        </div>
      </div>
      <div className="relative z-[1] -mt-5 py-[20px] pl-[35px] before:absolute before:top-0 before:left-0 before:font-roboto before:text-sm before:font-semibold before:text-colorTextSecondaryLight before:opacity-80 before:content-['<code>'] after:absolute after:bottom-0 after:left-0 after:font-roboto after:text-sm after:font-semibold after:text-colorTextSecondaryLight after:opacity-80 after:content-['</code>'] dark:before:text-colorTextSecondaryDark dark:after:text-colorTextSecondaryDark">
        <img
          src={BG}
          alt=""
          className="mx-auto block h-auto max-w-full rounded-sm bg-[#000000b3] opacity-40 dark:bg-transparent"
        />
        <span className="absolute left-[17px] top-1/2 h-[80%] w-[1px] -translate-y-1/2 bg-colorTextSecondaryLight opacity-30 dark:bg-colorTextSecondaryDark" />
      </div>
    </section>
  );
};

export default AboutSection;
