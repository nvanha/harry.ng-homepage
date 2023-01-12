import React from "react";
import { useParams } from "react-router-dom";
import { CollectionContent, Sidebar } from "./components";

const ContentManagerPage = () => {
  const { table } = useParams();
  console.log("table: ", table);

  return (
    <div className="flex min-h-screen content-manager-page">
      <Sidebar />
      <div className="flex-1 px-14 pt-6 pb-10">
        {table ? <CollectionContent /> : "hello"}
      </div>
    </div>
  );
};

export default ContentManagerPage;
