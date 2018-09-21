import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import PBadge from '../Components/Data Display/PBadge'
import PIcon from '../Components/PIcon'
import '../CSS/storybook.css';



const badgeStatusTypes = {
    success:'success',
    error:'error',
    default:'default',
    processing:'processing',
    warning:'warning',

}



const stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs);





stories.add('basic badge', withInfo({})(() => (
    <PBadge count={number('count', 5)}>
        <a href="#" className="head-example" />
    </PBadge>
)));

stories.add('badge with overflow', withInfo({})(() => (
    <PBadge count={number('count', 50)} overflowCount={number('overflowcount', 10)}>
        <a href="#" className="head-example" />
    </PBadge>
)));

stories.add('Clickable Badge', withInfo({})(() => (
    <a href="https://en.pactera.com/">
    <PBadge count={number('count', 50)} overflowCount={number('overflowcount', 10)}>
        <a href="#" className="head-example" />
    </PBadge>
    </a>
)));


stories.add('badge with status', withInfo({})(() => (
    <PBadge status={select('status', badgeStatusTypes, 'success')} />
)));
stories.add('standalone', withInfo({})(() => (
    <div>
        <PBadge count={25} />
        <PBadge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
        <PBadge count={109} style={{ backgroundColor: '#52c41a' }} />
    </div>
)));
stories.add('Red Badge', withInfo({})(() => (
    <div>
        <PBadge dot>
            <PIcon type="notification" />
        </PBadge>
        <br/>
        <PBadge count={0} dot>
            <PIcon type="notification" />
        </PBadge>
        <br/>
        <PBadge dot>
            <a href="#">Link something</a>
        </PBadge>
    </div>
)));
stories.add('Title', withInfo('Badge display title when hovered')(() => (
    <PBadge count={5} title="You have 5 new notifications">
        <a href="#" className="head-example" />
    </PBadge>
)));
