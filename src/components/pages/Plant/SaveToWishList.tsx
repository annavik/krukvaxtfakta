import React, { useState } from 'react'
import styled from 'styled-components'
import { Clickable } from '../../ui-kit/Clickable'
import {
    Wishlist,
    getWishlist,
    isInWishlist,
    saveToWishlist,
    removeFromWishlist,
} from '../../../utils/wishlist'
import { Label } from '../../ui-kit/Label'

const Container = styled.div`
    margin: 0 0 24px;
`

const WishlistButton = styled(Clickable)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Text = styled(Label)`
    font-weight: 600;
    margin: 0;
`

const Image = styled.img`
    display: block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 8px;
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
                    <Image src="/assets/icons/heart-filled.png" />
                    <Text>Sparad i önskelista</Text>
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
                <Image src="/assets/icons/heart.png" />
                <Text>Spara i önskelista</Text>
            </WishlistButton>
        </Container>
    )
}

export default SaveToWishlist
