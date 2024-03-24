import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta property="twitter:image" content="/opengraph.png"/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:title" content="Pondi Life"></meta>
      <meta property="twitter:description" content="the exhaustive list of food,stay & things to do in pondi"></meta>
      <meta property="description" content="the exhaustive list of food,stay & things to do in pondi" />
      <meta property="og:image" content="/opengraph.png"></meta>
      <meta property="og:title" content="Pondy Life"></meta>
      <meta property="og:description" content="the exhaustive list of food,stay & things to do in pondi"/>
      <meta property="og:url" content="🏖️pondy.life"></meta> </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
