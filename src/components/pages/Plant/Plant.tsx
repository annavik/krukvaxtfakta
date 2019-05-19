import React, { useContext } from 'react'
import { ApiState } from '../../../types/common'
import { LibraryContext } from '../../LibraryContext'
import { Message } from '../../ui-kit/Message'
import PlantArticle from './PlantArticle'

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
        return <Message title="Laddar..." />
    } else if (apiState === ApiState.Error) {
        return <Message title="Kunde inte hämta sort." />
    }

    const id = props.match.params.id
    const data = library.find(plant => plant.id === id)

    if (!data) {
        return <Message title="Sorten kunde inte hittas." />
    }

    return <PlantArticle data={data} />
}

export default Plant
