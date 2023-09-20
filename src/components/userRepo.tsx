import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { RepoResult } from '../types/repoResult'
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
            <div className="p-3 bg-slate-50">
                <ErrorState label="Error Load Repo Data" />
            </div>
        )
    }
    if (isFetching) {
        return (
            <div className="p-3 bg-slate-50">
                <LoadingState label="Loading Repo Data" />
            </div>
        )
    }

    return (
        <div className="p-3 bg-slate-50 max-h-60 overflow-auto">
            {!repos.length ? (
                <NoDataState label="No Repo Data" />
            ) : (
                repos.map((repo: RepoResult) => (
                    <div key={repo.id} className="border-b last:border-0 py-2">
                        <span className="grow text-left text-sm font-medium text-gray-700">
                            {repo.name}
                        </span>
                    </div>
                ))
            )}
        </div>
    )
}
