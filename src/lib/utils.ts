import React from "react";
import useSWR from "swr";
import axios from "src/lib/axios";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";

type User = { user?: any; access?: any };

export const useReservations = () => {
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
  return {
    reservations,
  };
};
