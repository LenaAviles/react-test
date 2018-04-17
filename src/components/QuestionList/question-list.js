import React, { Component } from 'react';
import Question from '../Question/question';
import { List, ListItem } from 'material-ui/List';
import { firebaseQuestions, firebaseLooper } from '../../firebase';


class QuestionList extends Component {

  state = {
    questions: []
  }

  componentWillMount() {
    firebaseQuestions.limitToFirst(5).once('value')
      .then(snapshot => {
        const questions = firebaseLooper(snapshot);
        this.setState({ questions });
      });
  }

  render() {
    const { questions } = this.state;
    const questionElements = questions.map(question => <ListItem key={question.id}><Question question={question} /></ListItem>);

    return (      
      <List>          
        {questionElements}          
      </List>      
    );
  }
}

export default QuestionList;
