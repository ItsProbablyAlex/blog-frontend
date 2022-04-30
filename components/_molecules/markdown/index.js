import { MDXRemote } from 'next-mdx-remote';
import UndecoratedList from '../../_atoms/undecoratedlist';
import IconLink from '../../_atoms/iconlink';
import BaseLink from '../../_atoms/baselink';
import Paragraph from '../../_atoms/paragraph';
import Heading2 from '../../_atoms/h2';
import ListItem from '../../_atoms/listitem';


const components = {UndecoratedList, IconLink, a: BaseLink, p: Paragraph, h2: Heading2, li: ListItem};

const Markdown = ({content}) => <MDXRemote {...content} components={components} />;

export default Markdown;
