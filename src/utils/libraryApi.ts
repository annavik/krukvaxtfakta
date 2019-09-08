import isomorphicFetch from './isomorphicFetch'
import { LibraryResponse } from '../types/library'

const apiUrl = 'http://localhost:8888/wp-json/krukvaxtfakta-api/v1/library'

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
