import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { Heading4 } from './Heading4'

const Item = styled.div`
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
    title: string
    imageUrl?: string
}

export const ListItem = ({ title, imageUrl }: Props) => {
    const image = imageUrl ? (
        <ItemImage backgroundImage={imageUrl} />
    ) : (
        <PlaceholderImage backgroundImage="/assets/icons/plant.png" />
    )

    return (
        <Item>
            {image}
            <Heading4>{title}</Heading4>
        </Item>
    )
}
