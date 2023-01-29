import Helmet from "@/components/helmet";
import { useParams } from "react-router-dom";

import { CollectionContent, Sidebar } from "./components";

const sidebarItems = [
  {
    title: "WorkSpace",
    slug: "/auth/content-manager/works",
  },
  {
    title: "BlogSpace",
    slug: "/auth/content-manager/blogs",
  },
];

const ContentManagerPage = () => {
  const { table } = useParams();

  return (
    <Helmet
      title="Content manager . CMS"
      customClassName="flex h-screen content-manager-page"
    >
      <Sidebar sidebarItems={sidebarItems} />
      <div className="flex-1 px-14 pt-6 pb-10">
        {table ? <CollectionContent sidebarItems={sidebarItems} /> : "hello"}
      </div>
    </Helmet>
  );
};

export default ContentManagerPage;
