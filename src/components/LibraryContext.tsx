import React, { useReducer, useEffect } from 'react'
import { libraryApi } from '../utils/libraryApi'
import { CultivarData } from '../types/library'
import { ApiState } from '../types/common'

interface IContext {
    library: CultivarData[]
    apiState: ApiState
}

export const LibraryContext = React.createContext<IContext>({
    library: [],
    apiState: ApiState.Default,
})

interface Props {
    children?: React.ReactNode
}

export const LibraryProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'libraryFetched':
                    return {
                        ...state,
                        library: action.payload,
                        apiState: ApiState.Default,
                    }
                case 'setApiState':
                    return {
                        ...state,
                        apiState: action.payload,
                    }
                default:
                    return state
            }
        },
        {
            library: [],
            apiState: ApiState.Default,
        }
    )

    useEffect(() => {
        fetchLibrary()
    }, [])

    const fetchLibrary = async () => {
        if (state.apiState === ApiState.Active) {
            return
        }

        dispatch({
            type: 'setApiState',
            payload: ApiState.Active,
        })

        try {
            const library = await libraryApi.read()

            dispatch({
                type: 'libraryFetched',
                payload: library,
            })
        } catch {
            dispatch({
                type: 'setApiState',
                payload: ApiState.Error,
            })
        }
    }

    return (
        <LibraryContext.Provider
            value={{
                library: state.library,
                apiState: state.apiState,
            }}
        >
            {children}
        </LibraryContext.Provider>
    )
}
