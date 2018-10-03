import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';
import PRate from '../Components/Data Entry/Rate'
import {Rate} from 'antd'
import PIcon from "../Components/PIcon";


const stories = storiesOf('Rate', module);
stories.addDecorator(withKnobs);

class BasicRate extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            value:''
        }
    }

    onChangeHandler = (value) => {
        console.log(value)
        this.setState({
            value
        })
    }

    render() {

        const {
            disabled,
            allowHalf,
            character
        } = this.props;
        return (
            <PRate value={this.state.value}
                   onChange={this.onChangeHandler}
                   disabled={disabled}
                   allowHalf={allowHalf}
                   character={character}
            />
        );
    }
}
stories.add('Basic Rate', withInfo({})(() => (
    <BasicRate disabled={boolean('Disabled', false)}
               allowHalf ={boolean('allowHalf ', false)}/>
)));
stories.add('Other Charectors', withInfo({})(() => (
    <div>
        <BasicRate character={<PIcon type="heart" />} allowHalf />
        <br />
        <BasicRate character="A" allowHalf style={{ fontSize: 36 }} />
        <br />
        <BasicRate character="好" allowHalf />
    </div>
)));