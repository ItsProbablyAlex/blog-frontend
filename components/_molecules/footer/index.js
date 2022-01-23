import styled from "styled-components";

const Footer = styled.footer`
  text-align: center;
`;

export default ({year}) => (
  <Footer>
    <p>© {year} ProbablyAlex</p>
  </Footer>
);
