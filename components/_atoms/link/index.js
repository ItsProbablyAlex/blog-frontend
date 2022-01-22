import Link from 'next/link';
import BaseLink from "../baselink";

export default ({children, path}) => (
    <Link href={path} passHref>
        <BaseLink>{children}</BaseLink>
    </Link>
);
