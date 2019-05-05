import React, { useReducer, useEffect } from 'react'
import { ApiState } from '../types/common'
import { PlantData } from '../types/library'
import { libraryApi } from '../utils/libraryApi'

interface IContext {
    library: PlantData[]
    apiState: ApiState
}

export const LibraryContext = React.createContext<IContext>({
    library: [],
    apiState: ApiState.Active,
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
            apiState: ApiState.Active,
        }
    )

    useEffect(() => {
        fetchLibrary()
    }, [])

    const fetchLibrary = async () => {
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
