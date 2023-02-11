import React from "react";

import LoadingGif from "@/assets/loading.gif";

const Loading = () => {
  return (
    <div className="loading fixed top-0 left-0 z-[100] flex h-screen w-screen flex-col items-center justify-center gap-2 bg-colorMainBgLight text-colorTextPrimaryLight dark:bg-colorMainBgDark dark:text-colorTextPrimaryDark">
      <img src={LoadingGif} alt="loading..." />
      Loading...
    </div>
  );
};

export default Loading;
