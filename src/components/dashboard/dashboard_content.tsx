import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
import DashboardProgress from "./dashboard_progress";
import HostReservations from "./host_reservation";
import Profile from "./profile";
import Reservation from "./reservations";
import Services from "./services/services";
import Settings from "./settings";
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
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
            clipRule="evenodd"
          />
        </svg>
      ),
      component: <DashboardProgress />,
    },
    {
      title: "Services",
      visibility: user?.user?.is_renter,
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
      ),
      component: <Services />,
    },
    {
      title: "Host Reservations",
      visibility: user?.user?.is_renter,
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      component: <HostReservations />,
    },
    {
      title: "Reservations",
      visibility: true,
      icon: (
        <svg
          className="h-6 w-6"
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
          className="h-6 w-6"
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
          className="h-6 w-6"
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
      component: <Settings />,
    },
  ];
  const [selected, setSelected] = useState(content[0]);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-8 py-8 transition-all sm:px-0">
        <div className="grid w-full grid-cols-1 sm:grid-cols-4 sm:gap-10">
          <div className="hidden flex-col space-y-6 sm:flex">
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
                        ? "bg-gray-200/90 font-medium text-gray-800"
                        : " text-gray-500"
                    } flex cursor-pointer flex-row items-center space-x-2 rounded-lg py-2 pl-4 hover:bg-gray-200/80 hover:text-gray-800 hover:shadow-sm`}
                  >
                    <span>{item?.icon}</span>
                    <span>{item?.title}</span>
                  </div>
                ))}
          </div>
          <div className="col-span-3 min-h-[30vh] space-y-2 rounded-xl bg-white shadow-sm">
            {selected?.component}
          </div>
        </div>
      </section>
      <div
        className={`${
          menu
            ? `translate-x-0 transform transition duration-200 ease-in-out`
            : `-translate-x-full transform transition duration-200 ease-in-out`
        } absolute -top-10 z-[5] flex h-full min-h-screen flex-col bg-gray-200/40 px-2 backdrop-blur-lg sm:hidden`}
      >
        <div className="flex flex-col space-y-6 pt-14">
          {content &&
            user &&
            content
              .filter((item) => item?.visibility === true)
              ?.map((item, k) => (
                <div
                  key={k}
                  onClick={() => {
                    setSelected(item);
                    setMenu((v) => !v);
                  }}
                  className={`${
                    item.title === selected.title
                      ? "bg-gray-200/90 font-medium text-gray-800"
                      : " text-gray-500"
                  } flex cursor-pointer flex-row items-center space-x-2 rounded-lg py-2 pl-4 hover:bg-gray-200/80 hover:text-gray-800 hover:shadow-sm`}
                >
                  <span>{item?.icon}</span>
                  <span>{item?.title}</span>
                </div>
              ))}
        </div>
      </div>
      <div className="sm:hidden">
        <button
          onClick={() => setMenu((v) => !v)}
          className={`${
            menu ? ` ` : `hidden`
          } fixed inset-0 h-full w-full bg-gray-100/10 backdrop-blur-[1px]`}
        ></button>
        <button
          onClick={() => setMenu((v) => !v)}
          className="fixed right-2 bottom-[70px] rounded-full bg-slate-800/20 p-3 shadow backdrop-blur-sm focus:outline-none"
        >
          <svg
            className="scale-80 h-4 w-4 transform text-slate-600 transition-all duration-500 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={`${menu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}`}
            />
          </svg>
        </button>
      </div>
    </>
  );
}
