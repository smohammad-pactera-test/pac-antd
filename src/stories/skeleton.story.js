import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PSkeleton from '../Components/Feedback/skeleton'

const stories = storiesOf('Skeleton', module);
stories.addDecorator(withKnobs);

stories.add('Basic Skeleton', withInfo({})(() => (
    <PSkeleton avatar paragraph={{ rows: 4 }}/>
)));
