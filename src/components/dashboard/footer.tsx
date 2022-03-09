import React from 'react';

type Props = {};

export default function Footer({ }: Props) {
    const footer_content = {
        copyright: "© FAER 2022 . All rights reserved.",
        policy: "Privacy",
        terms: "Terms & Conditions"
    }
    return (

        <footer className="border-t z-10 fixed bottom-0 w-full bg-gray-100 py-5 ">
            <div className="w-full px-4 xl:px-0 max-w-7xl mx-auto items-center">
                <p className="text-gray-500 text-center">{footer_content?.copyright} </p>
            </div>
        </footer>
    )
}
