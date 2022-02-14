import Layout from "src/components/layout";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import axios from "src/lib/axios";

export default function Home({ authenticated, access }) {
  const page = {
    title: "ROOMS",
  };
  const rooms_content = {
    width: 1920,
    height: 1080,
  };
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR("/api/v1/rooms/" + id, axios);
  const room = data?.data[0];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!authenticated) {
      router.push("/login");
    }
    const userConfig = {
      headers: {
        Authorization: "Bearer " + access,
      },
    };
    const data = {
      service_id: id,
      start_date: "2022-02-01",
      end_date: "2022-02-05",
      price: 145,
      total: 1450,
      service_type: "room",
    };
    axios
      .post("/api/v1/reservations/", data, userConfig)
      .then((res) => {
        router.push("/dashboard");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  };
  return (
    <Layout auth={authenticated} title={page?.title}>
      <main className="flex flex-col bg-black space-y-2 py-12">
        <section className="w-full max-w-7xl mx-auto px-8 lg:px-0 pt-10 min-h-[84vh] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl ">
              <div className="overflow-hidden">
                {room && (
                  <Image
                    className="rounded-t-lg hover:shadow-md hover:opacity-95 transition-all"
                    src={room?.images[0]?.url}
                    placeholder="blur"
                    blurDataURL={room?.images[0]?.url}
                    alt={room?.title}
                    width={rooms_content?.width}
                    height={rooms_content?.height}
                  />
                )}
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
            <div className="bg-gray-900 rounded-2xl flex flex-col justify-center items-center">
              {/* <div>
                <label htmlFor="start">Start date:</label>

                <input
                  type="date"
                  id="start"
                  name="start-date"
                  value="2018-07-22"
                  required pattern="\d{4}-\d{2}-\d{2}"
                />
              </div> */}
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-gray-100 font-medium hover:bg-slate-200 py-3 px-8 rounded-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="py-4">
            <p className=" dark:invert">{room?.description}</p>
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
    props: { authenticated, access },
  };
};
