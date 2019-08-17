import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Header } from '../ui-kit/Header'
import { Section } from '../ui-kit/Section'
import { Heading1 } from '../ui-kit/Heading1'
import { Heading2 } from '../ui-kit/Heading2'
import { Paragraph } from '../ui-kit/Paragraph'
import { Anchor } from '../ui-kit/Anchor'
import { SolidButton } from '../ui-kit/SolidButton'

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    :first-child {
        margin-right: 32px;
    }

    :last-child {
        margin-left: 32px;
    }
`

const Image = styled.img`
    display: block;
    vertical-align: middle;
    max-width: 100%;
`

const LibraryLink = styled(Link)`
    display: block;
    margin: 48px 0;
`

const Home = () => (
    <>
        <Header>
            <Heading1>Hej och välkommen!</Heading1>
        </Header>
        <Section>
            <Paragraph>
                Kan du inte få nog av krukväxter? Då har du kommit rätt! Det här
                är en plats där du kan drömma dig bort bland alla härliga sorter
                och lära sig mer om hur du bäst tar hand om dina växter.
            </Paragraph>
            <LibraryLink to="/sorter">
                <SolidButton title="Till sorter" />
            </LibraryLink>
        </Section>
        <Section>
            <Row>
                <Column>
                    <Heading2>Länkar och tips</Heading2>
                    <Paragraph>
                        Vill du läsa ännu mer finns ett gäng artiklar på{' '}
                        <Anchor href="https://www.wexthuset.com/fakta-och-rad/skotselrad-om-vaxter-i-kruka-och-tradgard/beskrivning-av-krukvaxter-odling-och-forokning/">
                            Wexthuset
                        </Anchor>
                        . Där finns till exempel tips på bra växter för
                        nybörjare.
                    </Paragraph>
                    <Paragraph>
                        På Facebook finns grupper med andra krukväxttokiga. Där
                        kan du ställa frågor, byta sticklingar, ta del av andras
                        samligar och lära dig massor! En populär grupp är{' '}
                        <Anchor href="https://www.facebook.com/groups/2368592203365345/">
                            Krukväxtgäris och -ickebinäris
                        </Anchor>{' '}
                        (för kvinnor och ickebinära).
                    </Paragraph>
                    <Paragraph>
                        <Anchor href="http://krukvaxtpodden.se">
                            Krukväxtpodden
                        </Anchor>{' '}
                        är en podcast där Therese Rosenvinge och Jonna Westin
                        pratar om krukväxter och svarar på frågor tillsammans
                        med experter. Ett mysigt sällskap under tiden du pysslar
                        med växterna!
                    </Paragraph>
                </Column>
                <Column>
                    <Image src="/assets/image-01.png" />
                </Column>
            </Row>
        </Section>
    </>
)

export default Home
