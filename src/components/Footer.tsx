import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import { Anchor } from './ui-kit/Anchor'
import { Label } from './ui-kit/Label'

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

const InfoText = styled(Label)`
    font-weight: 400;
    line-height: 150%;

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
                    <InfoText>
                        Kod och design av Anna Viklund 2019.
                        <br />
                        <Anchor href="mailto:annamariaviklund@gmail.com">
                            Kontakta mig
                        </Anchor>{' '}
                        om du har frågor om sidan!
                    </InfoText>
                    <InfoText>
                        Ikoner av{' '}
                        <Anchor href="https://www.flaticon.com/authors/pixel-perfect">
                            Pixel Perfect
                        </Anchor>{' '}
                        från{' '}
                        <Anchor href="https://www.flaticon.com">
                            www.flaticon.com
                        </Anchor>
                        .
                    </InfoText>
                </Info>
            </Content>
        </Container>
    )
}
