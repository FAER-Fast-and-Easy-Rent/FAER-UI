import HeroSection from "src/components/homepage/hero_section";
import Layout from "src/components/layout";

export default function Home() {
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
