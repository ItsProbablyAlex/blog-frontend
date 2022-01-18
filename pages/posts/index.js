import Link from 'next/link';
import Layout from '../../components/_templates/main';
import { getPostOverviews } from '../../lib/posts';

// Helper to make GET requests to Strapi
export async function fetchAPI() {
  const requestUrl = STRAPI_URL();
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

const buildPostCard = (p) => (
  <>
    <Link href={`/posts/${p.id}`}>
      <a>{p.attributes.title}</a>
    </Link>
    <p>{p.attributes.pretext}</p>
  </>
);

const HomePage = (props) => (
  <>
  {
    props.posts.map(p => buildPostCard(p))
  }
  </>
);

HomePage.getLayout = (page) => (
  <Layout pageTitle="Things I've Written">{page}</Layout>
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
