import Layout from "src/components/layout";
import { GetServerSideProps } from 'next'
import Image from "next/image"
import axios from "src/lib/axios";
import useSWR from "swr";


export default function Home({ authenticated}) {
    const page = {
        title: "ROOMS",
    };
    const vehicles_content = {
        width: 1920,
        height: 1080

    }
    const { data, error } = useSWR('/api/v1/vehicles', axios)
    console.log(data?.data)
    return (
        <Layout auth={authenticated} title={page?.title}>
            <main className="flex flex-col bg-black space-y-2 py-12">
                <section className="w-full max-w-7xl mx-auto px-8 lg:px-0 pt-10 min-h-[84vh]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data?.data.slice(0, 15).map((vehicle,k) => (
                            <div key={k} className="bg-slate-800 rounded-xl ">
                                <div className="overflow-hidden">
                                    <Image
                                        className="rounded-t-lg hover:shadow-md hover:opacity-95 transition-all"
                                        src={vehicle?.images[0]?.url}
                                        placeholder="blur"
                                        blurDataURL={vehicle?.images[0]?.url}
                                        alt={vehicle?.images[0]?.file_name}
                                        width={vehicles_content?.width}
                                        height={vehicles_content?.height}

                                    />
                                </div>
                                <div className="text-gray-100 space-y-1 flex flex-col px-4 py-2">
                                    <div className="flex flex-row justify-between w-full items-baseline">
                                        <p className="font-semibold text-xl">{vehicle?.name}</p>
                                        <span className="font-bold text-cyan-500 shrink-0">Rs {vehicle?.price}</span>
                                    </div>
                                    <p className="text-gray-400 font-light">Apartment • 1 bedroom • 26 m²</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
}


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const { access, refresh } = req.cookies
    let authenticated = false

    if (access && refresh) {
        authenticated = true
    }
    return {
        props: { authenticated },
    }
}