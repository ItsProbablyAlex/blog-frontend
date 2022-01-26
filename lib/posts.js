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
              content,
              updatedAt
            }
          }
        }
      }
    `,
  });
  return data.post.data;
};
 
const sortPosts = function(arr1, arr2) {
  if (!arr1) return arr1;
  if (!arr2) return arr2;

  let merged = [];
  let index1 = 0;
  let index2 = 0;

  let current = 0;
  while (current < (arr1.length + arr2.length)) {
    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;
    if (!isArr1Depleted && (isArr2Depleted || (Date.parse(arr1[index1].attributes.updatedAt) < Date.parse(arr2[index2].attributes.updatedAt)))) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }
    current++;
  }
  return merged;
};

export const getPostOverviews = async () => {
  const {data} = await client.query({
    query: gql`
      query Posts {
        posts(sort: "updatedAt:desc") {
          data {
            __typename
            id
            attributes {
              title,
              pretext,
              slug,
              updatedAt
            }
          }
        }
        microPosts(sort: "updatedAt:desc") {
          data {
            __typename
            id
            attributes {
              content,
              updatedAt
            }
          }
        }
      }
    `,
  });
  sortPosts(data.posts.data, data.microPosts.data)
  return sortPosts(data.posts.data, data.microPosts.data);
};
