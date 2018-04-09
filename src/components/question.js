import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FaceIcon from 'material-ui/svg-icons/action/face';
import Chip from 'material-ui/Chip';
import { getYearNoun } from '../helpers'


export default class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,            
        }
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    toggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }
  
    render() {
        const { question } = this.props;
        const { expanded } = this.state;
        const anonymously = question.anonymously;
        const user = question.user;
        
        return (
            <div>
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                    title={this.getTitle()}
                    subtitle={question.date}        
                    avatar={anonymously ? <FaceIcon /> : user.photoUrl}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />                    
                    <CardText>
                        <Chip>{"Category: " + question.category}</Chip>
                        {this.getDescription()}
                    </CardText>
                    {/* <CardMedia
                    expandable={true}
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                    <img src="images/nature-600-337.jpg" alt="" />
                    </CardMedia> */}
                    <CardActions>
                    <FlatButton label={expanded ? "Свернуть" : "Подробности"} onClick={this.toggleExpanded} />                   
                    </CardActions>
                </Card>                
            </div>
        );
    }    

    getDescription() {
        const { question } = this.props;
        const { expanded } = this.state;

        let sliced = question.description.slice(0, 100);
        if (sliced.length < question.description.length) {
            sliced += '...';
        }
        const description = expanded ? question.description : sliced;
        return (   
            <div> 
                <p>{description}</p>                
            </div>
        )
    }

    getTitle() {
        const { question } = this.props;        
        const anonymously = question.anonymously;
        const user = question.user;

        const gender = user.gender === 'Male' ? 'Мужчина' : 'Женщина';
        const name = anonymously ? gender : user.name;
        const age = user.age + ' ' + getYearNoun(user.age);
        return name + ', ' + age;
    }
    
}