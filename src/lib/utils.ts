import React from "react";
import useSWR from "swr";
import axios from "src/lib/axios";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";

type User = { user?: any; access?: any };
export const useConfig = () => {
  const user: User = useRecoilValue(userState);
  const config = {
    headers: {
      Authorization: "Bearer " + user?.access,
    },
  };

  return {
    config,
  };
};
export const useReservations = () => {
  const { config } = useConfig();
  const { data: reservations, error } = useSWR(
    ["/api/v1/reservations/", config],
    axios
  );
  return {
    reservations,
  };
};

export const useHostReservations = () => {
  const { config } = useConfig();
  const { data: reservations, error } = useSWR(
    ["/api/v1/host/reservations/", config],
    axios
  );
  return {
    reservations,
  };
};
export const useServices = () => {
  const { config } = useConfig();

  const { data: services, error } = useSWR(
    ["/api/v1/services/", config],
    axios
  );
  return {
    services,
  };
};
export const useHostReservationsData = () => {
  const { config } = useConfig();
  const { data: reservations, error } = useSWR(
    ["/api/v1/host/reservations/", config],
    axios
  );
  let d1 = reservations?.data?.rooms;
  let d2 = reservations?.data?.vehicles;
  let d;
  if (d1 && d2) {
    d = d1.concat(d2);
  }
  const total_sales = d?.length;
  const total_sales_amt = d
    ?.map((item) => item.total)
    .reduce((prev, curr) => prev + curr, 0);

  return {
    total_sales,
    total_sales_amt,
  };
};
