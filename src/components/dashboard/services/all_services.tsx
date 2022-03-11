import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useServices } from "src/lib/utils";
type Props = {};
export default function AllServices({}: Props) {
  const { services } = useServices();
  const [active, setActive] = useState("room");
  return (
    <div className="w-full border-t border-gray-200">
      <div className="grid cursor-pointer grid-cols-2 divide-x bg-gray-100 text-gray-500 transition-all duration-100">
        <span
          onClick={() => setActive("room")}
          className={`py-2 text-center hover:bg-gray-200/95 ${
            active == "room" ? "bg-gray-200 text-gray-700 shadow-inner" : ""
          }`}
        >
          Rooms{" "}
          {services?.data?.rooms
            ? "  (" + services?.data?.rooms?.length + ")"
            : ""}
        </span>
        <span
          onClick={() => setActive("vehicle")}
          className={`py-2 text-center hover:bg-gray-200/95 ${
            active == "vehicle" ? "bg-gray-200 text-gray-700 shadow-inner" : ""
          }`}
        >
          Vehicles{" "}
          {services?.data?.vehicles
            ? "  (" + services?.data?.vehicles?.length + ")"
            : ""}
        </span>
      </div>
      {services && (
        <div className="flex flex-col space-y-2 py-3">
          {services?.data?.rooms &&
            active == "room" &&
            services?.data?.rooms.slice(0, 10).map((room, k) => (
              <div
                key={k}
                className={`grid grid-cols-3 gap-2 px-6 py-2 ${
                  k % 2 == 0 ? "bg-white" : "bg-gray-50"
                } `}
              >
                <div className="overflow-hidden">
                  <Image
                    className="rounded-lg transition-all hover:opacity-95 hover:shadow-md"
                    src={room?.images[0]?.url}
                    placeholder="blur"
                    blurDataURL={room?.images[0]?.url}
                    alt={room?.title}
                    width={192 * 1.2}
                    height={108 * 1.2}
                  />
                </div>
                <div className="sapce-y-2 col-span-2 flex flex-col">
                  <h4 className="text-lg font-medium ">{room?.title}</h4>
                  <p className="text-sm text-gray-600">{room?.description}</p>
                  <div className="flex justify-between">
                    <span className="text-normal text-purple-600">
                      Type : Room
                    </span>
                    <span className="text-normal font-semibold">
                      Rs {room?.price}
                    </span>
                  </div>
                  <Link href={`/rooms/${room?.room_id}`}>
                    <a>
                      {" "}
                      <span className="text-sm text-pink-500">
                        See more ...
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          {services?.data?.vehicles.length < 1 && active == "vehicle" && (
            <div className="flex flex-col items-center justify-center py-6 text-center text-lg font-medium text-gray-600">
              <p>You have no vehicle services.</p>
            </div>
          )}
          {services?.data?.rooms.length < 1 && active == "room" && (
            <div className="flex flex-col items-center justify-center py-6 text-center text-lg font-medium text-gray-600">
              <p>You have no room services.</p>
            </div>
          )}
          {services?.data?.vehicles &&
            active == "vehicle" &&
            services?.data?.vehicles.slice(0, 10).map((vehicle, k) => (
              <div
                key={k}
                className={`grid grid-cols-3 gap-2 px-6 py-2 ${
                  k % 2 == 0 ? "bg-white" : "bg-gray-50"
                } `}
              >
                <div className="overflow-hidden">
                  <Image
                    className="rounded-lg transition-all hover:opacity-95 hover:shadow-md"
                    src={vehicle?.images[0]?.url}
                    placeholder="blur"
                    blurDataURL={vehicle?.images[0]?.url}
                    alt={vehicle?.title}
                    width={192 * 1.2}
                    height={108 * 1.2}
                  />
                </div>
                <div className="sapce-y-2 col-span-2 flex flex-col">
                  <h4 className="text-lg font-medium ">{vehicle?.name}</h4>
                  <p className="text-sm text-gray-600">
                    {vehicle?.description}
                  </p>
                  <div className="flex justify-between">
                    <span className="text-normal text-purple-600">
                      Type : Vehicle
                    </span>
                    <span className="text-normal font-semibold">
                      Rs {vehicle?.price}
                    </span>
                  </div>
                  <Link href={`/vehicles/${vehicle?.vehicle_id}`}>
                    <a>
                      {" "}
                      <span className="text-sm text-pink-500">
                        See more ...
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
