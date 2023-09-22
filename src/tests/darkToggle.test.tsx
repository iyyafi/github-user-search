import { describe, test, expect, beforeEach, afterAll } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import DarkToggle from '../components/darkToggle'

const lightText = 'Bring me to the light'
const darkText = 'Hello darkness my old friends'

describe('Dark Toggle Component', () => {
    beforeEach(() => {
        render(<DarkToggle />)
    })

    afterAll(() => {
        localStorage.removeItem('theme')
    })

    test('Dark Toggle init', () => {
        const darkButton = screen.getByText(darkText)
        expect(darkButton).toBeDefined()
        expect(darkButton).toBeTypeOf('object')
    })

    test('Dark Button click', () => {
        const darkButton = screen.getByText(darkText)

        fireEvent.click(darkButton)

        const lightButton = screen.getByText(lightText)
        expect(lightButton).toBeDefined()
        expect(lightButton).toBeTypeOf('object')
    })

    test('Light Button init', async () => {
        localStorage.setItem('theme', 'dark')

        const lightButton = screen.getByText(lightText)
        expect(lightButton).toBeDefined()
        expect(lightButton).toBeTypeOf('object')
    })

    test('Light Button click', async () => {
        const lightButton = screen.getByText(lightText)

        fireEvent.click(lightButton)

        const darkButton = screen.getByText(darkText)
        expect(darkButton).toBeDefined()
        expect(darkButton).toBeTypeOf('object')
    })
})
