import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PTabs from '../Components/Data Display/Tabs'
import PTabPane from '../Components/Data Display/Tabs/PTabPane'
import {Tabs} from 'antd';

const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

stories.add('Basic Tabs', withInfo({})(() => (
    <PTabs defaultActiveKey="1">
        <PTabPane tab="Tab 1" key="1">Content of Tab Pane 1</PTabPane>
        <PTabPane tab="Tab 2" key="2">Content of Tab Pane 2</PTabPane>
        <PTabPane tab="Tab 3" key="3">Content of Tab Pane 3</PTabPane>
    </PTabs>
)));
;
