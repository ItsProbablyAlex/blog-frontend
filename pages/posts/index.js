import Link from 'next/link'

import { gql } from "@apollo/client";
import client from "../../lib/apollo";

import Layout from '../../components/_templates/main'

// Helper to make GET requests to Strapi
export async function fetchAPI() {
  const requestUrl = STRAPI_URL();
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

const getLink = (p) => (
  <Link href={`/posts/${p.id}`}>
    <a>{p.attributes.title}</a>
  </Link>
);

const HomePage = (props) => (
  <>
  {
    props.posts.map(p => getLink(p))
  }
  </>
);

HomePage.getLayout = (page) => (
  <Layout>{page}</Layout>
);

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          data {
            id
            attributes {
              title,
              slug
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      posts: data.posts.data
    }
  };
}

export default HomePage;
