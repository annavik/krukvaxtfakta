import isomorphicFetch from './isomorphicFetch'
import { LibraryResponse } from '../types/library'
import { apiUrl } from '../config'

const _read = async () => {
    const { data } = await isomorphicFetch<LibraryResponse>(apiUrl, {
        method: 'GET',
    })

    if (!data) {
        throw new Error('Failed to fetch')
    }

    return data.data
}

export const libraryApi = {
    read: _read,
}
