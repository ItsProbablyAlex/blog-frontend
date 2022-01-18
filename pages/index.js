import Layout from '../components/_templates/main';
import { getPostOverviews } from '../lib/posts';

// Helper to make GET requests to Strapi
export async function fetchAPI() {
  const requestUrl = STRAPI_URL();
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

const HomePage = (props) => (
  <p>{props.posts.map(p => p.attributes.title)}</p>
);

HomePage.getLayout = (page) => (
  <Layout>{page}</Layout>
);

export const getStaticProps = async () => {
  const posts = await getPostOverviews();
  return {
    props: {
      posts
    }
  };
}

export default HomePage;
