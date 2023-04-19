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
      className="relative mx-auto h-[640px] w-[640px] bg-none"
    >
      {children}
    </section>
  );
};

export { ThreeItemSpinner, ThreeItemContainer };
