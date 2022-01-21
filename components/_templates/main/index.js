import styled from "styled-components";
import Navbar from "../../_molecules/navbar";
import PageTitle from "../../_atoms/pagetitle";
import Footer from "../../_molecules/footer";

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default (props) => (
  <Main>
    <Navbar navLinks={props.navLinks}/>
    <PageTitle>{props.pageTitle}</PageTitle> 
    <main>{props.children}</main>
    <Footer />
  </Main>
)
