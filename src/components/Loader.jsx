import React from "react";

const Loader = () => {
  return (
    <div className=" bg-[#181818] flex w-full h-full cursor-pointer p-4   gap-1 justify-center items-center ">
      <p className="  head text-white max-[500px]:text-[135px] text-[455px] font-semibold ">
        PI
      </p>
      <div className=" flex justify-center items-center   h-full  ">
        <img
          className="  w-full  object-right  "
          src="../images/logo.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Loader;
