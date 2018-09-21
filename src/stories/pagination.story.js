import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';

import PPagination from '../Components/Navigation/PPagination';



const stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs);

stories.add('Basic Pagination', withInfo({})(() => (
    <PPagination  total={500} defaultCurrent={1} />
)));


stories.add(' Pagination', withInfo({})(() => (
    <PPagination size="small" total={5000} showSizeChanger showQuickJumper />

)));
