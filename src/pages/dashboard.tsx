import { GetServerSideProps } from "next";
import Layout from "src/components/dashboard/layout";
import axios from "src/lib/axios";
import useSWR from "swr";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
type User = { user?: any; access?: any };
export default function Account({ data }) {
  const page = {
    title: "Dashboard",
  };
  const user: User = useRecoilValue(userState);

  const dashboard_content = {
    h1: "Welcome to the Dashboard.",
    description: "Fast And Easy Rental Service",
  };
  const userConfig = {
    headers: {
      Authorization: "Bearer " + user?.access,
    },
  };
  const { data: reservations, error } = useSWR(
    ["/api/v1/reservations/", userConfig],
    axios
  );
  return (
    <Layout user={user ? user?.user : data?.user} title={page?.title}>
      <main className="flex flex-col bg-gray-100 space-y-2 py-12">
        <section className="w-full max-w-7xl mx-auto px-8 sm:px-0 pt-10">
          <div className=" flex flex-col text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              {dashboard_content?.h1}
            </h1>
            <p className="text-gray-500 font-light">
              {dashboard_content?.description}
            </p>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-8 sm:px-0 py-8">
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 sm:gap-10">
            <div className="hidden sm:flex flex-col space-y-6">
              <ul className="flex flex-col shrink-0 space-y-4">
                {/* <li className="flex shrink-0 space-x-3 text-gray-600 text-base hover:text-indigo-600 cursor-pointer items-center">
                  <span><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></span>
                  <span> Icon Content</span>
                </li> */}
              </ul>
              <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
              <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
              <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
              <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
              <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
              <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
              <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
            </div>
            <div className="col-span-3 bg-white shadow-sm rounded-lg p-6 space-y-2">
              <div className="bg-blue-200 h-20 animate-pulse rounded-lg"></div>
              <div className="bg-indigo-200 h-20 animate-pulse rounded-lg"></div>
              <div className="bg-red-200 h-20 animate-pulse rounded-lg"></div>
              <div className="bg-pink-200 h-20 animate-pulse rounded-lg"></div>
            </div>
          </div>
        </section>
        <section className="w-full max-w-7xl mx-auto px-8 sm:px-0 py-10">
          <h2 className="font-bold text-xl py-4">Reservations</h2>
          <div className="flex flex-col bg-white rounded-lg p-6 gap-1">
            <div className="flex flex-row justify-around bg-gray-50 p-2 font-medium">
              <div>S.N.</div>
              <div>Start Date</div>
              <div>End Date</div>
              <div>Total</div>
            </div>
            {reservations &&
              reservations?.data.map((reservation, k) => (
                <div
                  key={k}
                  className="flex flex-row justify-around p-2 hover:bg-gray-50/50"
                >
                  <div>{reservation?.reservation_id}</div>
                  <div>
                    {new Date(reservation?.start_date).toLocaleDateString()}
                  </div>
                  <div>
                    {new Date(reservation?.end_date).toLocaleDateString()}
                  </div>
                  <div>{reservation?.total}</div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { access, refresh } = req.cookies;
  if (!access || !refresh) {
    res.statusCode = 302;
    res.setHeader("Location", "/login");
  }
  const userConfig = {
    headers: {
      Authorization: "Bearer " + access,
    },
  };

  const { data } = await axios.get(
    process.env.API_URL + "/api/v1/auth/user/me",
    userConfig
  );
  return {
    props: { data },
  };
};
