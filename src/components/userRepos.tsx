import { useState } from 'react'

import UserRepo from './userRepo'

export default function UserRepos({
    label,
    imageUrl,
}: {
    label: string
    imageUrl: string
}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                className="p-3 flex w-full items-center gap-2"
                onClick={() => setOpen(!open)}
            >
                <img
                    className="w-5 h-5 object-cover rounded-full bg-slate-200"
                    src={imageUrl}
                />
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
