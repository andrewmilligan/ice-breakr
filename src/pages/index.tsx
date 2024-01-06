import Head from "next/head";
import IceBreakr from "@/components/IceBreakr";
import getAssetUrl from "@/utils/getAssetUrl";
import { meta } from "@/content/meta";

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href={getAssetUrl("favicon.ico")} />

        {/* Viewport */}
        <meta
          name="viewport"
          content={
            'minimum-scale=1, initial-scale=1, '
            + 'width=device-width, shrink-to-fit=no'
          }
        />

        {/* Social */}
        <meta
          key="description"
          name="description"
          content={meta.description}
        />
        <meta
          key="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="og:type"
          property="og:type"
          content="article"
        />
        <meta
          key="twitter:site"
          property="twitter:site"
          content="@andmilligan"
        />
        <meta
          key="twitter:creator"
          property="twitter:creator"
          content="@andmilligan"
        />
        <meta
          key="twitter:title"
          property="twitter:title"
          content={meta.title}
        />
        <meta
          key="og:title"
          property="og:title"
          content={meta.title}
        />
        <meta
          key="twitter:description"
          property="twitter:description"
          content={meta.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={meta.description}
        />
        <meta
          key="twitter:image"
          property="twitter:image"
          content={meta.image}
        />
        <meta
          key="twitter:image:alt"
          property="twitter:image:alt"
          content={meta.title}
        />
        <meta
          key="og:image"
          property="og:image"
          content={meta.image}
        />
        <meta
          key="og:image:type"
          property="og:image:type"
          content={meta.image}
        />
      </Head>
      <IceBreakr />
    </>
  );
}
