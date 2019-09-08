import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ApiState } from '../../../types/common'
import { PlantData } from '../../../types/library'
import { getFavourites } from '../../../utils/favourites'
import { LibraryContext } from '../../LibraryContext'
import { Header } from '../../ui-kit/Header'
import { Message } from '../../ui-kit/Message'
import { Section } from '../../ui-kit/Section'
import { Heading1 } from '../../ui-kit/Heading1'
import { Paragraph } from '../../ui-kit/Paragraph'
import ToLibrary from './ToLibrary'

const ListOfFavourites = () => {
    const favourites = getFavourites()
    const { library, apiState } = useContext(LibraryContext)

    let plants: PlantData[] = []
    favourites.forEach(id => {
        const plant = library.find(plant => plant.id === id)

        if (plant) {
            plants = [...plants, plant]
        }
    })

    const renderContent = () => {
        if (plants.length === 0) {
            return (
                <>
                    <Message title="Inga sorter sparade." />
                    <ToLibrary />
                </>
            )
        } else if (apiState === ApiState.Active) {
            return <Message title="Laddar..." />
        } else if (apiState === ApiState.Error) {
            return <Message title="Kunde inte hämta sorter." />
        }

        return (
            <List>
                {plants.map(plant => (
                    <ListItem key={`favourites-item-${plant.id}`}>
                        <ArticleLink to={`/sort/${plant.id}/${plant.slug}`}>
                            {plant.name}
                        </ArticleLink>
                    </ListItem>
                ))}
            </List>
        )
    }

    return (
        <>
            <Header>
                <Heading1>Favoriter</Heading1>
                <Paragraph>
                    Man kan aldrig få för många krukväxter! Här är sorterna du
                    har sparat som favoriter. Tänk på att listan bara sparas i
                    din webbläsare, om du rensar dina kakor kan den förvinna.
                </Paragraph>
            </Header>
            <Section>{renderContent()}</Section>
        </>
    )
}

const List = styled.ul`
    padding: 0;
    margin: 0;
`

const ListItem = styled.li`
    list-style: none;
    padding: 0;
    margin: 0 0 16px;

    :last-child {
        margin: 0;
    }
`

const ArticleLink = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 21px;
    line-height: 32px;

    :before {
        content: '';
        display: block;
        width: 32px;
        height: 32px;
        background-image: url('/assets/icons/leaf.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px;
        margin-right: 8px;
    }
`

export default ListOfFavourites
