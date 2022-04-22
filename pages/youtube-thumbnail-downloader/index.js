import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import meta from "../../public/meta";
////////////// function for languages handler //////////
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "thumbnail",
        "home",
        "shortMp3",
      ])),
    },
  };
}
//// components ////////
import Link from "../../components/home/Link";
import Cards from "../../components/youtube-to-mp3/Cards";
import Converter from "../../components/youtube-to-mp3/Converter";
import HowToConvert from "../../components/youtube-to-mp3/HowToConvert";

export default function YoutubeThumbinalDownloader(props) {
  const { t } = useTranslation();
  const CARDS = [
    {
      id: 1,
      img: "fast.svg",
      title: `${t("thumbnail:best_card1_title")}`,
      description: `${t("thumbnail:best_card1_p")}`,
    },
    {
      id: 2,
      img: "loop.svg",
      title: `${t("thumbnail:best_card2_title")}`,
      description: `${t("thumbnail:best_card2_p")}`,
    },
    {
      id: 3,
      img: "shield.svg",
      title: `${t("thumbnail:best_card3_title")}`,
      description: `${t("thumbnail:best_card3_p")}`,
    },
  ];
  const cards2 = [
    {
      id: 1,
      p: `${t("thumbnail:how_card1")}`,
    },
    {
      id: 2,
      p: `${t("thumbnail:how_card2")}`,
    },
    {
      id: 3,
      p: `${t("thumbnail:how_card3")}`,
    },
  ];
  return (
    <div>
      <Head>
        <title>{t("shortMp3:thumbnail_page_title")}</title>
        <meta
          name="description"
          content={t("shortMp3:thumbnail_page_description")}
        />
        <meta name="og:title" content={t("shortMp3:thumbnail_page_title")} />
        <meta name="og:type" content={t("shortMp3:thumbnail_page_title")} />
        <meta
          name="og:site_name"
          content={t("shortMp3:thumbnail_page_title")}
        />
        <meta
          name="og:description"
          content={t("shortMp3:thumbnail_page_description")}
        />
        {meta}
      </Head>

      <Link
        data={{
          title: `${t("thumbnail:l_title")}`,
          p: `${t("thumbnail:l_p")}`,
          placeholder: `${t("home:url_placeholder")}`,
          button: `${t("thumbnail:l_button")}`,
          wrong: `${t("home:url_wrong")}`,
        }}
      />
      <Cards
        cards={CARDS}
        title={t("thumbnail:thumbinal_downloader_title")}
        p={t("thumbnail:thumbinal_downloader_p")}
      />
      <Converter
        title={t("thumbnail:free_online_title")}
        p={t("thumbnail:free_online_p")}
        button={t("thumbnail:free_online_btn")}
      />
      <HowToConvert title={t("thumbnail:how_title")} cards={cards2} />
    </div>
  );
}
