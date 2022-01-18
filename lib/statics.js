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

export const getSinglePage = async (type) => {
  const { data } = await client.query({
    query: gql`
      query q {
        ${type} {
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
  return data[type].data;
};
