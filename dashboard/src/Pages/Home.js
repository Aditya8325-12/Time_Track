import React from "react";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  console.log("data", data);
  // localStorage.clear();
  return (
    <div className="w-full  relative flex justify-center items-center ">
      <img
        style={{ height: 800 }}
        src="https://images.unsplash.com/photo-1561514958-6ed1d8a74060?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        srcset=""
        className="object-cover  flex justify-center w-full  items-center"
      />
      <div className=" absolute text-4xl text-center flex flex-col gap-8 ">
        <h1 className="">Hello !</h1>
        <h1>{data[0].name} </h1>
      </div>
    </div>
  );
};

export default Home;
