import 'isomorphic-fetch'

interface ApiResult<T> {
    data?: T
}

export default async <T extends {}>(
    info: RequestInfo,
    init: RequestInit
): Promise<ApiResult<T>> => {
    try {
        const result = await fetch(info, {
            ...init,
            headers: {
                ...init.headers,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

        const data = await result.json()

        if (result.status !== 200 || data.error) {
            throw new Error('Failed to fetch')
        }

        return {
            data: data,
        }
    } catch (error) {
        throw error
    }
}
