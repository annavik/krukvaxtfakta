import React from 'react'
import styled from 'styled-components'
import { Heading3 } from '../../ui-kit/Heading3'
import BackToLibrary from './BackToLibrary'

const Container = styled.div`
    text-align: center;
    margin: 128px 0;
`

interface Props {
    title: string
}

const PlantMessage = ({ title }: Props) => (
    <Container>
        <Heading3>{title}</Heading3>
        <BackToLibrary />
    </Container>
)

export default PlantMessage
