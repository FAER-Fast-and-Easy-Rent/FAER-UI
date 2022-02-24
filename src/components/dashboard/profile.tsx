import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
type Props = {};
type User = { user?: any; access?: any };

export default function Profile({}: Props) {
  const user: User = useRecoilValue(userState);

  return (
    <div className="flex flex-col space-y-2">
      <span>{"Name : " + user?.user?.name}</span>
      <span>{"Email : " + user?.user?.email}</span>
    </div>
  );
}
