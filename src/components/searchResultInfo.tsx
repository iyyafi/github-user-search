import { useSearchParams } from 'react-router-dom'

export default function SearchResultInfo() {
    const [searchParams] = useSearchParams()

    if (!searchParams.get('q')) return false

    return (
        <div className="px-3 pt-2">
            <span className="text-xs text-gray-500">
                Showing users for "{searchParams.get('q')}"
            </span>
        </div>
    )
}
