import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';
import PDatePicker from '../Components/Data Entry/Datepicker';
import PMonthPicker from '../Components/Data Entry/Datepicker/PMonthPicker';
import PRangePicker from '../Components/Data Entry/Datepicker/PRangePicker';
import PWeekPicker from '../Components/Data Entry/Datepicker/PWeekPicker';
import moment from 'moment';

const stories = storiesOf('Datepicker', module);
stories.addDecorator(withKnobs);

const size = {
    small: 'small',
    large: 'large',
    default: 'default'
}


class BasicDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isOpen: false
        }
    }

    onChange = (e) => {
        this.setState({
            value: e
        })
    };

    onOpenHandler = (e) => {
        this.setState({isOpen: e})
    };

    render() {
        const {
            size,
            type
        } = this.props;
        if(type==='datePicker'){
            return (
                <PDatePicker placeholder='Select Date'
                             onChange={(e) => this.onChange(e)}
                             onOpenChange={(e) => {
                                 this.onOpenHandler(e)
                             }}
                             open={this.state.isOpen}
                             size={size}
                             value={this.state.value}/>
            )
        }
        else if(type==='monthPicker'){
            return(
                <PMonthPicker placeholder='Select Month'
                             onChange={(e) => this.onChange(e)}
                             onOpenChange={(e) => {
                                 this.onOpenHandler(e)
                             }}
                             open={this.state.isOpen}
                             size={size}
                             value={this.state.value}/>
            )
        }
        else if(type==='rangePicker'){
            return(
                <PRangePicker placeholder='Select Month'
                              onChange={(e) => this.onChange(e)}
                              onOpenChange={(e) => {
                                  this.onOpenHandler(e)
                              }}
                              open={this.state.isOpen}
                              size={size}
                              value={this.state.value}/>
            )
        }
        else {
            return(
                <PWeekPicker placeholder='Select Month'
                              onChange={(e) => this.onChange(e)}
                              onOpenChange={(e) => {
                                  this.onOpenHandler(e)
                              }}
                              open={this.state.isOpen}
                              size={size}
                              value={this.state.value}/>
            )
        }

    }


}


stories.add('Basic Datepicker', withInfo({})(() => (
    <BasicDatePicker size={select('size', size, 'default')} type={'datePicker'}/>
)));


stories.add('Basic Month Picker', withInfo({})(() => (
    <BasicDatePicker size={select('size', size, 'default')} type={'monthPicker'}/>
)));

stories.add('Basic Range Picker', withInfo({})(() => (
    <BasicDatePicker size={select('size', size, 'default')} type={'rangePicker'}/>
)));

stories.add('Basic Week Picker', withInfo({})(() => (
    <BasicDatePicker size={select('size', size, 'default')} type={'weekPicker'}/>
)));

