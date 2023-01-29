import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Skeleton from "react-loading-skeleton";

const WorkItemLoading = () => {
  return (
    <Card className="mb-6 bg-white dark:bg-[#525252]">
      <CardHeader floated={false}>
        <Skeleton count={1} className="h-[22vh]" />
      </CardHeader>
      <CardBody>
        <Skeleton count={1} className="h-[28px] w-full mt-2" />
      </CardBody>
    </Card>
  );
};

export default WorkItemLoading;
