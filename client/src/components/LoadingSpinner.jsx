import React from "react";

const LoadingSpinner = ({ givenColor }) => {
  return (
    <div className="flex justify-center items-center w-full col-span-full">
      <div
        className={`animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 ${
          givenColor ? givenColor : "border-blue-600"
        } `}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
