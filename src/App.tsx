import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LibraryProvider } from './components/LibraryContext'
import { TopBar } from './components/TopBar'
import { Footer } from './components/Footer'
import Home from './components/pages/Home'
import Library from './components/pages/Library/Library'
import Plant from './components/pages/Plant'
import UnderConstruction from './components/pages/UnderConstruction'
import NotFound from './components/pages/NotFound'

const Content = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 64px 32px;
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
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/sorter" component={Library} />
                        <Route exact path="/sort/:id/:name" component={Plant} />
                        <Route
                            exact
                            path="/grupper"
                            component={UnderConstruction}
                        />
                        <Route
                            exact
                            path="/bidra"
                            component={UnderConstruction}
                        />
                        <Route
                            exact
                            path="/onskelista"
                            component={UnderConstruction}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Content>
                <Footer />
            </Router>
        </LibraryProvider>
    )
}

export default App
