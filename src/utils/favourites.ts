const storageKey = 'favourites'

export type Favourites = string[]

export const getFavourites = (): Favourites => {
    try {
        const json = localStorage.getItem(storageKey)

        if (!json) {
            return []
        }

        return JSON.parse(json) as Favourites
    } catch (error) {
        return []
    }
}

export const isInFavourites = (id: string, favourites: Favourites): boolean =>
    favourites.indexOf(id) !== -1

export const saveToFavourites = (id: string): Favourites => {
    const favourites = getFavourites()

    if (isInFavourites(id, favourites)) {
        return favourites
    }

    try {
        const updatedFavourites = [...favourites, id]

        const json = JSON.stringify(updatedFavourites)
        localStorage.setItem(storageKey, json)

        return updatedFavourites
    } catch (error) {
        return favourites
    }
}

export const removeFromFavourites = (id: string): Favourites => {
    const favourites = getFavourites()

    if (!isInFavourites(id, favourites)) {
        return favourites
    }

    try {
        const updatedFavourites = favourites.filter(value => value !== id)

        const json = JSON.stringify(updatedFavourites)
        localStorage.setItem(storageKey, json)

        return updatedFavourites
    } catch (error) {
        return favourites
    }
}
