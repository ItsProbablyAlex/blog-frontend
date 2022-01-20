import styled from "styled-components";
import Link from "../../_atoms/link";

const NAV_LINKS = [
    {
        path: '/about',
        text: 'About Me'
    },
    {
        path: '/posts',
        text: 'Blog'
    },
    {
        path: '/contact',
        text: 'Contact'
    }
];

const NavHeader = styled.div``;

const NavTitle = styled.h1`
  color: ${({theme}) => theme.colors.header};
  font-size: 2rem;
  text-decoration: underline;
`;

const NavSub = styled.h2`
  color: ${({theme}) => theme.colors.subHeader};
  font-size: 1rem;
`;

const NavOptions = styled.nav`
  text-decoration: none;
`;

const NavLinks = styled.ul`
  padding: 0;
  list-style: none;
`;

const buildLink = ({path, text}) => (
    <li key={text.replace(/\s/,'-')}>
        <Link path={path}>{text}</Link>
    </li>
)
export default () => (
  <>
    <NavHeader>
      <NavTitle>Alex Chapman</NavTitle>
      <NavSub>Full Stack Engineer</NavSub>
    </NavHeader>
    <NavOptions>
      <NavLinks>
        {NAV_LINKS.map(l => buildLink(l))}
      </NavLinks>
    </NavOptions>
  </>
);
