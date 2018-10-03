import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PSelect from '../Components/Data Entry/Select'
import POptions from '../Components/Data Entry/Select/POptions';
import {Select} from 'antd'
const stories = storiesOf('Select', module);
stories.addDecorator(withKnobs);

function handleChange(value) {
    console.log(`selected ${value}`);
}

class BasicSelect extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            value:'test'
        }
    }

    handleChange = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    onChangeHandler = (value) => {
        this.setState({
            value,
            isOpen:!this.state.isOpen
        })
    }

    render() {
        return (
            <PSelect value={this.state.value} style={{ width: 120 }}
                     onFocus={this.handleChange}
                     onBlur={()=>this.setState({isOpen:false})}
                     open={this.state.isOpen}
                     onChange={(e)=>this.onChangeHandler(e)}>
                <POptions value="jack">Jack</POptions>
                <POptions value="lucy">Lucy</POptions>
            </PSelect>
        );
    }

}


stories.add('basic select', withInfo({})(() => (
   <BasicSelect/>
)));

stories.add('test', withInfo({})(() => (
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <POptions value="jack">Jack</POptions>
        <POptions value="lucy">Lucy</POptions>
    </Select>

)));




