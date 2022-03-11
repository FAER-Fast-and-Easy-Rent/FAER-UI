import Image from "next/image";
import car from "public/tesla_car.png";
export default function HeroSection() {
  const hero_content: { [key: string]: any } = {
    title: "Rental Service \n can be experienced.",
    description: "Find your best match.",
  };
  const search_content = {
    placeholder: "Enter your search query.",
    search_icon: (
      <svg
        className="h-10 w-10 cursor-pointer rounded-full bg-gradient-to-br from-gray-200 to-gray-400  p-3 text-gray-600 dark:from-blue-700 dark:to-indigo-700 dark:text-white"
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
        className="h-8 w-8 text-gray-400"
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
    <section className="relative flex h-[85vh] items-center overflow-hidden bg-gray-100 py-16 text-gray-800 dark:bg-black dark:text-white">
      <div className="absolute -right-0 -bottom-20 sm:-right-1/4 sm:-bottom-1/4">
        <Image
          alt="Car"
          className="opacity-20 dark:opacity-40 "
          src={car}
          placeholder="blur"
          priority
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center space-y-16 px-4 text-left xl:px-0">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold md:text-6xl lg:text-8xl">
            {hero_content?.title.split("\n")[0]}
            <br />
            {hero_content?.title.split("\n")[1]}
          </h1>
          <p className=" max-w-2xl text-gray-400 md:text-lg">
            {hero_content?.description}
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-2xl flex-row items-center justify-between rounded-full border bg-gray-100 p-2 shadow-md dark:bg-gray-200">
          <div className="flex w-full items-center px-2">
            {search_content?.location_icon}
            <input
              type="text"
              className=" w-full rounded-full border border-none bg-gray-100 py-2 px-3 text-sm font-normal text-gray-600 focus:outline-none dark:bg-gray-200"
              placeholder={search_content?.placeholder}
            />
          </div>
          {search_content?.search_icon}
        </div>
      </div>
    </section>
  );
}
