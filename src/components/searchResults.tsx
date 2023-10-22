import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

import UserRepos from './userRepos'
import LoadingState from './loadingState'
import ErrorState from './errorState'
import { UserItemSchemaType, userItemsSchema } from '../types/user-item-schema'

export default function SearchResults() {
    const [searchParams] = useSearchParams()

    const {
        data: users = {},
        isError,
        isFetching,
    } = useQuery({
        queryKey: ['users', searchParams.get('q')],
        queryFn: () =>
            axios
                .get(
                    `https://api.github.com/search/users?q=${searchParams.get(
                        'q'
                    )}&per_page=5`,
                    {
                        headers: {
                            Authorization: import.meta.env.VITE_GITHUB_TOKEN,
                        },
                    }
                )
                .then((res) => res.data),
        enabled: !!searchParams.get('q'),
    })

    if (isError) return <ErrorState label="Error Fetch User Data" />
    if (isFetching) return <LoadingState label="Loading User Data" />

    const validateUserItems = userItemsSchema.safeParse(users)
    if (!validateUserItems.success) {
        console.error(validateUserItems.error)
        return
    }

    return (
        <div className="p-3">
            <div className="rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden">
                {users.items.map((user: UserItemSchemaType) => (
                    <div
                        key={user.id}
                        className="border-b last:border-0 dark:border-b-slate-700"
                    >
                        <UserRepos
                            label={user.login}
                            imageUrl={user.avatar_url}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
