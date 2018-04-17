import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import QuestionList from './components/QuestionList/question-list';
import Layout from './hoc/Layout/layout';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={QuestionList} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;
