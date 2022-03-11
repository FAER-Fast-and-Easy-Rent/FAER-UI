import React from "react";

type Props = {};

export default function DashboardSkeleton({}: Props) {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-8 py-8 sm:px-0">
        <div className="grid w-full grid-cols-1 sm:grid-cols-4 sm:gap-10">
          <div className="hidden flex-col space-y-6 sm:flex">
            <ul className="flex shrink-0 flex-col space-y-4">
              {/* <li className="flex shrink-0 space-x-3 text-gray-600 text-base hover:text-indigo-600 cursor-pointer items-center">
                  <span><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></span>
                  <span> Icon Content</span>
                </li> */}
            </ul>
            <div className="h-8 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-8 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-8 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-8 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-8 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-8 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-8 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
          <div className="col-span-3 space-y-2 rounded-lg bg-white p-6 shadow-sm">
            <div className="h-20 animate-pulse rounded-lg bg-blue-200"></div>
            <div className="h-20 animate-pulse rounded-lg bg-indigo-200"></div>
            <div className="h-20 animate-pulse rounded-lg bg-red-200"></div>
            <div className="h-20 animate-pulse rounded-lg bg-pink-200"></div>
          </div>
        </div>
      </section>
    </>
  );
}
