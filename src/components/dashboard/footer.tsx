import React from "react";

type Props = {};

export default function Footer({}: Props) {
  const footer_content = {
    copyright: "© FAER 2022 . All rights reserved.",
    policy: "Privacy",
    terms: "Terms & Conditions",
  };
  return (
    <footer className="fixed bottom-0 z-10 w-full border-t bg-gray-100 py-5 ">
      <div className="mx-auto w-full max-w-7xl items-center px-4 xl:px-0">
        <p className="text-center text-gray-500">
          {footer_content?.copyright}{" "}
        </p>
      </div>
    </footer>
  );
}
