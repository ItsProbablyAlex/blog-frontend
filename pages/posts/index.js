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

const buildPost = (p) => {
  if (p['__typename'] === 'PostEntity') {
    return (
      <PostCard key={p.attributes.slug}>
        <Link path={`/posts/${p.id}`}>
          {p.attributes.title}
        </Link>
        <p>{p.attributes.pretext}</p>
        <p>{p.attributes.updatedAt}</p>
     </PostCard>
    );
  } else if (p['__typename'] === 'MicroPostEntity') {
    return (
      <PostCard>
        <Link path={`/about`}>
          Micropost
        </Link>
        <p>{p.attributes.content}</p>
        <p>{p.attributes.updatedAt}</p>
      </PostCard>
    );
  } else {
    console.log('unknown type: '+ p['__typename'])
  }
};

const HomePage = (props) => (
  <>
  {console.log(props.posts)}
    {
      props.posts.map(p => buildPost(p))
    }
  </>
);

HomePage.getLayout = (page) => (
  <Layout pageTitle="Things I've Written" navLinks={page.props.navLinks} year={page.props.year}>{page}</Layout>
);

export const getStaticProps = async () => {
  return import('../../lib/backend/posts')
    .then(({getPostOverviews}) => getPostOverviews())
    .then(posts => ({
      props: {
        posts
      }
    }));
}

export default HomePage;
