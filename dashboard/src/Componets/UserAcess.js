import React from "react";
import notAutho from "../images/not-authorized.png";
import { Link } from "react-router-dom";
const UserAcess = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-7 ">
      <img src={notAutho} className="h-14 w-14 " alt="" />
      <h1 className="text-2xl">You Are Not Authorized</h1>
      <h1 className="text-xl">
        Go to
        <Link to={"/login"} className="text-blue-500 ">
          Login Page
        </Link>
      </h1>
    </div>
  );
};

export default UserAcess;
