import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PlantData, Group } from '../../../types/library'
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
    groupFilter?: Group
}

const PlantList = ({ plants, searchValue, groupFilter }: Props) => {
    const renderItems = () => {
        const itemsPerRow = 3

        let filtered = plants

        if (searchValue) {
            filtered = filtered.filter(plant =>
                plant.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        }

        if (groupFilter) {
            filtered = plants.filter(
                plant => plant.groups.indexOf(groupFilter) !== -1
            )
        }

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
