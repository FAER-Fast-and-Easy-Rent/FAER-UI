import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useHostReservations } from "src/lib/utils";

export default function HostReservations() {
  const { reservations } = useHostReservations();
  const [active, setActive] = useState("room");
  return (
    <section className="w-full">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">
          Host Reservations
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Your reservations Reservations.
        </p>
      </div>
      <div className="w-full border-gray-200">
        <div className="grid grid-cols-2 bg-gray-100 divide-x cursor-pointer transition-all duration-100 text-gray-500">
          <span
            onClick={() => setActive("room")}
            className={`text-center hover:bg-gray-200/95 py-2 ${
              active == "room" ? "bg-gray-200 text-gray-700 shadow-inner" : ""
            }`}
          >
            Rooms
          </span>
          <span
            onClick={() => setActive("vehicle")}
            className={`text-center hover:bg-gray-200/95 py-2 ${
              active == "vehicle"
                ? "bg-gray-200 text-gray-700 shadow-inner"
                : ""
            }`}
          >
            Vehicles
          </span>
        </div>
        {reservations && (
          <div className="flex flex-col space-y-2 py-3">
            {reservations?.data?.rooms &&
              active == "room" &&
              reservations?.data?.rooms.map((reservation, k) => (
                <Reservation reservation={reservation} k={k} />
              ))}

            {reservations?.data?.vehicles.length < 1 && active == "vehicle" && (
              <div className="flex flex-col justify-center py-6 text-lg font-medium text-gray-600 text-center items-center">
                <p>You have no vehicle reservations from customers.</p>
              </div>
            )}
            {reservations?.data?.rooms.length < 1 && active == "room" && (
              <div className="flex flex-col justify-center py-6 text-lg font-medium text-gray-600 text-center items-center">
                <p>You have no room reservations from customers.</p>
              </div>
            )}
            {reservations?.data?.vehicles &&
              active == "vehicle" &&
              reservations?.data?.vehicles.map((reservation, k) => (
                <Reservation reservation={reservation} k={k} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

const Reservation = ({ reservation, k }) => {
  return (
    <div
      key={k}
      className={`grid grid-cols-3 gap-2 px-6 py-2 items-center ${
        k % 2 == 0 ? "bg-white" : "bg-gray-50"
      } `}
    >
      <div className="overflow-hidden">
        <Image
          className="rounded-lg hover:shadow-md hover:opacity-95 transition-all"
          src={reservation?.content_object?.images[0]?.url}
          placeholder="blur"
          blurDataURL={reservation?.content_object?.images[0]?.url}
          alt={reservation?.content_object?.title}
          width={192 * 1.3}
          height={108 * 1.3}
        />
      </div>
      <div className="col-span-2 flex flex-col sapce-y-4">
        <h4 className="text-xl font-medium ">
          {reservation?.content_object?.title ??
            reservation?.content_object?.name}
        </h4>
        <p className="text-sm text-gray-600 py-1 line-clamp-2 ">
          {reservation?.content_object?.description}
        </p>
        <div className="flex justify-between">
          <span className="text-normal text-purple-600 capitalize">
            Type : {reservation?.content_type?.model}
          </span>
          <span className="text-normal font-semibold">
            Total: Rs {reservation?.total}
          </span>
        </div>
        <div className="flex justify-between text-sm py-2">
          <span>
            {" "}
            Start Date :{new Date(reservation?.start_date).toLocaleDateString()}
          </span>
          <span>
            {" "}
            End Date :{new Date(reservation?.end_date).toLocaleDateString()}
          </span>
        </div>
        <div className="text-blue-500 text-base flex flex-col">
          <span>Customer Details:</span>
          <div className="flex justify-between text-sm py-2">
          <span>Name: {reservation?.user?.name}</span>
          <span>
          <span>Email: {reservation?.user?.email}</span>
          </span>
        </div>
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
  );
};
