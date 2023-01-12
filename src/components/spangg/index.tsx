import React from "react";

const SpanGG = ({ color = "", rounded = false, customClassName = "" }) => {
  return (
    <span
      className={`inline-block mr-4 h-[14px] w-[50px] ${color} ${
        rounded ? "rounded-full" : "rounded-sm"
      } ${customClassName} spangg`}
    />
  );
};

export default SpanGG;
