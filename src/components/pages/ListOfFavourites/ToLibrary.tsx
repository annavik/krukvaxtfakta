import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SolidButton } from '../../ui-kit/SolidButton'

const Container = styled.div`
    text-align: center;
    margin: 128px 0;

    @media (max-width: 800px) {
        margin: 64px 0;
    }
`

const ToLibrary = () => (
    <Container>
        <Link to="/sorter">
            <SolidButton title="Till sorter" />
        </Link>
    </Container>
)

export default ToLibrary
