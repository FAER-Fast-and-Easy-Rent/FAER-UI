import Layout from "src/components/layout";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import axios from "src/lib/axios";
import { useAuth } from "src/lib/auth";
type User = { user?: any; access?: any };

export default function Home({ authenticated }) {
  const page = {
    title: "ROOMS",
  };
  const rooms_content = {
    width: 1920,
    height: 1080,
  };
  const router = useRouter();
  const { id } = router.query;
  const { config } = useAuth();
  const { data, error } = useSWR("/api/v1/rooms/" + id, axios);
  const room = data?.data[0];

  const [cdate, setCdate] = useState(new Date().toISOString().substring(0, 10));
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [edate, setEdate] = useState(
    new Date(tomorrow).toISOString().substring(0, 10)
  );
  const days =
    (Number(new Date(edate)) - Number(new Date(cdate))) / (1000 * 60 * 60 * 24);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!authenticated) {
      router.push("/login");
    }
    const data = {
      service_id: id,
      start_date: cdate,
      end_date: edate,
      price: room?.price,
      total: room?.price * (days > 0 ? days : 0),
      service_type: "room",
    };
    axios
      .post("/api/v1/reservations/", data, config)
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
    <Layout title={page?.title}>
      <main className="flex flex-col space-y-2 bg-gray-100 py-12 dark:bg-black">
        <section className="mx-auto min-h-[84vh] w-full max-w-7xl space-y-4 px-8 pt-10 lg:px-0">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-xl bg-gray-50 shadow-sm dark:bg-slate-800 ">
              <div className="overflow-hidden">
                {room && (
                  <Image
                    className="rounded-t-lg transition-all hover:opacity-95 hover:shadow-md"
                    src={room?.images[0]?.url}
                    placeholder="blur"
                    blurDataURL={room?.images[0]?.url}
                    alt={room?.title}
                    width={rooms_content?.width}
                    height={rooms_content?.height}
                  />
                )}
              </div>
              <div className="flex flex-col space-y-1 px-4 py-2 text-gray-700 dark:text-gray-100">
                <p className="text-xl font-semibold">{room?.title}</p>
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="font-light text-gray-400">
                    {room?.room_type} • {room?.total_bedrooms} Bedroom
                  </p>
                  <span className="shrink-0 font-bold text-cyan-500">
                    Rs {room?.price}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-normal text-gray-500">
                    Address: {room?.address}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-light text-gray-500">
                    Owner: {room?.owner?.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl bg-gray-50 text-lg dark:bg-gray-900">
              <div className="flex w-full max-w-sm flex-row justify-between">
                <label
                  className="text-gray-700 dark:text-white"
                  htmlFor="start"
                >
                  Start date:
                </label>

                <input
                  className="rounded-full px-4 py-2 ring-indigo-500 focus:outline-none focus:ring-1 dark:ring-0"
                  type="date"
                  id="start"
                  name="start-date"
                  value={cdate}
                  min={new Date().toISOString().substring(0, 10)}
                  onChange={(e) => setCdate(e.target.value)}
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                />
              </div>
              <div className="flex w-full max-w-sm flex-row justify-between">
                <label
                  className="text-gray-700 dark:text-white"
                  htmlFor="start"
                >
                  End date:
                </label>

                <input
                  className="rounded-full px-4 py-2 ring-indigo-500 focus:outline-none focus:ring-1 dark:ring-0"
                  type="date"
                  id="start"
                  name="end-date"
                  value={edate}
                  min={tomorrow.toISOString().substring(0, 10)}
                  onChange={(e) => setEdate(e.target.value)}
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                />
              </div>
              <div className="flex w-full max-w-sm flex-row justify-between">
                <span className="text-gray-700 dark:text-white">Total :</span>
                <span className="text-gray-700 dark:text-white">
                  Rs {room?.price * (days > 0 ? days : 0)}
                </span>
              </div>
              {days < 0 && (
                <span className="py- text-pink-600">
                  End date must be greater than start.
                </span>
              )}
              <div className="pt-12 text-center">
                <button
                  onClick={days > 0 ? handleSubmit : null}
                  className="rounded-full bg-gray-100 py-3 px-8 font-medium hover:bg-slate-200"
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
    props: { authenticated },
  };
};
