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
import Navbar from "../../components/ui/navbar/Navbar";
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

        <meta
          name="og:description"
          content={t("shortMp3:thumbnail_page_description")}
        />
        {meta}
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/youtube-thumbnail-downloader"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/youtube-thumbnail-downloader"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/de/youtube-thumbnail-downloader"
          hrefLang="de"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/es/youtube-thumbnail-downloader"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/fr/youtube-thumbnail-downloader"
          hrefLang="fr"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/hi/youtube-thumbnail-downloader"
          hrefLang="hi"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/id/youtube-thumbnail-downloader"
          hrefLang="id"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/it/youtube-thumbnail-downloader"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ja/youtube-thumbnail-downloader"
          hrefLang="ja"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ko/youtube-thumbnail-downloader"
          hrefLang="ko"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/my/youtube-thumbnail-downloader"
          hrefLang="my"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ms/youtube-thumbnail-downloader"
          hrefLang="ms"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/nl/youtube-thumbnail-downloader"
          hrefLang="nl"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ph/youtube-thumbnail-downloader"
          hrefLang="en-PH"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/pt/youtube-thumbnail-downloader"
          hrefLang="pt"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ru/youtube-thumbnail-downloader"
          hrefLang="ru"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/th/youtube-thumbnail-downloader"
          hrefLang="th"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/tr/youtube-thumbnail-downloader"
          hrefLang="tr"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/vi/youtube-thumbnail-downloader"
          hrefLang="vi"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/zh/youtube-thumbnail-downloader"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/zt/youtube-thumbnail-downloader"
          hrefLang="zt"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/sa/youtube-thumbnail-downloader"
          hrefLang="sa"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/bn/youtube-thumbnail-downloader"
          hrefLang="bn"
        />
      </Head>
      <Navbar
        home={t("home:home_link")}
        blog={t("home:blog_link")}
        contact={t("home:contact_link")}
        mp3={t("home:youtube_to_mp3")}
        thumbnail={t("home:youtube_thumbnail")}
        href="/youtube-thumbnail-downloader"
      />
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
