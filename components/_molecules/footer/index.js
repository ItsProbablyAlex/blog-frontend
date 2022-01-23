import styled from "styled-components";

const Footer = styled.footer`
  text-align: center;
`;

export default () => (
  <Footer>
    <p>© {new Date().getFullYear()} ProbablyAlex</p>
  </Footer>
);
