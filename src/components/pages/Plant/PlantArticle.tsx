import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PlantData } from '../../../types/library'
import { colors } from '../../../utils/colors'
import { Section } from '../../ui-kit/Section'
import { Header } from '../../ui-kit/Header'
import { Heading1 } from '../../ui-kit/Heading1'
import { Heading2 } from '../../ui-kit/Heading2'
import { Label } from '../../ui-kit/Label'
import { Paragraph } from '../../ui-kit/Paragraph'
import { SolidButton } from '../../ui-kit/SolidButton'
import { Html } from '../../ui-kit/Html'
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

const ContributeSection = styled(Section)`
    text-align: center;
`

const ContributeContainer = styled.div`
    display: inline-block;
    padding: 32px;
    background: ${colors.lightGray};
    border-radius: 4px;
`

const ContributeText = styled.span`
    display: block;
    font-size: 15px;
    line-height: 120%;
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
        <ContributeSection>
            <ContributeContainer>
                <ContributeText>
                    Vet du mer om {data.title} eller ser något som inte stämmer?
                </ContributeText>
                <Link to="/bidra">
                    <SolidButton title="Dela med dig!" />
                </Link>
            </ContributeContainer>
        </ContributeSection>
    </>
)

export default PlantArticle
