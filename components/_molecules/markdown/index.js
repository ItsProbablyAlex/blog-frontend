import { MDXRemote } from 'next-mdx-remote';
import UndecoratedList from '../../_atoms/undecoratedlist';
import IconLink from '../../_atoms/iconlink';

const components = {UndecoratedList, IconLink};

const Markdown = ({content}) => <MDXRemote {...content} components={components} />;

export default Markdown;
