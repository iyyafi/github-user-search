/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/github-user-search/',
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            enabled: true,
            reporter: ['text', 'json', 'html'],
            provider: 'istanbul', // or 'v8'
        },
    },
})
