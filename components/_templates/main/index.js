import styled from "styled-components";
import Navbar from "../../_molecules/navbar";
import PageTitle from "../../_atoms/pagetitle";
import Footer from "../../_molecules/footer";

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default ({pageTitle, navLinks, children}) => (
  <Main>
    <Navbar navLinks={navLinks}/>
    <PageTitle pageTitle={pageTitle} /> 
    <main>{children}</main>
    <Footer />
  </Main>
)
