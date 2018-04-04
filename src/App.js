import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { AppHeader } from './components/header'
import { AppMenu } from './components/menu'
import { AppQuestions } from './components/questions';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuOpen: false
    }
  }

  render() {
    return (
      <div>
        <AppHeader
          onLeftIconClick={() => this.setState({isMenuOpen: true})}
        />
        <AppMenu
          open={this.state.isMenuOpen}
          clickOut={(isMenuOpen) => this.setState({ isMenuOpen })}
        /> 
        <AppQuestions/>       
      </div>
    );
  }
}

export default App;
