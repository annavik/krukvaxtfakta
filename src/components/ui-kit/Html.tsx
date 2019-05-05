import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    p {
        font-family: 'EB Garamond', serif;
        font-size: 21px;
        line-height: 150%;
        font-weight: 400;
        margin: 0 0 16px;
    }
`

interface Props {
    content: string
}

export const Html = ({ content }: Props) => (
    <Container dangerouslySetInnerHTML={{ __html: content }} />
)
