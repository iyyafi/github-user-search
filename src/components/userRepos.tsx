import { useState } from 'react'

import UserRepo from './userRepo'

export default function UserRepos({ label }: { label: string }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button className="py-2" onClick={() => setOpen(!open)}>
                {label}
            </button>
            {open ? <UserRepo username={label} /> : null}
        </>
    )
}
