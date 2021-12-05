import Link from "next/link";
export default function Header() {
  const top_bar = "fast and easy rental service";
  const logo = {
    title: "FAER",
    icon: (
      <svg
        className="w-8 h-8 text-white bg-gradient-to-br from-blue-600 via-fuchsia-600 to-indigo-800 rounded-full p-1"
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
    { title: "Company", link: "/" },
    { title: "Pricing", link: "/" },
  ];
  const button_content = "Sign In";
  return (
    <>
      <p className="text-sm tracking-widest uppercase font-medium text-center text-gray-500 hover:text-gray-400 transition-all py-2 bg-black cursor-pointer">
        {top_bar}
      </p>
      <header className="flex flex-col bg-black sticky top-0 z-10 w-full place-content-center border-t border-b border-gray-900">
        <nav className="flex justify-between px-4 py-4 xl:px-0 w-full max-w-7xl mx-auto items-center">
          <div className="flex space-x-16 items-center">
            <Link href="/">
              <a className="flex flex-shrink-0 items-center space-x-2 text-3xl hover:opacity-95 transition-all font-bold text-white uppercase tracking-wider">
                  <span>{logo.icon}</span>
                  <span>{logo.title}</span>
              </a>
            </Link>
            <ul className="hidden sm:flex space-x-2 sm:space-x-4 md:space-x-5 lg:space-x-10 font-normal text-gray-200">
              {nav_items.map((item, idx) => (
                <li
                  className={`${
                    item?.is_home ? "text-gray-200" : ""
                  } hover:text-white cursor-pointer`}
                  key={idx}
                >
                  {item?.title}
                </li>
              ))}
            </ul>
          </div>
          <button className="text-white text-sm sm:text-base px-8 py-2 rounded-full hover:bg-gray-100 border border-gray-800 hover:text-black transition-all">
            {button_content}
          </button>
        </nav>
      </header>
    </>
  );
}
