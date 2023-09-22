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

describe('Search Result Info Component', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    test('Search Result Info with no search query', () => {
        mockedMethod.mockReturnValue([new URLSearchParams({ q: '' })])
        const { container } = render(<SearchResultInfo />)
        expect(container.firstChild).toBeNull()
    })

    test('Search Result Info with search query', () => {
        mockedMethod.mockReturnValue([new URLSearchParams({ q: 'test' })])
        render(<SearchResultInfo />)
        expect(screen.getByText('Showing users for "test"')).toBeDefined()
        expect(screen.getByText('Showing users for "test"')).toBeTypeOf(
            'object'
        )
    })
})
