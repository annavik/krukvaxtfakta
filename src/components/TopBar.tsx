import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../utils/colors'
import { Heading4 } from './ui-kit/Heading4'
import { Logo } from './Logo'

const Container = styled.div`
    height: 64px;
    background-color: ${colors.lightGray};
    display: flex;
    align-items: center;
    padding: 0 32px;
`

const TopBarLink = styled(Link)`
    margin: 0 32px 0 0;

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const TopBarLinkText = styled(Heading4)`
    margin: 0;
`

export const TopBar = () => {
    return (
        <Container>
            <Logo />
            <TopBarLink to="#">
                <TopBarLinkText>Hem</TopBarLinkText>
            </TopBarLink>
            <TopBarLink to="/">
                <TopBarLinkText>Sorter</TopBarLinkText>
            </TopBarLink>
            <TopBarLink to="#">
                <TopBarLinkText>Bidra</TopBarLinkText>
            </TopBarLink>
            <TopBarLink to="#">
                <TopBarLinkText>Min samling</TopBarLinkText>
            </TopBarLink>
        </Container>
    )
}
