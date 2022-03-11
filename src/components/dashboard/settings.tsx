import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
type Props = {};
type User = { user?: any; access?: any };

export default function Settings({}: Props) {
  const settings = [
    {
      title: "General",
      component: <General />,
    },
    {
      title: "Password",
      component: <Password />,
    },
  ];
  const [selected, setSelected] = useState(settings[0]);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg">
      <div className="space-y-3 px-4 pt-5 sm:px-6">
        <h3 className="text-xl font-medium leading-6 text-gray-900">
          Settings
        </h3>
        <ul className="flex flex-row space-x-1  text-base text-gray-500">
          {settings?.map((item, k) => (
            <li
              key={k}
              onClick={() => setSelected(item)}
              className={`${
                item.title === selected.title
                  ? "border-b-2 border-gray-400 text-gray-600"
                  : ""
              } cursor-pointer px-3 py-2`}
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
      {selected?.component}
    </div>
  );
}

const General = () => {
  const user: User = useRecoilValue(userState);
  const about_content =
    "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim\
incididunt cillum culpa consequat. Excepteur qui ipsum aliquip\
consequat sint. Sit id mollit nulla mollit nostrud in ea officia\
proident. Irure nostrud pariatur mollit ad adipisicing\
reprehenderit deserunt qui eu.";
  const [name, setName] = useState(user?.user?.name);
  const [about, setAbout] = useState(about_content);
  return (
    <>
      <div className="border-t border-gray-200 text-[15px]">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">Full name</dt>
            <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
              <input
                className="w-full rounded-lg border px-3 py-2 focus:border-indigo-500 focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">About</dt>
            <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
              <textarea
                className="w-full rounded-lg border px-3 py-2 focus:border-indigo-500 focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                rows={6}
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </dd>
          </div>
        </dl>
      </div>
      <div className="bg-gray-200 px-3 py-2 text-right">
        <button className="rounded-lg bg-gray-800 px-3 py-2 text-sm font-normal tracking-wider text-white hover:bg-gray-800/95">
          Update
        </button>
      </div>
    </>
  );
};

const Password = () => {
  const [password, setPassword] = useState("password");
  const [type, setType] = useState("password");
  return (
    <>
      <div className="min-h-[28vh] border-t border-gray-200 bg-gray-50 text-[15px]">
        <dl>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">Password</dt>
            <dd className="relative mt-1 flex items-center text-gray-900 sm:col-span-2 sm:mt-0">
              <input
                className="w-full rounded-lg border px-3 py-2 focus:border-indigo-500 focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                type={type}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <svg
                className="absolute right-2 h-6 w-6 cursor-pointer items-center text-gray-500 hover:text-gray-600"
                fill="none"
                onClick={() =>
                  setType(type === "password" ? "text" : "password")
                }
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {type === "password" ? (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </>
                ) : (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </>
                )}
              </svg>
            </dd>
          </div>
        </dl>
      </div>
      <div className="bg-gray-200 px-3 py-2 text-right">
        <button className="rounded-lg bg-gray-800 px-3 py-2 text-sm font-normal tracking-wider text-white hover:bg-gray-800/95">
          Update
        </button>
      </div>
    </>
  );
};
