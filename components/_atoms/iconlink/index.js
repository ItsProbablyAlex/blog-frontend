
import Head from 'next/head';
import styled from 'styled-components';

const ListItem = styled.li`
  margin: 0.5rem 0;
`;

const Icon = styled.i`
  margin-right: 1rem;
`;

const Anchor = styled.a`
    text-decoration: none;
    font-weight: 400;
    color: ${({theme}) => theme.colors.link};
    :hover{
        color: ${({theme}) => theme.colors.subHeader};
    }
`;

export default ({icon, uri, title}) => (
  <>
      <Head>
        <script src="https://kit.fontawesome.com/c7af329ccd.js" crossOrigin="anonymous"></script>
      </Head>
      <ListItem>
        <Icon className={icon}></Icon>
        <Anchor href={uri}>{title}</Anchor>
      </ListItem>
  </>
);
