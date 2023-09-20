import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import SearchBox from './components/searchBox'
import SearchResults from './components/searchResults'
import SearchResultInfo from './components/searchResultInfo'
import DarkToggle from './components/darkToggle'

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

function App() {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-col items-center min-h-screen w-full justify-center bg-slate-100 py-3 px-3 sm:py-10 dark:bg-slate-900">
                <div className="bg-white dark:bg-slate-800 max-w-lg w-full rounded-lg border border-gray-300 dark:border-gray-700">
                    <SearchBox />
                    <SearchResultInfo />
                    <SearchResults />
                </div>
                <DarkToggle />
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
