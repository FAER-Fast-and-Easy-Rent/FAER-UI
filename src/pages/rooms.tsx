import Layout from "src/components/layout";
import { GetServerSideProps } from 'next'
import Image from "next/image"

export default function Home({ authenticated }) {
    const page = {
        title: "ROOMS",
    };
    const rooms_content = {
        thumbnail_url: "https://housinganywhere.imgix.net/room/1763628/98202aef-1282-4154-b561-fcc05d9b37c3.jpg?ixlib=react-9.2.0&auto=format&fit=clip&w=1946",
        title: "Alfred-Jung-Straße",
        width: 1920,
        height: 1080

    }
    return (
        <Layout auth={authenticated} title={page?.title}>
            <main className="flex flex-col bg-black space-y-2 py-12">
                <section className="w-full max-w-7xl mx-auto px-8 lg:px-0 pt-10 min-h-[84vh]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from(Array(9).keys()).map((k) => (
                            <div key={k} className="bg-slate-800 rounded-xl ">
                                <div className="overflow-hidden">
                                    <Image
                                        className="rounded-t-lg hover:shadow-md hover:opacity-95 transition-all"
                                        src={rooms_content?.thumbnail_url}
                                        placeholder="blur"
                                        blurDataURL={rooms_content?.thumbnail_url}
                                        alt={rooms_content?.title}
                                        width={rooms_content?.width}
                                        height={rooms_content?.height}
                                        loading="eager"
                                    />
                                </div>
                                <div className="text-gray-100 space-y-1 flex flex-col px-4 py-2">
                                    <div className="flex flex-row justify-between w-full items-center">
                                        <p className="font-semibold text-xl">{rooms_content?.title}</p>
                                        <span className="font-bold text-cyan-500">$400</span>
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