import React, { Component } from 'react';
import AppQuestion from './question';

class AppQuestions extends Component {
      
    render() {
      return (
        <div>
          <AppQuestion
            description="Question1"
          />
          <AppQuestion
            description="Question2"
          />        
        </div>
      );
    }
  }
  
  export default AppQuestions;