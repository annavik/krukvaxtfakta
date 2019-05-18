import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../utils/colors'
import { Label } from './ui-kit/Label'
import { Logo } from './Logo'

const Container = styled.div`
    background-color: ${colors.lightGray};
`

const Content = styled.div`
    width: 700px;
    height: 64px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 32px;
`

const TopBarLink = styled(Link)`
    margin: 0 32px 0 0;
`

const TopBarLinkText = styled(Label)`
    margin: 0;
`

export const TopBar = () => {
    return (
        <Container>
            <Content>
                <Logo />
                <TopBarLink to="/">
                    <TopBarLinkText>Hem</TopBarLinkText>
                </TopBarLink>
                <TopBarLink to="/sorter">
                    <TopBarLinkText>Sorter</TopBarLinkText>
                </TopBarLink>
                <TopBarLink to="/bidra">
                    <TopBarLinkText>Bidra</TopBarLinkText>
                </TopBarLink>
                <TopBarLink to="/onskelista">
                    <TopBarLinkText>Önskelista</TopBarLinkText>
                </TopBarLink>
            </Content>
        </Container>
    )
}
