import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="Chatbot No Login"
        ></meta>
        {/* Basic SEO Meta Tags */}
        {/* <title>
          ChatGPT No Login - Interact with ChatGPT without Logging In
        </title> */}
        <meta
          name="description"
          content="Interact with ChatGPT without the need to log in. Use our API keys and get started instantly."
        />
        <meta name="keywords" content="ChatGPT, No Login, API keys, Chatbot" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="ChatGPT No Login - Interact with ChatGPT without Logging In"
        />
        <meta
          property="og:description"
          content="Interact with ChatGPT without the need to log in. Use our API keys and get started instantly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.chatgptnologin.com" />
        <meta
          property="og:image"
          content="https://www.chatgptnologin.com/og-image.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ChatGPT No Login - Interact with ChatGPT without Logging In"
        />
        <meta
          name="twitter:description"
          content="Interact with ChatGPT without the need to log in. Use our API keys and get started instantly."
        />
        <meta
          name="twitter:image"
          content="https://www.chatgptnologin.com/twitter-image.jpg"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-1227415973838241"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
