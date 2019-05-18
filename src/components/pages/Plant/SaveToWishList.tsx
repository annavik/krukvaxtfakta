import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils/colors'
import {
    Wishlist,
    getWishlist,
    isInWishlist,
    saveToWishlist,
    removeFromWishlist,
} from '../../../utils/wishlist'
import { Clickable } from '../../ui-kit/Clickable'
import { Label } from '../../ui-kit/Label'

const Container = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 0 24px;
`

const WishlistButton = styled(Clickable)`
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

const SaveToWishlist = ({ plantId }: Props) => {
    const [wishlist, setWishlist] = useState<Wishlist>(getWishlist())

    const inWishList = isInWishlist(plantId, wishlist)

    if (inWishList) {
        return (
            <Container>
                <WishlistButton
                    onClick={() => {
                        const updatedWishlist = removeFromWishlist(plantId)
                        setWishlist(updatedWishlist)
                    }}
                >
                    <Text>Sparad i önskelista</Text>
                    <Image src="/assets/icons/heart-filled.png" />
                </WishlistButton>
            </Container>
        )
    }

    return (
        <Container>
            <WishlistButton
                onClick={() => {
                    const updatedWishlist = saveToWishlist(plantId)
                    setWishlist(updatedWishlist)
                }}
            >
                <Text>Spara i önskelista</Text>
                <Image src="/assets/icons/heart.png" />
            </WishlistButton>
        </Container>
    )
}

export default SaveToWishlist
