import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import LoadingState from '../components/loadingState'

const label = 'Loading Data'

describe('Loading State Component', () => {
    test('Loading State with label', () => {
        render(<LoadingState label={label} />)

        expect(screen.getByText(label)).toBeDefined()
        expect(screen.getByText(label)).toBeTypeOf('object')
    })
})
