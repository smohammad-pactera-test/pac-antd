import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';

import PDatePicker from '../Components/Data Entry/Datepicker';
import PMonthPicker from '../Components/Data Entry/Datepicker/PMonthPicker';
import PRangePicker from '../Components/Data Entry/Datepicker/PRangePicker';
import PWeekPicker from '../Components/Data Entry/Datepicker/PWeekPicker';

const stories = storiesOf('Datepicker', module);
stories.addDecorator(withKnobs);

const size = {
    small:'small',
    large:'large',
    default:'default'
}

stories.add('Basic Datepicker', withInfo({})(() => (
    <PDatePicker  size={select('size', size, 'default')}/>
)));


stories.add('Basic Month Picker', withInfo({})(() => (
    <PMonthPicker size={select('size', size, 'default')}/>
)));

stories.add('Basic Range Picker', withInfo({})(() => (
    <PRangePicker size={select('size', size, 'default')}/>
)));

stories.add('Basic Week Picker', withInfo({})(() => (
    <PWeekPicker size={select('size', size, 'default')}/>
)));

