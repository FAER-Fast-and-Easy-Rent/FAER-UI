import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

export default function BottomNavBar({}: Props) {
  const router = useRouter();
  const nav_items = [
    {
      title: "Home",
      is_home: true,
      link: "/",
      icon: (
        <svg
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      title: "Rooms",
      link: "/rooms",
      icon: (
        <svg
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      ),
    },
    {
      title: "Vehicles",
      link: "/vehicles",
      icon: (
        <svg
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
    },
  ];
  return (
    <div className="fixed bottom-0 w-full border-t bg-gray-50 shadow-sm dark:border-gray-800 dark:bg-black  sm:hidden">
      <div className="grid w-full grid-cols-3 items-center justify-between gap-2 py-2">
        {nav_items?.map((item, k) => (
          <Link href={item?.link} key={k}>
            <a
              className={`flex flex-col items-center space-y-1 ${
                router.pathname === item?.link
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-gray-500"
              }`}
            >
              <span>{item?.icon}</span>
              <span className="text-xs">{item?.title}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
