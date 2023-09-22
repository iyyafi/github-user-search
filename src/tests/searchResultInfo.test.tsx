import { afterEach, vi, describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import SearchResultInfo from '../components/searchResultInfo'

const { mockedMethod } = vi.hoisted(() => {
    return { mockedMethod: vi.fn() }
})

vi.mock('react-router-dom', async () => {
    return {
        useSearchParams: mockedMethod,
    }
})

describe('Search Result Info test', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    test('expect return null', () => {
        mockedMethod.mockReturnValue([new URLSearchParams({ q: '' })])
        const { container } = render(<SearchResultInfo />)
        expect(container.firstChild).toBeNull()
    })

    test('expect return string', () => {
        mockedMethod.mockReturnValue([new URLSearchParams({ q: 'test' })])
        render(<SearchResultInfo />)
        expect(screen.getByText('Showing users for "test"')).toBeDefined()
    })
})
