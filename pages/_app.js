import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {CodeTheme} from '../lib/codetheme';

const theme = {
  colors: {
    background: "#e9e7dc",
    header: "#e98074",
    subHeader: '#6e6e6e',
    link: "#e98074",
  },
  fontSize: {
    xs: "0.1rem",
    s: "1.3rem",
    m: "1.6rem",
    l: "1.9rem",
    xl: "2.2rem",
  }
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Ubuntu Mono', monospace;
    background-color: ${theme.colors.background};
    color: ${theme.colors.subHeader};
  }
  ${CodeTheme}
`;

function MyApp({ Component, pageProps, navLinks, year }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} navLinks={navLinks} year={year} />)}
      </ThemeProvider>
    </>
  );
}

const STATIC_LINKS = [
  {
      path: '/posts',
      text: 'Blog',
      order: 1
  }
];

const getNavLinks = async () => {
  return import('../lib/backend/nav')
    .then(({getNavbarContent}) => getNavbarContent())
    .then(content => {
      const remoteLinks = content.map(c => ({
        path: `/${c.attributes.slug}`,
        text: c.attributes.title,
        order: c.attributes.navbarOrder
      }));
      const sorted = [...STATIC_LINKS, ...remoteLinks].sort((a, b) => a.order - b.order)
      return sorted;
    });
};

MyApp.getInitialProps = async (appContext) => {
  return Promise.all([
    App.getInitialProps(appContext),
    getNavLinks()
  ]).then(values => {
    return {
      ...values[0],
      navLinks: values[1],
      year: new Date().getFullYear()
    }
  })
}

export default MyApp;
