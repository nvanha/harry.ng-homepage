import { useEffect, useState } from "react";
import { IoChevronForward, IoOpenOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import Helmet from "@/components/helmet";
import { useDispatch, useSelector } from "react-redux";
import { getWorkDetailsRequest } from "@/redux/works/actions";

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
  const {
    isGetWorkDetailsRequest,
    isGetWorkDetailsSuccess,
    isGetListWorksFailure,
    workDetailsState,
  } = useSelector((store: any) => store.works);
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
    if (isGetListWorksFailure) {
      navigate("/works");
    }
  }, [isGetListWorksFailure]);

  return (
    <Helmet title={data?.titleThumb} customClassName="work-item-page">
      <section className="section-wrapper bio-section mb-6">
        <div className="flex items-center flex-wrap mb-4">
          <Link
            to="./../"
            className="text-blue-600 font-semibold hover:underline hover:underline-offset-2 dark:text-pink-400"
          >
            Works
          </Link>{" "}
          <IoChevronForward className="mx-2 w-4" />
          {isGetWorkDetailsRequest ? (
            <Skeleton count={1} className="w-[200px] h-[24px]" />
          ) : (
            <p className="text-xl font-semibold">{data?.titleFull}</p>
          )}
        </div>
        {isGetWorkDetailsRequest ? (
          <div className="pl-4">
            <Skeleton count={1} className="w-full h-[24px]" />
            <Skeleton count={1} className="w-1/2 h-[24px]" />
            <Skeleton count={1} className="w-2/3 h-[24px]" />
          </div>
        ) : (
          <pre className="whitespace-pre-wrap font-quicksand ml-4">
            {data?.content}
          </pre>
        )}
        <ul className="my-4 ml-4">
          {data?.linkWebsite && (
            <li className="flex items-center flex-wrap mb-1">
              <span className="bg-green-100 text-green-700 text-xs uppercase px-1 mr-2 rounded-sm font-bold dark:text-green-200 dark:bg-[#9ae6b429]">
                website
              </span>{" "}
              {isGetWorkDetailsRequest ? (
                <div className="flex-1">
                  <Skeleton count={1} className="w-[200px] h-[20px]" />
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
            <li className="flex items-center flex-wrap mb-1">
              <span className="bg-green-100 text-green-700 text-xs uppercase px-1 mr-2 rounded-sm font-bold dark:text-green-200 dark:bg-[#9ae6b429]">
                source
              </span>{" "}
              {isGetWorkDetailsRequest ? (
                <div className="flex-1">
                  <Skeleton count={1} className="w-[200px] h-[20px]" />
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
          <li className="flex items-center flex-wrap mb-1">
            <span className="bg-green-100 text-green-700 text-xs uppercase px-1 mr-2 rounded-sm font-bold dark:text-green-200 dark:bg-[#9ae6b429]">
              stack
            </span>{" "}
            {isGetWorkDetailsRequest ? (
              <div className="flex-1">
                <Skeleton count={1} className="w-[100px] h-[20px]" />
              </div>
            ) : (
              data?.stack?.join(", ")
            )}
          </li>
          <li className="flex items-center flex-wrap">
            <span className="bg-green-100 text-green-700 text-xs uppercase px-1 mr-2 rounded-sm font-bold dark:text-green-200 dark:bg-[#9ae6b429]">
              category
            </span>{" "}
            {isGetWorkDetailsRequest ? (
              <div className="flex-1">
                <Skeleton count={1} className="w-[100px] h-[20px]" />
              </div>
            ) : (
              data?.category?.join(", ")
            )}
          </li>
        </ul>
        {isGetWorkDetailsRequest ? (
          <Skeleton count={1} className="w-full h-[300px] sm:h-[400px]" />
        ) : (
          data?.image?.map((item) => (
            <img
              key={item.Key}
              src={item.Location}
              alt=""
              className="w-full rounded-md shadow-md mb-4"
            />
          ))
        )}
      </section>
    </Helmet>
  );
};

export default WorkItemPage;
