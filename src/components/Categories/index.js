import React, { Component } from 'react';
import PropTypes from "prop-types";
import CategoriesItems from './categoriesItems';
import { connect } from "react-redux";

import getCategories from "../../actions/categories";

class Categories extends Component {

  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const { categories, loading } = this.props;    
    return (      
      <CategoriesItems categories={categories} loading={loading} onChange={this.props.onChange}/>      
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
  loading: state.categories.loading
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
});

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getCategories: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
