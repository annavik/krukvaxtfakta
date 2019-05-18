import React, { useContext } from 'react'
import { ApiState } from '../../../types/common'
import { LibraryContext } from '../../LibraryContext'
import PlantArticle from './PlantArticle'
import PlantMessage from './PlantMessage'

interface Props {
    match: {
        params: {
            id: string
        }
    }
}

const Plant = (props: Props) => {
    const { library, apiState } = useContext(LibraryContext)

    if (apiState === ApiState.Active) {
        return <PlantMessage title="Laddar..." />
    } else if (apiState === ApiState.Error) {
        return <PlantMessage title="Kunde inte hämta sort." />
    }

    const id = props.match.params.id
    const data = library.find(plant => plant.id === id)

    if (!data) {
        return <PlantMessage title="Sorten kunde inte hittas." />
    }

    return <PlantArticle data={data} />
}

export default Plant
