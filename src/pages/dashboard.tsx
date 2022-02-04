import { GetServerSideProps } from 'next'

export default function Account() {
  return <div>Welcome to dashboard</div>;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { access, refresh } = req.cookies
  if (!access || !refresh) {
    res.statusCode = 302
    res.setHeader('Location', '/login')
  }
  return {
    props: {},
  }
}