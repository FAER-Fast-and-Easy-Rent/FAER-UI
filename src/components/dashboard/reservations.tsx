import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useReservations } from "src/lib/utils";

export default function Reservation() {
  const { reservations } = useReservations();
  return (
    <section className="w-full">
      <div className="border-b px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-medium leading-6 text-gray-900">
          Reservations
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Your reservations.
        </p>
      </div>
      <div className="flex flex-col space-y-4 rounded-lg bg-white">
        {reservations &&
          reservations?.data.map((reservation, k) => (
            <div
              key={k}
              className={`grid grid-cols-3 items-center gap-2 px-6 py-2 ${
                k % 2 == 0 ? "bg-white" : "bg-gray-50"
              } `}
            >
              <div className="overflow-hidden">
                <Image
                  className="rounded-lg transition-all hover:opacity-95 hover:shadow-md"
                  src={reservation?.content_object?.images[0]?.url}
                  placeholder="blur"
                  blurDataURL={reservation?.content_object?.images[0]?.url}
                  alt={reservation?.content_object?.title}
                  width={192 * 1.3}
                  height={108 * 1.3}
                />
              </div>
              <div className="sapce-y-4 col-span-2 flex flex-col">
                <h4 className="text-xl font-medium ">
                  {reservation?.content_object?.title ??
                    reservation?.content_object?.name}
                </h4>
                <p className="py-1 text-sm text-gray-600 line-clamp-2 ">
                  {reservation?.content_object?.description}
                </p>
                <div className="flex justify-between">
                  <span className="text-normal capitalize text-purple-600">
                    Type : {reservation?.content_type?.model}
                  </span>
                  <span className="text-normal font-semibold">
                    Total: Rs {reservation?.total}
                  </span>
                </div>
                <div className="flex justify-between py-2 text-sm">
                  <span>
                    {" "}
                    Start Date :
                    {new Date(reservation?.start_date).toLocaleDateString()}
                  </span>
                  <span>
                    {" "}
                    End Date :
                    {new Date(reservation?.end_date).toLocaleDateString()}
                  </span>
                </div>
                <Link
                  href={`/${reservation?.content_type?.model}s/${
                    reservation?.content_object?.room_id ??
                    reservation?.content_object?.vehicle_id
                  }`}
                >
                  <a>
                    {" "}
                    <span className="text-xs text-pink-500">
                      See more about product...
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        {reservations?.data.length < 1 && (
          <div className="flex flex-col items-center justify-center py-6 text-center text-lg font-medium text-gray-600">
            <p>You have no reservations.</p>
          </div>
        )}
      </div>
    </section>
  );
}
