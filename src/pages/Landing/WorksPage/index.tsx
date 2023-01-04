import constants from "@/constants";
import { WorkItem } from "./components";

const WorksPage = () => {
  return (
    <div className="works-page">
      <section className="section-wrapper bio-section mb-6">
        <h3 className="section-title">Recent works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {constants.fakeData.map((workItem, index) => (
            <WorkItem key={index} data={workItem} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorksPage;
