import Layout from "src/components/layout";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const page = {
    title: "LOGIN",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState([]);

  const submitForm = async (event) => {
    event.preventDefault();

    console.log({ email, password, remember, setErrors });
  };
  return (
    <Layout title={page?.title}>
      <main className="flex flex-col">
        <section className="bg-black py-32">
          <div className=" max-w-md mx-auto p-12 rounded-lg bg-gray-900/60 shadow border border-gray-900">
            <h2 className="text-center font-bold text-white text-2xl">
              {page?.title}
            </h2>
            <form onSubmit={submitForm} autoComplete="off">
              <div>
                <label htmlFor="email" className="text-gray-200">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  className="block mt-1 w-full rounded-lg focus:outline-none px-4 py-1"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoFocus
                  autoComplete="off"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="text-gray-200">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  className="block mt-1 w-full rounded-lg focus:outline-none px-4 py-1"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>

              <div className="block mt-4">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    name="remember"
                    checked={remember}
                    onChange={(event) => setRemember(!remember)}
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />

                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
              </div>
              <div className="flex justify-center pt-4">
                <button className="text-white text-sm sm:text-base px-8 py-2 rounded-full hover:bg-gray-100 border border-gray-800 hover:text-black transition-all">
                  Login
                </button>
              </div>

              <div className="flex items-center justify-end mt-4">
                <Link href="/">
                  <a className="underline text-sm text-gray-600 hover:text-gray-900">
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
