import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PDivider from '../Components/PDivider';


const stories = storiesOf('Divider', module);
stories.addDecorator(withKnobs);


const orientationTypes = {
    left:'left',
    right:'right'
}



stories.add('Divider', withInfo({})(() => (
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, assumenda delectus eius eligendi ex exercitationem ipsum iste magnam minus nesciunt nihil porro quas quia quibusdam quis, rem rerum tenetur ut.
        </p>
        <PDivider dashed={boolean('dashed', false)}>{text('With Text', 'Include text')}</PDivider>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at debitis mollitia quaerat ratione soluta sunt vel, voluptatem! Aperiam, distinctio dolor doloribus ex hic qui quod rem similique temporibus voluptatem!
        </p>
    </div>
)));

stories.add('Divider with orientation', withInfo({})(() => (
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, assumenda delectus eius eligendi ex exercitationem ipsum iste magnam minus nesciunt nihil porro quas quia quibusdam quis, rem rerum tenetur ut.
        </p>
        <PDivider dashed={boolean('dashed', false)} orientation={select('orientation type', orientationTypes, 'left')}>{text('With Text', 'Include text')}</PDivider>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at debitis mollitia quaerat ratione soluta sunt vel, voluptatem! Aperiam, distinctio dolor doloribus ex hic qui quod rem similique temporibus voluptatem!
        </p>
    </div>
)));

stories.add('Vertical Divider', withInfo({})(() => (
    <div>
        Text
        <PDivider type="vertical" />
        <a href="#">Link</a>
        <PDivider type="vertical" />
        <a href="#">Link</a>
    </div>
)));

