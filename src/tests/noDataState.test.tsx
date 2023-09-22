import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import NoDataState from '../components/noDataState'

const label = 'No Data Found'

describe('No Data State Component', () => {
    test('No Data State with label', () => {
        render(<NoDataState label={label} />)

        expect(screen.getByText(label)).toBeDefined()
        expect(screen.getByText(label)).toBeTypeOf('object')
    })
})
