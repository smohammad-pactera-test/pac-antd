//You will need to import Icon Constants
//Missed Embedded Mode and Delay

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';

import PSpinner from '../Components/PSpinner';
import PAlert from '../Components/PAlert';
import PIcon from '../Components/PIcon';

import {AlertTypes} from '../stories/alert.story'

const spinnerSizes = {
     small:'small',
     medium:'medium',
     large:'large'
}


const stories = storiesOf('Spinner', module);
stories.addDecorator(withKnobs);

stories.add('basic spinner', withInfo({})(() => (
    <PSpinner/>
)));
stories.add('spinner with sizes', withInfo({})(() => (

    <PSpinner  size={select('spinner size', spinnerSizes, 'small')}>
        <PAlert type={select('Alert type', AlertTypes, 'success')}
                message = {text('Message', 'Im your alert box')}
                closable={boolean('closable', false)}
                description={text('description', 'Describe me')}
                showIcon={boolean('show icon', false)}
                banner={boolean('banner', false)}
        />
    </PSpinner>



)));

stories.add('customised spinner with Icons', withInfo({})(() => (

    <PSpinner  indicator= {<PIcon type="step-backward" style={{ fontSize: number('fontSize', 25) }} spin={boolean('Spin', false)} />}>

    </PSpinner>



)));


