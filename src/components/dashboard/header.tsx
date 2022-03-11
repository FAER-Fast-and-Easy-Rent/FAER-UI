import React, { useState } from "react";
import Link from "next/link";
import Icon from "../icon";
import { useAuth } from "src/lib/auth";
type Props = { user: { email: string; name: string } };
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
export default function Header({ user }: Props) {
  const [button, setButton] = useState(false);
  const nav_items = [
    { title: "Reservations", is_home: true, link: "/" },
    { title: "Activity", link: "/" },
    { title: "Settings", link: "/" },
  ];
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <header className="sticky top-0 z-10 flex w-full flex-col place-content-center bg-white shadow-sm">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 xl:px-0">
        <div className="flex items-center space-x-16">
          <Icon />
          <ul className="relative hidden items-center font-normal text-gray-800 sm:flex">
            {/* {nav_items.map((item, idx) => (
                space-x-2 sm:space-x-4 md:space-x-5 lg:space-x-10
                        <li
                            className={`${item?.is_home ? "text-gray-800" : ""
                                } hover:text-gray-900 cursor-pointer`}
                            key={idx}
                        >
                            {item?.title}
                        </li>
                    ))} */}

            <input
              className=" rounded-lg py-1 pl-10 text-base font-normal focus:border-indigo-500 focus:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-96"
              type="text"
              placeholder="Search"
            />
            <svg
              className="absolute left-2 h-5 w-5 text-gray-600 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </ul>
        </div>
        <div
          className=" flex shrink-0 cursor-pointer items-center space-x-2 text-gray-600 transition-all hover:text-gray-800"
          onClick={() => setButton(!button)}
        >
          <span className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-500 via-violet-500 to-indigo-600"></span>
          <span>{user?.name}</span>
          <span>
            <svg
              className="h-6 w-6 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d={
                  !button
                    ? "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    : "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                }
                clipRule="evenodd"
              />
            </svg>
          </span>
          {button && (
            <div
              onClick={handleLogout}
              className="absolute -bottom-8 rounded border bg-gray-50 px-4 py-2 shadow-sm hover:bg-gray-100"
            >
              <span className="cursor-pointer text-gray-800">Logout</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
