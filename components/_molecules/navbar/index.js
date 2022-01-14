import styled from "styled-components";

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

const NavLinks = styled.h1`
`;

const NavLink = styled.h1`
  color: ${({theme}) => theme.colors.link};
  font-size: 1rem;
  font-weight: 400;
  margin: 0.3rem 0;
`;


export default () => (
  <>
    <NavHeader>
      <NavTitle>Alex Chapman</NavTitle>
      <NavSub>Full Stack Engineer</NavSub>
    </NavHeader>
    <NavOptions>
      <NavLinks>
        <NavLink>About Me</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </NavOptions>
  </>
);
