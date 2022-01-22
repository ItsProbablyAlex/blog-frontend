import dynamic from "next/dynamic";
import styled from "styled-components";
import PageTitle from "../../_atoms/pagetitle";
import Footer from "../../_molecules/footer";

const Navbar = dynamic(() => import('../../_molecules/navbar'));

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
