import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchBox() {
    const [searchText, setSearchText] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    function onClickSearch(text: string): void {
        setSearchParams({ q: text })
    }

    return (
        <div className="w-full p-3 border-b border-b-gray-300">
            <div className="flex w-full border border-gray-300 mb-2 rounded p-2 text-gray-600 justify-center items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-1 "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                <input
                    className="w-full text-sm focus:outline-none"
                    type="text"
                    placeholder="Type a username"
                    defaultValue={searchParams.get('q') || ''}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) =>
                        e.key === 'Enter' && onClickSearch(searchText)
                    }
                />
            </div>
            <button
                className="w-full bg-green-600 text-white p-2 rounded font-semibold text-sm"
                onClick={() => onClickSearch(searchText)}
            >
                <span>Search</span>
            </button>
        </div>
    )
}
