import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { colors } from './utils/colors'
import { LibraryProvider } from './components/LibraryContext'
import { TopBar } from './components/TopBar'
import Library from './components/pages/Library'
import Cultivar from './components/pages/Cultivar'

const Content = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 64px 32px;
    background-color: ${colors.bg};
`

const App: React.FC = () => {
    const ScrollToTop = () => {
        window.scrollTo(0, 0)

        return null
    }

    return (
        <LibraryProvider>
            <Router>
                <TopBar />
                <Content>
                    <Route component={ScrollToTop} />
                    <Route exact path="/" component={Library} />
                    <Route path="/sort/:id/:name" component={Cultivar} />
                </Content>
            </Router>
        </LibraryProvider>
    )
}

export default App
