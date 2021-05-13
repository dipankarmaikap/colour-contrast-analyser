import "@styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Colour Contrast Analyser (CCA)</title>
        <meta name="description" content="Analyse your sites colour contrast" />
        <meta name="copyright" content="Dipankar Maikap" />
        <meta name="language" content="en_US" />
        <meta name="robots" content="index, follow" />
        <meta name="og:site_name" content="Colour Contrast Analyser" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:site" content="@maikap_dipankar" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@maikap_dipankar" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <div id="__cca">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
