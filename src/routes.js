import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import Layout from './hoc/Layout/layout';
import AddQuestion from './components/AddQuestion'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={QuestionList} />
                    <Route path='/add-question' component={AddQuestion} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;
