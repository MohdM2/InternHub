import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader = ({ loading, color }) => {
  return <ClimbingBoxLoader color={color} loading={false} size={20} />;
};

export default Loader;
