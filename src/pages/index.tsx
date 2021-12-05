import HeroSection from "src/components/homepage/hero_section";
import Layout from "src/components/layout";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col">
        <HeroSection />
      </main>
    </Layout>
  );
}
