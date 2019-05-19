import React from 'react'
import styled from 'styled-components'
import { Heading3 } from './Heading3'

const Container = styled.div`
    text-align: center;
    margin: 128px 0;
`

interface Props {
    title: string
}

export const Message = ({ title }: Props) => (
    <Container>
        <Heading3>{title}</Heading3>
    </Container>
)
