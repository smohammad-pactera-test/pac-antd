import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';

import { Icon } from 'antd';

const iconTypes = {
        'step-backward': 'step-backward',
        'step-forward':  'step-forward',
        'fast-backward': 'fast-backward',
        'fast-forward':  'fast-forward',
        'shrink':  'shrink',
        'arrows-alt':  'arrows-alt',
        'down':  'down',
        'up':  'up',
        'left':  'left',
        'right':  'right',
        'caret-up':  'caret-up',
        'caret-down':  'caret-down',
        'caret-left':  'caret-left',
        'caret-right':  'caret-right',
        'up-circle':  'down-circle',
        'left-circle':  'left-circle',
        'right-circle':  'right-circle',
        'right-circle':  'right-circle'


};



const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('Basic Icons', withInfo({})(() => (
    <Icon type={ select('icon type', iconTypes, 'step-backward') }
          style={{ fontSize: '25px', color: '#08c' }}
          theme="filled" />
)));


