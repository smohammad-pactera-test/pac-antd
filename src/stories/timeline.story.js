import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import PTimeLine from '../Components/Data Display/Timeline';
import PTimelineItem from "../Components/Data Display/Timeline/PTimelineItem";
import PIcon from '../Components/PIcon'
import {Icon} from 'antd'

const stories = storiesOf('Timeline', module);
stories.addDecorator(withKnobs);
stories.add('Basic TimeLine', withInfo({})(() => (
    <PTimeLine>
        <PTimelineItem>step1 2015-09-01</PTimelineItem>
        <PTimelineItem>step2 2015-09-01</PTimelineItem>
        <PTimelineItem>step3 2015-09-01</PTimelineItem>
        <PTimelineItem>step4 2015-09-01</PTimelineItem>
    </PTimeLine>
)));

stories.add('Customised  TimeLine', withInfo({})(() => (
    <PTimeLine>
        <PTimelineItem dot={<PIcon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">step1 2015-09-01</PTimelineItem>
        <PTimelineItem>step2 2015-09-01</PTimelineItem>
        <PTimelineItem>step3 2015-09-01</PTimelineItem>
        <PTimelineItem>step4 2015-09-01</PTimelineItem>
    </PTimeLine>
)));

stories.add('Colored Time Line', withInfo('green => success  \n blue=>ongoing  \n red=>warning')(() => (
    <PTimeLine>
        <PTimelineItem color= {text('color', 'blue')}>Create a services site 2015-09-01</PTimelineItem>
        <PTimelineItem color="green">Create a services site 2015-09-01</PTimelineItem>
        <PTimelineItem color="red">
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
        </PTimelineItem>
        <PTimelineItem>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
        </PTimelineItem>
    </PTimeLine>
)));

