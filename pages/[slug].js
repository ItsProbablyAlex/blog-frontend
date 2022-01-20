import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import {getContentPage, getSinglePagePaths} from '../lib/statics';
import Layout from '../components/_templates/main';

const components = {};

const SinglePage = ({content}) => (
  <>
    <MDXRemote {...content} components={components} />
  </>
);

SinglePage.getLayout = (page) => (
  <Layout pageTitle={page.props.metadata.title}>{page}</Layout>
);

export async function getStaticPaths() {
  const singlePagePaths = await getSinglePagePaths();
  const paths = singlePagePaths.map(page => `/${page.attributes.slug}`);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
    const page = await getContentPage(context.params.slug);
    const parsed = await serialize(page.attributes.content);
    return {
        props: {
        metadata: page.attributes,
        content: parsed
        }
    }
}


export default SinglePage;
