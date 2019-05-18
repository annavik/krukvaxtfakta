import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ApiState } from '../../types/common'
import { LibraryContext } from '../LibraryContext'
import { Header } from '../ui-kit/Header'
import { Heading1 } from '../ui-kit/Heading1'
import { Heading2 } from '../ui-kit/Heading2'
import { Heading3 } from '../ui-kit/Heading3'
import { Heading4 } from '../ui-kit/Heading4'
import { Paragraph } from '../ui-kit/Paragraph'
import { Html } from '../ui-kit/Html'
import { Label } from '../ui-kit/Label'
import { Button } from '../ui-kit/Button'
import { Section } from '../ui-kit/Section'

const CenteredContent = styled.div`
    text-align: center;
    margin: 128px 0;
`

const Image = styled.img`
    display: block;
    vertical-align: middle;
    margin: 0 auto;
    max-height: 320px;
`

const UpdatedTitle = styled(Heading4)`
    font-weight: 400;
    margin: 0 0 24px;
`

const GroupsTitle = styled(Heading2)`
    margin: 0 0 32px;
`

interface Props {
    match: {
        params: {
            id: string
        }
    }
}

const Plant = (props: Props) => {
    const { library, apiState } = useContext(LibraryContext)

    if (apiState === ApiState.Active) {
        return (
            <CenteredContent>
                <Heading3>Laddar...</Heading3>
            </CenteredContent>
        )
    } else if (apiState === ApiState.Error) {
        return (
            <CenteredContent>
                <Heading3>Kunde inte hämta sort.</Heading3>
            </CenteredContent>
        )
    }

    const id = props.match.params.id
    const data = library.find(plant => plant.id === id)

    if (!data) {
        return (
            <CenteredContent>
                <Heading3>Sorten kunde inte hittas.</Heading3>
                <CenteredContent>
                    <Link to="/sorter">
                        <Button title="Tillbaka till sorter" />
                    </Link>
                </CenteredContent>
            </CenteredContent>
        )
    }

    return (
        <>
            {data.image && (
                <Section>
                    <Image src={data.image} />
                </Section>
            )}
            <Header>
                <Heading1>{data.title}</Heading1>
                <UpdatedTitle>Uppdaterad {data.modified}</UpdatedTitle>
            </Header>
            <Section>
                <Heading2>Kännetecken</Heading2>
                {data.characteristics ? (
                    <Html content={data.characteristics} />
                ) : (
                    <Paragraph>Information saknas.</Paragraph>
                )}
            </Section>
            {data.facts && (
                <Section>
                    <Heading2>Övrigt</Heading2>
                    <Html content={data.facts} />
                </Section>
            )}
            <Section>
                <GroupsTitle>Tillhör grupperna:</GroupsTitle>
                <Label>Lorem ipsum</Label>
                <Label>Lorem ipsum</Label>
                <Label>Lorem ipsum</Label>
            </Section>
            <CenteredContent>
                <Link to="/sorter">
                    <Button title="Tillbaka till sorter" />
                </Link>
            </CenteredContent>
        </>
    )
}

export default Plant
