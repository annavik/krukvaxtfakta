import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Heading1 } from '../components/ui-kit/Heading1'
import { Paragraph } from '../components/ui-kit/Paragraph'
import { colors } from '../utils/colors'
import { ListItem } from '../components/ui-kit/ListItem'
import { LibraryContext } from '../components/LibraryContext'
import { ApiState } from '../types/common'
import { Heading3 } from '../components/ui-kit/Heading3'

const Header = styled.header`
    margin-bottom: 64px;
    border-bottom: 2px ${colors.primary} solid;
`

const Items = styled.div`
    text-align: center;
`

const Row = styled.div`
    text-align: center;
    margin-bottom: 64px;
`

const ArticleLink = styled(Link)`
    display: inline-block;
    margin-right: 64px;

    :last-child {
        margin-right: 0;
    }

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const Library: React.FC = () => {
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
                <ArticleLink key={`cultivar-${cultivar.id}`} to="/article">
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
