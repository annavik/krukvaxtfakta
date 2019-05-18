const storageKey = 'wishlist'

export type Wishlist = string[]

export const getWishlist = (): Wishlist => {
    try {
        const json = localStorage.getItem(storageKey)

        if (!json) {
            return []
        }

        return JSON.parse(json) as Wishlist
    } catch (error) {
        return []
    }
}

export const isInWishlist = (id: string, wishlist: Wishlist): boolean =>
    wishlist.indexOf(id) !== -1

export const saveToWishlist = (id: string): Wishlist => {
    const wishlist = getWishlist()

    if (isInWishlist(id, wishlist)) {
        return wishlist
    }

    try {
        const updatedWishlist = [...wishlist, id]

        const json = JSON.stringify(updatedWishlist)
        localStorage.setItem(storageKey, json)

        return updatedWishlist
    } catch (error) {
        return wishlist
    }
}

export const removeFromWishlist = (id: string): Wishlist => {
    const wishlist = getWishlist()

    if (!isInWishlist(id, wishlist)) {
        return wishlist
    }

    try {
        const updatedWishlist = wishlist.filter(value => value !== id)

        const json = JSON.stringify(updatedWishlist)
        localStorage.setItem(storageKey, json)

        return updatedWishlist
    } catch (error) {
        return wishlist
    }
}
