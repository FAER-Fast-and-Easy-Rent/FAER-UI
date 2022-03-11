import Link from "next/link";
import Theme from "./theme";

export default function Header({ auth }) {
  const top_bar = "fast and easy rental service";
  const logo = {
    title: "FAER",
    icon: (
      <svg
        className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 via-fuchsia-600 to-indigo-800 p-1 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };
  const nav_items = [
    { title: "Find your service", is_home: true, link: "/" },
    { title: "Features", link: "/" },
    { title: "Rooms", link: "/rooms" },
    { title: "Vehicles", link: "/vehicles" },
  ];
  const button_content = {
    title: auth ? "Dashboard" : "Sign In",
    link: auth ? "/dashboard" : "/login",
  };

  return (
    <>
      <p className="cursor-pointer bg-gray-50 py-2 text-center text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-gray-400 dark:bg-black">
        {top_bar}
      </p>
      <header className="shadow-xs sticky top-0 z-10 flex w-full flex-col place-content-center border-t border-b border-gray-200 bg-gray-50 dark:border-gray-900 dark:bg-black">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 xl:px-0">
          <div className="flex items-center space-x-16">
            <Link href="/">
              <a className="flex flex-shrink-0 items-center space-x-2 text-3xl font-bold uppercase tracking-wider text-black transition-all hover:opacity-95 dark:text-white">
                <span>{logo.icon}</span>
                <span>{logo.title}</span>
              </a>
            </Link>
            <ul className="hidden space-x-2 font-normal text-gray-600 dark:text-gray-200 sm:flex sm:space-x-4 md:space-x-5 lg:space-x-10">
              {nav_items.map((item, idx) => (
                <li
                  className={`${
                    item?.is_home ? "text-gray-800 dark:text-gray-200" : ""
                  } cursor-pointer hover:text-gray-800 dark:hover:text-white`}
                  key={idx}
                >
                  <Link href={item?.link}>
                    <a>{item?.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Theme />
            <Link href={button_content?.link}>
              <a>
                <button className="rounded-full border border-gray-400 px-8 py-2 text-sm text-gray-600 transition-all hover:bg-gray-100 hover:text-black dark:border-gray-800 dark:text-white dark:hover:bg-gray-100 sm:text-base">
                  {button_content?.title}
                </button>
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
