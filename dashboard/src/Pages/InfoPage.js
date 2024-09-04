import React from "react";
import { FaUsersViewfinder } from "react-icons/fa6";
import { RiMoneyEuroCircleLine } from "react-icons/ri";

import { FcMoneyTransfer } from "react-icons/fc";
import { HiOutlineUserAdd } from "react-icons/hi";
import Example from "../Charts/Example";
import Example2 from "../Charts/Example2";

const InfoPage = () => {
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col gap-2">
      <div class="w-full px-4 mt-5">
        <div class="-mx-4 flex ">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-full">
            <div class="relative py-6 gap-6  flex items-center rounded-[10px]  bg-white px-6  shadow-lg ">
              <div className="w-24 h-24 flex items-center justify-center bg-blue-400 rounded-full">
                <HiOutlineUserAdd className="w-12 h-12 text-white" />
              </div>
              <div>
                <p class="text-2xl font-bold text-dark dark:text-white xl:text-[28px] xl:leading-[35px]">
                  50
                </p>
                <p class="mt-1 text-base text-body-color dark:text-dark-6">
                  New Users
                </p>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-full">
            <div class="relative py-6 gap-6  flex items-center rounded-[10px]  bg-white px-6  shadow-lg ">
              <div className="w-24 h-24 flex items-center justify-center bg-blue-400 rounded-full">
                <FaUsersViewfinder className="w-12 h-12 text-white" />
              </div>
              <div>
                <p class="text-2xl font-bold text-dark dark:text-white xl:text-[28px] xl:leading-[35px]">
                  350
                </p>
                <p class="mt-1 text-base text-body-color dark:text-dark-6">
                  Total Users
                </p>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-full">
            <div class="relative py-6 gap-6  flex items-center rounded-[10px]  bg-white px-6  shadow-lg ">
              <div className="w-24 h-24 flex items-center justify-center bg-blue-400  rounded-full">
                <RiMoneyEuroCircleLine className="w-12 h-12 text-white" />
              </div>
              <div>
                <p class="text-2xl font-bold text-dark dark:text-white xl:text-[28px] xl:leading-[35px]">
                  $4,350
                </p>
                <p class="mt-1 text-base text-body-color dark:text-dark-6">
                  Earned this month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-96  grid grid-cols-5 gap-3  px-4 mt-5">
        <div className="w-full bg-white shadow-xl rounded-md p-2 h-full col-span-3">
          <Example />
        </div>
        <div className="w-full relative  h-full col-span-2 bg-white shadow-xl rounded-md p-2 flex flex-col gap-5 items-center justify-center ">
          <Example2 />
          <h1 className="text-xl absolute bottom-0 right-0 px-5 py-4">
            UserData
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
