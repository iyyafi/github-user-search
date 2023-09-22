import { vi, describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'

import SearchResultInfo from '../components/searchResultInfo'

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom')
    return {
        ...(typeof actual === 'object' ? actual : {}),
        useSearchParams: () => [new URLSearchParams({ q: '' })],
    }
})

describe('Search Result Info test Null', () => {
    test('expect return null', () => {
        const { container } = render(<SearchResultInfo />)

        expect(container.firstChild).toBeNull()
    })
})
