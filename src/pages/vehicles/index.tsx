import Layout from "src/components/layout";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import axios from "src/lib/axios";
import useSWR from "swr";

export default function Vehicles({ data: vdata }) {
  const page = {
    title: "VEHICLES",
  };
  const vehicles_content = {
    width: 1920,
    height: 1080,
  };
  const { data: fdata, error } = useSWR("/api/v1/vehicles", axios);
  let data = fdata?.data ?? vdata;
  console.log(data);
  return (
    <Layout title={page?.title}>
      <main className="flex flex-col space-y-2 bg-gray-100 py-12 dark:bg-black">
        <section className="mx-auto min-h-[84vh] w-full max-w-6xl space-y-2 px-8 pt-2 lg:px-0">
          <h1 className="pb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
            All Vehicles
          </h1>
          <div className="flex flex-col gap-8">
            {data.slice(0, 15).map((vehicle, k) => (
              <Link href={`/vehicles/${vehicle?.vehicle_id}`} key={k}>
                <a>
                  <div className="grid grid-cols-1 rounded-xl bg-gray-50 p-2 transition-all hover:bg-white hover:shadow-sm dark:bg-slate-800 sm:grid-cols-3 sm:gap-8 ">
                    <div className="overflow-hidden p-2">
                      <Image
                        className="rounded-lg transition-all hover:opacity-95 hover:shadow-md"
                        src={vehicle?.images[0]?.url}
                        placeholder="blur"
                        blurDataURL={vehicle?.images[0]?.url}
                        alt={vehicle?.images[0]?.file_name}
                        width={vehicles_content?.width}
                        height={vehicles_content?.height}
                      />
                    </div>
                    <div className="col-span-2 flex max-w-xl flex-col space-y-1 px-4 py-2 text-gray-700 dark:text-gray-100">
                      <h3 className="text-2xl font-semibold line-clamp-2">
                        {vehicle?.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-3">
                        {vehicle?.description}
                      </p>
                      <div className="flex w-full flex-row items-center justify-between space-y-2">
                        <p className="font-light text-gray-600">
                          Brand : {vehicle?.brand}
                        </p>
                        <span className="shrink-0 font-bold text-cyan-500">
                          Rs {vehicle?.price}
                          <span className="px-1 text-xs font-light">/day</span>
                        </span>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-sm capitalize text-gray-500">
                          Vehicle Type : {vehicle?.vehicle_type}
                        </span>
                        <span className="text-sm capitalize text-gray-500">
                          Model : {vehicle?.model}
                        </span>
                        <span className="text-sm capitalize text-gray-500">
                          Capacity : {vehicle?.capacity}
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(process.env.API_URL + "/api/v1/vehicles/");

  return {
    props: { data },
    revalidate: 1,
  };
};
