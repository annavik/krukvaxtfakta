import React from 'react'
import styled from 'styled-components'
import { Header } from '../ui-kit/Header'
import { Heading1 } from '../ui-kit/Heading1'
import { Section } from '../ui-kit/Section'
import { Paragraph } from '../ui-kit/Paragraph'
import { Heading2 } from '../ui-kit/Heading2'
import { Anchor } from '../ui-kit/Anchor'
import { SolidButton } from '../ui-kit/SolidButton'

export const ContributeHeader = styled(Header)`
    margin-bottom: 64px;
`

const ContributeSection = styled(Section)`
    margin-bottom: 96px;
`

const ButtonLink = styled(Anchor)`
    display: block;
    margin: 32px 0;
`

const Contribute = () => (
    <>
        <ContributeHeader>
            <Heading1>Bidra</Heading1>
            <Paragraph>
                Här kan du glädja andra växtälskare genom att bidra med dina
                kunskaper! Vi hjälps alla åt att hålla informationen uppdaterad,
                så känn inte att du måste vara en expert för att bidra.
            </Paragraph>
        </ContributeHeader>
        <ContributeSection>
            <Heading2>Registera en ny sort</Heading2>
            <Paragraph>
                Saknas en sort? Här kan du registera en ny! Som tack för att du
                registrerar en ny växt kan du även vara med och tävla om frön!
                En påse med 25 frön från{' '}
                <Anchor
                    href="https://www.impecta.se/sv/artiklar/suckulenter.html"
                    target="__blank"
                >
                    blandade suckulenter
                </Anchor>{' '}
                (såtid december-januari) kommer lottas ut till 3 personer.
                Vinnarna kommer kontaktas via email 1:a oktober.
            </Paragraph>
            <ButtonLink
                href="https://forms.gle/id3FKY32c1rFgoZJ7"
                target="__blank"
            >
                <SolidButton title="Till formuläret" />
            </ButtonLink>
        </ContributeSection>
        <ContributeSection>
            <Heading2>Skicka in en bild</Heading2>
            <Paragraph>
                Ladda gärna upp en bild på din växt så att andra kan känna igen
                sorten! Fotograf kommer visas under bilden på hemsidan. Det är
                viktigt att bilden är din egen eller att du har tillåtelse att
                använda den.
            </Paragraph>
            <Paragraph>
                För att ladda upp en bild via formuläret krävs inloggning via
                Google. Det går även bra att skicka ett vanligt mail med bilden
                till{' '}
                <Anchor href="mailto:krukvaxtfakta@gmail.com">
                    krukvaxtfakta@gmail.com
                </Anchor>
                .
            </Paragraph>
            <ButtonLink
                href="https://forms.gle/yQPQhvy9TCCuffak9"
                target="__blank"
            >
                <SolidButton title="Till formuläret" />
            </ButtonLink>
        </ContributeSection>
        <ContributeSection>
            <Heading2>Vet du mer?</Heading2>
            <Paragraph>
                Har du sett något som inte stämmer eller vet mer om någon växt
                som finns på hemsidan? Dela gärna med dig för att göra sidan
                ännu bättre!
            </Paragraph>
            <ButtonLink
                href="https://forms.gle/5YFr68J1UfhpjJiF7"
                target="__blank"
            >
                <SolidButton title="Till formuläret" />
            </ButtonLink>
        </ContributeSection>
    </>
)

export default Contribute
