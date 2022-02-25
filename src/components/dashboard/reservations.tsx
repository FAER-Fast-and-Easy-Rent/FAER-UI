import React from "react";
import useSWR from "swr";
import axios from "src/lib/axios";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
type Props = {};
type User = { user?: any; access?: any };

export default function Reservation({}: Props) {
  const user: User = useRecoilValue(userState);
  const userConfig = {
    headers: {
      Authorization: "Bearer " + user?.access,
    },
  };
  const { data: reservations, error } = useSWR(
    ["/api/v1/reservations/", userConfig],
    axios
  );

  return (
    <section className="w-full">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Reservations
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Your reservations.
        </p>
      </div>
      <div className="flex flex-col bg-white rounded-lg gap-1">
        <div className="flex flex-row justify-around bg-gray-50 p-2 font-medium rounded">
          <div>S.N.</div>
          <div>Start Date</div>
          <div>End Date</div>
          <div>Total</div>
        </div>
        {reservations &&
          reservations?.data.map((reservation, k) => (
            <div
              key={k}
              className="flex flex-row justify-around p-2 hover:bg-gray-50/80 rounded"
            >
              <div>{reservation?.reservation_id}</div>
              <div>
                {new Date(reservation?.start_date).toLocaleDateString()}
              </div>
              <div>{new Date(reservation?.end_date).toLocaleDateString()}</div>
              <div>{reservation?.total}</div>
            </div>
          ))}
      </div>
    </section>
  );
}
