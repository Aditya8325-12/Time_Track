import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoStop } from "react-icons/go";
import SideNav from "../Componets/SideNav";
import AllUserPage from "./AllUserPage";
import InfoPage from "./InfoPage";
const AdminHome = () => {
  const [currectPage, setcurrectPage] = useState(0);
  return (
    <div className="w-full  flex h-screen  justify-center items-center relative mb-20">
      <div className="w-80  h-full  shadow-xl px-5 mt-40">
        <SideNav setcurrectPage={setcurrectPage} />
      </div>
      {/* Start block */}
      <section className=" w-full relative  mt-40 h-full  p-3 sm:p-5  ">
        {currectPage === 1 ? <AllUserPage /> : <InfoPage />}
      </section>
    </div>
  );
};

export default AdminHome;
