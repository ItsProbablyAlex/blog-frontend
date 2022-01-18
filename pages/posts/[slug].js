import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import {getPostContent, getPostIds} from '../../lib/posts';
import Layout from '../../components/_templates/main';

const components = {};

const Post = ({metadata, content}) => (
  <>
    <h1>{metadata.title}</h1>
    <MDXRemote {...content} components={components} />
  </>
);

Post.getLayout = (page) => (
  <Layout>{page}</Layout>
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
