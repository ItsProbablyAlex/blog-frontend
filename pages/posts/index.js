import styled from 'styled-components';
import Layout from '../../components/_templates/main';
import Link from '../../components/_atoms/link';

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
  <Layout pageTitle="Things I've Written" navLinks={page.props.navLinks}>{page}</Layout>
);

export const getStaticProps = async () => {
  return import('../../lib/posts')
    .then(({getPostOverviews}) => getPostOverviews())
    .then(posts => ({
      props: {
        posts
      }
    }));
}

export default HomePage;
