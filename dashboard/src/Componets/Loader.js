import React from "react";
import loading from "../images/loading.png";
const Loader = () => {
  return (
    <div className="">
      <img src={loading} className="h-14 w-14 animate-spin" alt="" />
    </div>
  );
};

export default Loader;
