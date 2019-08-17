export enum Color {
    Purple = 'purple',
    Pink = 'pink',
    Red = 'red',
    Orange = 'orange',
    Yellow = 'yellow',
    Green = 'green',
    Black = 'black',
    Multi = 'multi',
}

export interface PlantData {
    id: string
    title: string
    slug: string
    modified: string
    thumbnail?: string
    image?: string
    colors: Color[]
    characteristics?: string
    facts?: string
}

export interface LibraryResponse {
    data: PlantData[]
}
