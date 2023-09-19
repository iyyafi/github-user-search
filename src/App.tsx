import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './components/searchBox'
import SearchResults from './components/searchResults'

// Create a client
const queryClient = new QueryClient()

function App() {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <SearchBox />
            </div>
            <SearchResults />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </QueryClientProvider>
    )
}

export default App
