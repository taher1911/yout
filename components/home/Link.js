import React, { useState, useEffect } from "react";
import Loading from "../ui/Loading";
import Video from "./Video";

const Link = ({ data }) => {
  const [isUrl, setIsUrl] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVid, setShowVid] = useState(false);

  useEffect(() => {
    if (inputVal.length == 0) {
      setIsUrl("");
    } else {
      validURL(inputVal);
    }
  }, [inputVal]);

  ///////////// validate url function //////////
  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    setIsUrl(pattern.test(str));
    return !!pattern.test(str);
  };

  ////////// get video function ////////
  const getVideoHandler = (e) => {
    e.preventDefault();
    if (isUrl) {
      setLoading(true);
      /// fetch function here
      setTimeout(() => {
        setLoading(false);
        setShowVid(true);
      }, 1200);
    }
  };
  return (
    <div className="text-center mt-12 mb-11 text-[#343a40] ">
      <h1 className="font-medium sm:text-[40px] text-2xl w-[20rem] sm:w-full sm:mb-2 m-auto">
        {data.title}
      </h1>
      <p className=" mb-4 mx-[15px]">{data.p}</p>
      <form
        className="w-5/6 mx-auto sm:flex sm:justify-center md-w[960px]"
        onSubmit={getVideoHandler}
      >
        <div className="mb-2 sm:w-[450px] md:w-[640px] lg:w-[760px] px-3  ">
          <input
            type="search"
            className=" border outline-none py-4 px-5 border-[#606569] text-[#495057] text-md rounded-xl block w-full"
            placeholder={data.placeholder}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white w-44 h-14 font-bold bg-[#fd0054] hover:bg-[#dc2260] focus:outline-none  rounded-lg  text-center text-[17px]"
        >
          {data.button}
        </button>
      </form>
      {isUrl && loading && <Loading />}
      {showVid && <Video />}
      {inputVal.length > 0 && !isUrl && (
        <p className="text-[#dc3545] text-center mt-1">{data.wrong}</p>
      )}
    </div>
  );
};

export default Link;
