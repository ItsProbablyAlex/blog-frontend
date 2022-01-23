import { useRouter } from 'next/router'
import Layout from '../../components/_templates/main';
import RecruiterForm from '../../components/_organisms/recruiterform/index.js';

const Recruit = () => {
  const router = useRouter()
  const { name, content, minSalary, maxSalary } = router.query;

  return <RecruiterForm name={name} content={content} />
}

Recruit.getLayout = (page) => (
    <Layout navLinks={page.props.navLinks}>{page}</Layout>
  );

export default Recruit
