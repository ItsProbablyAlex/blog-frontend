import styled from "styled-components";
import Navbar from "../../_molecules/navbar";
import Footer from "../../_molecules/footer";

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default ({children}) => (
  <Main>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </Main>
)
