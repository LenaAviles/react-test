import React, { Component } from "react";
import AddQuestionForm from "./addForm";
import user from './user_mock';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { addQuestion } from "../../actions/questions";


class AddQuestion extends Component {
  state = {          
    errors: {
      anonymously: '', 
      description: '',
    }
  }   

  askQuestionHandler = question => {     
    let errors = {};

    this.setState({...question, errors});
    
    if (!question.description) errors.description = 'Это поле не может быть пустым';

    if (errors.description) {
      this.setState({ errors });
      return
    }

    question.user = {...user};
    question.date = new Date().toLocaleDateString();
    question.category = question.category + "";
    
    this.props.addQuestion(question);
    this.props.history.push('/');    
  };

  render() {    
    return <AddQuestionForm 
      askQuestion={this.askQuestionHandler.bind(this)} 
      errors = {this.state.errors}          
    />;
  }
}

const mapStateToProps = state => ({
  questions: state.questions.items,
  loading: state.questions.loading
});

const mapDispatchToProps = dispatch => ({
  addQuestion: (question) => dispatch(addQuestion(question))
});

AddQuestion.propTypes = {
  questions: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  addQuestion: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);