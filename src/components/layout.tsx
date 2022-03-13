import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const page_title = title
    ? title + " | FAER | A RENTAL SYSTEM"
    : "FAER | A RENTAL SYSTEM";
  return (
    <div className="font-poppins flex flex-col bg-white antialiased ">
      <Head>
        <title>{page_title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="title" content="FAER | A RENTAL SYSTEM" />
        <meta name="description" content="FAER | A RENTAL SYSTEM" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="canonical" href="https://faer.vercel.app/" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
