import React from "react";

type Props = {};

export default function DashboardSkeleton({}: Props) {
  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-8 sm:px-0 py-8">
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 sm:gap-10">
          <div className="hidden sm:flex flex-col space-y-6">
            <ul className="flex flex-col shrink-0 space-y-4">
              {/* <li className="flex shrink-0 space-x-3 text-gray-600 text-base hover:text-indigo-600 cursor-pointer items-center">
                  <span><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></span>
                  <span> Icon Content</span>
                </li> */}
            </ul>
            <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
            <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
            <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
            <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
            <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
            <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
            <div className="bg-gray-200 h-8 animate-pulse rounded-lg"></div>
          </div>
          <div className="col-span-3 bg-white shadow-sm rounded-lg p-6 space-y-2">
            <div className="bg-blue-200 h-20 animate-pulse rounded-lg"></div>
            <div className="bg-indigo-200 h-20 animate-pulse rounded-lg"></div>
            <div className="bg-red-200 h-20 animate-pulse rounded-lg"></div>
            <div className="bg-pink-200 h-20 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </section>
    </>
  );
}
