import { useState } from 'react'

export default function Search() {
    const [searchText, setSearchText] = useState('')

    function onClickSearch(text: string): void {
        console.log(text)
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
