import Head from 'next/head';

export const SeoHead = () => {
  return (
    <Head>
      <title>{'Coldzy Tech | Web 2.0 Social'}</title>
      <meta property="og:title" content="Coldzy Tech" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://coldzy-tech.com/" />
      <meta property="og:image" content="https://coldzy-tech.com/logo/logo.png" />
      <meta property="og:image:type" content="png" />
      <meta property="og:description" content="Blog Coldzy Tech, Social, Booking Web, Landing Page" />
      {/*  */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@coldzy" />
      <meta property="twitter:title" content="Coldzy Tech" />
      <meta property="twitter:description" content="Blog Coldzy Tech, Social, Booking Web, Landing Page" />
      <meta property="twitter:creator" content="@coldzy" />
      <meta property="twitter:image" content="https://coldzy-tech.com/logo/logo.png" />
    </Head>
  );
};
