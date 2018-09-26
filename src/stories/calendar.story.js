import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import PCalendar from '../Components/Data Display/PCalendar'
import PAlert from "../Components/PAlert";
import moment from 'moment';


class SelectableCalendar extends React.Component{


    state = {
        value: moment('2017-01-25'),
        selectedValue: moment('2017-01-25'),
    }

    onSelect = (value) => {
        this.setState({
            value,
            selectedValue: value,
        });
    }

    onPanelChange = (value) => {
        this.setState({ value });
    }

    render() {
        const { value, selectedValue } = this.state;
        return (
            <div>
                <PAlert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
                <PCalendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
            </div>
        );
    }
}







const stories = storiesOf('Calendar', module);
stories.addDecorator(withKnobs);
stories.add('Basic Calendar', withInfo({})(() => (
    <PCalendar/>
)));

stories.add('selectable Calendar', withInfo({})(() => (
    <SelectableCalendar/>
)));
