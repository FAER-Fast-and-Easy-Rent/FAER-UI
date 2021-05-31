import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-500">
      <Head>
        <title>FAER | A RENTAL SYSTEM </title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="title"
          content="FAER | A RENTAL SYSTEM"
        />
        <meta
          name="description"
          content="FAER | A RENTAL SYSTEM"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://faer.vercel.app/"
        />
        <meta
          property="og:title"
          content="FAER | A RENTAL SYSTEM"
        />
        <meta
          property="og:description"
          content="FAER | A RENTAL SYSTEM"
        />
        <meta
          property="og:image"
          content="https://faer.vercel.app/landing-page.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://faer.vercel.app"
        />
        <meta
          property="twitter:title"
          content="FAER | A RENTAL SYSTEM"
        />
        <meta
          property="twitter:description"
          content="FAER | A RENTAL SYSTEM"
        />
        <meta
          property="twitter:image"
          content="https://faer.vercel.app/landing-page.png"
        />
        <link
          rel="canonical"
          href="https://faer.vercel.app/"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className=" text-9xl font-black">
         FAER
        </h1>

        <p className="mt-3 text-2xl uppercase tracking-widest">
          Fast and Easy Rent
        </p>
        <p className="py-10 text-xl tracking-widest underline">
          !!! Launching Soon !!!
        </p>

        
      </main>
    </div>
  )
}
