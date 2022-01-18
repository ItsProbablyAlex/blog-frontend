import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Layout from '../components/_templates/main';
import { getSinglePage } from '../lib/statics';

const components = {};

const About = ({content}) => (
  <>
    <MDXRemote {...content} components={components} />
  </>
);

About.getLayout = (page) => (
  <Layout pageTitle={page.props.metadata.title}>{page}</Layout>
);

export const getStaticProps = async (context) => {
  const about = await getSinglePage('about');
  const parsed = await serialize(about.attributes.content);
  return {
    props: {
      metadata: about.attributes,
      content: parsed
    }
  }
}


export default About;
