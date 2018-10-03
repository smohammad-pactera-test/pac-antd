import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';
//import 'antd/dist/antd.css';



import PButton from '../Components/PButton';
import PButtonGroup from '../Components/PButtonGroup';
import PIcon from '../Components/PIcon';

const btnType = {
    'primary': 'primary',
    '': 'default',
    'dashed': 'dashed',
    'danger': 'danger'
};

export const size = {
    'small': 'small',
    'large': 'large',
    'omitted': 'omitted'
};

const loadingOptions = {
    'true': 'true',
    'false': 'false'
};


const infoText = {
    'button': 'import { Button } from antd;',
    'button and icon': 'import { Button , Icon } from antd;'
};

const booleanValues = {
    true:'on',
    false:'off'
}


const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('Primary Buttons', withInfo(infoText.button)(() => (
    <PButton disabled={boolean('Disabled', false)}
            type={select('Button type', btnType, 'primary')}
             onClick={action('Button clicked!')}>
        {text('Label', 'Hello Button')}
    </PButton>
)));

stories.add('Buttons with sizes', withInfo(infoText.button)(() => (
    <PButton disabled={boolean('Disabled', false)}
            type={select('Button type', btnType, 'primary')}
            size={select('Button size', size, 'default')}
             onClick={action('Button clicked!')}>
        {text('Label', 'Hello Button')}
    </PButton>
)));


stories.add('Buttons Groups', withInfo(infoText["button and icon"] + "  \nconst ButtonGroup = Button.Group")(() => (

    <div>
        <h4>Basic</h4>
        <PButtonGroup>
            <PButton disabled={boolean('Disabled', false)}
                    type={select('Button type', btnType, 'primary')}
                    size={select('Button size', size, 'default')}
                    onClick={action('Button clicked!')}>
                {text('Label', 'Cancel')}
            </PButton>
            <PButton>OK</PButton>
        </PButtonGroup>
        <PButtonGroup>
            <PButton disabled>L</PButton>
            <PButton disabled>M</PButton>
            <PButton disabled>R</PButton>
        </PButtonGroup>
        <PButtonGroup>
            <PButton>L</PButton>
            <PButton>M</PButton>
            <PButton>R</PButton>
        </PButtonGroup>

        <h4>With Icon</h4>
        <PButtonGroup>
            <PButton type="primary">
                <PIcon type="left"/>Go back
            </PButton>
            <PButton type="primary">
                Go forward<PIcon type="right"/>
            </PButton>
        </PButtonGroup>
        <PButtonGroup>
            <PButton type="primary" icon="cloud"/>
            <PButton type="primary" icon="cloud-download"/>
        </PButtonGroup>
    </div>
)));

stories.add('Block level Buttons', withInfo(infoText.button)(() => (
    <div>
        <PButton disabled={boolean('Disabled', false)}
                block
                type={select('Button type', btnType, 'primary')}
                size={select('Button size', size, 'default')}
                onClick={action('Button clicked!')}>
            Im a Block level Button
        </PButton>
        <PButton block
        >
            Im a Block level Button
        </PButton>
        <PButton block
        >
            Im a Block level Button
        </PButton>
        <PButton block
        >
            Im a Block level Button
        </PButton>
    </div>
)));
stories.add('Buttons with Icons and shapes', withInfo(infoText.button)(() => (
    <PButton disabled={boolean('Disabled', false)}
            shape={select('shape', {circle:'circle',omitted:'omitted'}, 'circle')}
            icon="search"
            type={select('Button type', btnType, 'primary')}
            size={select('Button size', size, 'default')}
            onClick={action('Button clicked!')}>

    </PButton>
)));

stories.add('Ghost buttons', withInfo(infoText.button)(() => (
    <PButton disabled={boolean('Disabled', false)}
            ghost={boolean('ghost',true)}
            type={select('Button type', btnType, 'primary')}
            size={select('Button size', size, 'default')}
            onClick={action('Button clicked!')}>
        {text('Label', 'Hello Button')}
    </PButton>
)));
