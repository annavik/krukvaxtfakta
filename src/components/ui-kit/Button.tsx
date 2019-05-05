import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    background: ${colors.primary};
    color: ${colors.bg};
    border-radius: 4px;
    font-size: 15px;
    line-height: 120%;
    font-weight: 600;
    height: 40px;
    padding: 0 32px;
`

export const Text = styled.span`
    color: ${colors.bg};
    font-size: 15px;
    line-height: 120%;
    font-weight: 600;
`

interface Props {
    title: string
}

export const Button = ({ title }: Props) => (
    <Container>
        <Text>{title}</Text>
    </Container>
)
