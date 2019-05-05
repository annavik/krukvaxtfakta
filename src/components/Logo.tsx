import React from 'react'
import styled from 'styled-components'
import { Heading3 } from './ui-kit/Heading3'

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0 48px 0 0;
`

const LogoImage = styled.img`
    display: block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    margin-right: 16px;
`

const LogoText = styled(Heading3)`
    margin: 0;
`

export const Logo = () => {
    return (
        <Container>
            <LogoImage src="/assets/icons/plant.png" />
            <LogoText>Paletten</LogoText>
        </Container>
    )
}
