import { z } from 'zod'

export const userItemSchema = z.object({
    id: z.number(),
    login: z.string(),
    avatar_url: z.string(),
})

export type UserItemSchemaType = z.infer<typeof userItemSchema>

export const userItemsSchema = z.object({ items: z.array(userItemSchema) })
