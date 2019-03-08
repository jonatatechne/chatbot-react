import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './Store'

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Chatbot from './Components/Chatbot';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="conteudo">
          <Header />
          <Home />
          <Chatbot />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
