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
      <div className="px-4 pt-5 sm:px-6 space-y-3">
        <h3 className="text-xl leading-6 font-medium text-gray-900">
          Settings
        </h3>
        <ul className="flex flex-row text-gray-500  text-base space-x-1">
          {settings?.map((item, k) => (
            <li
              key={k}
              onClick={() => setSelected(item)}
              className={`${
                item.title === selected.title
                  ? "border-b-2 border-gray-400 text-gray-600"
                  : ""
              } px-3 py-2 cursor-pointer`}
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
      <div className="border-t text-[15px] border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">Full name</dt>
            <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">About</dt>
            <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
              <textarea
                className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
                rows={6}
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </dd>
          </div>
        </dl>
      </div>
      <div className="bg-gray-200 px-3 py-2 text-right">
        <button className="bg-gray-800 hover:bg-gray-800/95 text-white text-sm px-3 py-2 font-normal tracking-wider rounded-lg">
          Save
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
      <div className="border-t text-[15px] border-gray-200 min-h-[20vh] bg-gray-50">
        <dl>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">Password</dt>
            <dd className="mt-1 relative items-center flex text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
                type={type}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <svg
                className="w-6 h-6 absolute text-gray-500 right-2 items-center cursor-pointer hover:text-gray-600"
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
        <button className="bg-gray-800 hover:bg-gray-800/95 text-white text-sm px-3 py-2 font-normal tracking-wider rounded-lg">
          Save
        </button>
      </div>
    </>
  );
};
