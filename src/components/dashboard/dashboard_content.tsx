import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
import Profile from "./profile";
import Reservation from "./reservations";
type Props = {};
type User = { user?: any; access?: any };

export default function DashboardContent({}: Props) {
  const user: User = useRecoilValue(userState);
  const content = [
    {
      title: "Dashboard",
      visibility: true,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      component: "Hello",
    },
    {
      title: "Services",
      visibility: user?.user?.is_renter,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
      ),
      component: "Hello",
    },
    {
      title: "Reservations",
      visibility: true,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      ),
      component: <Reservation />,
    },
    {
      title: "Profile",
      visibility: true,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      ),
      component: <Profile />,
    },
    {
      title: "Settings",
      visibility: true,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      component: "Hello",
    },
  ];
  const [selected, setSelected] = useState(content[0]);
  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-8 sm:px-0 py-8 transition-all">
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 sm:gap-10">
          <div className="hidden sm:flex flex-col space-y-6">
            {content &&
              user &&
              content
                .filter((item) => item?.visibility === true)
                ?.map((item, k) => (
                  <div
                    key={k}
                    onClick={() => setSelected(item)}
                    className={`${
                      item.title === selected.title
                        ? "bg-gray-200/90 text-gray-800 font-medium"
                        : " text-gray-500"
                    } cursor-pointer hover:bg-gray-200/80 hover:text-gray-800 hover:shadow-sm py-2 pl-4 space-x-2 items-center rounded-lg flex flex-row`}
                  >
                    <span>{item?.icon}</span>
                    <span>{item?.title}</span>
                  </div>
                ))}
          </div>
          <div className="col-span-3 bg-white shadow-sm rounded-xl space-y-2 min-h-[30vh]">
            {selected?.component}
          </div>
        </div>
      </section>
    </>
  );
}
