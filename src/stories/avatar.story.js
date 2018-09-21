import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import PAvatar from '../Components/Data Display/PAvatar';
import {AlertTypes} from "./alert.story";
import PButton from "../Components/PButton";

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

class Autoset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: UserList[0],
            color: colorList[0],
        };
    }

    changeUser = () => {
        console.log('button clicked');
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
            color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
    }

    render() {
        return (
            <div>
                <PAvatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                    {this.state.user}
                </PAvatar>
                <PButton size="small" style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.changeUser}>
                    Change
                </PButton>
            </div>
        );
    }
}









const shapeTypes = {
    circle:'circle',
    square:'square'
}

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs);

stories.add('Basic user avatar', withInfo({})(() => (

    <PAvatar shape={select('Shape', shapeTypes, 'circle')} size={number('size of avatar', 50)} icon="user"> </PAvatar>

)));

stories.add('Basic user avatar with no icon', withInfo({})(() => (

    <PAvatar shape={select('Shape', shapeTypes, 'circle')} size={number('size of avatar', 100)}> {text('Icon Display Name', 'I am your Icon')} </PAvatar>

)));

stories.add('Avatar with source', withInfo({})(() => (

    <PAvatar shape={select('Shape', shapeTypes, 'circle')} size={number('size of avatar', 100)} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  />

)));


stories.add('Autoset', withInfo({})(() => (

   <Autoset/>

)));
