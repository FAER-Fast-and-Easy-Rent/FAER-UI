import React from "react";
import Layout from "../layout";
import HeroSection from "./hero_section";

export default function HomePage() {
  return (
    <Layout>
      <main className="flex flex-col">
        <HeroSection />
      </main>
    </Layout>
  );
}
