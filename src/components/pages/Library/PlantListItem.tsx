import React from 'react'
import styled from 'styled-components'
import { PlantData } from '../../../types/library'
import { colors } from '../../../utils/colors'
import { Label } from '../../ui-kit/Label'

const Container = styled.div`
    text-align: center;
`

interface ItemImageProps {
    backgroundImage: string
}

const ItemImage = styled.div`
    width: 128px;
    height: 128px;
    border-radius: 50%;
    margin: 0 auto 16px;
    background-color: ${colors.lightGray};
    background-image: url("${(props: ItemImageProps) =>
        props.backgroundImage}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const PlaceholderImage = styled(ItemImage)`
    background-size: 48px;
`

interface Props {
    data: PlantData
}

export const PlantListItem = ({ data }: Props) => {
    const image = data.image.thumbnail ? (
        <ItemImage backgroundImage={data.image.thumbnail} />
    ) : (
        <PlaceholderImage backgroundImage="/assets/icons/leafs.png" />
    )

    return (
        <Container>
            {image}
            <Label>{data.name}</Label>
        </Container>
    )
}
