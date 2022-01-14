import { gql } from "@apollo/client";

import {getPostIds} from '../../lib/posts';
import client from "../../lib/apollo";
import Layout from '../../components/_templates/main'

const Post = ({post}) => (
  <>
    <h1>{post.attributes.title}</h1>
    <p>{post.attributes.postcontent}</p>
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
  const { data } = await client.query({
    query: gql`
      query Posts {
        post(id: ${context.params.slug}) {
          data {
            attributes {
              title,
              slug,
              postcontent
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      post: data.post.data
    }
  };
}


export default Post;
