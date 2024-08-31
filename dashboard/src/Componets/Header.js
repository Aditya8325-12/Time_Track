import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [profile, setprofile] = useState(false);
  const [LoginStatus, setLoginStatus] = useState(true);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav class="bg-slate-400  w-full h-20 fixed z-20  border-gray-200  flex justify-center items-center ">
      <div class="w-11/12 flex flex-wrap items-center justify-between ">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} class="h-10" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Time Track
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          class="hidden w-full md:flex md:w-auto items-center justify-center gap-5 relative"
          id="navbar-default"
        >
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <Link
                to={"/"}
                class="block py-2 px-3 text-white bg-blue-700 rounded
                md:bg-transparent md:text-blue-700 md:p-0 dark:text-white
                md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="block py-2 px-3 text-gray-900 rounded
                hover:bg-gray-100 md:hover:bg-transparent md:border-0
                md:hover:text-blue-700 md:p-0 dark:text-white
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="block py-2 px-3 text-gray-900 rounded
                hover:bg-gray-100 md:hover:bg-transparent md:border-0
                md:hover:text-blue-700 md:p-0 dark:text-white
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="block py-2 px-3 text-gray-900 rounded
                hover:bg-gray-100 md:hover:bg-transparent md:border-0
                md:hover:text-blue-700 md:p-0 dark:text-white
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="block py-2 px-3 text-gray-900 rounded
                hover:bg-gray-100 md:hover:bg-transparent md:border-0
                md:hover:text-blue-700 md:p-0 dark:text-white
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>

          {LoginStatus ? (
            <div class="relative  flex items-center gap-x-4 ">
              <img
                onClick={() => {
                  setprofile(!profile);
                }}
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="h-10 w-10 rounded-full  cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 "
              />
            </div>
          ) : (
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          )}

          <div
            class={`absolute right-0 z-10 w-44 mt-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              profile ? "flex" : "hidden"
            } `}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1 flex flex-col  w-full items-end" role="none">
              {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Account settings
              </a>
              <button
                type="submit"
                class="block w-full px-4 py-2 text-end text-sm text-gray-700 hover:text-blue-400  "
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
                onClick={signOut}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
