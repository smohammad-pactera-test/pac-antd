import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PTooltip from '../Components/Data Display/PTooltip';
import {Tooltip} from 'antd'
const stories = storiesOf('ToolTip', module);
stories.addDecorator(withKnobs);

stories.add('basic tooltip', withInfo({})(() => (
    <PTooltip title="prompt text">
        <span>Tooltip will show when mouse enter.</span>
    </PTooltip>
)));

stories.add('test tool tip', withInfo({})(() => (
    <Tooltip title="prompt text">
        <span>Tooltip will show when mouse enter.</span>
    </Tooltip>
)));
