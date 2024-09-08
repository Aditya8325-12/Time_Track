import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const SideNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-blue-700  "
      : "text-gray-900  md:hover:text-blue-700  ";
  };

  return (
    <form class="mt-4  border-gray-200">
      <ul role="list" class="px-2 py-3 font-medium text-gray-900">
        <li>
          <Link
            to={"/"}
            class={`  block cursor-pointer hover:text-blue-400 px-2 py-3  ${isActive(
              "/"
            )} `}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/user"}
            class={`  block cursor-pointer hover:text-blue-400 px-2 py-3  ${isActive(
              "/user"
            )} `}
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            class={` block cursor-pointer hover:text-blue-400 px-2 py-3  ${isActive(
              "/contact"
            )} `}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to={"/admin"}
            class={`  block cursor-pointer hover:text-blue-400 px-2 py-3  ${isActive(
              "/admin"
            )} `}
          >
            Admin
          </Link>
        </li>
      </ul>
    </form>
  );
};

export default SideNav;
