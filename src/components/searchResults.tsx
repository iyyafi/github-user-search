import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

import { UserItem } from '../types/searchResult'

export default function SearchResults() {
    const [searchParams] = useSearchParams()

    const {
        data: users = {},
        isError,
        isFetching,
    } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            axios
                .get(
                    `https://api.github.com/search/users?q=${searchParams.get(
                        'q'
                    )}&per_page=5`
                )
                .then((res) => res.data),
        enabled: !!searchParams.get('q'),
    })

    if (isError) return <>Error Load Data</>
    if (isFetching) return <>Loading Data</>

    return users.items?.length
        ? users.items?.map((user: UserItem) => (
              <div key={user.id}>{user.login}</div>
          ))
        : null
}
