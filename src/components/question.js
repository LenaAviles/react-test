import React, { Component } from 'react';

export default class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const { question } = this.props;
        // const { isOpen } = this.state;
        
        return (
            <div>
                <p>{new Date(question.date).toLocaleDateString()}</p>
                {this.getDescription()}                
            </div>
        );
    }    

    getDescription() {
        const { question } = this.props;
        const { isOpen } = this.state;
        let sliced = question.description.slice(0, 100);
        if (sliced.length < question.description.length) {
            sliced += '...';
        }
        const description = isOpen ? question.description : sliced;
        return (   
            <div>                        
                <p>{description}</p>
                <a onClick={this.toggleOpen}>{ isOpen ? 'меньше' : 'больше'}</a>
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}