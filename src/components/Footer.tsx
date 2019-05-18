import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../utils/colors'
import { Heading4 } from './ui-kit/Heading4'
import { Paragraph } from './ui-kit/Paragraph'
import { Anchor } from './ui-kit/Anchor'

const Container = styled.div`
    background-color: ${colors.lightGray};
`

const Content = styled.div`
    width: 700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px 32px;
`

const Image = styled.img`
    display: block;
    vertical-align: middle;
    height: 96px;
    margin-right: 32px;
`

const Info = styled.div`
    margin-left: 32px;
`

const Span = styled.span`
    display: block;
    font-size: 15px;
    line-height: 120%;
    margin-bottom: 16px;

    :last-child {
        margin-bottom: 0;
    }
`

export const Footer = () => {
    return (
        <Container>
            <Content>
                <Image src="/assets/image-02.png" />
                <Info>
                    <Span>
                        Kod och design av Anna Viklund.{' '}
                        <Anchor href="mailto:annamariaviklund@gmail.com">
                            Kontakta mig
                        </Anchor>{' '}
                        om du har frågor om sidan!
                    </Span>
                    <Span>
                        Ikoner av{' '}
                        <Anchor href="https://www.flaticon.com/authors/pixel-perfect">
                            Pixel Perfect
                        </Anchor>{' '}
                        från{' '}
                        <Anchor href="https://www.flaticon.com">
                            www.flaticon.com
                        </Anchor>
                        .
                    </Span>
                    <Span>
                        Tack till{' '}
                        <Anchor href="https://www.wexthuset.com">
                            Wexthuset
                        </Anchor>{' '}
                        som har lånat ut bilder på sorter!
                    </Span>
                </Info>
            </Content>
        </Container>
    )
}
