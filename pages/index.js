import Layout from '../components/_templates/main';
import { getPostOverviews } from '../../lib/posts';

const HomePage = (props) => (
  <p>{props.posts.map(p => p.attributes.title)}</p>
);

HomePage.getLayout = (page) => (
  <Layout navLinks={page.props.navLinks} year={page.props.year}>{page}</Layout>
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
