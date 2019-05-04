import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import { colors } from './utils/colors'

const Container = styled.div`
    text-align: center;
`

const AppHeader = styled.header`
    background-color: ${colors.bg};
    color: ${colors.fg};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`

const AppLogo = styled.img`
    animation: AppLogoSpin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;

    @keyframes AppLogoSpin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

const App: React.FC = () => {
    return (
        <Container>
            <AppHeader className="App-header">
                <AppLogo src={logo} className="App-logo" alt="logo" />
                <p>Palett-palatset</p>
            </AppHeader>
        </Container>
    )
}

export default App
