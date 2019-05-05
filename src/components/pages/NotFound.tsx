import React from 'react'
import { Header } from '../ui-kit/Header'
import { Heading1 } from '../ui-kit/Heading1'
import { Paragraph } from '../ui-kit/Paragraph'

const NotFound = () => (
    <>
        <Header>
            <Heading1>Sidan kunde inte hittas</Heading1>
        </Header>
        <Paragraph>
            Sidan du försökte besöka kunde tyvärr inte hittas.
        </Paragraph>
    </>
)

export default NotFound
