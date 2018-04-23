import React from "react";
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import PropTypes from "prop-types";
import AddIcon from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Categories from '../Categories'


const styles = {
    block: {
        margin: '1.5rem',
    },
    checkbox: {
        marginBottom: 15,
        marginLeft: 15, 
        fontSize: '0.9rem'                   
    },
};

const QuestionAddForm = ({askQuestion, errors}) => {
    let anonymously, description, category, age, gender;   

    return (
        <form style={styles.block}>
            <Subheader>НОВАЯ КОНСУЛЬТАЦИЯ</Subheader>                
            <Checkbox
                label="Анонимно"                
                style={styles.checkbox}
                onCheck={(e, value) => (anonymously.value = value)}
                ref={node => (anonymously = node)}
            />            
            <TextField
                required
                hintText="Пример. У меня насморк и болит голова в течении двух дней..."
                floatingLabelText="Подробно опишите вашу проблему"
                multiLine={true}                
                fullWidth
                onChange={(e, value) => (description.value = value)}
                ref={node => (description = node)}
                errorText={errors.description}                
            /><br />

            <Categories
                onChange={(value) => (category.value = value)}
                ref={node => (category = node)}
            /><br />            

            <TextField
                type='number'
                defaultValue={25}
                floatingLabelText="Возраст"
                onChange={(e, value) => (age.value = value)}
                ref={node => (age = node)}                
            /><br />

            <Subheader>Пол</Subheader>
            <RadioButtonGroup 
                    name="gender" 
                    defaultSelected="Female"
                    onChange={(e, value) => (gender.value = value)}
                    ref={node => (gender = node)}
                >                
                <RadioButton value="Female" label="Женский" />
                <RadioButton value="Male" label="Мужской" />
            </RadioButtonGroup><br />
           
           <RaisedButton                
                target="_blank"
                label="Задать вопрос"
                primary={true}
                style={styles.button}
                icon={<AddIcon />}
                onClick={() => askQuestion({ 
                    anonymously: anonymously.value || false, 
                    description: description.value,
                    category: category.value || 0,
                    user: {
                        age: age.value || 25, 
                        gender: gender.value || "Female",
                    }
                })}
            />

        </form>
    );
};

QuestionAddForm.propTypes = {
    askQuestion: PropTypes.func.isRequired,
    errors: PropTypes.objectOf(PropTypes.string),    
  };
 

export default QuestionAddForm;