import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
const demoVideo = {
  src: "https://res.cloudinary.com/freelancer3223/video/upload/v1650470787/pharaohs/yt1s.com_-_Nocopyright_INTRO_Video_NCIO_01_1_d9b5h4.mp4",
  vid_title: "Nocopyright INTRO Video - NCIO #01 ",
};
const Video = () => {
  const [showBtns, setShowBtns] = useState(false);

  return (
    <div className="my-2 p-[20px] border-[1px] border-solid border-[#00000020] mt-[50px] sm:flex sm:gap-8 sm:mx-[24px] lg:max-w-[960px] xl:max-w-[1140px] lg:mx-auto">
      <video
        src={demoVideo.src}
        className="w-[100%] sm:w-[25%] lg:h-[150px]"
        controls
      />

      <div className="sm:w-[75%]">
        <h3 className="text-left mt-2 text-[#212529] font-[500] text-[20px] sm:text-[24px]">
          {demoVideo.vid_title}
        </h3>
        <hr
          className="my-[1rem]"
          style={{
            " border-top": "3px solid rgba(0,0,0,.1)",
          }}
        ></hr>
        <div className="btn-group flex">
          <button className="border-0 outline-0 p-[15px] bg-[#fd0054] hover:bg-[#dc3545] transition text-white text-[17px] font-bold flex item-center">
            720p - Direct Download{" "}
            <img
              src="download.svg"
              alt="download"
              className=" w-[20px] h-[20px] inline-block ml-2"
            />
          </button>

          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="bg-[#dc3545] text-white px-[9px] py-[6px] rounded-r "
            type="button"
            onClick={() => setShowBtns(!showBtns)}
          >
            <AiFillCaretDown />
          </button>
        </div>
        <div
          id="dropdown"
          className={`${
            showBtns ? "" : "hidden"
          } z-10 w-[15.6rem] bg-white rounded divide-y divide-gray-100 shadow absolute `}
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <button className="border-0 outline-0 p-[15px] bg-[#fd0054] hover:bg-[#dc3545] transition text-white text-[17px] font-bold flex item-center mb-[1px]">
                480p - Direct Download{" "}
                <img
                  src="download.svg"
                  alt="download"
                  className=" w-[20px] h-[20px] inline-block ml-2"
                />
              </button>
            </li>
            <li>
              <button className="border-0 outline-0 p-[15px] bg-[#fd0054] hover:bg-[#dc3545] transition text-white text-[17px] font-bold flex item-center mb-[1px]">
                360p - Direct Download{" "}
                <img
                  src="download.svg"
                  alt="download"
                  className=" w-[20px] h-[20px] inline-block ml-2"
                />
              </button>
            </li>
            <li>
              <button className="border-0 outline-0 p-[15px] bg-[#fd0054] hover:bg-[#dc3545] transition text-white text-[17px] font-bold flex item-center min-w-[75%] mb-[1px]  justify-center">
                360p
                <img
                  src="download.svg"
                  alt="download"
                  className=" w-[20px] h-[20px] inline-block ml-2"
                />
              </button>
            </li>
            <li>
              <button className="border-0 outline-0 p-[15px] bg-[#fd0054] hover:bg-[#dc3545] transition text-white text-[17px] font-bold flex item-center min-w-[75%] mb-[1px] items-center justify-center">
                More <AiFillCaretDown />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Video;
