import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import {Button,message} from 'antd';
import {PMessage} from '../Components/Messages';


const stories = storiesOf('Message', module);
stories.addDecorator(withKnobs);



const messageTypes = {
    info:'info',
    error:'error',
    success:'success'
}



stories.add('basic Alert', withInfo({})(() => (
    <Button type="primary" onClick={()=> PMessage.info('i am a test')}>Display normal message</Button>

)));
