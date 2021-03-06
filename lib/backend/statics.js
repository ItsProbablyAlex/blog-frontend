import { gql } from "@apollo/client";
import client from "./apollo";

export const getSinglePagePaths = async () => {
  const { data } = await client.query({
    query: gql`
      query q {
        contentPages {
          data {
            attributes {
              slug
            }
          }
        }
      }
    `,
  });
  return data.contentPages.data;
};

export const getContentPage = async (slug) => {
  const { data } = await client.query({
    query: gql`
      query q {
        contentPages(filters: { slug: {eq: "${slug}"}}) {
          data {
            attributes {
              title,
              content,
              slug
            }
          }
        }
      }
    `,
  });
  return data.contentPages.data[0];
};
