import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { colors } from './utils/colors'
import Library from './pages/Library'
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
            <Router>
                <Route exact path="/" component={Library} />
                <Route path="/article" component={Article} />
            </Router>
        </Container>
    )
}

export default App
