import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import PPopover from '../Components/Data Display/PPopover';
import PButton from '../Components/PButton';
import { Popover, Button } from 'antd';



const stories = storiesOf('PopOver', module);
stories.addDecorator(withKnobs);

stories.add('pop over', withInfo({})(() => (
    <PPopover content={<div>
        <p>Content</p>
        <p>Content</p>
    </div>} title="Title">
        <PButton type="primary">Hover me</PButton>
    </PPopover>
)));

stories.add('test pop over', withInfo({})(() => (
    <PPopover content={<div>
        <p>Content</p>
        <p>Content</p>
    </div>} title="Title">
        <Button type="primary" >Hover me</Button>
    </PPopover>
)));

