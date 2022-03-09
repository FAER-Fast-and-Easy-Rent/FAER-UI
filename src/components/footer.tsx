import React from "react";

export default function Footer() {
  const footer_content = {
    copyright: "© FAER 2022 . All rights reserved.",
    policy: "Privacy",
    terms: "Terms & Conditions",
    logo: {
      title: "FAER",
      description: "fast and easy rental service",
      icon: (
        <svg
          className="w-12 h-12 text-white bg-gradient-to-br from-blue-600 via-fuchsia-600 to-indigo-800 rounded-full p-1"
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
    },
    nav_title: "Links",
    nav_items: [
      { title: "Find your service", is_home: true, link: "/" },
      { title: "Features", link: "/" },
      { title: "Company", link: "/" },
      { title: "Pricing", link: "/" },
    ],
    community: {
      tiltle: "Community",
      description: "Join Our Facebook Group With Over 2,000 Happy Customers.",
    },
  };
  return (
    <footer className="border-t border-gray-900 bg-black ">
      <div className="w-full px-4 xl:px-0 max-w-7xl mx-auto">
        <section className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between py-16">
          <div className="flex flex-col text-gray-400 cursor-pointer">
            <span className="pb-2">{footer_content?.logo?.icon}</span>
            <h2 className="text-4xl font-bold text-white">
              {footer_content?.logo?.title}
            </h2>
            <p className="capitalize">{footer_content?.logo?.description}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-medium text-gray-200">
              {footer_content?.nav_title}
            </h2>
            <ul className="flex flex-col font-normal text-gray-500">
              {footer_content?.nav_items.map((item, idx) => (
                <li className="hover:text-gray-400 cursor-pointer" key={idx}>
                  {item?.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-medium text-gray-200">
              {footer_content?.community?.tiltle}
            </h2>
            <p className="text-gray-400 max-w-xs">{footer_content?.community?.description}</p>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 justify-between border-t border-gray-900 py-10">
          <span className="text-gray-400">{footer_content?.copyright}</span>
          <p className="text-gray-700 space-x-8">
            <span>{footer_content?.policy}</span>
            <span>{footer_content?.terms}</span>
          </p>
        </section>
      </div>
    </footer>
  );
}
