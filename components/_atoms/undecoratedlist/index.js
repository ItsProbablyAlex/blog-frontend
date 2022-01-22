import styled from "styled-components";

const UndecoratedList = styled.ul`
    text-decoration: none;
    list-style-type: none;
    padding-left: 0;
`;

export default ({children}) => (
  <UndecoratedList>{children}</UndecoratedList>
);
