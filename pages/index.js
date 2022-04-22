import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import meta from "../public/meta";
////////////// function for languages handler //////////
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
//// components ////////
import Link from "../components/home/Link";
import Cards from "../components/home/Cards";
import YoutubeShorts from "../components/home/Youtube-shorts";
import Faqs from "../components/home/Faqs";

export default function Home(props) {
  const { t } = useTranslation();
  const CARDS = [
    {
      id: 1,
      img: "fast.svg",
      title: `${t("home:card1_title")}`,
      description: `${t("home:card1_description")}`,
    },
    {
      id: 2,
      img: "loop.svg",
      title: `${t("home:card2_title")}`,
      description: `${t("home:card2_description")}`,
    },
    {
      id: 3,
      img: "shield.svg",
      title: `${t("home:card3_title")}`,
      description: `${t("home:card3_description")}`,
    },
    {
      id: 4,
      img: "ux-design.svg",
      title: `${t("home:card4_title")}`,
      description: `${t("home:card4_description")}`,
    },
    {
      id: 5,
      img: "instructions.svg",
      title: `${t("home:card5_title")}`,
      description: `${t("home:card5_description")}`,
    },
    {
      id: 6,
      img: "computing.svg",
      title: `${t("home:card6_title")}`,
      description: `${t("home:card6_description")}`,
    },
  ];
  const FAQS_DATA = [
    {
      id: 1,
      title: `${t("home:faqs1_title")}`,
      description: `${t("home:faqs1_description")}`,
    },
    {
      id: 2,
      title: `${t("home:faqs2_title")}`,
      description: `${t("home:faqs2_description")}`,
    },
    {
      id: 3,
      title: `${t("home:faqs3_title")}`,
      description: `${t("home:faqs3_description")}`,
    },
    {
      id: 4,
      title: `${t("home:faqs4_title")}`,
      description: `${t("home:faqs4_description")}`,
    },
  ];

  return (
    <div>
      <Head>
        <title>{t("home:home_page_title")}</title>
        <meta name="description" content={`${t("home:meta_description")}`} />
        <meta name="og:title" content={t("home:home_page_title")} />
        <meta name="og:type" content={t("home:home_page_title")} />
        <meta name="og:site_name" content={t("home:home_page_title")} />
        <meta name="og:description" content={`${t("home:meta_description")}`} />
        {meta}
      </Head>
      <div className="w-80 h-24 m-auto mt-5 bg-[#d2d2d2]  flex items-center justify-center mx-auto">
        addvertisement
      </div>
      <Link
        data={{
          title: `${t("home:Url_title")}`,
          p: `${t("home:Url_p")}`,
          placeholder: `${t("home:url_placeholder")}`,
          button: `${t("home:button")}`,
          wrong: `${t("home:url_wrong")}`,
        }}
      />
      <div className="w-[414px] h-[345px] sm:w-[720px] md:h-[280px] md:w-[960px] sm:h-[280px] sm:mx-auto mt-5 bg-[#d2d2d2] flex items-center justify-center max-w-full ">
        addvertisement
      </div>
      <Cards
        cards={CARDS}
        title={t("home:card_main_title")}
        p={t("home:card_main_p")}
      />
      <YoutubeShorts
        sec1_title={t("home:y_s_v_d")}
        sec1_p={t("home:y_s_v_d_description")}
        sec1_share={t("home:share")}
        sec2_title={t("home:What_y_s")}
        sec2_p1={t("home:What_y_s_p1")}
        sec2_p2={t("home:What_y_s_p2")}
        sec2_p3={t("home:What_y_s_p3")}
        sec2_p4={t("home:What_y_s_p4")}
        sec2_p5={t("home:What_y_s_p5")}
        sec2_p6={t("home:What_y_s_p6")}
        sec2_p7={t("home:What_y_s_p7")}
        sec3_title={t("home:how_m_y_s")}
        sec3_p1={t("home:how_m_y_s_p1")}
        sec3_p2={t("home:how_m_y_s_p2")}
        sec3_p3={t("home:how_m_y_s_p3")}
        sec3_p4={t("home:how_m_y_s_p4")}
        sec3_p5={t("home:how_m_y_s_p5")}
        sec4_title={t("home:How_d_y_s")}
        sec4_p1={t("home:How_d_y_s_p1")}
        sec4_p2={t("home:How_d_y_s_p2")}
        sec4_p3={t("home:How_d_y_s_p3")}
        sec4_p4={t("home:How_d_y_s_p4")}
        sec4_p5={t("home:How_d_y_s_p5")}
        sec4_p6={t("home:How_d_y_s_p6")}
      />
      <Faqs faqs={FAQS_DATA} />
    </div>
  );
}
