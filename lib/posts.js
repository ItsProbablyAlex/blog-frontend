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
