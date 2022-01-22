import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';
import {getPostContent, getPostIds} from '../../lib/posts';
import Layout from '../../components/_templates/main';

const DynamicMDX = dynamic(() => import('../../components/_molecules/markdown'));

const Post = ({content}) => <DynamicMDX content={content} />;

Post.getLayout = (page) => (
  <Layout pageTitle={page.props.metadata.title} navLinks={page.props.navLinks}>{page}</Layout>
);

export async function getStaticPaths() {
  const postIds = await getPostIds();
  const paths = postIds.map(id => `/posts/${id}`);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const post = await getPostContent(context.params.slug);
  const parsed = await serialize(post.attributes.content);
  return {
    props: {
      metadata: post.attributes,
      content: parsed
    }
  }
}


export default Post;
