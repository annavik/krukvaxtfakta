import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../utils/colors'
import { Heading1 } from '../components/ui-kit/Heading1'
import { Heading2 } from '../components/ui-kit/Heading2'
import { Heading3 } from '../components/ui-kit/Heading3'
import { Heading4 } from '../components/ui-kit/Heading4'
import { Paragraph } from '../components/ui-kit/Paragraph'
import { Label } from '../components/ui-kit/Label'
import { Button } from '../components/ui-kit/Button'

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
    padding: 64px 0;
`

const UpdatedTitle = styled(Heading4)`
    font-weight: 400;
    margin: 0 0 24px;
`

const GroupsTitle = styled(Heading3)`
    margin: 0 0 32px;
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
                <UpdatedTitle>Uppdaterad 2019-05-05 08:00</UpdatedTitle>
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
                <GroupsTitle>Tillhör grupperna:</GroupsTitle>
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
