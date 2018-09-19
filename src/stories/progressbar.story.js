import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import Pprogressbar from '../Components/PProgressbar';


const progressbarStatusTypes = {
    success :'success',
    exception :'exception',
    active:'active'
}

const progressbarTypes = {
    circle:'circle',
    line:'line'

}


const stories = storiesOf('Progressbar', module);
stories.addDecorator(withKnobs);

stories.add('Basic Progress bar', withInfo({})(() => (
   <Pprogressbar percent={number('percentage', 25)}
                 status={select('status', progressbarStatusTypes, 'active')}
                 showInfo={boolean('showInfo', false)}

   />
)));

stories.add('Progress bar as Circle', withInfo({})(() => (
    <Pprogressbar percent={number('percentage', 25)}
                  status={select('status', progressbarStatusTypes, 'active')}
                  type={select('type', progressbarTypes, 'circle')}
                  format={percent => `${percent} Days`}


    />
)));



