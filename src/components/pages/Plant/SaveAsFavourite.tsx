import React, { useState } from 'react'
import styled from 'styled-components'
import {
    Favourites,
    getFavourites,
    isInFavourites,
    saveToFavourites,
    removeFromFavourites,
} from '../../../utils/favourites'
import { Clickable } from '../../ui-kit/Clickable'
import { Label } from '../../ui-kit/Label'

const Container = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 0 24px;

    @media (max-width: 800px) {
        position: static;
        display: inline-block;
    }
`

const FavouritesButton = styled(Clickable)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Text = styled(Label)`
    font-style: italic;
    font-weight: 400;
    margin: 0 12px 0 0;
`

const Image = styled.img`
    display: block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
`

interface Props {
    plantId: string
}

const SaveAsFavourite = ({ plantId }: Props) => {
    const [favourites, setFavourites] = useState<Favourites>(getFavourites())

    const inFavourites = isInFavourites(plantId, favourites)

    if (inFavourites) {
        return (
            <Container>
                <FavouritesButton
                    onClick={() => {
                        const updatedFavourites = removeFromFavourites(plantId)
                        setFavourites(updatedFavourites)
                    }}
                >
                    <Text>Sparad som favorit</Text>
                    <Image src="/assets/icons/heart-filled.png" />
                </FavouritesButton>
            </Container>
        )
    }

    return (
        <Container>
            <FavouritesButton
                onClick={() => {
                    const updatedFavourites = saveToFavourites(plantId)
                    setFavourites(updatedFavourites)
                }}
            >
                <Text>Spara som favorit</Text>
                <Image src="/assets/icons/heart.png" />
            </FavouritesButton>
        </Container>
    )
}

export default SaveAsFavourite
