import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import ErrorState from '../components/errorState'

const label = 'Error Data'

describe('Error State Component', () => {
    test('Error State with label', () => {
        render(<ErrorState label={label} />)

        expect(screen.getByText(label)).toBeDefined()
        expect(screen.getByText(label)).toBeTypeOf('object')
    })
})
