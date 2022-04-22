import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className={`rounded-[17px] bg-[#fff] shadow-3xl ${
        data.id == 3 || data.id == 6 ? "mb-[48px]" : ""
      } sm:mb-0`}
    >
      <div className="image p-[20px]">
        <img
          src={`/${data.img}`}
          className="w-[150px] h-[180px] mx-auto "
          alt="card"
        />
      </div>
      <div className="text text-left p-[20px] text-[#212529]">
        <h4 className="font-semibold mb-[10px] text-xl">{data.title}</h4>
        <p className="min-h-[100px] leading-[18px]">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
