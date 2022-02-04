import { GetServerSideProps } from 'next'
import Layout from 'src/components/dashboard/layout';
import axios from 'src/lib/axios';

export default function Account({ data }) {
  const page = {
    title: "Dashboard",
  };
  return (
    <Layout user={data?.user} title={page?.title}>
      <main className="flex flex-col">
        {/* <HeroSection /> */}
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { access, refresh } = req.cookies
  if (!access || !refresh) {
    res.statusCode = 302
    res.setHeader('Location', '/login')
  }
  const userConfig = {
    headers: {
      'Authorization': 'Bearer ' + access
    }
  }

  const { data } = await axios.get(process.env.API_URL + '/api/v1/auth/user/me', userConfig)
  console.log(data)
  return {
    props: { data },
  }
}