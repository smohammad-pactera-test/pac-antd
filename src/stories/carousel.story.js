import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import PCarousel from '../Components/Data Display/PCarousel'
import {AlertTypes} from "./alert.story";

const stories = storiesOf('Carousel', module);
stories.addDecorator(withKnobs);

const EffectTypes = {
    strollx:'strollx',
    fade:'fade'
}


stories.add('basic carousel', withInfo({})(() => (
    <PCarousel>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
    </PCarousel>
)));

stories.add('carasoul with effects', withInfo({})(() => (
    <PCarousel effect={select('Effects', EffectTypes, 'strollx')} vertical={boolean('vertical', false)} >
        <div><img src="" alt=""/></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
    </PCarousel>
)));

stories.add('carasoul with auto play', withInfo({})(() => (
    <PCarousel effect={select('Effects', EffectTypes, 'strollx')}
               vertical={boolean('vertical', false)}
               autoplay={true} >
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
    </PCarousel>
)));
