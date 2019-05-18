import React from 'react'
import styled from 'styled-components'
import { Clickable } from '../../ui-kit/Clickable'
import { SolidButton } from '../../ui-kit/SolidButton'

const Container = styled.div`
    margin: 0 0 32px;
`

const SaveToWishlist = () => (
    <Container>
        <Clickable>
            <SolidButton title="Spara i önskelista" />
        </Clickable>
    </Container>
)

export default SaveToWishlist
