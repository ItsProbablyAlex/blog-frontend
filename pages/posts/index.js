import Layout from '../../components/_templates/main';
import { getPostOverviews } from '../../lib/posts';
import Link from '../../components/_atoms/link';
import styled from 'styled-components';

const PostCard = styled.div`
  a {
    text-decoration: underline;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const buildPostCard = (p) => (
  <PostCard key={p.attributes.slug}>
      <Link path={`/posts/${p.id}`}>
        {p.attributes.title}
      </Link>
      <p>{p.attributes.pretext}</p>
  </PostCard>
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
