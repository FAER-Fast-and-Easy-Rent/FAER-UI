import React from "react";
import Layout from "../layout";
import HeroSection from "./hero_section";

export default function HomePage() {
  return (
    <Layout>
      <main className="flex flex-col px-4 xl:px-0 space-y-4 w-full max-w-5xl mx-auto">
        <HeroSection />
      </main>
    </Layout>
  );
}
