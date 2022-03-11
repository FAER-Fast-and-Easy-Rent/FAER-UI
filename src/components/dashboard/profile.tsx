import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "src/lib/states";
type Props = {};
type User = { user?: any; access?: any };

export default function Profile({}: Props) {
  const user: User = useRecoilValue(userState);

  return (
    <div className="flex flex-col pb-2">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          User Information
        </h3>
        <p className="mt-1 max-w-2xl text-base text-gray-500">
          Personal details and description.
        </p>
      </div>
      <div className="border-t border-gray-200 text-[15px]">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">Full name</dt>
            <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
              {user?.user?.name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">Email address</dt>
            <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
              {user?.user?.email}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">User type</dt>
            <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
              {user?.user?.is_renter ? "Renter" : "Customer"}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">Phone</dt>
            <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
              {user?.user?.phone ?? "Add your phone number"}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">Address</dt>
            <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
              {user?.user?.address ?? "Add your address"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
