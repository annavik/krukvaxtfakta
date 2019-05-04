import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../utils/colors'
import { Heading1 } from '../ui-kit/Heading1'
import { Heading2 } from '../ui-kit/Heading2'
import { Paragraph } from '../ui-kit/Paragraph'
import { Label } from '../ui-kit/Label'
import { Button } from '../ui-kit/Button'
import { Heading3 } from '../ui-kit/Heading3'

const Section = styled.div`
    margin-bottom: 64px;
`

const Header = styled.header`
    margin-bottom: 64px;
    border-bottom: 2px ${colors.primary} solid;
`

const Image = styled.img`
    display: block;
    vertical-align: middle;
    margin: 0 auto;
`

const BackLinkContainer = styled.div`
    text-align: center;
    margin: 128px 0;
`

const BackLink = styled(Link)`
    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const Article: React.FC = () => {
    return (
        <>
            <Section>
                <Image src="https://www.plantagen.se/on/demandware.static/-/Library-Sites-PlantagenShared/default/dwb50e059e/Plantguide/palettblad-coleus-500.jpg" />
            </Section>
            <Header>
                <Heading1>Lorem ipsum dolor sit amet</Heading1>
                <Paragraph>Uppdaterad 2019-05-05 08:00</Paragraph>
            </Header>
            <Section>
                <Heading2>Lorem ipsum dolor sit amet</Heading2>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Paragraph>
            </Section>
            <Section>
                <Heading2>Lorem ipsum dolor sit amet</Heading2>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Paragraph>
            </Section>
            <Section>
                <Heading3>Tillhör grupperna:</Heading3>
                <Label>Lorem ipsum</Label>
                <Label>Lorem ipsum</Label>
                <Label>Lorem ipsum</Label>
            </Section>
            <BackLinkContainer>
                <BackLink to="/">
                    <Button title="Tillbaka" />
                </BackLink>
            </BackLinkContainer>
        </>
    )
}

export default Article
