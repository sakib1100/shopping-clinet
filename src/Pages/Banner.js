import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="cards max-sm:mt-4">
        <h1 className="text-4xl  max-sm:text-2xl  font-bold text-base-100">
          20% Discount This Month
        </h1>
        <img
          className="ml-4"
          style={{ marginTop: "-20px" }}
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif"
          alt="🎉"
          width="60"
          height="60"
        />
      </div>

      <div></div>
    </div>
  );
};

export default Banner;
