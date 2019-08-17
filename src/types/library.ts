export enum Group {
    Group1 = 'group-01',
    Group2 = 'group-02',
    Group3 = 'group-03',
}

export interface PlantData {
    id: string
    slug: string
    modified: string
    name: string
    botanicalName: string
    groups: Group[]
    difficulty: number
    watering: number
    light: number
    image: {
        thumbnail?: string
        image?: string
        photographer?: string
        photographerLink?: string
    }
    characteristics?: string
    care?: string
    facts?: string
}

export interface LibraryResponse {
    data: PlantData[]
}
