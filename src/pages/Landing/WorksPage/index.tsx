import Helmet from "@/components/helmet";
import SpanGG from "@/components/spangg";
import constants from "@/constants";
import { WorkItem } from "./components";

const WorksPage = () => {
  return (
    <Helmet title="Works page" customClassName="works-page">
      <section className="section-wrapper bio-section mb-6">
        <h3 className="section-title">
          <SpanGG color="purple" />
          Recent works
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {constants.fakeData.map((workItem, index) => (
            <WorkItem key={index} data={workItem} />
          ))}
        </div>
      </section>
    </Helmet>
  );
};

export default WorksPage;
