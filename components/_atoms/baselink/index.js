import styled from "styled-components";

export default styled.a`
    text-decoration: none;
    font-weight: 400;
    color: ${({theme}) => theme.colors.link};
    :hover{
        color: ${({theme}) => theme.colors.subHeader};
    }
`;
