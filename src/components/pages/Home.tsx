import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Header } from '../ui-kit/Header'
import { Section } from '../ui-kit/Section'
import { Heading1 } from '../ui-kit/Heading1'
import { Heading2 } from '../ui-kit/Heading2'
import { Paragraph } from '../ui-kit/Paragraph'
import { Anchor } from '../ui-kit/Anchor'
import { colors } from '../../utils/colors'

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
    color: ${colors.primary};
`

const Home = () => (
    <>
        <Header>
            <Heading1>Hej och välkommen!</Heading1>
        </Header>
        <Section>
            <Paragraph>
                Kan du inte få nog av palettblad? Då har du kommit rätt! Det här
                är en plats där du kan drömma dig bort bland alla vackra sorter.
            </Paragraph>
            <Paragraph>
                Kan du inte så mycket om palettblad, men vill veta mer, har du
                också kommit rätt. Palettblad är enkla att odla, både från frön
                och från sticklingar. De visar direkt när de inte är nöjda,
                vilket är toppen om du är lite glömsk. Med lite kärlek kan de på
                rätt så kort tid få otroliga blad i flera färger och mönster. Ta
                dig en titt bland{' '}
                <LibraryLink to="/sorter">sorterna</LibraryLink>!
            </Paragraph>
        </Section>
        <Section>
            <Row>
                <Column>
                    <Heading2>Lite länkar</Heading2>
                    <Paragraph>
                        På{' '}
                        <Anchor href="https://www.plantagen.se/palettblad.html">
                            Plantagen
                        </Anchor>{' '}
                        finns information om hur du tar hand om dina paletter.
                    </Paragraph>
                    <Paragraph>
                        <Anchor href="https://www.wexthuset.com">
                            Wexthuset
                        </Anchor>{' '}
                        har ett stort utbud av fröer och olika odlingstillbehör.
                        Där finns också{' '}
                        <Anchor href="https://www.wexthuset.com/fakta-och-rad/skotselrad-om-vaxter-i-kruka-och-tradgard/beskrivning-av-krukvaxter-odling-och-forokning/skotselrad-sticklingar-palettblad-coleus">
                            fakta och tips
                        </Anchor>{' '}
                        om palettblad.
                    </Paragraph>
                    <Paragraph>
                        På Facebook finns grupper med andra palettbladstokiga.
                        Där kan du ställa frågor, kanske byta till dig en
                        stickling, ta del av andras samligar och lära dig
                        massor! Två stora grupper är{' '}
                        <Anchor href="https://www.facebook.com/groups/1873268369557231/">
                            Palettbladsgäris
                        </Anchor>{' '}
                        (för kvinnor och ickebinära) och{' '}
                        <Anchor href="https://www.facebook.com/groups/700210806749371/">
                            Palettblad / Coleus
                        </Anchor>
                        .
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
