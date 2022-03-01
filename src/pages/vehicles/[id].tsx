import Layout from "src/components/layout";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "src/lib/axios";
import { useState } from "react";
import { useAuth } from "src/lib/auth";

export default function Home({ authenticated, access }) {
  const page = {
    title: "VEHICLES",
  };
  const vehicless_content = {
    width: 1920,
    height: 1080,
  };
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR("/api/v1/vehicles/" + id, axios);
  const vehicle = data?.data[0];
  const {config} = useAuth()

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
      price: vehicle?.price,
      total: vehicle?.price * (days > 0 ? days : 0),
      service_type: "vehicle",
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
    <Layout auth={authenticated} title={page?.title}>
      <main className="flex flex-col bg-black space-y-2 py-12">
        <section className="w-full max-w-7xl mx-auto px-8 lg:px-0 pt-10 min-h-[84vh] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl ">
              <div className="overflow-hidden">
                {vehicle && (
                  <Image
                    className="rounded-t-lg hover:shadow-md hover:opacity-95 transition-all"
                    src={vehicle?.images[0]?.url}
                    placeholder="blur"
                    blurDataURL={vehicle?.images[0]?.url}
                    alt={vehicle?.name}
                    width={vehicless_content?.width}
                    height={vehicless_content?.height}
                  />
                )}
              </div>
              <div className="text-gray-100 space-y-1 flex flex-col px-4 py-2">
                <p className="font-semibold text-xl">{vehicle?.name}</p>
                <div className="flex flex-row justify-between w-full items-center">
                  <p className="text-gray-400 font-light">
                    Vehicle • 1 vehicle • 1260 CC
                  </p>
                  <span className="font-bold text-cyan-500 shrink-0">
                    Rs {vehicle?.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl flex flex-col text-lg space-y-4 justify-center items-center">
              <div className="flex flex-row justify-between w-full max-w-sm">
                <label className="text-white" htmlFor="start">
                  Start date:
                </label>

                <input
                  className="focus:outline-none rounded px-2 py-1"
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
              <div className="flex flex-row justify-between w-full max-w-sm">
                <label className="text-white" htmlFor="start">
                  End date:
                </label>

                <input
                  className="focus:outline-none rounded px-2 py-1"
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
              <div className="flex flex-row justify-between w-full max-w-sm">
                <span className="text-white">Total :</span>
                <span className="text-white">Rs {vehicle?.price * (days > 0 ? days : 0)}</span>
              </div>
              {days < 0 && (
                <span className="text-pink-600">
                  End date must be greater than start.
                </span>
              )}
              <div className="text-center pt-12">
                <button
                  onClick={days > 0 ? handleSubmit : null}
                  className="bg-gray-100 font-medium hover:bg-slate-200 py-3 px-8 rounded-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="py-4">
            <p className=" dark:invert">{vehicle?.description}</p>
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
