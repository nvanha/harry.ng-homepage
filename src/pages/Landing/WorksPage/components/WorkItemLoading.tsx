import Skeleton from "react-loading-skeleton";

const WorkItemLoading = () => {
  return (
    <div className="mb-6 overflow-hidden rounded-lg border-[1px] border-colorBorderDefaultLight bg-colorBoxContentBgLight p-4 shadow-shadowMediumLight dark:border-colorBorderDefaultDark dark:bg-colorBoxContentBgDark dark:shadow-shadowMediumDark">
      <div>
        <Skeleton count={1} className="h-[22vh]" />
      </div>
      <div>
        <Skeleton count={1} className="mt-2 h-[28px] w-full" />
      </div>
    </div>
  );
};

export default WorkItemLoading;
