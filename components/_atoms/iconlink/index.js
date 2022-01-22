
import Script from 'next/script'
import styled from 'styled-components';
import BaseLink from '../baselink';

const ListItem = styled.li`
    margin: 0.5rem 0;
`;

const Icon = styled.i`
    margin-right: 1rem;
`;

export default ({icon, uri, title}) => (
  <>
      <Script src="https://kit.fontawesome.com/c7af329ccd.js" crossOrigin="anonymous" />
      <ListItem>
        <Icon className={icon}></Icon>
        <BaseLink href={uri}>{title}</BaseLink>
      </ListItem>
  </>
);
