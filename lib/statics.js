import { gql } from "@apollo/client";
import client from "./apollo";

export const getContact = async () => {
  const { data } = await client.query({
    query: gql`
      query contact {
        contact {
          data {
            attributes {
              title,
              content
            }
          }
        }
      }
    `,
  });
  return data.contact.data;
};

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
  console.log('slugsss')
  console.log(slug);
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
