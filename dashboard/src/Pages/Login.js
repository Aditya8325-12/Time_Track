import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Componets/Loader";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [Loading, setLoading] = useState(false);
  const [erroMessage, seterroMessage] = useState(false);
  const formdata = useRef();
  const navigate = useNavigate();
  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const body = {
        email: formdata.current.email.value,
        password: formdata.current.pass.value,
      };

      const url = `http://192.168.10.72:8002/user`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        seterroMessage(errorData.message);
        return;
      }

      const userdata = await response.json();
      localStorage.setItem("data", JSON.stringify(userdata.data));
      console.log("Success response =>", userdata);
      navigate("/");
    } catch (error) {
      console.log("Fetch error =>", error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        seterroMessage("");
      }, 4000);
      formdata.current.reset();
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col  relative">
      <div class=" w-4/12  p-6 space-y-8 sm:p-8 bg-white mt-4  rounded-lg shadow-xl dark:bg-gray-800">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
          Sign in to Flowbite
        </h2>
        <form class="mt-8 space-y-6" ref={formdata} onSubmit={LoginUser}>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div class="ms-3 text-sm">
              <label
                for="remember"
                class="font-medium text-gray-500 dark:text-gray-400"
              >
                Remember this device
              </label>
            </div>
            <a
              href="#"
              class="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div class="text-sm font-medium text-gray-900 dark:text-white">
            Not registered yet?{" "}
            <Link
              to={"/signup"}
              class="text-blue-600 hover:underline cursor-pointer dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
        <h1 className="text-red-400 ">{erroMessage !== "" && erroMessage}</h1>
      </div>
    </div>
  );
};

export default Login;
