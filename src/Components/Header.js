import React from 'react'
import logo from '../logo.svg';

const Header = props => {
    return (
        <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>App Chatbot Teste</h3>
        </header>
    )
}

export default Header