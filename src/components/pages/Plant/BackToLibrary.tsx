import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BorderButton } from '../../ui-kit/BorderButton'

const Container = styled.div`
    text-align: center;
    margin: 128px 0;
`

const BackToLibrary = () => (
    <Container>
        <Link to="/sorter">
            <BorderButton title="Tillbaka till sorter" />
        </Link>
    </Container>
)

export default BackToLibrary
