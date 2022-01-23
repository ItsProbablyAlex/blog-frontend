import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/_templates/main';

const DynamicMDX = dynamic(() => import('../../components/_molecules/markdown'));

const Post = ({content}) => <DynamicMDX content={content} />;

Post.getLayout = (page) => (
  <Layout pageTitle={page.props.metadata.title} navLinks={page.props.navLinks} year={page.props.year}>{page}</Layout>
);

export async function getStaticPaths() {
  return import('../../lib/posts')
    .then(({getPostIds}) => getPostIds()) 
    .then(postIds => {
      const paths = postIds.map(id => `/posts/${id}`)
      return {
        paths,
        fallback: false,
      }
    });
}

export const getStaticProps = async (context) => {
  const post = import('../../lib/posts')
    .then(({getPostContent}) => getPostContent(context.params.slug));
  const parsed = post.then(p => serialize(p.attributes.content));
  return Promise.all([post, parsed])
    .then(([post, parsed]) => ({
      props: {
        metadata: post.attributes,
        content: parsed
      }
    }));
}


export default Post;
