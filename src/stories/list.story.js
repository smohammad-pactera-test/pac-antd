import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';
import PList from '../Components/Data Entry/List'
import PListItem from '../Components/Data Entry/List/PListItem'
import {List} from 'antd';
import PButton from "../Components/PButton";
import {size} from "./index";
import PListItemMeta from "../Components/Data Entry/List/PListItemMeta";
import PAvatar from "../Components/Data Display/PAvatar";
import PCard from '../Components/Data Display/Card'
const stories = storiesOf('List', module);
stories.addDecorator(withKnobs);

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

stories.add('basic list', withInfo({})(() => (
    <PList header={<div>Header</div>}
           footer={<div>Footer</div>}
           size={select('Button size', size, 'default')}
           bordered
           dataSource={data}
           renderItem={item => (<PListItem>{item}</PListItem>)}
    />

)));

stories.add('list with avatar', withInfo({})(() => (
    <PList header={<div>Header</div>}
           footer={<div>Footer</div>}
           itemLayout="horizontal"
           size={select('Button size', size, 'default')}
           bordered
           dataSource={data}
           renderItem={item => (<PListItem><PListItemMeta
               avatar={<PAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
               title={<a href="https://ant.design">{item.title}</a>}
               description="Sample test for displaying avatars in the list"/></PListItem>)}
    />

)));

const data2 = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];




stories.add('List with Grid', withInfo({})(() => (
    <PList
        grid={{ gutter: 16, column: 4 }}
        dataSource={data2}
        renderItem={item => (
            <PListItem>
                <PCard title={item.title}>Card content</PCard>
            </PListItem>
        )}
    />

)));




