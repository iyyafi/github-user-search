import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchBox() {
    const [searchText, setSearchText] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    function onClickSearch(text: string): void {
        setSearchParams({ q: text })
    }

    return (
        <div>
            <input
                type="text"
                defaultValue={searchParams.get('q') || ''}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) =>
                    e.key === 'Enter' && onClickSearch(searchText)
                }
            />
            <button onClick={() => onClickSearch(searchText)}>Search</button>
        </div>
    )
}
