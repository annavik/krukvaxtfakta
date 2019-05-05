import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ApiState } from '../../types/common'
import { colors } from '../../utils/colors'
import { LibraryContext } from '../LibraryContext'
import { Heading1 } from '../ui-kit/Heading1'
import { Heading2 } from '../ui-kit/Heading2'
import { Heading3 } from '../ui-kit/Heading3'
import { Heading4 } from '../ui-kit/Heading4'
import { Paragraph } from '../ui-kit/Paragraph'
import { Label } from '../ui-kit/Label'
import { Button } from '../ui-kit/Button'
import { Html } from '../ui-kit/Html'

const Info = styled.div`
    text-align: center;
    margin: 128px 0;
`

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
    max-height: 320px;
`

const UpdatedTitle = styled(Heading4)`
    font-weight: 400;
    margin: 0 0 24px;
`

const GroupsTitle = styled(Heading2)`
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

interface Props {
    match: {
        params: {
            id: string
        }
    }
}

const Cultivar = (props: Props) => {
    const { library, apiState } = useContext(LibraryContext)

    if (apiState === ApiState.Active) {
        return (
            <Info>
                <Heading3>Laddar...</Heading3>
            </Info>
        )
    } else if (apiState === ApiState.Error) {
        return (
            <Info>
                <Heading3>Kunde inte hämta sort.</Heading3>
            </Info>
        )
    }

    const id = props.match.params.id
    const data = library.find(cultivar => cultivar.id === id)

    if (!data) {
        return (
            <Info>
                <Heading3>Sorten kunde inte hittas.</Heading3>
                <BackLinkContainer>
                    <BackLink to="/">
                        <Button title="Tillbaka" />
                    </BackLink>
                </BackLinkContainer>
            </Info>
        )
    }

    const renderImageSection = () => {
        if (data.image) {
            return (
                <Section>
                    <Image src={data.image} />
                </Section>
            )
        }

        return null
    }

    const renderCharacteristicsSection = () => {
        const content = data.characteristics ? (
            <Html content={data.characteristics} />
        ) : (
            <Paragraph>Information saknas.</Paragraph>
        )

        return (
            <Section>
                <Heading2>Kännetecken</Heading2>
                {content}
            </Section>
        )
    }

    const renderFactsSection = () => {
        if (!data.facts) {
            return null
        }

        return (
            <Section>
                <Heading2>Övrigt</Heading2>
                <Html content={data.facts} />
            </Section>
        )
    }

    return (
        <>
            {renderImageSection()}
            <Header>
                <Heading1>{data.title}</Heading1>
                <UpdatedTitle>Uppdaterad {data.modified}</UpdatedTitle>
            </Header>
            {renderCharacteristicsSection()}
            {renderFactsSection()}
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

export default Cultivar
