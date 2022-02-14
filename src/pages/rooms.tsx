import Layout from "src/components/layout";
import { GetServerSideProps } from "next";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import axios from "src/lib/axios";

export default function Home({ authenticated }) {
  const page = {
    title: "ROOMS",
  };
  const rooms_content = {
    width: 1920,
    height: 1080,
  };
  const { data, error } = useSWR("/api/v1/rooms", axios);
  return (
    <Layout auth={authenticated} title={page?.title}>
      <main className="flex flex-col bg-black space-y-2 py-12">
        <section className="w-full max-w-7xl mx-auto px-8 lg:px-0 pt-10 min-h-[84vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.data.slice(0, 15).map((room, k) => (
              <Link href={`/rooms/${room?.room_id}`} key={k}>
                <a>
                  <div className="bg-slate-800 rounded-xl ">
                    <div className="overflow-hidden">
                      <Image
                        className="rounded-t-lg hover:shadow-md hover:opacity-95 transition-all"
                        src={room?.images[0]?.url}
                        placeholder="blur"
                        blurDataURL={room?.images[0]?.url}
                        alt={room?.title}
                        width={rooms_content?.width}
                        height={rooms_content?.height}
                      />
                    </div>
                    <div className="text-gray-100 space-y-1 flex flex-col px-4 py-2">
                      <p className="font-semibold text-xl">{room?.title}</p>
                      <div className="flex flex-row justify-between w-full items-center">
                        <p className="text-gray-400 font-light">
                          Apartment • 1 bedroom • 26 m²
                        </p>
                        <span className="font-bold text-cyan-500 shrink-0">
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { access, refresh } = req.cookies;
  let authenticated = false;

  if (access && refresh) {
    authenticated = true;
  }
  return {
    props: { authenticated },
  };
};
