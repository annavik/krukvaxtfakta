import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { SolidButton } from '../../ui-kit/SolidButton'
import { Clickable } from '../../ui-kit/Clickable'

const Container = styled.div`
    text-align: center;
    margin: 128px 0;
`

interface Props {
    history: {
        goBack: () => void
    }
}

const Back = (props: Props) => (
    <Container>
        <Clickable onClick={() => props.history.goBack()}>
            <SolidButton title="Tillbaka" />
        </Clickable>
    </Container>
)

export default withRouter(Back)
