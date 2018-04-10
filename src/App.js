import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { QUESTIONS } from './fixtures';

// COMPONENTS
import AppHeader from './components/header';
import AppMenu from './components/menu';
import Navigation from './components/navigation';
import QuestionList from './components/QuestionList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuOpen: false
    }
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen(){
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  render() {
    return (
      <div>
        <AppHeader
          onLeftIconClick={() => this.setState({isMenuOpen: true})}
        />
        <Navigation />
        <AppMenu
          open={this.state.isMenuOpen}
          clickOut={(isMenuOpen) => this.setState({ isMenuOpen })}
          itemClicked = {this.handleOpen}
        /> 
        <QuestionList questions = {QUESTIONS}/>       
      </div>
    );
  }
}

export default App;
