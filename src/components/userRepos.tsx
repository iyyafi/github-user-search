import { useState } from 'react'

import UserRepo from './userRepo'

export default function UserRepos({ label }: { label: string }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                className="p-3 flex w-full items-center"
                onClick={() => setOpen(!open)}
            >
                <span className="grow text-left text-sm font-medium text-gray-700">
                    {label}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 ${open ? 'rotate-180' : 'rotate-0'}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>
            {open ? <UserRepo username={label} /> : null}
        </>
    )
}
