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
    <Layout auth={false} title={page?.title}>
      <main className="flex flex-col space-y-2 bg-black py-12">
        <section className="mx-auto min-h-[84vh] w-full max-w-7xl px-8 pt-10 lg:px-0">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data?.data.slice(0, 15).map((room, k) => (
              <Link href={`/rooms/${room?.room_id}`} key={k}>
                <a>
                  <div className="rounded-xl bg-slate-800 ">
                    <div className="overflow-hidden">
                      <Image
                        className="rounded-t-lg transition-all hover:opacity-95 hover:shadow-md"
                        src={room?.images[0]?.url}
                        placeholder="blur"
                        blurDataURL={room?.images[0]?.url}
                        alt={room?.title}
                        width={rooms_content?.width}
                        height={rooms_content?.height}
                      />
                    </div>
                    <div className="flex flex-col space-y-1 px-4 py-2 text-gray-100">
                      <p className="text-xl font-semibold">{room?.title}</p>
                      <div className="flex w-full flex-row items-center justify-between">
                        <p className="font-light text-gray-400">
                          Apartment • 1 bedroom • 26 m²
                        </p>
                        <span className="shrink-0 font-bold text-cyan-500">
                          Rs {room?.price}
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
