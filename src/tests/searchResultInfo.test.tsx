import { vi, beforeEach, describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Params } from 'react-router-dom'

import SearchResultInfo from '../components/searchResultInfo'

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom')
    return {
        ...(typeof actual === 'object' ? actual : {}),
        useSearchParams: () => [new URLSearchParams({ q: '1234' })],
    }
})

describe('Search Result Info test', () => {
    test('expect return string', () => {
        render(<SearchResultInfo />)
    })
})
