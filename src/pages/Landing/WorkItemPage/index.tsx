import { useEffect, useState } from "react";
import { IoChevronForward, IoOpenOutline } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import Helmet from "@/components/helmet";
import {
  getWorkDetailsRequest,
  resetGetWorkDetailsState,
} from "@/redux/works/actions";

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

const WorkItemPage = () => {
  const { isGetWorkDetailsRequest, isGetWorkDetailsSuccess, workDetailsState } =
    useSelector((store: any) => store.works);
  const dispatch = useDispatch();

  const { workId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<IProps["data"]>();

  useEffect(() => {
    dispatch(getWorkDetailsRequest(workId));
  }, [workId]);

  useEffect(() => {
    if (isGetWorkDetailsSuccess) {
      setData(workDetailsState);
    }
  }, [isGetWorkDetailsSuccess]);

  useEffect(() => {
    if (workDetailsState === "") {
      dispatch(resetGetWorkDetailsState());
      navigate("/works");
    }
  }, [workDetailsState]);

  return (
    <Helmet title={data?.titleThumb} customClassName="work-item-page">
      <section className="section-wrapper bio-section mb-6">
        <div className="mb-4 flex flex-wrap items-center">
          <Link
            to="./../"
            className="font-semibold text-blue-600 hover:underline hover:underline-offset-2 dark:text-pink-400"
          >
            Works
          </Link>{" "}
          <IoChevronForward className="mx-2 w-4" />
          {isGetWorkDetailsRequest ? (
            <Skeleton count={1} className="h-[24px] w-[200px]" />
          ) : (
            <p className="text-xl font-bold">{data?.titleFull}</p>
          )}
        </div>
        {isGetWorkDetailsRequest ? (
          <div className="pl-4">
            <Skeleton count={1} className="h-[24px] w-full" />
            <Skeleton count={1} className="h-[24px] w-1/2" />
            <Skeleton count={1} className="h-[24px] w-2/3" />
          </div>
        ) : (
          <pre className="ml-4 whitespace-pre-wrap font-quicksand">
            {data?.content}
          </pre>
        )}
        <ul className="my-4 ml-4">
          {data?.linkWebsite && (
            <li className="mb-1 flex flex-wrap items-center">
              <span className="mr-2 rounded-sm bg-green-100 px-1 text-xs font-bold uppercase text-green-700 dark:bg-[#9ae6b429] dark:text-green-200">
                website
              </span>{" "}
              {isGetWorkDetailsRequest ? (
                <div className="flex-1">
                  <Skeleton count={1} className="h-[20px] w-[200px]" />
                </div>
              ) : (
                <a
                  href={data?.linkWebsite}
                  target="_blank"
                  className="break-all text-blue-600 hover:underline hover:underline-offset-2 dark:text-pink-400"
                >
                  {data?.linkWebsite}
                  <IoOpenOutline className="ml-2 inline" />
                </a>
              )}
            </li>
          )}
          {data?.linkRepo && (
            <li className="mb-1 flex flex-wrap items-center">
              <span className="mr-2 rounded-sm bg-green-100 px-1 text-xs font-bold uppercase text-green-700 dark:bg-[#9ae6b429] dark:text-green-200">
                source
              </span>{" "}
              {isGetWorkDetailsRequest ? (
                <div className="flex-1">
                  <Skeleton count={1} className="h-[20px] w-[200px]" />
                </div>
              ) : (
                <a
                  href={data?.linkRepo}
                  target="_blank"
                  className="break-all text-blue-600 hover:underline hover:underline-offset-2 dark:text-pink-400"
                >
                  {data?.linkRepo}
                  <IoOpenOutline className="ml-2 inline" />
                </a>
              )}
            </li>
          )}
          <li className="mb-1 flex flex-wrap items-center">
            <span className="mr-2 rounded-sm bg-green-100 px-1 text-xs font-bold uppercase text-green-700 dark:bg-[#9ae6b429] dark:text-green-200">
              stack
            </span>{" "}
            {isGetWorkDetailsRequest ? (
              <div className="flex-1">
                <Skeleton count={1} className="h-[20px] w-[100px]" />
              </div>
            ) : (
              data?.stack?.join(", ")
            )}
          </li>
          <li className="flex flex-wrap items-center">
            <span className="mr-2 rounded-sm bg-green-100 px-1 text-xs font-bold uppercase text-green-700 dark:bg-[#9ae6b429] dark:text-green-200">
              category
            </span>{" "}
            {isGetWorkDetailsRequest ? (
              <div className="flex-1">
                <Skeleton count={1} className="h-[20px] w-[100px]" />
              </div>
            ) : (
              data?.category?.join(", ")
            )}
          </li>
        </ul>
        {isGetWorkDetailsRequest ? (
          <Skeleton count={1} className="h-[300px] w-full sm:h-[400px]" />
        ) : (
          data?.image?.map((item) => (
            <img
              key={item.Key}
              src={item.Location}
              alt=""
              className="mb-4 w-full rounded-md shadow-md"
            />
          ))
        )}
      </section>
    </Helmet>
  );
};

export default WorkItemPage;
