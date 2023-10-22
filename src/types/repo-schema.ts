import { z } from 'zod'

export const repoSchema = z.object({
    id: z.number(),
    html_url: z.string(),
    full_name: z.string(),
    description: z.string(),
    stargazers_count: z.number(),
})
export const reposSchema = z.array(repoSchema)

export type RepoSchemaType = z.infer<typeof repoSchema>
