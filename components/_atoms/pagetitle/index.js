import styled from "styled-components";

const PageTitle = styled.h1`
`;

export default ({children}) => (
  <PageTitle>
      {children}
  </PageTitle>
);
