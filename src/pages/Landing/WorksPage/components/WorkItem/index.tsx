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
    <div className="mb-6 text-center cursor-pointer work-item">
      <Link to={`/works/${data?.id}`}>
        <img
          src={data?.image}
          className="w-full object-cover object-top rounded-md shadow-md"
          alt=""
        />
        <h4 className="mt-2 text-xl">{data?.titleThumb}</h4>
      </Link>
    </div>
  );
};

export default WorkItem;
