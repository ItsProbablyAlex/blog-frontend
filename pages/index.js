import { gql } from "@apollo/client";
import client from "../lib/apollo";

import Layout from '../components/_templates/main'

// Helper to make GET requests to Strapi
export async function fetchAPI() {
  const requestUrl = STRAPI_URL();
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

const HomePage = (props) => (
  <p>Hi {props.posts.map(p => p.attributes.title)}</p>
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
            attributes {
              title,
              slug
            }
          }
        }
      }
    `,
  });
  console.log(data.posts.data)
  return {
    props: {
      posts: data.posts.data
    }
  };
}

export default HomePage;
