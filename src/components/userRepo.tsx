import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { RepoSchemaType, reposSchema } from '../types/repo-schema'
import LoadingState from './loadingState'
import ErrorState from './errorState'
import NoDataState from './noDataState'

export default function UserRepo({ username }: { username: string }) {
    const {
        data: repos = [],
        isError,
        isFetching,
    } = useQuery({
        queryKey: ['repo', username],
        queryFn: () =>
            axios
                .get(`https://api.github.com/users/${username}/repos`, {
                    headers: {
                        Authorization: import.meta.env.VITE_GITHUB_TOKEN,
                    },
                })
                .then((res) => res.data),
    })

    if (isError) {
        return (
            <div className="p-3 bg-slate-50 dark:bg-slate-700">
                <ErrorState label="Error Load Repo Data" />
            </div>
        )
    }
    if (isFetching) {
        return (
            <div className="p-3 bg-slate-50 dark:bg-slate-700">
                <LoadingState label="Loading Repo Data" />
            </div>
        )
    }

    const validateRepoSchema = reposSchema.safeParse(repos)
    if (!validateRepoSchema.success) {
        console.error(validateRepoSchema.error)
        return
    }

    return (
        <div className="p-3 bg-slate-50 dark:bg-slate-700 max-h-60 overflow-auto">
            {!repos.length ? (
                <NoDataState label="No Repo Data" />
            ) : (
                repos.map((repo: RepoSchemaType) => (
                    <div key={repo.id} className="border-b last:border-0 py-2">
                        <Link
                            to={repo.html_url}
                            target="_blank"
                            className="block grow text-left text-sm font-medium text-gray-700 dark:text-gray-100 mb-1 hover:text-gray-950 dark:hover:text-gray-300"
                        >
                            {repo.full_name}
                        </Link>
                        <span className="block text-xs text-gray-400 dark:text-gray-300 mb-1">
                            {repo.description}
                        </span>
                        <div className="flex items-center justify-end gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="w-4 h-4 text-yellow-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>
                            <span className="block text-xs text-gray-400 dark:text-gray-300">
                                {repo.stargazers_count} star
                            </span>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
