import Layout from "src/components/layout";
import { useState } from "react";
import { useAuth } from "../lib/auth";
import Link from "next/link";
import { GetServerSideProps } from "next";

type errors = {
  detail?: string;
};

export default function Login() {
  const page = {
    title: "LOGIN",
  };
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<errors>({});

  const submitForm = async (event) => {
    event.preventDefault();

    // console.log({ email, password, setErrors });
    login({ email, password, setErrors });
  };
  return (
    <Layout auth={false} title={page?.title}>
      <main className="flex flex-col">
        <section className="bg-black py-32">
          <div className=" mx-auto max-w-md rounded-lg border border-gray-900 bg-gray-900/60 p-12 shadow">
            <h2 className="text-center text-2xl font-bold text-white">
              {page?.title}
            </h2>
            <form
              onSubmit={submitForm}
              autoComplete="off"
              className="space-y-4"
            >
              <div>
                <label htmlFor="email" className="text-gray-300">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  className="mt-1 block w-full rounded-lg bg-gray-800 px-4 py-2 text-gray-400 focus:outline-none"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoFocus
                  autoComplete="off"
                />
                {"detail" in errors && (
                  <small className="text-red-500">{errors?.detail}</small>
                )}
              </div>

              <div>
                <label htmlFor="password" className="text-gray-300">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  className="mt-1 block w-full rounded-lg bg-gray-800 px-4 py-2 text-gray-400 focus:outline-none"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="flex justify-center pt-4">
                <button className="rounded-full border border-gray-800 px-8 py-2 text-sm text-white transition-all hover:bg-gray-100 hover:text-black sm:text-base">
                  Login
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link href="/register">
                  <a className="text-sm text-gray-600 underline hover:text-gray-500">
                    {"Don't have an account?"}
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-sm text-gray-600 underline hover:text-gray-500">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { access, refresh } = req.cookies;
  if (access && refresh) {
    res.statusCode = 302;
    res.setHeader("Location", "/dashboard");
  }
  return {
    props: {},
  };
};
