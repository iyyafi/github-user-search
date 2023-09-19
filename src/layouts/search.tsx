import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Search() {
    const [searchText, setSearchText] = useState('')
    const [, setSearchParams] = useSearchParams()

    function onClickSearch(text: string): void {
        setSearchParams({ q: text })
    }

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={() => onClickSearch(searchText)}>
                Search {searchText}
            </button>
        </div>
    )
}
