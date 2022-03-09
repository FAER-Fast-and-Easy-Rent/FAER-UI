import React from "react";
import { useReservations } from "src/lib/utils";

type Props = {};

export default function DashboardProgress({}: Props) {
  const { reservations } = useReservations();
  const content = [
    {
      title: "Content",
      icon: (
        <svg
          className="w-16 h-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      number: 450,
    },
    {
      title: "Reservations",
      icon: (
        <svg
          className="w-16 h-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      ),
      number: reservations?.data.length,
    },
    {
      title: "Timeline",
      icon: (
        <svg
          className="w-16 h-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      number: 450,
    },
    {
      title: "Progress",
      icon: (
        <svg
          className="w-16 h-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
            clipRule="evenodd"
          />
        </svg>
      ),
      number: 450,
    },
  ];
  return (
    <div className="p-8 flex h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {content?.map((item, k) => (
          <div key={k} className="flex flex-row items-center cursor-pointer hover:shadow-sm hover:bg-gray-50  px-6 py-6 shadow-sm justify-between bg-gray-100/80 rounded-xl">
            <span className="text-purple-600">{item?.icon}</span>
            <span className="text-lg font-smibold">{item?.title}</span>
            <span className="text-2xl font-bold">{item?.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
