import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { colors } from './utils/colors'
import { LibraryProvider } from './components/LibraryContext'
import { TopBar } from './components/TopBar'
import Library from './components/pages/Library'
import Plant from './components/pages/Plant'
import UnderConstruction from './components/pages/UnderConstruction'
import NotFound from './components/pages/NotFound'

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
                    <Switch>
                        <Route exact path="/" component={UnderConstruction} />
                        <Route exact path="/sorter" component={Library} />
                        <Route exact path="/sort/:id/:name" component={Plant} />
                        <Route
                            exact
                            path="/bidra"
                            component={UnderConstruction}
                        />
                        <Route
                            exact
                            path="/min-samling"
                            component={UnderConstruction}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </Router>
        </LibraryProvider>
    )
}

export default App
