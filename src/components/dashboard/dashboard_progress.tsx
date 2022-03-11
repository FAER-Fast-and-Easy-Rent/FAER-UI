import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
import {
  useHostReservationsData,
  useReservations,
  useServices,
} from "src/lib/utils";
type User = { user?: any; access?: any };
type Props = {};

export default function DashboardProgress({}: Props) {
  const { reservations } = useReservations();
  const { services } = useServices();
  const user: User = useRecoilValue(userState);
  const { total_sales, total_sales_amt } = useHostReservationsData();
  const content = [
    {
      title: "Your Total Sales",
      icon: (
        <svg
          className="h-16 w-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      visibility: user?.user?.is_renter,
      number: total_sales,
    },
    {
      title: "Sales Amt",
      icon: (
        <svg
          className="h-16 w-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      visibility: user?.user?.is_renter,
      number: "Rs " + total_sales_amt,
    },
    {
      title: "Total Room Services",
      icon: (
        <svg
          className="h-16 w-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      visibility: user?.user?.is_renter,
      number: services?.data?.rooms?.length,
    },
    {
      title: "Total Vehicle Services",
      icon: (
        <svg
          className="h-16 w-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      visibility: user?.user?.is_renter,
      number: services?.data?.vehicles?.length,
    },
    {
      title: "Total Reservations",
      icon: (
        <svg
          className="h-16 w-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      ),
      visibility: true,
      number: reservations?.data.length,
    },
    {
      title: "Reservations Amt",
      icon: (
        <svg
          className="h-16 w-16"
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
      visibility: true,
      number: reservations?.data
        ?.map((item) => item.total)
        .reduce((prev, curr) => prev + curr, 0),
    },
    {
      title: "Room Reservations",
      icon: (
        <svg
          className="h-16 w-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      visibility: !user?.user?.is_renter,
      number: reservations?.data?.filter(
        (item) => item?.content_type?.model == "room"
      ).length,
    },
    {
      title: "Vehicle Reservations",
      icon: (
        <svg
          className="h-16 w-16"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      visibility: !user?.user?.is_renter,
      number: reservations?.data?.filter(
        (item) => item?.content_type?.model == "vehicle"
      ).length,
    },
  ];
  return (
    <div className="flex h-full p-8">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {content
          ?.filter((item) => item?.visibility === true)
          ?.map((item, k) => (
            <div
              key={k}
              className="flex cursor-pointer flex-row items-center justify-between rounded-xl  bg-gray-100/80 px-6 py-6 shadow-sm hover:bg-gray-50 hover:shadow-sm"
            >
              <span className="text-purple-600">{item?.icon}</span>
              <span className="font-smibold text-lg">{item?.title}</span>
              <span className="text-2xl font-bold">{item?.number}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
