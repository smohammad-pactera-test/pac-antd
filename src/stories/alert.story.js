import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';

import PAlert from '../Components/PAlert';

export const AlertTypes = {
    success:'success',
    info:'info',
    warning:'warning',
    error:'error'
}


const stories = storiesOf('Alert', module);
stories.addDecorator(withKnobs);

stories.add('basic Alert', withInfo({})(() => (
    <PAlert type={select('Alert type', AlertTypes, 'success')}
            message = {text('Message', 'Im your alert box')}
    />

)));

stories.add('Alert with closable', withInfo({})(() => (
    <PAlert type={select('Alert type', AlertTypes, 'success')}
            message = {text('Message', 'Im your alert box')}
            closable={true}
    />

)));

stories.add('Descriptive Alert boxes', withInfo({})(() => (
    <PAlert type={select('Alert type', AlertTypes, 'success')}
            message = {text('Message', 'Im your alert box')}
            closable={boolean('closable', false)}
            description={text('description', 'Describe me')}
    />

)));

stories.add('Alert with Icon', withInfo({})(() => (
    <PAlert type={select('Alert type', AlertTypes, 'success')}
            message = {text('Message', 'Im your alert box')}
            closable={boolean('closable', false)}
            description={text('description', 'Describe me')}
            showIcon={boolean('show icon', false)}
    />

)));

stories.add('Alert as banner', withInfo({})(() => (
    <PAlert type={select('Alert type', AlertTypes, 'success')}
            message = {text('Message', 'Im your alert box')}
            closable={boolean('closable', false)}
            description={text('description', 'Describe me')}
            showIcon={boolean('show icon', false)}
            banner={boolean('banner', false)}
    />

)));

stories.add('Customised close button for Alert box', withInfo({})(() => (
    <PAlert type={select('Alert type', AlertTypes, 'success')}
            message = {text('Message', 'Im your alert box')}
            description={text('description', 'Describe me')}
            showIcon={boolean('show icon', false)}
            banner={boolean('banner', false)}
            closeText={text('Close text', 'Dare to close me?')}
    />

)));


