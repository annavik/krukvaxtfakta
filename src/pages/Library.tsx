import React from 'react'
import styled from 'styled-components'
import { Heading1 } from '../ui-kit/Heading1'
import { Paragraph } from '../ui-kit/Paragraph'
import { colors } from '../utils/colors'
import { ListItem } from '../ui-kit/ListItem'

const Header = styled.header`
    margin-bottom: 64px;
    border-bottom: 2px ${colors.primary} solid;
`

const Items = styled.div``

const Row = styled.div`
    margin-bottom: 64px;
`

const ArticleLink = styled.a`
    display: inline-block;
    margin-right: 32px;

    :last-child {
        margin-right: 0;
    }

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const Library: React.FC = () => {
    const renderItems = () => {
        const numberOfItems = 14
        const itemsPerRow = 3

        const items = [...Array(numberOfItems)].map((_e, i) => {
            return (
                <ArticleLink key={`item-${i}`} href="/article">
                    <ListItem
                        title="Lorem ipsum dolor sit amet"
                        imageUrl="https://www.wexthuset.com/images/products/wexthuset/palettblad-stickling-durham-gala.jpg"
                    />
                </ArticleLink>
            )
        })

        let rows: JSX.Element[] = []

        for (let i = 0, j = items.length; i < j; i += itemsPerRow) {
            const rowItems = items.slice(i, i + itemsPerRow)

            rows = [...rows, <Row>{rowItems}</Row>]
        }

        return rows
    }

    return (
        <>
            <Header>
                <Heading1>Library</Heading1>
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
