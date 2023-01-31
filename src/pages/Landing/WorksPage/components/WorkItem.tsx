import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  data: {
    id: string;
    titleThumb: string;
    titleFull: string;
    stack: string[];
    category: string[];
    image: {
      Key: string;
      Location: string;
    }[];
    content: string;
    linkWebsite: string;
    linkRepo: string;
  };
}

const WorkItem: React.FC<IProps> = ({ data }) => {
  return (
    <div className="mb-6 overflow-hidden rounded-lg border-[1px] border-colorBorderDefaultLight bg-colorBoxContentBgLight shadow-shadowMediumLight dark:border-colorBorderDefaultDark dark:bg-colorBoxContentBgDark dark:shadow-shadowMediumDark">
      <Link
        to={`/works/${data.id}`}
        className="block h-full w-full p-4 transition-opacity hover:opacity-70"
      >
        <div className="h-[22vh]">
          <img
            src={data.image[0].Location}
            alt=""
            className="h-full w-full rounded-sm object-cover object-top shadow-shadowMediumLight dark:shadow-shadowMediumDark"
          />
        </div>
        <h4 className="mt-3 text-center text-lg font-medium">
          {data.titleThumb}
        </h4>
      </Link>
    </div>
  );
};

export default WorkItem;
