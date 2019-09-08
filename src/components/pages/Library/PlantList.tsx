import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PlantData, Group } from '../../../types/library'
import { PlantListItem } from './PlantListItem'

const Items = styled.div`
    margin: -16px;
    text-align: left;
`

const ArticleLink = styled(Link)`
    display: inline-block;
    width: calc(${100 / 3}% - 32px);
    box-sizing: content-box;
    margin: 16px;

    @media (max-width: 800px) {
        width: calc(${100 / 2}% - 32px);
    }
`

interface Props {
    plants: PlantData[]
    searchValue?: string
    groupFilter?: Group
}

const PlantList = ({ plants, searchValue, groupFilter }: Props) => {
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

    const items = filtered.map(plant => (
        <ArticleLink
            key={`plant-${plant.id}`}
            to={`/sort/${plant.id}/${plant.slug}`}
        >
            <PlantListItem data={plant} />
        </ArticleLink>
    ))

    return <Items>{items}</Items>
}

export default PlantList
