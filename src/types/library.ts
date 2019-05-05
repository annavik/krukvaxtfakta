export interface PlantData {
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
    data: PlantData[]
}
