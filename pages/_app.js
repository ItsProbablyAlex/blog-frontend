import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { getNavbarContent } from '../lib/nav';

const STATIC_LINKS = [
  {
      path: '/posts',
      text: 'Blog'
  }
];

const theme = {
  colors: {
    background: "#e9e7dc",
    header: "#e98074",
    subHeader: '#6e6e6e',
    link: "#e98074"
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Ubuntu Mono', monospace;
    background-color: ${theme.colors.background};
    color: ${theme.colors.subHeader};
  }
`;

function MyApp({ Component, pageProps, navLinks }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} navLinks={navLinks} />)}
      </ThemeProvider>
    </>
  );
}

const getNavLinks = async () => {
  return getNavbarContent().then(content => {
    return content.map(c => ({
      path: `/${c.attributes.slug}`,
      text: c.attributes.title,
    }));
    return [...STATIC_LINKS, ...remoteLinks];
  });
};

MyApp.getInitialProps = async (appContext) => {
  return Promise.all([
    App.getInitialProps(appContext),
    getNavLinks()
  ]).then(values => {
    return {...values[0], navLinks: values[1]}
  })
}

export default MyApp;
