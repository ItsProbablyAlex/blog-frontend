import Link from 'next/link';
import BaseLink from "../baselink";

export default ({children, path, className}) => (
    <Link href={path} passHref>
        <BaseLink className={className}>{children}</BaseLink>
    </Link>
);
