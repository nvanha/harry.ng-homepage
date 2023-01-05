import React from "react";

import LogoURL from "@/assets/logo/logo-full.png";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex flex-col items-center justify-center gap-2 loading">
      Loading...
    </div>
  );
};

export default Loading;
