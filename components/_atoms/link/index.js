import styled from "styled-components";
import Link from 'next/link';

const InnerLink = styled.a`
    text-decoration: none;
    font-weight: 400;
    color: ${({theme}) => theme.colors.link};
    :hover{
        color: ${({theme}) => theme.colors.subHeader};
    }
`;


export default ({children, path}) => (
    <Link href={path} passHref>
        <InnerLink>{children}</InnerLink>
    </Link>
);
