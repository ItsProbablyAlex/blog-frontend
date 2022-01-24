import styled from "styled-components";
import Link from "../../_atoms/link";

const NavHeader = styled.div``;

const NavTitle = styled(Link)`
    font-size: 3rem;
    font-weight: 700;
    text-decoration: underline;
`;

const NavSub = styled.h2`
  color: ${({theme}) => theme.colors.subHeader};
  font-size: 1.5rem;
`;

const NavOptions = styled.nav`
  text-decoration: none;
`;

const NavLinks = styled.ul`
  padding: 0;
  list-style: none;
`;

const NavLinkItem = styled.li``;

const NavLink = styled(Link)`
    font-size: 1.5rem;
`;

const buildLink = (p) => (
    <NavLinkItem key={p.text.replace(/\s/,'-')}>
        <NavLink path={p.path}>{p.text}</NavLink>
    </NavLinkItem>
);

export default (props) => (
  <>
    <NavHeader>
      <NavTitle path="/about">Alex Chapman</NavTitle>
      <NavSub>Full Stack Engineer</NavSub>
    </NavHeader>
    <NavOptions>
      <NavLinks>
        {props.navLinks.map(l => buildLink(l))}
      </NavLinks>
    </NavOptions>
  </>
);
