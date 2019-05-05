import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ApiState } from '../../types/common'
import { LibraryContext } from '../LibraryContext'
import { Header } from '../ui-kit/Header'
import { Heading1 } from '../ui-kit/Heading1'
import { Heading3 } from '../ui-kit/Heading3'
import { Paragraph } from '../ui-kit/Paragraph'
import { ListItem } from '../ui-kit/ListItem'

const Items = styled.div`
    text-align: center;
`

const Row = styled.div`
    display: flex;
    text-align: center;
    margin-bottom: 64px;
`

const ArticleLink = styled(Link)`
    flex: 1;

    :last-child {
        margin-right: 0;
    }

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const Library = () => {
    const { library, apiState } = useContext(LibraryContext)

    const renderItems = () => {
        if (apiState === ApiState.Active) {
            return <Heading3>Laddar...</Heading3>
        } else if (apiState === ApiState.Error) {
            return <Heading3>Kunde inte hämta sorter.</Heading3>
        }

        const itemsPerRow = 3

        const items = library.map(cultivar => {
            return (
                <ArticleLink
                    key={`cultivar-${cultivar.id}`}
                    to={`/sort/${cultivar.id}/${cultivar.slug}`}
                >
                    <ListItem
                        title={cultivar.title}
                        imageUrl={cultivar.thumbnail}
                    />
                </ArticleLink>
            )
        })

        let rows: JSX.Element[] = []

        for (let i = 0, j = items.length; i < j; i += itemsPerRow) {
            const rowItems = items.slice(i, i + itemsPerRow)

            rows = [...rows, <Row key={`row-${i}`}>{rowItems}</Row>]
        }

        return rows
    }

    return (
        <>
            <Header>
                <Heading1>Sorter</Heading1>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Paragraph>
            </Header>
            <Items>{renderItems()}</Items>
        </>
    )
}

export default Library
