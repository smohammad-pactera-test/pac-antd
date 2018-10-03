import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PSteps from '../Components/Navigation/PSteps';
import PStep from '../Components/Navigation/PStep';


const stories = storiesOf('Steps', module);
stories.addDecorator(withKnobs);

//basic step bar
stories.add('Basic Step Bar', withInfo({})(() => (
    <PSteps current="1">
        <PStep title="Finished" description="This is a description." />
        <PStep title="In Progress" description="This is a description." />
        <PStep title="Waiting" description="This is a description." />

    </PSteps>
)));




