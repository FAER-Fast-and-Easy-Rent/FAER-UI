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
      <h2 className="font-bold text-xl py-4">Reservations</h2>
      <div className="flex flex-col bg-white rounded-lg gap-1">
        <div className="flex flex-row justify-around bg-zinc-100 p-2 font-medium rounded">
          <div>S.N.</div>
          <div>Start Date</div>
          <div>End Date</div>
          <div>Total</div>
        </div>
        {reservations &&
          reservations?.data.map((reservation, k) => (
            <div
              key={k}
              className="flex flex-row justify-around p-2 hover:bg-zinc-100/60 rounded"
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
