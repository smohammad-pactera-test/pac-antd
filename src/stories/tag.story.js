import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PTag from '../Components/Data Display/PTag'

const stories = storiesOf('Tag', module);
stories.addDecorator(withKnobs);
stories.add('Basic Tag', withInfo({})(() => (
    <PTag>sasasasa</PTag>
)));


