import Link from "next/link";
import { useState } from "react";
import Layout from "src/components/layout";
import { useAuth } from "../lib/auth"
import { GetServerSideProps } from 'next'

type errors = {
  email?: string,
  password?: string,

}

export default function Login() {
  const page = {
    title: "Sign Up",
  };
  const { register } = useAuth()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");
  const [errors, setErrors] = useState<errors>({});

  const submitForm = async (event) => {
    event.preventDefault();
    // console.log({ name, email, password, re_password, setErrors });
    register({ name, email, password, re_password, setErrors })
  };
  return (
    <Layout auth={false} title={page?.title}>

      <main className="flex flex-col">
        <section className="bg-black py-10">
          <div className=" max-w-md mx-auto p-12 rounded-lg bg-gray-900/60 shadow border border-gray-900">
            <h2 className="text-center font-bold text-white text-2xl">
              {page?.title}
            </h2>
            <form
              onSubmit={submitForm}
              autoComplete="off"
              className="space-y-2"
            >
              <div>
                <label htmlFor="name" className="text-gray-200">
                  Name
                </label>

                <input
                  id="name"
                  type="name"
                  value={name}
                  className="block mt-1 w-full rounded-lg focus:outline-none px-4 py-2 bg-gray-800 text-gray-400"
                  onChange={(event) => setName(event.target.value)}
                  required
                  autoFocus
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-gray-200">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  className="block mt-1 w-full rounded-lg focus:outline-none px-4 py-2 bg-gray-800 text-gray-400"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoFocus
                  autoComplete="off"
                />
                {"email" in errors && <small className="text-red-500">{errors?.email}</small>}
              </div>

              <div>
                <label htmlFor="password" className="text-gray-200">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  className="block mt-1 w-full rounded-lg focus:outline-none px-4 py-2 bg-gray-800 text-gray-400"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="off"
                />
                {"password" in errors && <small className="text-red-500">{errors?.password}</small>}
              </div>

              <div>
                <label htmlFor="re_password" className="text-gray-200">
                  Confirm Password
                </label>

                <input
                  id="re_password"
                  type="password"
                  value={re_password}
                  className="block mt-1 w-full rounded-lg focus:outline-none px-4 py-2 bg-gray-800 text-gray-400"
                  onChange={(event) => setRe_password(event.target.value)}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="flex justify-center pt-4">
                <button className="text-white text-sm sm:text-base px-8 py-2 rounded-full hover:bg-gray-100 border border-gray-800 hover:text-black transition-all">
                  Signup
                </button>
              </div>

              <div className="flex items-center justify-end mt-4">
                <Link href="/login">
                  <a className="underline text-sm text-gray-600 hover:text-gray-500">
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
  const { access, refresh } = req.cookies
  if (access && refresh) {
    res.statusCode = 302
    res.setHeader('Location', '/dashboard')
  }
  return {
    props: {},
  }
}