export interface CultivarData {
    id: string
    title: string
    slug: string
    modified: string
    thumbnail?: string
    image?: string
    characteristics?: string
    facts?: string
}

export interface LibraryResponse {
    data: CultivarData[]
}
