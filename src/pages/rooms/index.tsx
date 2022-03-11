import Layout from "src/components/layout";
import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import axios from "src/lib/axios";

type User = { user?: any; access?: any };

export default function Home() {
  const page = {
    title: "ROOMS",
  };
  const rooms_content = {
    width: 1920,
    height: 1080,
  };
  const { data, error } = useSWR("/api/v1/rooms", axios);
  return (
    <Layout title={page?.title}>
      <main className="flex flex-col space-y-2 bg-gray-100 py-12 dark:bg-black">
        <section className="mx-auto min-h-[84vh] w-full max-w-6xl space-y-2 px-8 pt-2 lg:px-0">
          <h1 className="pb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
            All Rooms
          </h1>
          <div className="flex flex-col gap-8">
            {data?.data.slice(0, 15).map((room, k) => (
              <Link href={`/rooms/${room?.room_id}`} key={k}>
                <a>
                  <div className="grid grid-cols-1 rounded-xl bg-gray-50 p-2 transition-all hover:bg-white hover:shadow-sm dark:bg-slate-800 sm:grid-cols-3 sm:gap-8 ">
                    <div className="overflow-hidden p-2">
                      <Image
                        className=" rounded-lg transition-all hover:opacity-95 hover:shadow-md"
                        src={room?.images[0]?.url}
                        placeholder="blur"
                        blurDataURL={room?.images[0]?.url}
                        alt={room?.title}
                        width={rooms_content?.width}
                        height={rooms_content?.height}
                      />
                    </div>
                    <div className="col-span-2 flex max-w-xl flex-col space-y-1 px-4 py-2 text-gray-700 dark:text-gray-100">
                      <h3 className="text-2xl font-semibold line-clamp-2">
                        {room?.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-3">
                        {room?.description}
                      </p>
                      <div className="flex w-full flex-row items-center justify-between space-y-2">
                        <p className="font-light text-gray-600">
                          Apartment • 1 bedroom • 26 m²
                        </p>
                        <span className="shrink-0 font-bold text-cyan-500">
                          Rs {room?.price}
                          <span className="px-1 text-xs font-light">/day</span>
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">
                          Address: {room?.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async ({ req, res }) => {
//   const { access, refresh } = req.cookies;
//   let authenticated = false;

//   if (access && refresh) {
//     authenticated = true;
//   }
//   return {
//     props: { authenticated },
//   };
// };
