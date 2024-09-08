import React from "react";

const SideNav = ({ setcurrectPage }) => {
  return (
    <form class="mt-4  border-gray-200">
      <ul role="list" class="px-2 py-3 font-medium text-gray-900">
        <li>
          <a
            class="block cursor-pointer hover:text-blue-400 px-2 py-3 "
            onClick={() => {
              setcurrectPage(0);
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            class="block cursor-pointer hover:text-blue-400 px-2 py-3"
            onClick={() => {
              setcurrectPage(1);
            }}
          >
            Users
          </a>
        </li>
        <li>
          <a
            class="block cursor-pointer hover:text-blue-400 px-2 py-3"
            onClick={() => {
              setcurrectPage(2);
            }}
          >
            Admin
          </a>
        </li>
      </ul>
    </form>
  );
};

export default SideNav;
