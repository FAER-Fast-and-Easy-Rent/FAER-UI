import HeroSection from "src/components/homepage/hero_section";
import Layout from "src/components/layout";
import { GetServerSideProps } from "next";

export default function Home({ authenticated }) {
  const page = {
    title: "HOME",
  };
  return (
    <Layout title={page?.title}>
      <main className="flex flex-col">
        <HeroSection />
      </main>
    </Layout>
  );
}
