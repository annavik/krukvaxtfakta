import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

interface StyleProps {
    disabled?: boolean
}

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    background: ${({ disabled }: StyleProps) =>
        disabled ? colors.lightGray : colors.primary};
    border-radius: 4px;
    font-size: 15px;
    line-height: 120%;
    font-weight: 600;
    height: 40px;
    padding: 0 32px;
`

export const Text = styled.span`
    color: ${({ disabled }: StyleProps) => (disabled ? colors.fg : colors.bg)};
    font-size: 15px;
    line-height: 120%;
    font-weight: 600;
`

interface Props {
    title: string
    disabled?: boolean
}

export const SolidButton = ({ title, disabled }: Props) => (
    <Container disabled={disabled}>
        <Text disabled={disabled}>{title}</Text>
    </Container>
)
