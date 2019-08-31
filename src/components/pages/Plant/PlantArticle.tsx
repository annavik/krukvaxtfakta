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
import { Anchor } from '../../ui-kit/Anchor'
import SaveAsFavourite from './SaveAsFavourite'
import Factbox from './Factbox'

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

const ImageCred = styled(Label)`
    font-style: italic;
    font-weight: 400;
    text-align: center;
    margin: 8px 0 24px 0;
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

const FloatingSection = styled(Section)`
    float: right;
    margin-left: 32px;
`

const placeholderContent =
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'

interface Props {
    data: PlantData
}

const PlantArticle = ({ data, data: { image: imageData } }: Props) => (
    <>
        {imageData.image && (
            <Section>
                <ImageContainer>
                    <Image src={imageData.image} />
                </ImageContainer>
                {imageData.photographer && (
                    <ImageCred>
                        Foto:{' '}
                        <Anchor href={imageData.photographerLink}>
                            {imageData.photographer}
                        </Anchor>
                    </ImageCred>
                )}
            </Section>
        )}
        <Header>
            <Heading1>{data.name}</Heading1>
            <UpdatedTitle>Uppdaterad {data.modified}</UpdatedTitle>
            <SaveAsFavourite plantId={data.id} />
        </Header>
        <FloatingSection>
            <Factbox data={data} />
        </FloatingSection>
        <Section>
            <Heading2>Kännetecken</Heading2>
            {data.characteristics ? (
                <Html content={data.characteristics} />
            ) : (
                <Paragraph>Information saknas.</Paragraph>
            )}
        </Section>
        <Section>
            <Heading2>Skötselråd</Heading2>
            <Html content={placeholderContent} />
        </Section>
        <Section>
            <Heading2>Mer om {data.name}</Heading2>
            <Html content={data.facts || placeholderContent} />
        </Section>
        <ContributeSection>
            <ContributeContainer>
                <ContributeText>
                    Vet du mer om {data.name} eller ser något som inte stämmer?
                </ContributeText>
                <Link to="/bidra">
                    <SolidButton title="Dela med dig!" />
                </Link>
            </ContributeContainer>
        </ContributeSection>
    </>
)

export default PlantArticle
