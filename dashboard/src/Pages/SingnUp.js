import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Loader from "../Componets/Loader";
const SingnUp = () => {
  const formdata = useRef();
  const navigate = useNavigate();

  const [Loading, setLoading] = useState(false);
  const [erroMessage, seterroMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");
  const SingnUp = async (e) => {
    e.preventDefault();

    console.log("form data=>", formdata.current.pass.value);
    if (formdata.current.pass.value !== formdata.current.cpassword.value) {
      formdata.current.pass.value = "";
      formdata.current.cpassword.value = "";
      seterroMessage("password and conform password does not match");
      setTimeout(() => {
        seterroMessage("");
      }, 3000);
    } else {
      setLoading(true);
      const body = {
        name: formdata.current.name.value,
        email: formdata.current.email.value,
        password: formdata.current.pass.value,
      };

      try {
        const response = await fetch("http://192.168.10.72:8002/adduser", {
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

        const data = await response.json();
        console.log("Success response =>", data);
        setSuccessMessage("User Registerd Succefully");

        setSuccessMessage("");
        navigate("/login");
      } catch (error) {
        console.log("Fetch error =>", error);
      } finally {
        setLoading(false);
        setTimeout(() => {
          seterroMessage("");
        }, 4000);
        formdata.current.reset();
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col gap-7  ">
      {Loading ? <Loader /> : <div></div>}
      <div class="w-4/12  p-6 space-y-8 sm:p-8 bg-white my-5 rounded-lg shadow-xl dark:bg-gray-800">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
          Sign Up to Time Track
        </h2>

        <form
          class="mt-8 space-y-6"
          ref={formdata}
          onSubmit={SingnUp}
          autoComplete="off"
        >
          <div>
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Full name
            </label>
            <input
              type="text"
              autoComplete="off"
              name="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter youre name"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              autoComplete="off"
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
              autoComplete="off"
              type="password"
              name="password"
              id="pass"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Conform password
            </label>
            <input
              autoComplete="off"
              type="password"
              name="password"
              id="cpassword"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register
          </button>

          <div class="text-sm text-center font-medium text-gray-900 dark:text-white">
            Already SingUp?{" "}
            <Link
              to={"/login"}
              class="text-blue-600 hover:underline cursor-pointer dark:text-blue-500"
            >
              Sign In
            </Link>
          </div>
        </form>

        <h1 className="text-red-400 ">{erroMessage !== "" && erroMessage}</h1>
        <h1 className="text-green-400 ">
          {SuccessMessage !== "" && SuccessMessage}
        </h1>
      </div>
    </div>
  );
};

export default SingnUp;
