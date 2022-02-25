import React, { useState } from 'react';
import Link from 'next/link'
import Icon from '../icon';
import { useAuth } from 'src/lib/auth';
type Props = { user: { email: string, name: string } };
import {useRecoilValue} from 'recoil';
import { userState } from "src/lib/states";
export default function Header({ user }: Props) {
    const [button, setButton] = useState(false);
    const nav_items = [
        { title: "Reservations", is_home: true, link: "/" },
        { title: "Activity", link: "/" },
        { title: "Settings", link: "/" },
    ];
    const { logout } = useAuth()
    const handleLogout = () => {
        logout()
    }
    return (<header className="flex flex-col bg-white sticky top-0 z-10 w-full place-content-center shadow-sm">
        <nav className="flex justify-between px-4 py-4 xl:px-0 w-full max-w-7xl mx-auto items-center">
            <div className="flex space-x-16 items-center">
                <Icon />
                <ul className="hidden sm:flex space-x-2 sm:space-x-4 md:space-x-5 lg:space-x-10 font-normal text-gray-800">
                    {/* {nav_items.map((item, idx) => (
                        <li
                            className={`${item?.is_home ? "text-gray-800" : ""
                                } hover:text-gray-900 cursor-pointer`}
                            key={idx}
                        >
                            {item?.title}
                        </li>
                    ))} */}
                    
                </ul>
            </div>
            <div className=" flex shrink-0 items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer transition-all" onClick={() => setButton(!button)}>
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 via-violet-500 to-indigo-600"></span>
                <span>{user?.name}</span>
                <span><svg className="w-6 h-6 text-gray-500"
                    fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d={!button ? "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" : "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"}
                        clipRule="evenodd" /></svg></span>
                {button && <div onClick={handleLogout} className="absolute -bottom-8 bg-gray-50 hover:bg-gray-100 rounded px-4 py-2 shadow-sm border">
                    <span className="text-gray-800 cursor-pointer">Logout</span>
                </div>}
            </div>
        </nav>
    </header>)
}
