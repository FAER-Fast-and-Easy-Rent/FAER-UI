import Link from "next/link";

type Props = {};

export default function Icon({ }: Props) {
    const logo = {
        title: "FAER",
        icon: (
            <svg
                className="w-8 h-8 text-white bg-gradient-to-br from-blue-600 via-fuchsia-600 to-indigo-800 rounded-full p-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    };
    return <Link href="/">
        <a className="flex flex-shrink-0 items-center space-x-2 text-3xl hover:opacity-95 transition-all font-bold text-gray-700 uppercase tracking-wider">
            <span>{logo.icon}</span>
            <span>{logo.title}</span>
        </a>
    </Link>;
}
