import { Key } from "react";

export default function HeroSection() {
  const hero_content: { [key: string]: any } = {
    title: "Rental Service \n can be experienced.",
    description: "Find your best match.",
  };
  const search_content = {
    placeholder: "Enter your search query.",
    search_icon: (
      <svg
        className="w-10 h-10 rounded-full p-3 text-white-600 bg-gradient-to-br from-blue-700 to-indigo-700"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
    ),
    location_icon: (
      <svg
        className="w-8 h-8 text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };
  return (
    <section className="flex bg-black h-[85vh] items-center py-16 text-white relative overflow-hidden">
      <img
        alt="Car"
        className="absolute -right-0 -bottom-20 sm:-right-1/4 sm:-bottom-1/4 opacity-40"
        src="/tesla_car.png"
      />
      <div className="flex flex-col relative justify-center text-left space-y-16 px-4 xl:px-0 w-full max-w-7xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold">
            {hero_content?.title.split("\n")[0]}
            <br />
            {hero_content?.title.split("\n")[1]}
          </h1>
          <p className=" max-w-2xl md:text-lg text-gray-400">{hero_content?.description}</p>
        </div>
        <div className="flex flex-row max-w-2xl p-2 mx-auto items-center justify-between bg-gray-100 w-full rounded-full shadow-md">
          <div className="flex  items-center px-2">
            {search_content?.location_icon}
            <input type="text" className=" px-2 bg-gray-100 focus:outline-none text-gray-600 text-sm font-normal" placeholder={search_content?.placeholder} />
          </div>
          {search_content?.search_icon}
        </div>
      </div>
    </section>
  );
}
