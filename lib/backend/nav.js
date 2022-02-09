import { gql } from "@apollo/client";
import client from "./apollo";

export const getNavbarContent = async () => {
    const { data } = await client.query({
      query: gql`
        query q {
            contentPages(filters: {navbar: {eq: true}}) {
                data {
                    attributes {
                        title,
                        slug,
                        navbarOrder
                    }
                }
            }
        }
      `,
    });
    return data.contentPages.data;
};
