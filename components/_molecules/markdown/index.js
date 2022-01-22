import { MDXRemote } from 'next-mdx-remote';
import UndecoratedList from '../../_atoms/undecoratedlist';
import IconLink from '../../_atoms/iconlink';
import BaseLink from '../../_atoms/baselink';

const components = {UndecoratedList, IconLink, a: BaseLink};

const Markdown = ({content}) => <MDXRemote {...content} components={components} />;

export default Markdown;
