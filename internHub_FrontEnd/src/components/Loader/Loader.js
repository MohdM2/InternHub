import React from "react";
import "./Loader.css";

const Loader = ({ loading }) => {
  return (
    <div className={`loader ${loading ? "visible" : "hidden"}`}>Loading...</div>
  );
};

export default Loader;
