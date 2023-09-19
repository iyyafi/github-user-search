import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { RepoResult } from '../types/repoResult'

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

    if (isError) return <div>Error Load Repo Data</div>
    if (isFetching) return <div>Loading Repo Data</div>

    return !repos.length ? (
        <div>No Repo Data</div>
    ) : (
        repos.map((repo: RepoResult) => <div key={repo.id}>{repo.name}</div>)
    )
}
