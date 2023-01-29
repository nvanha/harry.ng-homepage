import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Helmet from "@/components/helmet";
import SpanGG from "@/components/spangg";
import { getListWorksRequest } from "@/redux/works/actions";
import { WorkItem, WorkItemLoading } from "./components";

const WorksPage = () => {
  const { isGetListWorksRequest, isGetListWorksSuccess, listWorksState } =
    useSelector((store: any) => store.works);
  const dispatch = useDispatch();

  const [workListData, setWorkListData] = useState<
    {
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
    }[]
  >([]);

  useEffect(() => {
    dispatch(getListWorksRequest());
  }, []);

  useEffect(() => {
    if (isGetListWorksSuccess) {
      setWorkListData(listWorksState);
    }
  }, [isGetListWorksSuccess]);

  return (
    <Helmet title="Works page" customClassName="works-page">
      <section className="section-wrapper bio-section mb-6">
        <h3 className="section-title">
          <SpanGG color="purple" />
          Recent works
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {isGetListWorksRequest
            ? [...new Array(4)].map((item, index) => (
                <WorkItemLoading key={index} />
              ))
            : workListData.map((workItem) => (
                <WorkItem key={workItem.id} data={workItem} />
              ))}
        </div>
      </section>
    </Helmet>
  );
};

export default WorksPage;
