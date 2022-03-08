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
