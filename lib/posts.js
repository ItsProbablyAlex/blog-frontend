import { gql } from "@apollo/client";
import client from "../lib/apollo";

export const getPostIds = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          data {
            id
          }
        }
      }
    `,
  });
  return data.posts.data.map(p => p.id);
};

export const getPostContent = async (id) => {
  const {data} = await client.query({
    query: gql`
      query Posts {
        post(id: ${id}) {
          data {
            id
            attributes {
              title,
              pretext,
              slug,
              content
            }
          }
        }
      }
    `,
  });
  return data.post.data;
};


export const getPostOverviews = async () => {
  const {data} = await client.query({
    query: gql`
      query Posts {
        posts {
          data {
            id
            attributes {
              title,
              pretext,
              slug
            }
          }
        }
      }
    `,
  });
  return data.posts.data;
};
