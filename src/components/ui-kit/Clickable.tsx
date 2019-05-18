import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

interface Props {
    children?: React.ReactNode
}

export const Clickable = ({ children }: Props) => (
    <Container>{children}</Container>
)
