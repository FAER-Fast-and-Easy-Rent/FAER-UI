import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <meta name="application-name" content="FAST AND EASY RENTAL SYSTEM" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="FAST AND EASY RENTAL SYSTEM"
        />
        <meta
          name="description"
          content="This project is an event-driven rental system where the renter can list out their services like rooms and vehicles for the consumers and the consumers can make reservations for the available services."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#f3f4f6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#f3f4f6" />

        <link rel="apple-touch-icon" href="/icons/icon-256x256.png" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-32x32.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/icon-192x192.png" color="#f3f4f6" />
        <link rel="shortcut icon" href="/icons/icon-256x256.png" />

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://faer.vercel.app" />
        <meta name="twitter:title" content="FAST AND EASY RENTAL SYSTEM" />
        <meta
          name="twitter:description"
          content="This project is an event-driven rental system where the renter can list out their services like rooms and vehicles for the consumers and the consumers can make reservations for the available services."
        />
        <meta name="twitter:image" content="/faer-homepage-light.png" />
        <meta name="twitter:creator" content="@bhimrazy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FAST AND EASY RENTAL SYSTEM" />
        <meta
          property="og:description"
          content="This project is an event-driven rental system where the renter can list out their services like rooms and vehicles for the consumers and the consumers can make reservations for the available services."
        />
        <meta property="og:site_name" content="FAST AND EASY RENTAL SYSTEM" />
        <meta property="og:url" content="https://faer.vercel.app" />
        <meta
          property="og:image"
          content="https://faer.vercel.app/faer-homepage-light.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
