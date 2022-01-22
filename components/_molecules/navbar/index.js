import styled from "styled-components";
import Link from "../../_atoms/link";

const NavHeader = styled.div``;

const NavTitle = styled(Link)`
    font-size: 2rem;
    font-weight: 700;
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

const buildLink = (p) => (
    <li key={p.text.replace(/\s/,'-')}>
        <Link path={p.path}>{p.text}</Link>
    </li>
);

export default (props) => (
  <>
    <NavHeader>
      <NavTitle path="/">Alex Chapman</NavTitle>
      <NavSub>Full Stack Engineer</NavSub>
    </NavHeader>
    <NavOptions>
      <NavLinks>
        {props.navLinks.map(l => buildLink(l))}
      </NavLinks>
    </NavOptions>
  </>
);
