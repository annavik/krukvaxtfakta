import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ApiState } from '../../../types/common'
import { PlantData } from '../../../types/library'
import { getWishlist } from '../../../utils/wishlist'
import { LibraryContext } from '../../LibraryContext'
import { Header } from '../../ui-kit/Header'
import { Message } from '../../ui-kit/Message'
import { Section } from '../../ui-kit/Section'
import { Heading1 } from '../../ui-kit/Heading1'
import { Paragraph } from '../../ui-kit/Paragraph'
import ToLibrary from './ToLibrary'

const Wishlist = () => {
    const wishlist = getWishlist()
    const { library, apiState } = useContext(LibraryContext)

    let plants: PlantData[] = []
    wishlist.forEach(id => {
        const plant = library.find(plant => plant.id === id)

        if (plant) {
            plants = [...plants, plant]
        }
    })

    const renderContent = () => {
        if (wishlist.length === 0) {
            return <Message title="Inga sorter sparade än." />
        } else if (apiState === ApiState.Active) {
            return <Message title="Laddar..." />
        } else if (apiState === ApiState.Error) {
            return <Message title="Kunde inte hämta sorter." />
        }

        return (
            <List>
                {plants.map(plant => (
                    <ListItem key={`wishlist-item-${plant.id}`}>
                        <ArticleLink to={`/sort/${plant.id}/${plant.slug}`}>
                            {plant.title}
                        </ArticleLink>
                    </ListItem>
                ))}
            </List>
        )
    }

    return (
        <>
            <Header>
                <Heading1>Önskelista</Heading1>
                <Paragraph>
                    Man kan aldrig få för många palettblad! Här är dom sorter du
                    har sparat i önskelistan.
                </Paragraph>
            </Header>
            <Section>{renderContent()}</Section>
            <ToLibrary />
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
    font-family: 'EB Garamond', serif;
    font-size: 21px;
    line-height: 150%;

    :last-child {
        margin: 0;
    }
`

const ArticleLink = styled(Link)`
    display: flex;
    align-items: center;

    :before {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('/assets/icons/leaf.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        margin-right: 16px;
    }
`

export default Wishlist