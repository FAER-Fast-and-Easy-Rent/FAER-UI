import HeroSection from "src/components/homepage/hero_section";
import Layout from "src/components/layout";
import { GetServerSideProps } from "next";

export default function Home({ authenticated }) {
  const page = {
    title: "HOME",
  };
  return (
    <Layout auth={authenticated} title={page?.title}>
      <main className="flex flex-col">
        <HeroSection />
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { access, refresh } = req.cookies;
  let authenticated = false;

  if (access && refresh) {
    authenticated = true;
  }
  return {
    props: { authenticated },
  };
};
