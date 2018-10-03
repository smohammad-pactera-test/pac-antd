import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';
import PRadio from '../Components/Data Entry/Radio'
import PRadioGroup from '../Components/Data Entry/Radio/PRadioGroup';
import PRadioSolidButton from '../Components/Data Entry/Radio/PRadioSolidButton'
import {size} from './index'
import PButton from "../Components/PButton";
const stories = storiesOf('Radio', module);
stories.addDecorator(withKnobs);


class TestRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true
        }
    }

    onChangeHandler = () => {
        console.log("inside onChange Handler");
        this.setState({
            value: !this.state.value
        })
    }

    render() {
        return (
            <PRadio onBlur={this.onChangeHandler} checked={this.state.value}>Test Radio</PRadio>
        )
    }


}


class RadioGroupTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }

    }

    onChange = ({name, value}) => {
        this.setState({
            value: value
        })
    }


    render() {

        const {
            name,
            defaultValue,
            style
        } = this.props;


        return (
            <PRadioGroup onChange={({target: {name, value}}) => this.onChange({name, value})}
                         value={this.state.value}
                         name={name}

            >
                <PRadio value={1} style={style}  disabled={boolean('Disabled', false)}>A</PRadio>
                <PRadio value={2} style={style}>B</PRadio>
                <PRadio value={3} style={style}>C</PRadio>
                <PRadio value={4} style={style}>D</PRadio>
            </PRadioGroup>
        )
    }
}

class TestRadioButton extends  React.Component{

    constructor(props){
        super(props);
        this.state={
            value:'Dallas'
        }
    }
    onChange = ({name, value}) => {
        console.log(name);
        this.setState({
            value: value
        })
    }

    render(){
        return(
            <PRadioGroup onChange={({target: {name, value}}) => this.onChange({name, value})}
                         value={this.state.value}
                         name={name}
                         size={select('Button size', size, 'default')}>
                <PRadioSolidButton value='New York'>New York</PRadioSolidButton>
                <PRadioSolidButton value='Dallas'>Dallas</PRadioSolidButton>
                <PRadioSolidButton value='Chicago'>Chicago</PRadioSolidButton>
                <PRadioSolidButton value='Seattle'>Seattle</PRadioSolidButton>
            </PRadioGroup>
        );
    }
}


stories.add('Basic Radio button', withInfo({})(() => (
    <TestRadio/>
)));

stories.add('Radio Group', withInfo({})(() => (
    <RadioGroupTest/>
)));

stories.add('Radio Button as Solid Buttons ', withInfo({})(() => (
    <TestRadioButton name="test"/>
)));

const radioStyle={
    display: 'block',
    height: '30px',
    lineHeight: '30px',
}
stories.add('Radio Buttons as vertical', withInfo('You can add custom Css for applying styles to radio buttons')(() => (
    <RadioGroupTest style={radioStyle}/>
)));

