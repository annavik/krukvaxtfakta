import React from 'react'
import styled from 'styled-components'
import { PlantData } from '../../../types/library'
import { Header } from '../../ui-kit/Header'
import { Heading1 } from '../../ui-kit/Heading1'
import { Heading2 } from '../../ui-kit/Heading2'
import { Heading4 } from '../../ui-kit/Heading4'
import { Paragraph } from '../../ui-kit/Paragraph'
import { Html } from '../../ui-kit/Html'
import { Label } from '../../ui-kit/Label'
import { Section } from '../../ui-kit/Section'
import BackToLibrary from './BackToLibrary'
import SaveToWishlist from './SaveToWishList'

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
    data: PlantData
}

const PlantArticle = ({ data }: Props) => (
    <>
        {data.image && (
            <Section>
                <Image src={data.image} />
            </Section>
        )}
        <Header>
            <Heading1>{data.title}</Heading1>
            <UpdatedTitle>Uppdaterad {data.modified}</UpdatedTitle>
            <SaveToWishlist />
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
        <BackToLibrary />
    </>
)

export default PlantArticle
