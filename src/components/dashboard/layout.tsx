import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, title, user }: { children: ReactNode, title: string, user: any }) {
    const page_title = title ? title + " | FAER | A RENTAL SYSTEM" : "FAER | A RENTAL SYSTEM";
    return (
        <div className="flex font-poppins flex-col antialiased">
            <Head>
                <title>{page_title}</title>
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <meta name="title" content="FAER | A RENTAL SYSTEM" />
                <meta name="description" content="FAER | A RENTAL SYSTEM" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://faer.vercel.app/" />
                <meta property="og:title" content="FAER | A RENTAL SYSTEM" />
                <meta property="og:description" content="FAER | A RENTAL SYSTEM" />
                <meta
                    property="og:image"
                    content="https://faer.vercel.app/landing-page.png"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://faer.vercel.app" />
                <meta property="twitter:title" content="FAER | A RENTAL SYSTEM" />
                <meta property="twitter:description" content="FAER | A RENTAL SYSTEM" />
                <meta
                    property="twitter:image"
                    content="https://faer.vercel.app/landing-page.png"
                />
                <link rel="canonical" href="https://faer.vercel.app/" />
            </Head>
            <Header user={user} />
            {children}
            <Footer />
        </div>
    );
}
