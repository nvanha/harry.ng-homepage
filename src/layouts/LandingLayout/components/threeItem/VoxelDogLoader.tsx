import { CgSpinner } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { HiEye } from "react-icons/hi";

const DogSpinner = () => (
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <CgSpinner className="animate-spin w-10 h-10" />
  </div>
);

const SectionAction = () => {
  return (
    <div className="absolute top-20 left-0 w-full flex items-center justify-between">
      <button className="btn bg-red-100 text-black-700 flex items-center justify-between gap-2 hover:bg-red-200">
        <FcLike className="opacity-30" /> 0
      </button>
      <button className="btn bg-blue-100 text-black-700 flex items-center justify-between gap-2">
        <HiEye className="fill-blue-500" /> 0
      </button>
    </div>
  );
};

const DogContainer = ({ customRef, children }) => {
  return (
    <section
      ref={customRef}
      className="w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] mx-auto -mt-7 sm:-mt-14 -mb-10 sm:-mb-36 md:-mb-44 bg-none relative z-[1]"
    >
      {children}
      <SectionAction />
    </section>
  );
};

export { DogSpinner, DogContainer };
