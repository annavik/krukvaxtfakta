import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Clickable } from '../../ui-kit/Clickable'
import { BorderButton } from '../../ui-kit/BorderButton'

const Container = styled.div`
    text-align: center;
    margin: 64px 0;
`

interface Props {
    history: {
        goBack: () => void
    }
}

const Back = (props: Props) => (
    <Container>
        <Clickable onClick={() => props.history.goBack()}>
            <BorderButton title="Tillbaka" />
        </Clickable>
    </Container>
)

export default withRouter(Back)
