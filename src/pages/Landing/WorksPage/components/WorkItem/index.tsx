import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  data:
    | {
        id: string;
        titleThumb: string;
        titleFull: string;
        stack: string[];
        category: string[];
        image: string;
        content: string;
        linkWebsite: string;
        linkRepo: string;
      }
    | undefined;
}

const WorkItem: React.FC<IProps> = ({ data }) => {
  return (
    <Card className="mb-6 bg-white dark:bg-[#525252]">
      <Link to={`/works/${data?.id}`}>
        <CardHeader floated={false} className="h-[22vh]">
          <img
            src={data?.image}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </CardHeader>
        <CardBody className="text-center">
          <h4 className="mt-2 text-xl text-black-700 dark:text-colorPrimaryDark">
            {data?.titleThumb}
          </h4>
        </CardBody>
      </Link>
    </Card>
  );
};

export default WorkItem;
