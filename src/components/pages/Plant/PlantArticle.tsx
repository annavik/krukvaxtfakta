import React from 'react'
import styled from 'styled-components'
import { PlantData } from '../../../types/library'
import { Section } from '../../ui-kit/Section'
import { Header } from '../../ui-kit/Header'
import { Heading1 } from '../../ui-kit/Heading1'
import { Heading2 } from '../../ui-kit/Heading2'
import { Label } from '../../ui-kit/Label'
import { Paragraph } from '../../ui-kit/Paragraph'
import { Html } from '../../ui-kit/Html'
import { GroupLabel } from './GroupLabel'
import SaveToWishlist from './SaveToWishList'

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 320px;
    overflow: hidden;
`

const Image = styled.img`
    display: block;
    vertical-align: middle;
    max-height: 100%;
`

const UpdatedTitle = styled(Label)`
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
                <ImageContainer>
                    <Image src={data.image} />
                </ImageContainer>
            </Section>
        )}
        <Header>
            <Heading1>{data.title}</Heading1>
            <UpdatedTitle>Uppdaterad {data.modified}</UpdatedTitle>
            <SaveToWishlist plantId={data.id} />
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
            <GroupLabel>Lorem ipsum</GroupLabel>
            <GroupLabel>Lorem ipsum</GroupLabel>
            <GroupLabel>Lorem ipsum</GroupLabel>
        </Section>
    </>
)

export default PlantArticle
