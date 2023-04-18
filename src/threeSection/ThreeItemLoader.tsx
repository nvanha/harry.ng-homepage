import { CgSpinner } from "react-icons/cg";

const ThreeItemSpinner = () => (
  <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
    <CgSpinner className="h-10 w-10 animate-spin" />
  </div>
);

const ThreeItemContainer = ({ customRef, children }) => {
  return (
    <section
      ref={customRef}
      className="relative z-[1] mx-auto -mt-7 -mb-10 h-[calc(100vw-32px)] w-full bg-none sm:-mt-14 sm:-mb-36 sm:h-[480px] sm:w-[480px] md:-mb-44 md:h-[640px] md:w-[640px]"
    >
      {children}
    </section>
  );
};

export { ThreeItemSpinner, ThreeItemContainer };
