import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import meta from "../../public/meta";

////////////// function for languages handler //////////
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["shortMp3", "home"])),
    },
  };
}
//// components ////////
import Link from "../../components/home/Link";
import Cards from "../../components/youtube-to-mp3/Cards";
import Converter from "../../components/youtube-to-mp3/Converter";
import HowToConvert from "../../components/youtube-to-mp3/HowToConvert";

export default function ShortToMp3(props) {
  const { t } = useTranslation();
  const CARDS = [
    {
      id: 1,
      img: "fast.svg",
      title: `${t("shortMp3:card1_title")}`,
      description: `${t("shortMp3:card1_paragraph")}`,
    },
    {
      id: 2,
      img: "loop.svg",
      title: `${t("shortMp3:card2_title")}`,
      description: `${t("shortMp3:card2_p")}`,
    },
    {
      id: 3,
      img: "shield.svg",
      title: `${t("shortMp3:card3_title")}`,
      description: `${t("shortMp3:card3_p")}`,
    },
  ];
  const cards2 = [
    {
      id: 1,
      p: `${t("shortMp3:how_card1_p")}`,
    },
    {
      id: 2,
      p: `${t("shortMp3:how_card2_p")}`,
    },
    {
      id: 3,
      p: `${t("shortMp3:how_card3_p")}`,
    },
  ];
  return (
    <div>
      <Head>
        <title>{t("shortMp3:mp3_page_title")}</title>
        <meta
          name="description"
          content={`${t("shortMp3:mp3_page_description")}`}
        />
        <meta name="og:title" content={t("shortMp3:mp3_page_title")} />
        <meta name="og:type" content={t("shortMp3:mp3_page_title")} />
        <meta name="og:site_name" content={t("shortMp3:mp3_page_title")} />
        <meta
          name="og:description"
          content={`${t("shortMp3:mp3_page_description")}`}
        />
        {meta}
      </Head>

      <Link
        data={{
          title: `${t("shortMp3:l_title")}`,
          p: `${t("shortMp3:l_p")}`,
          placeholder: `${t("home:url_placeholder")}`,
          button: `${t("shortMp3:l_button")}`,
          wrong: `${t("home:url_wrong")}`,
        }}
      />

      <Cards
        cards={CARDS}
        title={t("shortMp3:best_section_title")}
        p={t("shortMp3:best_section_p")}
      />
      <Converter
        title={t("shortMp3:converter_title")}
        p={t("shortMp3:converter_p")}
        button={t("shortMp3:convert_now_btn")}
      />
      <HowToConvert title={t("shortMp3:how_to_convert_title")} cards={cards2} />
    </div>
  );
}
