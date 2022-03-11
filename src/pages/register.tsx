import Link from "next/link";
import { useState } from "react";
import Layout from "src/components/layout";
import { useAuth } from "../lib/auth";
import { GetServerSideProps } from "next";

type errors = {
  email?: string;
  password?: string;
};

export default function Login() {
  const page = {
    title: "Sign Up",
  };
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");
  const [errors, setErrors] = useState<errors>({});

  const submitForm = async (event) => {
    event.preventDefault();
    // console.log({ name, email, password, re_password, setErrors });
    register({ name, email, password, re_password, setErrors });
  };
  return (
    <Layout title={page?.title}>
      <main className="flex flex-col">
        <section className="bg-gray-100 py-10 dark:bg-black">
          <div className=" mx-auto max-w-md rounded-lg border bg-gray-50 p-12 shadow dark:border-gray-900 dark:bg-gray-900/60">
            <h2 className="text-center text-2xl font-bold text-gray-700 dark:text-white">
              {page?.title}
            </h2>
            <form
              onSubmit={submitForm}
              autoComplete="off"
              className="space-y-2"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-gray-700 dark:text-gray-200"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="name"
                  value={name}
                  className="mt-1 block w-full rounded-lg bg-gray-200 px-4 py-2 text-gray-600 focus:outline-none dark:bg-gray-800 dark:text-gray-400"
                  onChange={(event) => setName(event.target.value)}
                  required
                  autoFocus
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  className="mt-1 block w-full rounded-lg bg-gray-200 px-4 py-2 text-gray-600 focus:outline-none dark:bg-gray-800 dark:text-gray-400"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoFocus
                  autoComplete="off"
                />
                {<small className="text-red-500">{errors?.email}</small>}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  className="mt-1 block w-full rounded-lg bg-gray-200 px-4 py-2 text-gray-600 focus:outline-none dark:bg-gray-800 dark:text-gray-400"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="off"
                />
                {<small className="text-red-500">{errors?.password}</small>}
              </div>

              <div>
                <label
                  htmlFor="re_password"
                  className="text-gray-700 dark:text-gray-200"
                >
                  Confirm Password
                </label>

                <input
                  id="re_password"
                  type="password"
                  value={re_password}
                  className="mt-1 block w-full rounded-lg bg-gray-200 px-4 py-2 text-gray-600 focus:outline-none dark:bg-gray-800 dark:text-gray-400"
                  onChange={(event) => setRe_password(event.target.value)}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="flex justify-center pt-4">
                <button className="rounded-full border border-gray-800 px-8 py-2 text-sm text-gray-600 transition-all hover:bg-gray-100 hover:text-black dark:text-white sm:text-base">
                  Signup
                </button>
              </div>

              <div className="mt-4 flex items-center justify-end">
                <Link href="/login">
                  <a className="text-sm text-gray-600 underline hover:text-gray-500">
                    Already have an account?
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
