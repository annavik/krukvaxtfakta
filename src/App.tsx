import React from 'react'
import styled from 'styled-components'
import { colors } from './utils/colors'
import Article from './pages/Article'

const Container = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 64px 32px;
    background-color: ${colors.bg};
`

const App: React.FC = () => {
    return (
        <Container>
            <Article />
        </Container>
    )
}

export default App
