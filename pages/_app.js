import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

////////////// function for languages handler //////////
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/Footer";
function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
  return (
    <>
      <Navbar
        home={t("home:home_link")}
        blog={t("home:blog_link")}
        contact={t("home:contact_link")}
        mp3={t("home:youtube_to_mp3")}
        thumbnail={t("home:youtube_thumbnail")}
      />
      <Component {...pageProps} />
      <Footer
        home={t("home:home_link")}
        blog={t("home:blog_link")}
        contact={t("home:contact_link")}
      />
    </>
  );
}

export default appWithTranslation(MyApp);
