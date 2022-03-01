import React, { useState } from "react";
import useSWR from "swr";
import axios from "src/lib/axios";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
import Image from "next/image";
import Link from "next/link";
type Props = {};
type User = { user?: any; access?: any };
export default function AllServices({}: Props) {
  const user: User = useRecoilValue(userState);
  const userConfig = {
    headers: {
      Authorization: "Bearer " + user?.access,
    },
  };
  const { data: services, error } = useSWR(
    ["/api/v1/services/", userConfig],
    axios
  );
  const [active, setActive] = useState("room");
  console.log(services);
  return (
    <div className="w-full border-t border-gray-200">
      <div className="grid grid-cols-2 bg-gray-100 divide-x cursor-pointer transition-all duration-100 text-gray-500">
        <span onClick={() => setActive("room")} className={`text-center hover:bg-gray-200/95 py-2 ${active=="room"?"bg-gray-200 text-gray-700 shadow-inner":""}`}>
          Rooms
        </span>
        <span onClick={() => setActive("vehicle")} className={`text-center hover:bg-gray-200/95 py-2 ${active=="vehicle"?"bg-gray-200 text-gray-700 shadow-inner":""}`}>
          Vehicles
        </span>
      </div>
      {services && (
        <div className="flex flex-col space-y-2 py-3">
          {services?.data?.rooms &&
            active == "room" &&
            services?.data?.rooms.slice(0, 5).map((room, k) => (
              <div
                key={k}
                className={`grid grid-cols-3 gap-2 px-6 py-2 ${
                  k % 2 == 0 ? "bg-white" : "bg-gray-50"
                } `}
              >
                <div className="overflow-hidden">
                  <Image
                    className="rounded-lg hover:shadow-md hover:opacity-95 transition-all"
                    src={room?.images[0]?.url}
                    placeholder="blur"
                    blurDataURL={room?.images[0]?.url}
                    alt={room?.title}
                    width={192 * 1.2}
                    height={108 * 1.2}
                  />
                </div>
                <div className="col-span-2 flex flex-col sapce-y-2">
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

          {services?.data?.vehicles &&
            active == "vehicle" &&
            services?.data?.vehicles.slice(0, 5).map((vehicle, k) => (
              <div
                key={k}
                className={`grid grid-cols-3 gap-2 px-6 py-2 ${
                  k % 2 == 0 ? "bg-white" : "bg-gray-50"
                } `}
              >
                <div className="overflow-hidden">
                  <Image
                    className="rounded-lg hover:shadow-md hover:opacity-95 transition-all"
                    src={vehicle?.images[0]?.url}
                    placeholder="blur"
                    blurDataURL={vehicle?.images[0]?.url}
                    alt={vehicle?.title}
                    width={192 * 1.2}
                    height={108 * 1.2}
                  />
                </div>
                <div className="col-span-2 flex flex-col sapce-y-2">
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
