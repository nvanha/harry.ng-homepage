import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { HiEye } from "react-icons/hi";

import { updateLikes, updateViews } from "@/graphql/mutations";
import hooks from "@/hooks";

const DogSpinner = () => (
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <CgSpinner className="animate-spin w-10 h-10" />
  </div>
);

const SectionAction = () => {
  const [isReLoad, setIsReLoad] = useState(false);

  const { resData: resDataLiked, isLoading: isLoadingLiked } =
    hooks.useGetContentRealTime("Like");
  const { resData: resDataViewed, isLoading: isLoadingViewed } =
    hooks.useGetContentRealTime("View", isReLoad);

  const currentLikeAction = localStorage.getItem(
    `currentLikeAction${import.meta.env.VITE_CURRENT_ENV}`
  );
  const currentView = localStorage.getItem(
    `currentView${import.meta.env.VITE_CURRENT_ENV}`
  );

  const handleLike = async () => {
    await API.graphql({
      query: updateLikes,
      variables: {
        input: {
          id: "92130984",
          liked:
            currentLikeAction === "liked"
              ? String(parseInt(resDataLiked) - 1)
              : String(parseInt(resDataLiked) + 1),
        },
      },
    });
    if (currentLikeAction === "liked") {
      localStorage.setItem(
        `currentLikeAction${import.meta.env.VITE_CURRENT_ENV}`,
        "unlike"
      );
    } else {
      localStorage.setItem(
        `currentLikeAction${import.meta.env.VITE_CURRENT_ENV}`,
        "liked"
      );
    }
  };

  const handleView = async () => {
    await API.graphql({
      query: updateViews,
      variables: {
        input: {
          id: "24325927",
          viewed: String(parseInt(resDataViewed) + 1),
        },
      },
    });
    localStorage.setItem(
      `currentView${import.meta.env.VITE_CURRENT_ENV}`,
      "viewed"
    );
    setIsReLoad(true);
  };

  useEffect(() => {
    if (currentView === null && resDataViewed) {
      handleView();
    }
  }, [resDataViewed]);

  return (
    <div className="absolute top-20 left-0 w-full flex items-center justify-between">
      <button
        className={`btn ${
          currentLikeAction === "liked" ? "bg-red-200" : "bg-red-100"
        } text-black-700 flex items-center justify-between gap-2 hover:bg-red-200`}
        onClick={handleLike}
      >
        <FcLike
          className={`${
            currentLikeAction === "liked" ? "opacity-100" : "opacity-30"
          }`}
        />{" "}
        {isLoadingLiked ? (
          <CgSpinner className="animate-spin w-4 h-4" />
        ) : (
          parseInt(resDataLiked)
        )}
      </button>
      <button className="btn bg-blue-100 text-black-700 flex items-center justify-between gap-2">
        <HiEye className="fill-blue-500" />{" "}
        {isLoadingViewed ? (
          <CgSpinner className="animate-spin w-4 h-4" />
        ) : (
          parseInt(resDataViewed)
        )}
      </button>
    </div>
  );
};

const DogContainer = ({ customRef, children }) => {
  return (
    <section
      ref={customRef}
      className="w-[280px] h-[280px] mx-auto -mt-7 -mb-10 bg-none relative z-[1] sm:w-[480px] sm:h-[480px] sm:-mt-14 sm:-mb-36 md:w-[640px] md:h-[640px] md:-mb-44"
    >
      {children}
      <SectionAction />
    </section>
  );
};

export { DogSpinner, DogContainer };
