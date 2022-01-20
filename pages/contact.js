import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Layout from '../components/_templates/main';
import { getContact } from '../lib/statics';

const components = {};

const Contact = ({content}) => (
  <>
    <MDXRemote {...content} components={components} />
    {/* TODO: Contact Methods */}
  </>
);

Contact.getLayout = (page) => (
  <Layout pageTitle={page.props.metadata.title}>{page}</Layout>
);

export const getStaticProps = async (context) => {
  const contact = await getContact('contact');
  const parsed = await serialize(contact.attributes.content);
  return {
    props: {
      metadata: contact.attributes,
      content: parsed
    }
  }
}


export default Contact;
