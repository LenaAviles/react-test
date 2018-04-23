import React, { Component } from 'react';
import Questions from './questions';

import PropTypes from "prop-types";
import { connect } from "react-redux";

import getQuestions from "../../actions/questions";
import getCategories from "../../actions/categories";

class QuestionList extends Component {

  componentWillMount() {
    this.props.getQuestions();
    this.props.getCategories();     
  }

  render() {
    const { questions, categories } = this.props;   
    
    return ( 
      questions.length && categories.length ?     
      <Questions questions={questions} categories={categories}/> 
      : null       
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.items,  
  categories: state.categories.items,  
});

const mapDispatchToProps = dispatch => ({
  getQuestions: () => dispatch(getQuestions()),
  getCategories: () => dispatch(getCategories())
});

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,  
  categories: PropTypes.array.isRequired,  
  getQuestions: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
