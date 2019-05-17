import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PlantData } from '../../../types/library'
import { PlantListItem } from './PlantListItem'

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
`

interface Props {
    plants: PlantData[]
    searchValue?: string
}

const PlantList = ({ plants, searchValue }: Props) => {
    const renderItems = () => {
        const itemsPerRow = 3

        const filtered = searchValue
            ? plants.filter(plant => {
                  return plant.title
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
              })
            : plants

        const items = filtered.map(plant => {
            return (
                <ArticleLink
                    key={`plant-${plant.id}`}
                    to={`/sort/${plant.id}/${plant.slug}`}
                >
                    <PlantListItem data={plant} />
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

    return <>{renderItems()}</>
}

export default PlantList
