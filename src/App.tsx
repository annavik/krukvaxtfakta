import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { colors } from './utils/colors'
import { TopBar } from './components/TopBar'
import Library from './pages/Library'
import Article from './pages/Article'
import { LibraryProvider } from './components/LibraryContext'

const Content = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 64px 32px;
    background-color: ${colors.bg};
`

const App: React.FC = () => {
    return (
        <LibraryProvider>
            <Router>
                <TopBar />
                <Content>
                    <Route exact path="/" component={Library} />
                    <Route path="/article" component={Article} />
                </Content>
            </Router>
        </LibraryProvider>
    )
}

export default App
