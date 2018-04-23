import React from 'react';
import Question from '../Question/question';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';


const Questions = ({questions, categories}) => {  
  
  const questionElements = questions.map(question => {
    let category = categories.find(category => category.id === question.category);
    question.category = category ? category.name : question.category;
    return <ListItem key={question.id}><Question question={question} /></ListItem>
  });

  return (
    <List>
      {questionElements}
    </List>
  );
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
}

export default Questions;
