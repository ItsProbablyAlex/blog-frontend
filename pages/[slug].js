import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';
import {getContentPage, getSinglePagePaths} from '../lib/statics';
import Layout from '../components/_templates/main';

const DynamicMDX = dynamic(() => import('../components/_molecules/markdown'));

const SinglePage = ({content}) => <DynamicMDX content={content} />;

SinglePage.getLayout = (page) => (
  <Layout pageTitle={page.props.metadata.title} navLinks={page.props.navLinks}>{page}</Layout>
);

export async function getStaticPaths() {
  return import('../lib/statics')
    .then(({getSinglePagePaths}) => getSinglePagePaths())
    .then(singlePagePaths => {
      const paths = singlePagePaths.map(page => `/${page.attributes.slug}`);
      return {
        paths,
        fallback: false,
      };
    });
}

export const getStaticProps = async (context) => {
  const page = import('../lib/statics')
    .then(({getContentPage}) => getContentPage(context.params.slug));
  const parsed = page.then(p => serialize(p.attributes.content));
  return Promise.all([page, parsed])
    .then(([page, parsed]) => ({
      props: {
        metadata: page.attributes,
        content: parsed
      }
    }));
}


export default SinglePage;
