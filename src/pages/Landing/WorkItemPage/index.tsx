import { useEffect, useState } from "react";
import { IoChevronForward, IoOpenOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";

import Helmet from "@/components/helmet";
import constants from "@/constants";

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

const WorkItemPage = () => {
  const { workId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<IProps["data"]>();

  useEffect(() => {
    if (workId) {
      const dataActive = constants.fakeData.find(
        (workItem) => workItem.id === workId
      );
      if (dataActive) {
        setData(dataActive);
      } else {
        navigate("/works");
      }
    }
  }, [workId]);

  return (
    <Helmet title={data?.titleThumb} customClassName="work-item-page">
      <section className="section-wrapper bio-section mb-6">
        <div className="flex items-center flex-wrap mb-4">
          <Link
            to="./../"
            className="text-blue-600 hover:underline hover:underline-offset-2 dark:text-pink-400"
          >
            Works
          </Link>{" "}
          <IoChevronForward className="mx-2 w-4" />
          <p className="text-xl font-semibold">{data?.titleFull}</p>
        </div>
        <pre className="whitespace-pre-wrap font-lexend ml-4">
          {data?.content}
        </pre>
        <ul className="my-4 ml-4">
          {data?.linkWebsite && (
            <li className="flex items-center flex-wrap mb-1">
              <span className="bg-green-100 text-green-700 text-xs uppercase px-1 mr-2 rounded-sm font-medium dark:text-green-200 dark:bg-[#9ae6b429]">
                website
              </span>{" "}
              <a
                href={data?.linkWebsite}
                target="_blank"
                className="break-all text-blue-600 hover:underline hover:underline-offset-2 dark:text-pink-400"
              >
                {data?.linkWebsite}
                <IoOpenOutline className="ml-2 inline" />
              </a>
            </li>
          )}
          {data?.linkRepo && (
            <li className="flex items-center flex-wrap mb-1">
              <span className="bg-green-100 text-green-700 text-xs uppercase px-1 mr-2 rounded-sm font-medium dark:text-green-200 dark:bg-[#9ae6b429]">
                source
              </span>{" "}
              <a
                href={data?.linkRepo}
                target="_blank"
                className="break-all text-blue-600 hover:underline hover:underline-offset-2 dark:text-pink-400"
              >
                {data?.linkRepo}
                <IoOpenOutline className="ml-2 inline" />
              </a>
            </li>
          )}
          <li className="flex items-center flex-wrap mb-1">
            <span className="bg-green-100 text-green-700 text-xs uppercase px-1 mr-2 rounded-sm font-medium dark:text-green-200 dark:bg-[#9ae6b429]">
              stack
            </span>{" "}
            {data?.stack?.join(", ")}
          </li>
          <li className="flex items-center flex-wrap">
            <span className="bg-green-100 text-green-700 text-xs uppercase px-1 mr-2 rounded-sm font-medium dark:text-green-200 dark:bg-[#9ae6b429]">
              category
            </span>{" "}
            {data?.category?.join(", ")}
          </li>
        </ul>
        <div>
          <img
            src={data?.image}
            alt=""
            className="w-full rounded-md shadow-md mb-4"
          />
        </div>
      </section>
    </Helmet>
  );
};

export default WorkItemPage;
