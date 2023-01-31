import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { HiEye } from "react-icons/hi";

import { ButtonCustom } from "@/components/forms";
import { updateLikes, updateViews } from "@/graphql/mutations";
import hooks from "@/hooks";

const ThreeItemSpinner = () => (
  <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
    <CgSpinner className="h-10 w-10 animate-spin" />
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
          id: "753546474",
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
          id: "753546474",
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
    <div className="absolute top-20 left-0 flex w-full items-center justify-between">
      <ButtonCustom
        customClassName={`${
          currentLikeAction === "liked" ? "bg-red-300" : "bg-red-200"
        } hover:bg-red-300`}
        onClick={handleLike}
      >
        <FcLike
          className={`${
            currentLikeAction === "liked" ? "opacity-100" : "opacity-30"
          }`}
        />{" "}
        {isLoadingLiked ? (
          <CgSpinner className="h-4 w-4 animate-spin" />
        ) : (
          parseInt(resDataLiked)
        )}
      </ButtonCustom>
      <ButtonCustom customClassName="bg-blue-200">
        <HiEye className="fill-blue-500" />{" "}
        {isLoadingViewed ? (
          <CgSpinner className="h-4 w-4 animate-spin" />
        ) : (
          parseInt(resDataViewed)
        )}
      </ButtonCustom>
    </div>
  );
};

const ThreeItemContainer = ({ customRef, children }) => {
  return (
    <section
      ref={customRef}
      className="relative z-[1] mx-auto -mt-7 -mb-10 h-[calc(100vw-32px)] w-full bg-none sm:-mt-14 sm:-mb-36 sm:h-[480px] sm:w-[480px] md:-mb-44 md:h-[640px] md:w-[640px]"
    >
      {children}
      <SectionAction />
    </section>
  );
};

export { ThreeItemSpinner, ThreeItemContainer };
