import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const languages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Español",
    value: "es",
  },
  {
    label: "Français",
    value: "fr",
  },
  {
    label: "हिन्दी / Hindī",
    value: "hi",
  },
  {
    label: "Indonesian",
    value: "id",
  },
  {
    label: "Italiano",
    value: "it",
  },
  {
    label: "日本語",
    value: "ja",
  },
  {
    label: "한국어",
    value: "ko",
  },
  {
    label: "Myanmar (မြန်မာ)",
    value: "my",
  },
  {
    label: "Malay",
    value: "ms",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "Finnish",
    value: "fi",
  },
  {
    label: "Português",
    value: "pt",
  },
  {
    label: "Русский",
    value: "ru",
  },
  {
    label: "ไทย",
    value: "th",
  },
  {
    label: "Türkçe",
    value: "tr",
  },
  {
    label: "Tiếng Việt",
    value: "vi",
  },
  {
    label: "简体中文",
    value: "zh",
  },
  {
    label: "العربية",
    value: "ar",
  },
  {
    label: "বাঙালি",
    value: "bn",
  },
];
const Navbar = ({ home, blog, contact, mp3, thumbnail }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState({ value: "en", label: "Englis" });
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const userLang = JSON.parse(localStorage.getItem("userLang"));
    if (userLang) {
      setLang(userLang);
      if (userLang.value != "en") {
        router.push(`/${userLang.value}${pathname}`);
      }
    }
  }, []);

  const changeLanguageHandler = (value) => {
    const label = languages.find((p) => p.value == value);
    localStorage.setItem("userLang", JSON.stringify(label));
    setLang(label);
    if (router.route != "/") {
      router.push(`/${label.value}${router.pathname}`);
    } else {
      router.replace(`/${label.value}`);
    }
  };
  useEffect(() => {
    setPathname(router.pathname);
    if (router.locale == "en" && router.pathname == "/") {
      router.replace("/");
    } else {
      router.replace(`${pathname}`);
    }
  }, []);

  return (
    <>
      <nav
        className=" border-gray-200 px-2 sm:px-4 py-2.5"
        style={{ background: "#fd0054" }}
      >
        <div className="container flex justify-between items-center mx-auto">
          <Link href="/">
            <a className="flex items-center">
              <img
                src="/logo.svg"
                className="mr-2 h-6 sm:h-9 lg:w-[25px]"
                alt="Flowbite Logo"
              />
              <span className="self-center text-base  text-white">
                Youtube Shorts Downloader
              </span>
            </a>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="flex  items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-transparent dark:focus:ring-[#ec35ca]"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setShow(!show)}
          >
            {lang.label}
            <span className="sr-only">Open main menu</span>
            <img
              src="/hamburger.svg"
              className="ml-1 h-5 sm:h-9 "
              alt="Flowbite Logo"
            />
          </button>
          <div className="hidden w-full md:block md:w-auto " id="mobile-menu">
            <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0  md:text-sm md:font-medium ">
              <li className="block  pr-[12px]  text-white sm:text-[16px] sm:font-[400]">
                <Link href="/" aria-current="page">
                  <a
                    style={{
                      fontWeight: router.pathname == "/" && "700",
                    }}
                  >
                    {home}
                  </a>
                </Link>
              </li>
              <li className="block  pr-[12px]  text-white sm:text-[16px] sm:font-[400]">
                <Link href="https://savetube.me/">{blog}</Link>
              </li>

              <li className="block  pr-[12px]  text-white sm:text-[16px] sm:font-[400]">
                <Link href="https://ytshorts.savetube.me/blog/contact-us/">
                  {contact}
                </Link>
              </li>
              <li>
                <div className="form-group">
                  <select
                    className="form-control form-control-sm py-1 px-2 text-[.875rem] rounded-[0.2rem] text-[#495057] w-[145px] h-[31px]"
                    onChange={(e) => changeLanguageHandler(e.target.value)}
                  >
                    {languages.map((language) => (
                      <option
                        key={language.label}
                        className="options"
                        value={language.value}
                        selected={language.value == lang.value}
                      >
                        {language.label}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="burger-menu fixed transition top-0 w-full h-[100vh] z-10 flex"
          style={{
            left: show ? "0" : "-100%",
            transition: "all .4s",
          }}
        >
          <div className="languages w-[65%] bg-white overflow-y-scroll">
            <Link href="/">
              <a className=" block text-decoration-none d-flex p-3 font-weight-semi border-bottom align-items-center border-b-[1px] border-solid border-[#dee2e6] text-[#007bff]">
                <img
                  src="/logo.svg"
                  alt="logo"
                  className="mr-[8px] w-[24px] h-[24px] inline"
                  style={{
                    borderRadius: "100%",
                    border: "1px solid",
                  }}
                />
                <small className="text-[#fd0054]">
                  Youtube Shorts Downloader
                </small>
              </a>
            </Link>
            <ul className="text-[#343a40] pb-6">
              {languages.map((lang) => (
                <li
                  key={lang.label}
                  className="py-2  px-[24px] text-dark d-block border-b-[1px] border-solid border-[#dee2e6]"
                  onClick={() => changeLanguageHandler(lang.value)}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="opacity-section w-[35%] h-full bg-[#00000099]"
            onClick={() => setShow(false)}
          ></div>
        </div>
      </nav>
      <div
        className=" text-[15px] sm:text=[16px] "
        style={{
          borderBottom: "1px solid #dfdfdf",
        }}
      >
        <ul className="flex justify-center text-center">
          <li className="mx-2 capitalize transition hover:text-[#fd0054]">
            <Link href={`/short-to-mp3`}>
              <a
                className={`block py-4 transition text-[${
                  router.pathname == "/short-to-mp3" && "#fd0054"
                }] font-[${router.pathname == "/short-to-mp3" && "500"}]`}
                style={{
                  borderBottom:
                    router.pathname == "/short-to-mp3" && "2px solid #fd0054",
                }}
              >
                {mp3}
              </a>
            </Link>
          </li>
          <li className="mx-2 capitalize transition hover:text-[#fd0054] ">
            <Link href="/youtube-thumbnail-downloader">
              <a
                className={`block py-4 transition text-[${
                  router.pathname == "/youtube-thumbnail-downloader" &&
                  "#fd0054"
                }] font-[${
                  router.pathname == "/youtube-thumbnail-downloader" && "500"
                }]
                `}
                style={{
                  borderBottom:
                    router.pathname == "/youtube-thumbnail-downloader" &&
                    "2px solid #fd0054",
                }}
              >
                {thumbnail}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
