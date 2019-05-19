import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SolidButton } from '../../ui-kit/SolidButton'

const Container = styled.div`
    text-align: center;
    margin: 128px 0;
`

const ToLibrary = () => (
    <Container>
        <Link to="/sorter">
            <SolidButton title="Hitta fler sorter" />
        </Link>
    </Container>
)

export default ToLibrary
