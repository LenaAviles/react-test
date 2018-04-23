import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class CategoriesItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };
    }

    handleChange = (event, index, value) => {
        this.props.onChange(value);
        this.setState({ value });
    }

    showItems = (items) => {
        return items.map((item) => {
            return (
                <MenuItem
                    value={item.id}
                    key={item.id}
                    primaryText={item.name}                                  
                />
            )
        })
    }

    render() {
        const categories = this.showItems(this.props.categories);
        return (
            <SelectField
                floatingLabelText="Определите категорию вопроса"
                value={this.state.value || null}
                onChange={this.handleChange}  
                maxHeight={200}                              
                >                
                {categories}            
            </SelectField>            
        )
    }
}

export default CategoriesItems;