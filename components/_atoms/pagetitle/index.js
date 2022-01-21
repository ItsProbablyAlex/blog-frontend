import styled from "styled-components";
import Head from 'next/head';

const PageTitle = styled.h1`
`;

export default ({pageTitle}) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} key="title" />
    </Head>
    <PageTitle>
      {pageTitle}
    </PageTitle>
  </>
);
