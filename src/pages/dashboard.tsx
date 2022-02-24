import { GetServerSideProps } from "next";
import Layout from "src/components/dashboard/layout";
import axios from "src/lib/axios";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
import DashboardContent from "src/components/dashboard/dashboard_content";
import DashboardSkeleton from "src/components/dashboard/dashboard_skeleton";
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
        {user ? <DashboardContent /> : <DashboardSkeleton />}
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { access, refresh } = req.cookies;
  if (!access || !refresh) {
    console.log("Hello");
    res.statusCode = 302;
    res.setHeader("Location", "/login");
  } else {
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
  }
  return { props: {} };
};
